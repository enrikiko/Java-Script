<template>
  <div>
    <pp-headerProfile class="header"></pp-headerProfile>
    <div class="container-fluid body">
      <div class="row my-5">

        <div class="col-md-10 offset-md-1 chatHead bg-secondary">
          <div v-for="item in chat.data" class="my-2">
            <h4 class="text-white">{{item}}</h4>
          </div>
        </div>

        <div class="col-md-10 offset-md-1 border chatBody">
          <div v-for="item in chat.body">

            <h4 class="text-left ml-2 mt-3 mb-2"><strong>{{item.user}}: </strong>{{item.text}}</h4>

          </div>
        </div>


        <div class="input-group mb-3 col-md-10 offset-md-1">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" required v-model="message">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" v-on:click="sendMessage">Send</button>
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
  name: 'Chat',
  data(){
    return{
      id: auth.currentUser.uid,
      users:null,
      user:null,
      chats:null,
      chat:null,
      message:null,
    }
  },
  components:{
		ppHeaderProfile : HeaderProfile,
	},
  firebase:{
    users:{
      source: db.ref("users"),
      asObject: true,
      readyCallback: function () {
                    this.getUser()
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
  methods:{
    getUser: function () {
      this.user = this.users[this.id]
    },
    getChat: function () {
      this.chat=this.chats[this.user.lastChat]
    },
    sendMessage: function () {
      db.ref("chats").child(this.user.lastChat).child("body")
      .push({"user":this.user.name,"text":this.message})
      this.$router.replace("/chats")
    }
  },

}
</script>

<style>
.chatBody{
  height: 350px;
}
</style>
