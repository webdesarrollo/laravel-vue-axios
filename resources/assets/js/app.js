require('./bootstrap');

window.Vue = require('vue');

Vue.component('idea',require('./components/Idea.vue'));
Vue.component('mis-pensamiento',require('./components/MisPensamientos.vue'));
Vue.component('pensamiento',require('./components/Pensamiento.vue'));
Vue.component('form-pensamiento',require('./components/FormPensamiento.vue'));

var app = new Vue({
  el: '#app'
});//vueApp
