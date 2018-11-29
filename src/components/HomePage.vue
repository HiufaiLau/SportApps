<template>
  <div class="homeHeader row" align="center">
     <v-container class="content panel panel-default" pre-scrollable scroll-y fixed align="center" style="max-height: 580px;width:400px;">
    <div class="title col mt-6">
      <router-link :to="{ name: 'schedule', params: { dataToPass: this.onlyLogosAndNames} }">
        <img src="../assets/standing2.jpg" height="200" width="320">
        <h3>Match Schedule</h3>
      </router-link>
    </div>
    <div class="title col mt-1 ">
      <router-link to="/standings">
        <img src="../assets/football.jpg" height="200" width="320">
        <h3>Standings</h3>
      </router-link>
    </div>
    <div class="title col mt-1 ">
      <router-link to="/allteams">
        <img src="../assets/schedule.jpg" height="200" width="320">
        <h3>About all teams</h3>
      </router-link>
    </div>
    <div class="title col mt-1 mb-1 ">
      <router-link to="/chat">
        <img src="../assets/chat.jpg" height="200" width="320">
        <h3>Chatroom</h3>
      </router-link>
    </div>
     </v-container>
  </div>
</template>

<script>
  export default {
    name: "HomePage",
    data() {
      return {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .panel {
        /* height: 600px; */
    }

  .homeHeader {
    /* padding-top: 70%; */
    /* padding-bottom: 10%;  */
    margin-top: 40%;
    /* margin-bottom:10%; */
  }

  .title a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    /* opacity: 0.5; */
  }

  .title a:hover {
    color: darkred;
    text-decoration: none;
    /* opacity: 0.5; */
  }

  img {
    border-radius: 10px;
  }

  /* h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  } */
</style>