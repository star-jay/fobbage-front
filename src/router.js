import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Home from './views/Home.vue';


Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  console.log(store.state.auth.token);
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
  ],
});
