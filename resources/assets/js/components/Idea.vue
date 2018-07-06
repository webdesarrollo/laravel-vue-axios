<template>
  <div class="col-xs-8 col-xs-offset-2">
    <h2 class="text-center">Captura tus ideas</h2>
    <div class="well">
      <h4>En que estas pensando?</h4>
      <form v-on:submit.prevent="createIdea">
        <div class="input-group">
          <input type="text" class="form-control input-sm" maxlength="256" v-model="newIdea">
          <span class="btn-group">
            <button type="submit" class="btn btn-primary">
              Agrergar
            </button>
          </span>
        </div>
      </form>
      <hr>
      <ul class="list-unstyled">
        <li v-for="idea in ideas">
          <p>
            {{ idea.descripcion }}
            <small class="text-muted">
              - <em>{{ since(idea.created_at) }}</em>
            </small>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import axios  from 'axios'
    import moment from 'moment'
    moment.locale('es');

    export default {
        data(){
          return{
            ideas:[],
            newIdea:''
          }
        },//data

        created: function() {
          this.getIdeas();
        },

        methods: {

          getIdeas:function(){
            var url='mis-ideas';
            axios.get(url).then(response=>{
              this.ideas=response.data;
            });
          },

          since:function(d){
            return moment(d).fromNow();
          },

          createIdea: function(){
            var url='guardar-idea';
            axios.post(url,{
              descripcion: this.newIdea
            }).then(response=>{
              this.getIdeas();
              this.newIdea='';
              var notify = $.notify('<strong>Idea registrada</strong>', {
              type: 'success',});
            }).catch(error=>{
              var notify = $.notify('<strong>Error</strong>', {
              type: 'danger',});
            });
          }//createIdea

        }//metodos
    }
</script>

<style>

</style>
