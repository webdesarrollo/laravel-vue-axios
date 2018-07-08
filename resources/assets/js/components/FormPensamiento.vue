<template>
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">Dashboard</div>
            <div class="card-body">
              <form class="" v-on:submit.prevent="newPensamiento">
                <div class="form-group">
                  <label>Pensamiento: </label>
                  <input type="text" class="form-control" name="pensamiento" v-model="descripcion">
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      descripcion:''
    }
  },//data

  methods:{

    newPensamiento: function(){

      const params={
        descripcion: this.descripcion
      };
      axios.post('pensamientos',params).then((response)=>{
        const pensamiento = response.data;
        this.$emit('new',pensamiento);
        this.descripcion='';
      });
    },

  }//metodos
}//export
</script>

<style lang="css">
  .clear{
    height: 40px;
    width: 100%;
  }
</style>
