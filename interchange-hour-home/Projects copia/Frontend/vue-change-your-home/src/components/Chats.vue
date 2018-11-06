<template>
  <div>
    <pp-headerProfile class="header"></pp-headerProfile>
    <div class="container-fluid body">
      <div class="row">

        <div v-if="certainly" class="col-md-12 row">
          <div class="col-md-12 mt-5 mb-3">
          <h2>There are a new posible combination of {{long}} persons to exchange your flat</h2>
          </div>

          <div class="col-md-10 offset-md-1 mb-5 btn btn-lg bg-button btn-block btn-signin mt-3 btn-outline-dark" v-on:click="newChat">
            <div class=" my-1"  v-for = "item in persons">
              <!-- <p>{{item.name}} wants to live in {{item.desiredHome}} and is living in {{item.currentHome}} his number is {{item.number}}</p> -->
              <p>{{item}}</p>
            </div>
            <h4 class="text-success">Click here to start a chat with theme</h4>
          </div>
        </div>

        <div v-else class="col-md-12 row">
          <div class="col-md-12 mt-5 mb-3">
          <h2>Sorry!! There are <strong>not</strong> a posible combination of persons to exchange your flat</h2>
          </div>
        </div>

        <div v-if="certain" class="col-md-10 offset-md-1 mt-5 mb-3">
          <h2>Previous chats:</h2>
          <div class="row">
            <div v-for="item in chat" v-on:click="lastChat(item)" class="col-md-4 col-md-10 offset-md-1 mb-5 btn btn-lg bg-button btn-block btn-signin mt-3 btn-outline-dark">
                <div class="m-1">
                  <div v-for="words in chats[item].data">
                    <h6>{{words}}</h6>
                  </div>
                </div>
            </div>

          </div>
        </div>

      </div>


    </div>


  </div>

</template>

<script>
import HeaderProfile from './HeaderProfile'
import {auth} from '../firebase'
import {db} from '../firebase'


export default {
  name: 'Chats',
  data(){
    return{
      combination: {},
      combinations: {},
      chats:[],
      chat:[],
      users:{},
      user:{},
      dataList:[],
      chatList:null,
      id: auth.currentUser.uid,
      data: {},
      certainly: false,
      certain: false,
      persons:[],
      long: null,
      key: null,
      // data: db.ref("users").child(id),

    }
  },
  firebase:{
    users:{
      source: db.ref("users"),
      asObject: true,
      readyCallback: function () {
                    this.getUser()
                }
    },
    combinations:{
      source: db.ref("combination"),
      asObject: true,
      readyCallback: function () {
                    this.getComb()
                }
    },
    chats:{
      source:db.ref("chats"),
      asObject:true,
      readyCallback: function () {
                    this.getChat()
                }
    }
  },
  components:{
		ppHeaderProfile : HeaderProfile,//Partial Part
	},
  methods:{
    getUser: function () {
      this.user = this.users[this.id]
    },
    getChat: function () {
      this.chatList = this.user.chat
      for(var key in this.chatList)
      {
        this.certain = true
        this.chat.push(this.chatList[key])
      }
    },
    newChat: function () {
      this.key = 0
      for(var i = this.long; i > 0; i--){
        this.key = this.key+this.combination[i]
      }
      // this.key = db.ref('chats').push().getKey()
      for(var i = 0; i < this.long; i++){
        db.ref("users").child(this.combination[i]).child("chat").child(this.key).set(this.key)
      }

      for(var x = 0; x < this.long; x++){
        this.dataList.push(this.users[this.combination[x]].name + " " +
        this.users[this.combination[x]].number + " (" +
        this.users[this.combination[x]].cHome + " -> " + this.users[this.combination[x]].dHome + ")")
      }
      db.ref("chats").child(this.key).child('data').set(this.dataList)
      db.ref("users").child(this.id).child("lastChat").set(this.key)
      this.$router.replace("/chat")
    },
    lastChat: function (item) {
      db.ref("users").child(this.id).child("lastChat").set(item)
      this.$router.replace("/chat")
    },
    getComb: function() {
      this.combination = this.combinations[this.id].thisUidList
      if(this.combination){this.long = this.combination.length}
      for(var i = 0; i < this.long; i++){
          this.certainly = true
          this.persons.push(
              this.users[this.combination[i]].name + " lives in " +
              this.users[this.combination[i]].cHome + " and would like to live in " +
              this.users[this.combination[i]].dHome + " his number is " +
              this.users[this.combination[i]].number
            // {
              // name:this.users[this.combination[i]].name,
              // number:this.users[this.combination[i]].number,
              // desiredHome:this.users[this.combination[i]].dHome,
              // currentHome:this.users[this.combination[i]].cHome,
            // }
          )

      }
    }
  },
  // created(){this.getComb()}
}
</script>

<style lang="css">
</style>
