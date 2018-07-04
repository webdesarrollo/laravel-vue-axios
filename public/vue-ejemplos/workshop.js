
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
var app = new Vue({
  el: '#app',
  data: {
    message: 'Tareas!',
    lista:[],//list
    nuevaTarea:''
  },//data
  //metodos
  methods:{

    addTarea:function() {
      //enpujar o agregaar
      this.lista.push(
        //tarea es igual al input de texto
        {tarea: this.nuevaTarea,completada: false}
      );
      //vovel a blanco la caja
      this.nuevaTarea='';
    },//add

  }//metodos
});
