<template>
  <div class="loginPage">
    <div v-if="isLogout">
      <button v-on:click="login()" class="btn btn-dark"> Login </button>
    </div>
    <div v-else>
      <button v-on:click="logout()" class="btn btn-dark"> Logout </button>
      <v-container class="panel panel-default" pre-scrollable scroll-y fixed align="center">

        <div class="chat">
          <div class="chatbox" v-for="(msg, index) in messages" :key="index">
            <p class="name">{{msg.name}}</p>
            <p class="body">{{msg.body}}</p>
            <p class="date">{{msg.date}}</p>
          </div>
        </div>
      </v-container>
    </div>
    <hr>
    <input type="text" v-model="msg">
    <button v-on:click="writeNewPost()" class="btn btn-dark">Send</button>
  </div>
</template>

<script>
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";

  export default {
    name: 'ChatLogin',
    data() {
      return {
        msg: "",
        user: null,
        messages: [],
        isLogout: true
      };
    },
    methods: {
      login() {
        console.log("in login");
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // let user = firebase.auth().currentUser;
            this.user = user;
            console.log(user);
            console.log(user.displayName);
            console.log(user.email);
          })
          .catch(function (error) {
            alert("error" + error.message);
          });
        this.isLogout = false
      },
      logout() {
        firebase
          .auth()
          .signOut()
          .then(function () {
            console.log("Sign-out successful.");
          })
          .catch(function (error) {
            alert("alert logout");
          });
        this.isLogout = true
      },
      writeNewPost() {
        console.log(this.user.displayName);
        console.log(this.msg);
        const post = {
          name: this.user.displayName,
          body: this.msg,
          date: new Date().toLocaleString("en-US")
        };
        const newPostKey = firebase
          .database()
          .ref()
          .child("mainChat")
          .push().key;
        const updates = {};
        updates[newPostKey] = post;
        firebase
          .database()
          .ref("mainChat")
          .update(updates);
        this.msg = null;
        this.getPosts();
      },
      getPosts() {
        firebase
          .database()
          .ref("mainChat")
          .on("value", data => {
            this.messages = data.val();
          });

      }
    }
  }
</script>
<style>
  /* .loginPage {
    display: block;
  } */
  .pannel {
    border-style: groove;
    box-sizing: border-box;
    /* width: 100%; */
    /* height: 1000px; */
    overflow: scroll;
    border: none;
    padding-top: 20px;
    margin-bottom: 8%;
    border-radius: 10px;
    background-color: rgb(102, 76, 76);
    opacity: 0.3;
  }

  .chat {
    /* width: 340px; */
    height: 800;
    overflow: scroll;
    word-break: break-all;
  }

  button {
    margin: 30px;
    padding: 40px;
  }

  .btn-dark {
    color: #ff0018;
    font-size: 20px;
  }

  .btn-dark:hover {
    color: #936b6b;
  }

  input {
    background-color: #dcdcdc94;
    width: 200px;
    height: 40px;
    border-radius: 6px;
  }

  .chatbox {
    background-color: darkred;
    opacity: 0.6;
    width: 280px;
    border-radius: 10px;
  }

  p.name {
    color: #131111ed;
    font-size: 20px;
  }

  p.date {
    color: #ab8787f0;
    font-size: 12px;
  }

  p.body {
    color: #ffffff;
    font-size: 18px;
  }

  /* label{
  font-size: 1.5rem;
}
.form-control{ 
width: 80%;
}
.login{
  width: 100%;
    height: auto;
    margin-top: 30%;
    margin-bottom: 76%;
    table-layout: fixed;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
}
.signUp {
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 1.5rem;
}

.signUp:hover 
{
     color:rgb(236, 116, 116); 
     text-decoration:none; 
     cursor:pointer;  
} */
</style>