import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';
import HomeView from './components/HomeView.vue';

// Set Vue to use Vue-Router
Vue.use(Router);

var router = new Router({
    history: true
});

//Defines the routes of this application
router.map({
    
    '/' : {
        name: 'home',
        component: HomeView,
        subRoutes: {
            
        }
    }
});

//Redirect all routes to /
router.redirect({
    '*': '/'
});

router.start(App, 'app');