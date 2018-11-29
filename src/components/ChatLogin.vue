<template>
  <div class="loginPage" >
    <div v-if="isLogout">
      <button v-on:click="login()" class="login btn btn-dark">Login</button>
    </div>
    <div class="afterLogin" v-else>
      <button v-on:click="logout()" class="right btn btn-dark" align="left">Logout</button>

      <!-- <div :class=" messageInfo()"> -->
      <!-- <div :class="classObject"> -->
      <div class="chat" style="height:400px;">
        <v-container class="panel panel-default" pre-scrollable scroll-y fixed align="center">
          <div class="chatbox static" style="width:150px" v-for="(msg, index) in messages" :key="index">
            <div :class="{active: messageInfo(msg.name)}">
              <p class="name">{{msg.name}}</p>
              <p class="body">{{msg.body}}</p>
              <p class="date">{{msg.date}}</p>
            </div>
          </div>
        </v-container>
      </div>

      <hr>
      <input type="text" v-model="msg">
      <button v-on:click="writeNewPost()" class="right btn btn-dark" align="right">Send</button>
    </div>
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
        postName: "",
        isActive: true,
        isLogout: true
      };
    },
    // computed: {
    //   classObject: function () {
    //     if (this.user.displayName == this.postName) {
    //       this.isActive = true
    //     } else {
    //       this.isActive = false
    //     }
    //     return {
    //       active: this.isActive
    //     }
    //   }
    // },
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
            this.getPosts();
            this.messageInfo();
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

      },
      getPosts() {
        firebase
          .database()
          .ref("mainChat")
          .on("value", data => {
            this.messages = data.val();
          });
      },
      messageInfo(theMessage) {
        // console.log(this.user.displayName)
        // console.log(this.messages)
        // for (var key in this.messages) {
        //   this.postName = this.messages[key].name
        //   console.log(this.postName)
        //   if (this.user.displayName == this.postName) {
        //     this.isActive = true
        //   } else {
        //     this.isActive = false
        //   }
        //   console.log(this.isActive)
        return theMessage == this.user.displayName
      }
    }
  }
</script>
<style>
  .container {
    /* max-height: 1000px; */
  }

  .active {
    background-color: #96050070;
    opacity: 0.8;
     /* float: right; */
    word-break: break-all;
    align-items: flex-start;
    /* width: 200px; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .pannel {
    border-style: groove;
    box-sizing: border-box; 
     width: 100%;
    height: 1000px;
    overflow: scroll;
    /* border: none;
    padding-top: 20px;
    padding-bottom: 900px; */
    border-radius: 10px;
    background-color: rgb(102, 76, 76);
    opacity: 0.3; 
  }

  .right {
    /* float: left; */
    /* margin-top: -0.2%; */
  }

  .login {
    /* margin-top: 50%; */

  }

  .chat {
    /* width: 340px; */
    /* height: 800;
    overflow: scroll;
    word-break: break-all; */

  }

  button {
    /* margin: 30px;
    padding: 40px; */
  }

  .btn-dark {
    /* color: #ff0018;
    font-size: 20px; */

  }

  .btn-dark:hover {
    /* color: #936b6b; */
  }

  input {
    background-color: #dcdcdc94;
    width: 200px;
    height: 40px;
    border-radius: 6px;
  }

  .chatbox {
    background-color: rgb(219, 119, 61);
    /* float: left; */
    opacity: 0.8;
    /* width: 300px; */
    border-radius: 10px;
    /* padding-left: 2%;
    padding-right: 2%;
    word-break: break-all;  */
    margin-bottom: 3%;
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
    word-break: break-all;

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