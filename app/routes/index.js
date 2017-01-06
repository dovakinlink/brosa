import Route from 'brosa/util/route';
import {
  Brosa,
  Home,
} from 'brosa/components';

export const routes = [
  new Route({
    path: '/',
    component: Brosa,
    indexRoute: {
      component: Home
    }
  }),
];
