<template>
  <div class="schedule">
    <StandingsHeader />
    <form class="form-inline" align="center">
      <input v-model="searchTeam" class="form-control" align="center" type="search" placeholder="Search the team"
        aria-label="Search">
    </form>
    <StandingsTable :allStandings='filterTheTeams' />
  </div>
</template>
<script>
  // @ is an alias to /src


  import StandingsHeader from '@/components/StandingsHeader.vue'
  import StandingsTable from '@/components/StandingsTable.vue'


  export default {

    name: 'schedule',
    components: {
      StandingsHeader,
      StandingsTable,
    },
    props: ['passingAllStandings'],
    data() {
      return {
        standingData: [],
        searchTeam: "",
        // isLoading: true,
      }
    },
    computed: {
      filterTheTeams() {
        var searchOneTeam = this.searchTeam;
        if (searchOneTeam == "") {
          return this.standingData;
          console.log(searchOneTeams);
        }
        // console.log(this.searchWords);
        return this.standingData.filter(oneteam =>
          oneteam.team.name.toLowerCase().includes(searchOneTeam.toLowerCase())
        );
      }
    },


    created() {
      this.getFetch();
    },
    methods: {
      getFetch: function () {
        fetch("https://api.jsonbin.io/b/5bf2a315269bb82f9330fa2d", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.standingData = data.standings[0].table;
            console.log(this.standingData);
            this.isLoading = false;
          });
      }
    }

  }
</script>

<style>
  .schedule {
    /* width: 350px;
    height: 800px; */
    /* margin-left: 3%; */
  }

  .form-control {
    width: 100%;
    margin-top: 2%;
    /* display: block;
    margin-left: auto;
    margin-right: auto; */
  }

  form {
    margin-left: 10%;
  }

  input {
    margin-right: 5%;
  }
</style>