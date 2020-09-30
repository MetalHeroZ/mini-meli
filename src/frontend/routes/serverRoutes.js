import Home from '../views/Home';
import NotFound from '../views/NotFound';
import ProductDetails from '../views/ProductDetails';
import ProductsList from '../views/ProductsList';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/items/:id',
    component: ProductDetails,
  },
  {
    path: '/items',
    component: ProductsList,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
