<template>
  <v-app>
    <div class="color">
   <v-container class="backgroundImage">
    <v-container align="center" >
      <div class="logo row fixed-top navbar-expand-lg navbar-light" >
        <div class="col mt-2 " align="center">
          <img src="./assets/bundesliga.png" height="120" width="100">
        </div>
      </div>
    </v-container>
    

      <v-content  >
        <router-view>  </router-view>
      </v-content>
  
    <v-card  flat>
      <!-- <div class="headline text-xs-center pa-5 ">
      Active: {{ bottomNav }}
    </div> -->
      <v-bottom-nav :active.sync="bottomNav" :value="true" fixed shift color="black" class="bottomNav" height="70px">
       <router-link to="/schedule">
        <v-btn color="red darken-2" flat value="shcedule">
          <span>Matches</span>
          <v-icon large color="red">event</v-icon>
        </v-btn>
       </router-link>
      <router-link to="/standings">
        <v-btn color="red darken-2" flat value="standings">
          <span>Standings</span>
          <v-icon large color="red">fas fa-futbol</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/allteams">
        <v-btn color="red darken-2" flat value="allTeams">
          <span>Teams</span>
          <v-icon large color="red">fas fa-users</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/chat">
        <v-btn color="red darken-2" flat value="chat">
          <span>Chat</span>
          <v-icon large color="red">far fa-comments</v-icon>
        </v-btn>
      </router-link>
        <!-- <v-btn color="red darken-2" flat value="nearby">
          <span>Stadium</span>
          <v-icon  large color="red">place</v-icon>
        </v-btn> -->
      </v-bottom-nav>
    </v-card>
   </v-container>
   </div>
  </v-app>
</template>

<script>
  import HomePage from '@/components/HomePage'

  export default {
    name: 'App',
    components: {
      HomePage
    },
    data() {
      return {
        bottomNav: "schedule"
      }
    }
  }
</script>
<style>
.color{
  background-color: black;
}
.homeItems{
    margin-top: 10%;
    margin-bottom: 5%;
    
}
.backgroundImage{
  /* display: block; */
  background-image: url("./assets/Kick.jpg"); /* The image used */
  background-color: red; /* Used if the image is unavailable */
  width: 100%;
    height: auto;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* max-width: 100%; */
    /* opacity: 0.7; */

}
.bottomNav{
opacity: 0.7;
}
.container {
    max-width: 720px;
}
</style>
