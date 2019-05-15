<template lang="html">
  <div class="app">
    <div class="row m-3">
      <div class="col-12">
        <h1>Cortijo de mazas</h1>
        <h2>Churriana, Malaga</h2>
      </div>
      <div class="col-12 col-sm-4 my-4">
        <img class="rounded img" src="../assets/cortijo.png">
      </div>
      <div class="col-12 col-sm-8 my-4">
        <p>El cortijo de Mazas es una urbanizacion residencial perteneciente al distrito de  <b>Churriana</b> en la ciudad de <b>Malaga</b>. El numbre de la urbanizaion tiene su origen en un cortijo de 
        <br> Suelen estar formadas por un edificio principal, conformado como casa-bloque, al que se adosan algunas construcciones secundarias (graneros, cuadras, viviendas menores...), con acceso a todas ellas desde un patio lateral murado. La fachada de la casa principal suele dar a una lonja o solana.</p>
      </div>
      <div class="col-12 col-sm-6 my-3">
        <router-link :to="{'name':'Calles'}">
          <pp-calles></pp-calles>
        </router-link>
      </div>
      <div class="col-12 col-sm-6 my-3">
        <router-link :to="{'name':'PuntosDeInteres'}">
          <pp-puntos-de-interes></pp-puntos-de-interes>
        </router-link>
      </div>
      <div class="col-12">
        <pp-commend></pp-commend>
      </div>
      <div class="col-12 my-3">
        <pp-form></pp-form>
      </div>
    </div>
  </div>
</template>

<script>
import Calles from './Calles'
import PuntosDeInteres from './PuntosDeInteres'
import Form from './Form'
import Commend from './Commend'
export default {
  name: 'Index',
  components:{
    ppCalles : Calles,
    ppPuntosDeInteres : PuntosDeInteres,
    ppForm : Form,
    ppCommend : Commend
  }
}
</script>

<style lang="css">
.img{
  width: 100%
}
k{
  text-align: center;
}
</style>
