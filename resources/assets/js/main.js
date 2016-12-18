import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';

// Set Vue to use Vue-Router
Vue.use(Router);

var router = new Router();

router.start(App, 'app');