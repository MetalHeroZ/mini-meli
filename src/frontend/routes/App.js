import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './serverRoutes';
import Layout from '../common/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {routes.map(route => (
          <Route key={`${route.path}-path`} {...route} />
        ))}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
