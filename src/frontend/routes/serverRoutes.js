import Home from '../views/Home';
import NotFound from '../views/NotFound';
import ItemDetails from '../views/ItemDetails';
import SearchResults from '../views/SearchResults';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/items/:id',
    component: ItemDetails,
  },
  {
    path: '/items',
    component: SearchResults,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
