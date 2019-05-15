<template>
  <div id="app">

    <router-view></router-view>
    <pp-footer></pp-footer>

  </div>
</template>

<script>

import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    ppFooter : Footer,
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  /* color: #2c3e50; */
  /* margin-top: 10px; */
}
.row{
  margin-left:0px;
  margin-right:0px;
}
</style>
