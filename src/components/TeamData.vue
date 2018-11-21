<template>
  <div class="panel text-xs-center">
    <v-expansion-panel style="background-color:darkred;">
      <v-expansion-panel-content v-for="(team, index) in dataInTeam" :key="index" style="background-color:darkred;">
        <div slot="header" style="font-size:20px;">{{team.name}}</div>
        <v-card style="background-color:#8e878785;">
          <v-card-text>
            <iframe :src="team.addressUrl" width="100%" height="600px" frameborder="0" style="border:0" allowfullscreen></iframe>
          </v-card-text>
          <v-card-text>{{team.venue}}</v-card-text>
          <v-card-text>E-mail:{{team.email}}</v-card-text>
          <v-card-text>Phone:{{team.phone}}</v-card-text>
          <v-card-text>Founded:{{team.founded}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
<script>
  export default {
    name: "teamdata",
    props: ['oneTeamData'],
    computed: {
      dataInTeam() {
        return this.$route.params.dataToPass
      }
    }
  }
</script>
<style>
  .panel {
    margin-bottom: 91%;
opacity: 0.9;
background-color: black;
  }

</style>