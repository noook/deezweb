import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faSearch,
  faHeartbeat,
  faHeartBroken,
  faRandom,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import App from './App.vue';
import store from './store';

library.add(faHome, faSearch, faHeartbeat, faHeartBroken, faRandom, faHeart);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
