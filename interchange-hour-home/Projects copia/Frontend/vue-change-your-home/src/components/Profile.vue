<template>

  <div>
    <pp-headerProfile class="header"></pp-headerProfile>
    <div class="container-fluid body">
    <!-- <div class="row"> -->
      <!-- <div class="col-md-12"> -->
        <!-- <img class='profilePicture my-2' src="../assets/logo.png"> -->
      <!-- </div> -->


            <form class="form-signin my-5" @submit="sendData">
            <div class="row">





              <div class="col-md-6 form-group">
                <div class="row">
                  <div class="col-md-6">
                    <h3>Current Home:</h3>
                  </div>
                  <div class="col-md-6">
                    <select v-model="currentHome" class="custom-select">
                      <option v-for="city in cities" v-bind:value="city.value">
                        {{ city.text }}
                      </option>
                    </select>
                    <!-- <input type="text" class="form-control" required v-model="cHome" v-model:value="user[id].cHome" > -->
                  </div>

                  <div class="col-md-12 my-3">
                      <h3>Current address:</h3>
                      <input type="text" class="form-control" required v-model="address">
                  </div>

                  <div class="col-md-12 mt-1">
                    <h3>Picture of your home:</h3>
                  </div>
                  <div>
                    <input type="file" multiple accept="image/*" @change="detectFiles($event.target.files)">
                    <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div>
                  </div>
                  <div class="col-md-12 my-2 btn" >
                    <img v-bind:src="image" class="profilePicture" >
                  </div>

                  <!-- <div class="col-md-6 mt-3">
                    <h3>Current Rent</h3>
                  </div> -->
                  <!-- <div class="col-md-6 mt-3">
                    <input type="text" class="form-control" required v-model="cRent" v-model:value="user[id].cRent" >
                  </div> -->
                </div>
              </div>

              <div class="col-md-6 form-group">
                <div class="row">
                  <div class="col-md-6">
                    <h3>Desired Home:</h3>
                  </div>
                  <div class="col-md-6">
                    <!-- <input type="text" class="form-control" required v-model="dHome" v-model:value="user[id].dHome" > -->
                    <select v-model="desiredHome" class="custom-select">
                      <option v-for="city in cities" v-bind:value="city.value">
                        {{ city.text }}
                      </option>
                    </select>
                  </div>

                  <div class="col-md-12 my-5">
                    <div class="row">
                      <div class="col-md-6">
                        <h3>Public Name:</h3>
                      </div>
                      <div class="col-md-6">
                        <input type="text" class="form-control" required v-model="name"><!--v-model="name" v-model:value="name"-->
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 my-5">
                  <div class="row">
                    <div class="col-md-6">
                      <h3>Telephone number:</h3>
                    </div>
                    <div class="col-md-6">
                      <input type="text" class="form-control" required v-model="number"><!--v-model="name" v-model:value="name"-->
                    </div>
                  </div>
                </div>

                  <div class="col-md-12 my-5">
                    <div class="row">
                      <div class="col-md-8 offset-md-2">
                        <h3>Email:  {{email}}</h3>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-md-4 mt-3">
                    <h3>Range Rent</h3>
                  </div> -->
                  <!-- <div class="col-md-4 mt-3">
                    <input type="text" class="form-control" required v-model="minDRent" v-model:value="user[id].minDRent" >
                  </div>
                  <div class="col-md-4 mt-3">
                    <input type="text" class="form-control" required v-model="maxDRent" v-model:value="user[id].maxDRent" >
                  </div> -->
                </div>

              </div>





                <div class="col-md-6 offset-md-3 my-5">
                  <button class="btn btn-lg bg-button btn-block btn-signin mt-3 btn-outline-dark" type="submit">Enter</button>
                </div>




            </div>
            </form>


      <!-- </div> -->
    </div>
  </div>

</template>

