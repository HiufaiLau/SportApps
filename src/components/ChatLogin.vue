<template>
  <div class="loginPage">
    <div v-if="isLogout">
      <button v-on:click="login()" class="btn btn-dark"> Login </button>
     
    </div>
    <!-- <hr> -->
    <div v-else>
       <button v-on:click="logout()" class="btn btn-dark"> Logout </button>
      <div v-for="(msg, index) in messages" :key="index">
        <p>{{msg.name}}</p>
        <p>{{msg.date}}</p>
        <p>{{msg.body}}</p>
      </div>
      <hr>
      <input type="text" v-model="msg">
      <button v-on:click="writeNewPost()" class="btn btn-dark">Send</button>
     </div>
  </div>
  </template>
  <!-- <div class="login"> -->
  <!-- <form class="dropdown-menu p-4"> -->
  <!-- <div class="form-group">
    <label for="exampleDropdownFormEmail2" align="center">Email address</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"  align="center">
  </div>
  <div class="form-group" >
    <label for="exampleDropdownFormPassword2" align="center">Password</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" align="center">
  </div> -->

  <!-- <div class="form-check">
    <input type="checkbox" class="form-check-input" id="dropdownCheck2">
    <label class="form-check-label" for="dropdownCheck2">
      Remember me
    </label>
  </div> -->

  <!-- <button type="submit" class="btn btn-dark">Sign in</button>
  
    <div class="dropdown-divider"></div>
  <a class="signUp" href="#">New around here? Sign up</a> -->

  <!-- <a class="dropdown-item" href="#">Forgot password?</a> -->

  <!-- </div> -->
  <!-- </form> -->



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
        isLogout:true
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
          this.isLogout=false
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
          this.isLogout=true
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
  .loginPage {
    display: block;
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