<template>

  <div class="panel text-xs-center" >
     <v-container class="panel panel-default" pre-scrollable scroll-y fixed align="center">
    <v-expansion-panel style="background-color:darkred;">
      <v-expansion-panel-content style="background-color:darkred;">
        <div slot="header" style="font-size:20px;">{{dataOneTeam.name}}</div>
        <v-card style="background-color:#8e878785;">
          <v-card-text>
            <iframe :src="dataOneTeam.addressUrl" width="100%" height="600px" frameborder="0" style="border:0"
              allowfullscreen></iframe>
          </v-card-text>
          <v-card-text>{{dataOneTeam.venue}}</v-card-text>
          <v-card-text><a :href="dataOneTeam.website">Visit the Website</a></v-card-text>
          <v-card-text>E-mail:{{dataOneTeam.email}}</v-card-text>
          <v-card-text>Phone:{{dataOneTeam.phone}}</v-card-text>
          <v-card-text>Founded:{{dataOneTeam.founded}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
     </v-container>
    <!-- <v-expansion-panel style="background-color:darkred;">
      <v-expansion-panel-content style="background-color:darkred;">
        <div slot="header" style="font-size:20px;">{{dataOneTeam.name}}</div>
        <v-card style="background-color:#8e878785;">
          <v-card-text>
            <iframe :src="dataOneTeam.addressUrl" width="100%" height="600px" frameborder="0" style="border:0"
              allowfullscreen></iframe>
          </v-card-text>
          <v-card-text>{{dataOneTeam.venue}}</v-card-text>
          <v-card-text><a :href="dataOneTeam.website">Visit the Website</a></v-card-text>
          <v-card-text>E-mail:{{dataOneTeam.email}}</v-card-text>
          <v-card-text>Phone:{{dataOneTeam.phone}}</v-card-text>
          <v-card-text>Founded:{{dataOneTeam.founded}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel> -->
  </div>
</template>
<script>
  export default {
    name: "teamdata",
    props: ['oneTeamData'],
    computed: {
      dataOneTeam() {
        return this.$route.params.dataToPass
      }
    }
  }
</script>
<style>
  .panel {
    /* margin-bottom: 91%; */
    opacity: 0.9;
    background-color: #ffffff00;
  }

  a {
    font-size: 20px;
    color: #d0c0c0;
  }

  a:hover {
    color: rgb(117, 3, 3);
  }
</style>