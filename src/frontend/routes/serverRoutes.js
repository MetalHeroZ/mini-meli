import Home from '../views/Home';
import NotFound from '../views/NotFound';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    name: '/items',
    component: NotFound,
  },
  {
    name: '/items/:id',
    component: NotFound,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
