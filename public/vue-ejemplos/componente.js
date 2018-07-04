
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

Vue.component('common-list',{
  props:['lists'],
  template:'<ul class="list-group"><li class="list-group-item" v-for="item in lists">{{ item.title }}</li></ul>',
});

var urlPosts='https://jsonplaceholder.typicode.com/posts';
var urlAlbums='https://jsonplaceholder.typicode.com/albums';

var app = new Vue({
  el: '#main',

  created: function(){
    this.getPosts(),
    this.getAlbums()
  },

  data: {
		posts: [],
    albums:[]
	},//data

  //metodos
  methods: {
    getPosts: function(){
      axios.get(urlPosts).then(response=>{
        this.posts = response.data;
      });
    },

    getAlbums:function(){
      axios.get(urlAlbums).then(response=>{
        this.albums= response.data;
      })
    }
  },//metodos

  computed:{
    searchUser:function(){
      return this.lists.filter((item)=>item.name.includes(this.name));
    }
  }

});//vueApp
