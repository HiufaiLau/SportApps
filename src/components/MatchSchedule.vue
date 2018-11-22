<template>
  <dir>
    <v-container class="panel panel-default" pre-scrollable scroll-y fixed align="center">
      <div class="container" align="center" v-for="(match, index) in allMatches" :key="index">
        <OneMatchSchedule :oneMatch='match' :twoLogos='getBothLogos(match)' />
        <!-- <OneMatchSchedule :oneMatch='match' :homeLogo='getBothLogos(match)' :awayLogo='getBothLogos(match)'/>  
      in this case, i have two props to passing the data, so i need two function() to filter the data-->
      </div>
    </v-container>
  </dir>
</template>
<script>
  import OneMatchSchedule from '@/components/OneMatchSchedule.vue'
  export default {
    name: 'matchschedule',
    props: ['allMatches', 'allLogos'],
    components: {
      OneMatchSchedule
    },
    data() {
      return {

      }
    },
    methods: {
      getBothLogos(match) {
        const oneLogoAndNameHome = this.allLogos.filter(oneLogo => match.homeTeam.name == oneLogo.name)
        const oneLogoAndNameAway = this.allLogos.filter(oneLogo => match.awayTeam.name == oneLogo.name)
        // console.log(oneLogoAndName[0].logo)
        return {
          home: oneLogoAndNameHome[0].logo,
          away: oneLogoAndNameAway[0].logo
        }
      },
    }
  }
</script>
<style>
  .panel {
    max-height: 500px;
  }

  a {
    color: #ff2d35;
    text-decoration: none;
    background-color: transparent;
  }

  a:hover {
    color: #3f3f3f;
    text-decoration: none;
    background-color: transparent;

  }

  h4 {
    color: rgb(202, 202, 202);
    text-decoration: none;
    font-size: 2rem;
  }

  .matchTable {
    border-style: groove;
    box-sizing: border-box;
    /* width: 300px; */
    height: 280px;
    border: none;
    /* align-content: center;
    align-self: center; */
    padding-top: 20px;
    /* margin-bottom: 18%; */
    border-radius: 10px;
    background-color: darkred;
    opacity: 0.7;
  }

  .score {
    /* font-size: 20px; */
    text-decoration: none;
  }

  .score:hover {
    color: darkred;
  }

  .dates {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* width: 50%; */
    /* margin-top:20%; */
    /* margin-bottom: 5%; */
    text-align: center;
  }

  .btn {
    /* margin-top: 3%; */
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
  }

  .btn-dark {
    color: rgb(219, 219, 219);
    background-color: #4d4a4b;
    border-color: #4d4a4b;
  }
</style>