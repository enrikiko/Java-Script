<template>

  <div class="container-fluid footer">
    <div class="row">
      <div class="col-md-6 offset-md-3 my-4">
        <div class="center-block">
          <ul clas='list-inline text-align'>
            <a class='text-white m-5'href="https://stackoverflow.com/" target="_blank">
              <li class='list-inline-item mt-4'>
              <font-awesome-icon :icon="facebook" /></li></a>
            <a class='text-white m-5' href="https://linkedin.com/" target="_blank">
              <li class='list-inline-item mt-4'>
                <font-awesome-icon :icon="linkedin" /></li></a>
            <a class='text-white m-5' href="https://github.com/" target="_blank">
              <li class='list-inline-item mt-4'>
                <font-awesome-icon :icon="github" /></li></a>
            </li>
          </ul>
        </div>
        <hr class="my-2">

        <p class="text-white my-4">Designed by <strong>Enrique Ramos</strong>  • All rights reserved.</p>

      </div>

    </div>

  </div>

</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-solid/faFacebook'
import faLinkedin from '@fortawesome/fontawesome-free-solid/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-solid/faGithub'


export default {
  name: 'FAExample',

  computed: {
    facebook () {
      return faFacebook
    },
    linkedin () {
      return faLinkedin
    },
    github() {
      return faGithub
    }

  },

  components: {
    FontAwesomeIcon
  }
}
</script>


<style lang="css">
  .footer{
    height: 200px;
    background: #333;
    border-top: 1px solid #E0E0E0;
    width: 100%;
    display: block;

  }
  hr{
    background: #222;
    height: 1px;
    width: 75%;
    border-style: inset;
    border-width: 0.75px ;
  }



</style>
