<template>
  <div class="row">
    <div class="clear"></div>
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="card-title">{{ pensamiento.created_at }}</div>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <input type="text" class="form-control" v-if="editMode" v-model="pensamiento.descripcion">
          <p v-else>{{ pensamiento.descripcion }}</p>
        </div>
        <div class="card-footer text-muted">
          <div class="btn-group">
            <a href="#" v-if="editMode" class="btn btn-primary" v-on:click="onClickUpdate">
              Guardar
            </a>
            <a href="#" v-else class="btn btn-info" v-on:click.prevent="onClickEdit">
              Editar
            </a>
            <a href="#" class="btn btn-danger" v-on:click="onClickDelete">
              Eliminar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['pensamiento'],
  data(){
    return{
      editMode: false
    }
  },//data

  methods:{

    onClickDelete: function(){
      axios.delete('/pensamientos/'+this.pensamiento.id).then(() => {
                this.$emit('delete');
            });
        },

    onClickEdit: function(){
      this.editMode=true;
    },

    onClickUpdate: function(){
      const params={
        descripcion:this.pensamiento.descripcion
      };
      axios.put('/pensamientos/${this.pensamiento.id}',params).then(response=>{
        this.editMode=false;
        const pensamiento = response.data;
        this.$emit('update',pensamiento);
      });
    },

  },//metodos

}//export
</script>

<style lang="css">
  .clear{
    height: 40px;
    width: 100%;
  }
</style>
