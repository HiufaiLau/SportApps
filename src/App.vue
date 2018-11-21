<template>
  <v-app>
    <div class="color">
      <div v-if="isLoading">
      <p>Loading...</p>
    </div>
      <v-container class="backgroundImage">
        <v-container align="center">
          <div class="logo row fixed-top navbar-expand-lg navbar-light">
            <div class="col mt-2 " align="center">
              <img src="./assets/bundesliga.png" height="120" width="100">
            </div>
          </div>
        </v-container>


        <v-content>
          <router-view> </router-view>
        </v-content>

        <!-- <div v-if="isLoading">
          <img src="./assets/loading.gif" height="200" width="200" style="background-color:darkred;">
        </div>
        <div v-else> -->
        <v-card flat>
          <!-- <div class="headline text-xs-center pa-5 ">
      Active: {{ bottomNav }}
    </div> -->
          <v-bottom-nav :active.sync="bottomNav" :value="true" fixed shift class="bottom" height="70px">
            <router-link to="/schedule" class="bottomNav">
              <v-btn color="red darken-2" flat value="shcedule">
                <span>Matches</span>
                <v-icon large color="red">event</v-icon>
              </v-btn>
            </router-link>
            <router-link to="/standings" class="bottomNav">
              <v-btn color="red darken-2" flat value="standings">
                <span>Standings</span>
                <v-icon large color="red">fas fa-futbol</v-icon>
              </v-btn>
            </router-link>
            <router-link to="/allteams" class="bottomNav">
              <v-btn color="red darken-2" flat value="allTeams">
                <span>Teams</span>
                <v-icon large color="red">fas fa-users</v-icon>
              </v-btn>
            </router-link>
            <router-link to="/chat" class="bottomNav">
              <v-btn color="red darken-2" flat value="chat">
                <span>Chat</span>
                <v-icon large color="red">far fa-comments</v-icon>
              </v-btn>
            </router-link>
          </v-bottom-nav>
        </v-card>
        <!-- </div> -->
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
        bottomNav: "schedule",
        isLoading: true,
      }
    }
  }
</script>
<style>
  .bottom {
    background-color: #000000a1 !important;
  }

  .bottomNav {
    text-decoration: none;
  }

  .bottomNav:hover {
    /* color: #0056b3; */
    text-decoration: none;
  }

  .color {
    background-color: black;
  }

  .homeItems {
    margin-top: 10%;
    margin-bottom: 5%;

  }

  .container.backgroundImage {
    padding-bottom: 800px;
  }

  .backgroundImage {
    /* display: block; */
    padding-bottom: 800px;
    background-image: url("./assets/Kick.jpg");
    /* The image used */
    background-color: red;
    /* Used if the image is unavailable */
    width: 100%;
    height: auto;
    background-position: center;
    /* Center the image */
    background-size: cover;
    /* Resize the background image to cover the entire container */
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin-right: 50%;
    margin-top:-10%;
    /* max-width: 100%; */
    /* opacity: 0.7; */
  }

  .bottomNav {
    opacity: 0.7;
  }

  .container {
    max-width: 720px;
  }
</style>