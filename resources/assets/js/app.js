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
    pagination: {
      total: 0,
      current_page:0,
      per_page: 0,
      last_page: 0,
      from: 0,
      to: 0
    },
    errors:[]
  },//data

  computed:{
    isActived: function(){
      return this.pagination.current_page;
    },
    pagesNumber:function(){
      if(!this.pagination.to){
        return [];
      }
      var from=this.pagination.current_page - 2;
      if(from<1){
        from=1;
      }

      var to = from + (2*2);
      if(to>=this.pagination.last_page){
        to=this.pagination.last_page;
      }

      var pagesArray=[];
      while(from<=to){
        pagesArray.push(from);
        from++;
      }

      return pagesArray;
    }//pagesNumber
  },

  methods:{

      getKeeps:function(page){
        var urlKeeps='tasks?page='+page;
        axios.get(urlKeeps).then(response=>{
            this.keeps=response.data.tasks.data;
            this.pagination=response.data.pagination
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
        },

        changePage: function(page){
          this.pagination.current_page=page;
          this.getKeeps(page);
        }


  }//metodos

});//vueApp
