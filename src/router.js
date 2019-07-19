import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Play from '@/views/Play.vue';


Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/play');
};

const redirect = (to, from, next) => {
  next('/play');
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
    // play
    {
      path: '/',
      name: 'home',
      beforeEnter: redirect,
      meta: {
        title: 'Fobbage - Home',
      },
    },
    // home redirect
    {
      path: '/play/:id(\\d+)?',
      name: 'play',
      component: Play,
      beforeEnter: ifAuthenticated,
      props: route => ({ id: Number(route.params.id) }),
      meta: {
        title: 'Fobbage - Play',
      },
    },
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
    // register  pages
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "login" */ './views/Register.vue'),
      beforeEnter: ifNotAuthenticated,
      meta: {
        title: 'Fobbage - Register',
      },
    },

  ],
});
