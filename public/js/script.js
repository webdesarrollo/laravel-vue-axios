alert('hola');


var url='/users';
var app = new Vue({
  el: '#appVue',

  created: function(){
    this.getUsuarios();
  },

  data: {
    lista:[]//list
  },//data

  methods:{
    getUsuarios:function(){
      axios.get(url).then(response=>{
        this.lista = response.data;
      });
    }
  }

});//new vue
