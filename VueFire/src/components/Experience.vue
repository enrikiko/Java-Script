<template>
  <div class="container-fluid">
    <!-- <h1>{{test.name}}</h1> -->
      <div class="col-10 offset-1 row" v-for = "item in experience">
        <p>{{item.title}}</p>
        <p>{{item.companie}}</p>
        <p>{{item.since}}</p>
        <p>{{item.to}}</p>
        <p>{{item.localization}}</p>
        <p>{{item.description}}</p>
      </div>


  </div>
</template>

<script>
import {getValue} from '../firebase.js'
import {db} from '../firebase.js'
import {testdb} from '../firebase.js'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      experience: getValue("experience").then((e)=>{this.experience=e}),
      data: getValue("info").then((e)=>{this.data=e}),
      test: {}
    }
  },
  firebase: {
  test: {
    source: testdb,
    asObject: true,
      readyCallback: function () {
                    this.getUser()
                }
    }
  },
  methods:{
    getUser: function() {
      console.log('eureka');
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.picture{
   width:100%;
   height:100%;
  }
.square {
  width: 20vw;
  height: 20vw;
}
</style>
