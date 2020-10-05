# Mini Front Meli 

Este front (SSR) es una versión simplificada de Mercadolibre.

Es **necesario** conectarlo con la api desarrollada específicamente para este front:
[Mini API Meli](https://github.com/MetalHeroZ/mini-api-meli)

Las principales tecnologías que use son:
- React
- Webpack
- Express

Principales caracteristicas:
- Responsive
- SEO Friendly
- Codigo minificado
- Server Side Render
- Metodologia BEM para el css 

Podés correrlo en 3 simples pasos:
```
npm i
npm run build
npm run start
```

> Ya viene configurado en el archivo `.env` el **puerto 3000** para el front el **puerto 5000** para la [Mini API Meli](https://github.com/MetalHeroZ/mini-api-meli)

### Como funciona?
Primero preparo la aplicacion para el pre-renderizado en la siguiente funcion:
```js
// src/server/server.js
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
```
Genero una copia de la store con:
```
const preloadedState = req.store.getState();
```
Despues uso la funcion `renderToString` de react para generar el html de la aplicacion.

Y por ultimo obtengo todos loas elementos de React Helment:
```
const helmet = Helmet.renderStatic();
```
Ya con todos los datos generados paso a generar el html resultante:
```js
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
```
### Como manejo los request ?
Por un lado, para todas las rutas voy a necesitar inicializar una store de redux, entonces lo que hice fue aplicar un middleware de express de esta forma:
```js
// src/server/server.js
app.use((req, res, next) => {
  req.store = createStore(reducer, initialState, applyMiddleware(thunk));
  next();
});
```

Las rutas que necesitan pre-cargar información de una api externa tiene acceso a `req.store` para realizar un dispatch previo al renderizado de la aplicacion.
```js
// src/server/server.js
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
```