<template>
  <div class="matchTable">
    <v-container class="panel panel-default" pre-scrollable scroll-y fixed align="center">
      <OneStanding v-for="(match, index) in allStandings" :OneMatchStanding='match' :key="index" />
    </v-container>
  </div>
</template>
<script>
  import OneStanding from '@/components/OneStanding.vue'
  export default {
    name: 'standingstable',
    props: ['allStandings'],
    components: {
      OneStanding
    }
  }
</script>
<style>
  .panel {
    /* max-height: 480px; */
  }

  .matchTable {
    /* margin-bottom: 90%; */
  }

  .btn {
    margin-top: 3%;
  }

  img {
    margin-top: 3%;
    margin-bottom: 10%;
  }

  table th,
  table td {
    /* padding: .625em; */
    /* margin-top: 3%; */
    text-align: center;
  }

  .scoreTable {
    padding-bottom: 5%;
    padding-top: 5%;
    font-size: 20px;
    table-layout: fixed;
    /* display: block;
    margin-left: auto;
    margin-right: auto; */
    text-align: center;
    width: 100%;
    height: 100%;
    margin-top: 3%;
    /* margin-bottom: 20%; */
    background-color: darkred;
    opacity: 0.8;
    border-radius: 8px;
  }
</style>