<template>
  <div class="container">

    <form-pensamiento
      @new="addPensamiento"
    >
    </form-pensamiento>

    <pensamiento
      v-for="(pensamiento, index) in pensamientos"
      :key="pensamiento.id"
      :pensamiento="pensamiento"
      @delete="deletePensamiento(index)"
      @update="updatePensamiento(index, ...arguments)"
    >
    </pensamiento>

  </div>
</template>

<script>
export default {
  data(){
    return {
      pensamientos:[]
    }
  },//data

  mounted(){
    axios.get('/pensamientos').then(response=>{
      this.pensamientos=response.data;
    });
  },//mounted

  methods:{
    addPensamiento: function(pensamiento){
      this.pensamientos.push(pensamiento);
    },

    deletePensamiento: function(index){
      this.pensamientos.splice(index,1);
    },

    updatePensamiento: function(index, pensamiento){
      this.pensamientos[index]=pensamiento;
    },

  }//metodos

}//export
</script>
