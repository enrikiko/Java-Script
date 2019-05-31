<template lang="html">
<div class="row" v-if="object.length > 0">
  <div class="col-12 m3-5">
    <h2>Commentarios:</h2>
  </div>
  <div class="col-12">
    <ul id="v-for-object"  class="list-group">
     <li v-for="value in object" class="list-group-item">
       <p class="text-left m-1">{{ value }}</p>
     </li>
   </ul>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      object:[]
    }
  },
  methods:{
    init(){
      axios({
        method:"get",
        url:'https://kzc6v71u5k.execute-api.eu-central-1.amazonaws.com/prod/form',
      }).then((a,b)=>{
        //console.log(a.data.Items)
        this.object = this.getList(a.data.Items)
      })
    },
    getList(object){
      var elemList = []
      for (var elem of object){
        console.log(elem.message);
        elemList.push(elem.message)
      }
      return elemList
    },
  },
  mounted(){
    this.init()
  }
}
</script>

<style lang="css">
</style>
