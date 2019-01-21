import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Home from './views/Home.vue';
import Play from '@/components/quizes/Play.vue';


Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next({ name: 'login' });
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // login  pages
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
      beforeEnter: ifNotAuthenticated,
      meta: {
        title: 'Fobbage - Login',
      },
    },
    // Main  pages
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Fobbage - Home',
      },
    },
    // quiz detail page
    {
      path: '/play',
      name: 'play',
      component: Play,
      beforeEnter: ifAuthenticated,
      meta: {
        title: 'Fobbage - Play',
      },
    },
  ],
});
