<template>
  <div>
    <pp-header class='header'></pp-header>
    <div class="container body">
      <h1 class="my-5">Inter-Change Your Home</h1>
      <h2 class="mt-5">Is a Web-App that find you the home you want and someone</h2>
      <h2 class="mt-3">to replace your current rent</h2>
      <h3 class="mt-5">Are you looking for a new home to rent but you can't leave your rent?</h3>
      <h3 class="mt-4">Just create a account select where you would like to live</h3>
      <h3 class="mt-3 mb-5">and where are you living and we do the rest.</h3>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'
import {auth} from '../firebase'
import Header from './Header'
export default {
  name: 'Howwokrs',
  data() {
			return {
				home: [],
		}
	},
  components:{
		ppHeader : Header,//Partial Part
	},
  firebase:{
    home:{
      source: db.ref("home")
    },
	},
}
</script>

<style scoped>
.header{
  z-index: 100;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #E0E0E0;
  background: #FFF;
}
.body{
  padding-top: 55px;
}
.picture{
  width: 240px;
  height: 180px;
  }
</style>
