<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4 mt-5">
        <router-link :to="{'name':'Home'}"><img class='logo' src="../assets/logo.png"></router-link>
      </div>
      <div class="col-md-4 offset-md-4 bg-login my-5">
        <h1 class="mt-3">Sign Up</h1>
        <form class="form-signin" @submit="signup">
            <span id="reauth-email" class="reauth-email"></span>
            <input type="email" id="inputEmail" class="form-control mt-3" placeholder="Email address" required autofocus v-model="email">
            <input type="password" id="inputPassword" class="form-control mt-3" placeholder="Password" required v-model="password">
            <input type="password" id="verifiedPassword" class="form-control mt-3" placeholder="Verify Password" required v-model="verifiedPassword">
            <button class="btn btn-lg bg-button btn-block btn-signin mt-3" type="submit">Sign Up</button>
            <a class="nav-link my-3"><router-link :to="{'name':'Login'}">Log In</router-link></a>
        </form><!-- /form -->


      </div>

    </div>
    <!-- <h1>{{ msg }}</h1> -->



  </div>
</template>

<script>
import {auth} from '../firebase'
import { db } from '../firebase'
export default {
  name: 'Signup',
  data () {
    return {
      msg: 'hola',
      email: "",
      password:"",
      verifiedPassword:""
    }
  },

  methods:{
        signup(){
          if(this.verifiedPassword==this.password)
              {
                auth.createUserWithEmailAndPassword(this.email, this.password)
              .then((user)=>{
                  var uid = auth.currentUser.uid
                  this.$router.replace("/profile")
                  db.ref('users').child(uid).child('email').set(this.email)
              })
              .catch((error)=>{
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
            });
          }
          else{console.log('passwords are not equal')}
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-login{
  background-color: #F1F1F1
}
.bg-button{
  background-color: #3D7EB7
 }
.logo{height: 100px}

</style>
