<template>
  <div class=" myHeader " align="left">
        <router-link to="/">
     <v-btn color="white darken-2" flat value="allTeams">
          <v-icon large color="white darken-2">home</v-icon>
          <span class="title">Teams</span>
        </v-btn>
    </router-link>
   <TeamData/>
  </div>
</template>

<script>
import TeamData from '@/components/TeamData.vue'
    export default {
        name: "teamdetails",
        components: {
   TeamData
  }
    }
</script>
<style>
.myHeader{
    margin-top: 24%;
}
    /* .form-control {
        width: 260px;
        margin-top: 2%; */
         /* display: block;
    margin-left: auto;
    margin-right: auto; */
    /* }

    form {
        margin-left: 10%;
    }

    input {
        margin-right: 5%;
    } */
</style>