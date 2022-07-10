import Main from '../app/pages/main';
import User from './pages/user';
import Favorites from './pages/favorites';

import {
  MAIN_ROUTE,
  USER_PAGE_ROUTE,
  FAVORITES_ROUTE,
  LOGIN_ROUTE
} from './utils/constants';
import Login from './pages/login';

export const Routes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: `${USER_PAGE_ROUTE}/:userId`,
    Component: User
  },
  {
    path: FAVORITES_ROUTE,
    Component: Favorites
  },
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  
];
