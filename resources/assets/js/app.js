require('./bootstrap');

window.Vue = require('vue');

Vue.component('idea',require('./components/Idea.vue'));

var app = new Vue({
  el: '#app'
});//vueApp
