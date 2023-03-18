/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'

import store from './store'
window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

require('./bootstrap');

import routes from './routes'

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior: function (to, _from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }
        if (to.hash) {
          return { el: to.hash, behavior: "smooth" };
        } else {
          console.log("moving to top of the page");
          window.scrollTo(0, 0);
        }
     }
});


import App from './components/layout/App.vue';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

//const files = require.context('./', true, /\.vue$/i)
//files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('app-header', require('./components/layout/header.vue').default);
Vue.component('app-footer', require('./components/layout/footer.vue').default);
Vue.component('global-overlay', require('./components/utility/global-overlay.vue').default);
Vue.component('spinner', require('./components/utility/spinner.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app');
