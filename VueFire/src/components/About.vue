<template lang="html">
  <div class="container-fluid">
    <h1>About</h1>
    <div class="row">
      <div class="col-1">

      </div>
      <div class="col-2">
        <div class="square">
        <img class="picture rounded-circle"  v-bind:src="data.photo" >

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getValue} from '../firebase.js'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      data: getValue("info").then((e)=>{this.data=e}),

    }
  }
}
</script>

<style lang="css">
</style>
