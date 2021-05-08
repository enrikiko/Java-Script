<template>
  <div>
    <pp-headerProfile class='header'></pp-headerProfile>
    <div class="container-fluid body">
      <img class="m-3 picture"  v-bind:src="home.img" >
      <!-- <h3>{{ home.img }}</h3> -->
      <h3>{{ home.title }}</h3>
      <h3>{{ home.city }},{{ home.country }}</h3>
      <h3>{{ home.price }}</h3>
      <p>{{ home.description }}</p>
    </div>

  </div>

</template>

<script>
import {db} from '../firebase'
import {auth} from '../firebase'
import HeaderProfile from './HeaderProfile'
import router from '../router'
export default {
  name: 'House',

  data() {
			return {

        // key: this.$route.params.placeName,

				home: {}

		}
	},
  components:{
		ppHeaderProfile : HeaderProfile,//Partial Part
	},
  // mounted(){
  //   // console.log(clave),
  //   // key = this.$route.params.placeName
  //
  //     console.log(clave),
  //     clave='2'
  //
  // },
  firebase:{
    home:{
      source: db.ref("home").child('2'),
      asObject: true
    }
  }
}
</script>

<style>
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
  width: 85%;
  height: auto;
  }
</style>
