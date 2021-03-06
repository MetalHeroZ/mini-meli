/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Helmet } from 'react-helmet';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/redux/reducers/index';
import initialState from '../frontend/initialState';
import getManifest from './getManifest';
import { getDetailsById, searchByQuery } from '../frontend/redux/actions';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.use((req, res, next) => {
  req.store = createStore(reducer, initialState, applyMiddleware(thunk));
  next();
});

const setResponse = (html, preloadedState, manifest, helmet) => {
  const mainStyles = manifest ? manifest['main.css'] : '/assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : '/assets/vendor.js';

  return (`
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <link rel="stylesheet" href="${mainStyles}" type="text/css">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="${mainBuild}" type="text/javascript"></script>
      <script src="${vendorBuild}" type="text/javascript"></script>
    </body>
  </html>
  `);
};

const renderApp = (req, res) => {
  const preloadedState = req.store.getState();
  const html = renderToString(
    <Provider store={req.store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );
  const helmet = Helmet.renderStatic();

  res.send(setResponse(html, preloadedState, req.hashManifest, helmet));
};

app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const requirements = [req.store.dispatch(getDetailsById(id))];

  Promise.all(requirements).then(() => {
    renderApp(req, res);
  });
});

app.get('/items', (req, res) => {
  const { search } = req.query;
  const requirements = [req.store.dispatch(searchByQuery(search))];

  Promise.all(requirements).then(() => {
    renderApp(req, res);
  });
});

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});
