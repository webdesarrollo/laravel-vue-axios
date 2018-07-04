
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
/*
const app = new Vue({
    el: '#app'
});
*/

var urlUsers='users';

var app = new Vue({
  el: '#main',

created: function() {
  //this.getUsers();
},//CREATED

data: {
		lists: [],
    people:['cuca','marta','lana','julem'],
    name:'',
    num:0
	},//data

  //metodos
  methods: {

  getUsers: function() {
      axios.get(urlUsers).then(response=>{
        this.lists = response.data;
      });
  	},//getusers
    //addName, metodo de el boton
    addName: function(){
      //this objeto view, empujo en people un nombre(hace ref a la caja de texto)
      this.people.push(this.name);
      this.name='';
    }//addName

  },//metodos


});//vueApp
