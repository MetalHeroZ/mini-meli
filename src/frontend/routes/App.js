import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import ProductDetails from '../views/ProductDetails';
import ProductsList from '../views/ProductsList';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/items' component={ProductsList} />
      <Route path='/items/:id' component={ProductDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
