<template>

  <div class="container-fluid ">
    <div class="row justify-content-end">
      <div class="col-md-4">
        <router-link :to="{'name':'Chats'}"><button id='Chat' type="button" class="btn btn-outline-dark m-2">Chat</button></router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{'name':'Houses'}"><img class='logo my-2 ' src="../assets/logo.png"></router-link>

      </div>
      <div class="col-md-4">
        <router-link :to="{'name':'Profile'}"><button id='Preferences' type="button" class="btn btn-outline-dark m-2">Preferences</button></router-link>
        <button id='logout' type="button" class="btn btn-outline-dark m-2" v-on:click="logout()">Log Out</button>
      </div>
    </div>
  </div>

</template>

<script>
import {auth} from '../firebase'
export default {
  methods:{
        logout(){
          auth.signOut()
          .then((user)=>{
              this.$router.replace("/")
          }).then((error)=>{
              this.$router.replace("/")
          });
        }
  }
}
</script>

<style scoped>
.logo{height: 40px}

</style>
