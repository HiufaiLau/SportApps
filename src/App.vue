<template>
  <v-app>
    <div class="color">
      <v-container class="backgroundImage">
        <v-container align="center" style="height:714px;">
          <div class="logo row fixed-top navbar-expand-lg navbar-light">
            <div class="col mt-2 " align="center">
              <img src="./assets/bundesliga.png" height="120" width="100">
            </div>
          </div>
        
        <v-content fixed>
          <router-view> </router-view>
        </v-content>

        <v-card flat>
          <v-bottom-nav :active.sync="bottomNav" :value="true" fixed shift class="bottom" height="70px">

            <router-link :to="{ name: 'schedule', params: { dataToPass: this.onlyLogosAndNames} }" class="bottomNav">
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
      </v-container>
      </v-container>
    </div>

  </v-app>
</template>

<script>
  import HomePage from '@/components/HomePage'
  export default {
    name: 'App',
    props: ['getTeamInfo'],
    components: {
      HomePage
    },
    data() {
      return {
        bottomNav: "schedule",
        isLoading: true,
        teamsData: [],
        onlyLogosAndNames: []
      }
    },
    created() {
      this.getFetch();
    },
    methods: {
      getFetch: function () {
        fetch("http://api.jsonbin.io/b/5bf42eef746e9b593ec04ab0", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.teamsData = data.teams;
            this.getOnlyLogosAndNames()
            this.isLoading = false;
          });
      },
      getOnlyLogosAndNames() {
        const onlyLogosAndNames = this.teamsData
          .map(team => ({
            name: team.name,
            logo: team.crestUrl
          }))
        this.onlyLogosAndNames = onlyLogosAndNames
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
    background-color: rgb(56, 55, 55);
  }

  .homeItems {
    margin-top: 10%;
    margin-bottom: 5%;

  }

  /* .container.backgroundImage {
    padding-bottom: 80px;
    background-color: black;
  } */

  .backgroundImage {
    background-size: 100% 100%;
    content:"";
    /* background-blend-mode: screen; */
    background-color: black;
    /* display: block; */
    padding-bottom: 80px;
    background-image: url("./assets/Kick.jpg");
    /* The image used */
    /* background-color: red; */
    /* Used if the image is unavailable */
    width: 100%;
    height: 100%;
    background-position: center;
    /* Center the image */
    background-size: cover;
    /* Resize the background image to cover the entire container */
    background-repeat: no-repeat;
    background-attachment: fixed;
     margin-right: 50%;
    /* margin-top: -10%;  */
    
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