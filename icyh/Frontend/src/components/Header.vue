<template>

  <div class="container-fluid ">
    <div class="row justify-content-end">
      <div class="col-md-4">
        <router-link :to="{'name':'Howworks'}"><button id='login' type="button" class="btn btn-outline-dark m-2 ">How ICYH works?</button></router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{'name':'Home'}"><img class='logo my-2 ' src="../assets/logo.png"></router-link>

      </div>
      <div class="col-md-4">
        <router-link :to="{'name':'Login'}"><button id='login' type="button" class="btn btn-outline-dark m-2 ">LogIn</button></router-link>
        <router-link :to="{'name':'Signup'}"><button id='signup' type="button" class="btn btn-outline-dark m-2 ">SingUp</button></router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped>
.logo{height: 40px}

</style>
