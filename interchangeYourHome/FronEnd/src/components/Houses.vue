<template>
  <div>
    <pp-headerProfile class='header'></pp-headerProfile>
    <div class="container-fluid body">
      <div class="row my-5">
        <div class="col-md-3 my-3" v-for = "item in home" :key="item['.key']">
          <router-link :to="{'path':'House/'+  item['.key'] }">
            <div class="border bg-white">
              <img class="m-3 picture"  v-bind:src="item.img" >
              <h3>{{ item.title }}</h3>
              <h3>{{ item.city }},{{ item.country }}</h3>
              <h3>{{ item.price }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {db} from '../firebase'
import {auth} from '../firebase'
import HeaderProfile from './HeaderProfile'
export default {
  name: 'Houses',
  data() {
			return {
				home: [],
        placeName:'',
		}
	},
  components:{
		ppHeaderProfile : HeaderProfile,//Partial Part
	},
  firebase:{
    home:{
      source: db.ref("home")
    },
	},
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
