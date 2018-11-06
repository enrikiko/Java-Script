<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4 mt-5">
        <router-link :to="{'name':'Home'}"><img class='logo' src="../assets/logo.png"></router-link>
      </div>
      <div class="col-md-4 offset-md-4 bg-login my-5">
        <h1 class="mt-3">Login</h1>
        <form class="form-signin" @submit="login">
            <span id="reauth-email" class="reauth-email"></span>
            <input type="email" id="inputEmail" class="form-control mt-3" placeholder="Email address" required autofocus v-model="email">
            <input type="password" id="inputPassword" class="form-control mt-3" placeholder="Password" required v-model="password">
            <button class="btn btn-lg bg-button btn-block btn-signin mt-3" type="submit">Sign in</button>
            <a class="nav-link mt-3"><router-link :to="{'name':'Forgot'}">Forgot your password?</router-link></a>
            <a class="nav-link my-3"><router-link :to="{'name':'Signup'}">Sign Up</router-link></a>
        </form><!-- /form -->


      </div>

    </div>
    <!-- <h1>{{ msg }}</h1> -->



  </div>
</template>

<script>
import {auth} from '../firebase'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'hola',
      email: "",
      password:""
    }
  },
  methods:{
        login(){
            auth.signInWithEmailAndPassword(this.email,this.password)
            .then((user)=>{
                this.$router.replace("/profile")
            })
            .catch((error)=>{
                console.log('Invalid Auth')
            })
        }
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
