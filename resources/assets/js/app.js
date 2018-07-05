require('./bootstrap');

window.Vue = require('vue');

var app = new Vue({
  el: '#crud',

  created:function(){
    this.getKeeps();
  },

  data:{
    keeps:[],
    newKeep:'',
    fillKeep: {'id': '', 'keep': ''},//lo que hace es mostar los datos
    errors:[]
  },//data

  methods:{

      getKeeps:function(){
        var urlKeeps='tasks';
        axios.get(urlKeeps).then(response=>{
            this.keeps=response.data;
        });
      },

      deleteKeeps:function(keep){
        var urlDelete='tasks/'+keep.id;
        axios.delete(urlDelete).then(response=>{//elimino
          this.getKeeps();//acualizo
            var notify = $.notify('<strong>Task eliminada</strong>', {
              type: 'success',
            });
        });
      },

      createKeep: function() {
    			var url = 'tasks';
    			axios.post(url, {
    				keep: this.newKeep
    			}).then(response => {
    				this.getKeeps();
    				this.newKeep = '';
    				this.errors = [];
    				$('#create').modal('hide');
            var notify = $.notify('<strong>Task creada</strong>', {
              type: 'success',
            });
    			}).catch(error => {
    				this.errors = 'Corrija para poder crear con éxito'
    			});
    		},
        /*
          el edit seria, al hacer click en editar se al metodo editKeep
          y llena con el objeto keep a fillkeep, y muestar el formulario
        */
        editKeep: function(keep) {
    			this.fillKeep.id   = keep.id;
    			this.fillKeep.keep = keep.keep;
    			$('#edit').modal('show');
        },

        updateKeep: function(id) {
        			var url = 'tasks/' + id;
        			axios.put(url, this.fillKeep).then(response => {
        				this.getKeeps();
        				this.fillKeep = {'id': '', 'keep': ''};
        				this.errors	  = [];
        				$('#edit').modal('hide');
            $('#edit').modal('hide');
            var notify = $.notify('<strong>Task actualizada</strong>', {
              type: 'success',
            });
          }).catch(error=>{this.errors.response.data});
        }


  }//metodos

});//vueApp
