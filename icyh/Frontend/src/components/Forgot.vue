<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4 mt-5">
        <router-link :to="{'name':'Home'}"><img class='logo' src="../assets/logo.png"></router-link>
      </div>
      <div class="col-md-4 offset-md-4 bg-login my-5">
        <h1 class="mt-3">Resert passworl</h1>
        <form class="form-signin" @submit="restLogin">
            <span id="reauth-email" class="reauth-email"></span>
            <input type="email" id="inputEmail" class="form-control mt-3" placeholder="Email address" required autofocus v-model="email">
            <button class="btn btn-lg bg-button btn-block btn-signin mt-3" type="submit">Resert password</button>
            <a class="nav-link mt-3"><router-link :to="{'name':'Login'}">Log In</router-link></a>
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
  name: 'Forgot',
  methods:{
        restLogin(){
            auth.sendPasswordResetEmail(this.email)
            .then((user)=>{
              alert('We have sent you an email where you can resert you email');
              this.$router.replace("login")
            })
            .catch((error)=>{
              //mostrar mensaje de error
              alert(error.message);
            })
        }
    },
  data () {
    return {
      msg: 'hola',
      email: "",
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
