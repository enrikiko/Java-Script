<template>
  <div class="cv container-fluid bg-danger">
    <div class="row">
      <div class="col-8">
        <nav class="navbar navbar-expand-lg navbar-light bg-danger">

          <button type="button" class="btn m-1 btn-danger">
            <a class="navbar-brand text-light ml-2" v-on:click="projectClick()" href="#/projects">Project</a>
          </button>

          <button type="button" class="btn m-1 btn-danger">
            <a class="navbar-brand text-light ml-2" v-on:click="experienceClick()" href="#/experience">Work Experience</a>
          </button>

          <button type="button" class="btn m-1 btn-danger">
            <a class="navbar-brand text-light ml-2" v-on:click="aboutClick()" href="#/about">About</a>
          </button>

          <button type="button" class="btn m-1 btn-danger">
            <a class="navbar-brand text-light ml-2" v-on:click="educationClick()" href="#/education">Education</a>
          </button>

          <button type="button" class="btn m-1 btn-danger">
            <a class="navbar-brand text-light ml-2" v-on:click="downloadCV()" href="#">Download CV in PDF</a>
          </button>

        </nav>
      </div>
        <div class="col-4">
          <div class="row justify-content-end">
            <nav class="navbar  navbar-light bg-danger">

              <button type="button" class="btn m-3 btn-danger">
                <a href="https://github.com/enrikiko" target="_blank" style="color: #fff">
                  <i class="fab fa-github-square"></i>
                </a>
              </button>

              <button type="button" class="btn m-3 btn-danger">
                <a href="https://www.linkedin.com/in/enriqueramosmuñoz" target="_blank" style="color: #fff">
                  <i class="fab fa-linkedin"></i>
                </a>
              </button>

              <button type="button" class="btn m-3 btn-danger">
                <a href="https://www.instagram.com/enriqueramosmunoz/" target="_blank" style="color: #fff">
                  <i class="fab fa-instagram"></i>
                </a>
              </button>

          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    projectClick(){console.log("projectClick");},
    experienceClick(){console.log("experienceClick");},
    aboutClick(){console.log("aboutClick");},
    educationClick(){console.log("educationClick");},
    downloadCV(){
      window.location.replace("https://us-central1-enrique-ramos.cloudfunctions.net/api1/eureka");
      console.log("Download CV");}
  }
}
</script>

<style lang="css">
</style>
