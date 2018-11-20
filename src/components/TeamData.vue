<template>
  <div class="panel text-xs-center">
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(team, index) in dataInTeam" :key="index">
        <div slot="header">{{team.name}}</div>
        <v-card>
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

  /* .col{
    margin-top:3%;
    margin-bottom: 18%;
    text-align: center;
}
    .arrow {
        margin-bottom: 3%;
    }

    .form-control {
        width: 300px;
    }

    form {
        margin-left: 10%;
    }

    input {
        margin-right: 5%;
    }
    .score{
        margin-right: 3%;
        margin-left: 3%;
    } */
  /* .col{
            margin-bottom: 1%;
    } */
</style>