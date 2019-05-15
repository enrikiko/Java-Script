<template lang="html">
  <div class="row">
    <div class="col-12">
      <form @submit="send">
        <div class="form-group">
          <label for="Comentario">Añade un comentario</label>
          <input v-model="text" type="text" class="form-control" id="comentario" placeholder="Comentario">
          <small id="comentarioHelp" class="form-text text-muted">Este comentario sera añadido a la pagina.</small>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Acepto las condiciones de uso</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      text: null
    }
  },
  methods:{
    send(){
      var json = JSON.stringify({"text": this.text})
      axios({
        method:"post",
        url:'https://kzc6v71u5k.execute-api.eu-central-1.amazonaws.com/prod/form',
        headers:
          {
            'Content-Type': 'application/json',
          },
        data: json
      })
    },
  },
  mounted(){
  }
}
</script>


<style lang="css">
</style>
