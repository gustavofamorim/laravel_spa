import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

//Components
import App from './components/App.vue';
import HomeView from './components/HomeView.vue';
import CategoryView from './components/CategoryView.vue';

//Filters
//OBS: This will import every filter (method) in the index.js file.
import {fromNow, largeNumber} from './filters/index.js';

//Here we say to vue use the filter (method) 'fromNow' and it will be referenced
//in vue files as 'fromNow' too. But we can say to vue reference this filter
//as 'cowFilter' or whatever you want.
Vue.filter('fromNow', fromNow);
//Now the filter 'largeNumber'.
Vue.filter('largeNumber', largeNumber);

// Set Vue to use Vue-Resouce
// Vue-Resource it's a HTTP client for vue.js
Vue.use(Resource);

// Set Vue to use Vue-Router
// Vue-Router it's a application routes manager (or something like that =D haha)
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
    },
    '/category/:categoryId': {
        name: 'category',
        component: CategoryView
    }
});

//Redirect all routes to /
router.redirect({
    '*': '/'
});

router.start(App, 'app');