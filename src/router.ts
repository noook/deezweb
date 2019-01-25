import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./views/Favorites.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue'),
    },
  ],
});
