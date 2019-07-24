import Vue from 'vue';
import './plugins/vuetify';
import router from './router';
import store from './store';

import './plugins';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