<script>
import HeaderProfile from './HeaderProfile'
import {auth} from '../firebase'
import {db} from '../firebase'
import {storage} from '../firebase'
export default {

  data() {
			return {

        id: auth.currentUser.uid,
        user: {},
        email: auth.currentUser.email,
        res:{},
        image:"https://firebasestorage.googleapis.com/v0/b/interchangeyourhome.appspot.com/o/userpicture.jpg?alt=media&token=fbff37b9-4ff8-4cbc-9d57-8b1b7fb2db63",
        address:null,
        name: '',
        number: 0,
        progressUpload: 0,
        file: File,
        uploadTask: '',
        downloadURL: '',
        certain:{
          name: null,
          cHome: null,
          dHome: null,
          email: null,
          number: null,
          address:null,
        },
        desiredHome: 'Select...',// Bring this from db-------->
        currentHome: 'Select...',
        cities:[
          { text: "Select...", value: "Select..."},
          { text: "	A Coruña	", value: "A Coruña"},
          { text: "	Álava	", value: "Álava"},
          { text: "	Albacete	", value: "Albacete"},
          { text: "	Alicante	", value: "Alicante"},
          { text: "	Almería	", value: "Almería"},
          { text: "	Asturias	", value: "Asturias"},
          { text: "	Ávila	", value: "Ávila"},
          { text: "	Badajoz	", value: "Badajoz"},
          { text: "	Islas Baleares	", value: "Islas Baleares"},
          { text: "	Barcelona	", value: "Barcelona"},
          { text: "	Burgos	", value: "Burgos"},
          { text: "	Cáceres	", value: "Cáceres"},
          { text: "	Cádiz	", value: "Cádiz"},
          { text: "	Cantabria	", value: "Cantabria"},
          { text: "	Castellón	", value: "Castellón"},
          { text: "	Ciudad Real	", value: "Ciudad Real"},
          { text: "	Córdoba	", value: "Córdoba"},
          { text: "	Cuenca	", value: "Cuenca"},
          { text: "	Girona	", value: "Girona"},
          { text: "	Granada	", value: "Granada"},
          { text: "	Guadalajara	", value: "Guadalajara"},
          { text: "	Guipúzcoa	", value: "Guipúzcoa"},
          { text: "	Huelva	", value: "Huelva"},
          { text: "	Huesca	", value: "Huesca"},
          { text: "	Jaén	", value: "Jaén"},
          { text: "	La Rioja	", value: "La Rioja"},
          { text: "	Las Palmas	", value: "Las Palmas"},
          { text: "	León	", value: "León"},
          { text: "	Lleida	", value: "Lleida"},
          { text: "	Lugo	", value: "Lugo"},
          { text: "	Madrid	", value: "Madrid"},
          { text: "	Málaga	", value: "Málaga"},
          { text: "	Murcia	", value: "Murcia"},
          { text: "	Navarra	", value: "Navarra"},
          { text: "	Orense	", value: "Orense"},
          { text: "	Palencia	", value: "Palencia"},
          { text: "	Pontevedra	", value: "Pontevedra"},
          { text: "	Salamanca	", value: "Salamanca"},
          { text: "	Segovia	", value: "Segovia"},
          { text: "	Sevilla	", value: "Sevilla"},
          { text: "	Soria	", value: "Soria"},
          { text: "	Tarragona	", value: "Tarragona"},
          { text: "	Santa Cruz de Tenerife	", value: "Santa Cruz de Tenerife"},
          { text: "	Teruel	", value: "Teruel"},
          { text: "	Toledo	", value: "Toledo"},
          { text: "	Valencia	", value: "Valencia"},
          { text: "	Valladolid	", value: "Valladolid"},
          { text: "	Vizcaya	", value: "Vizcaya"},
          { text: "	Zamora	", value: "Zamora"},
          { text: "	Zaragoza	", value: "Zaragoza"},
        ]


		}
	},



  firebase:{

    user: {
      source: db.ref("users"),
      asObject: true,
      readyCallback: function () {
                    this.getData()
                }
    }
  },
  components:{
		ppHeaderProfile : HeaderProfile,//Partial Part
	},
  methods:{
      detectFiles: function(fileList) {
        Array.from(Array(fileList.length).keys()).map( x => {
          this.upload(fileList[x])
        })
      },
      upload: function(file) {
        this.uploadTask = storage.ref('imagenes').child(this.id).put(file);
        this.uploadTask.then(snapshot => {
          console.log(this.uploadTask);
          this.downloadURL = this.uploadTask.snapshot.downloadURL;
          this.$emit('url', this.downloadURL)
        })
      },
      getData: function () {
        this.desiredHome = this.user[this.id].dHome
        this.currentHome = this.user[this.id].cHome
        this.name = this.user[this.id].name
        this.number = this.user[this.id].number
        this.address = this.user[this.id].address

      },

      sendData: function(){

        this.certain = {
          name: this.name,
          cHome: this.currentHome,
          dHome: this.desiredHome,
          email: this.email,
          number: this.number,
          address: this.address,
        }

        db.ref('users').child(this.id).update(this.certain)
        this.$router.replace("/houses")

      },
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      })
    }
  },
}
</script>

<style scoped>
.profilePicture{
  max-width: 100%;
  max-height: 100%;
}
</style>
