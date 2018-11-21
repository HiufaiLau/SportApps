<template>
    <div class="myHeader" align="left">
        <router-link to="/">
     <v-btn color="white darken-2" flat value="allTeams">
          <v-icon large color="white darken-2">home</v-icon>
          <span class="title">Matches</span>
        </v-btn>
    </router-link>
    </div>
</template>
<script> // @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {

  name: 'matchscheduleheader',
//   components: {
 
//   }
}
</script>
<style>
/* .title{
    font-size:25px;
     margin-top:1%;
      color: rgb(167, 158, 158);
    text-decoration: none;
    font-size: 2rem;
} */
.myHeader{
    margin-top:30%;
}
.arrow{
    margin-bottom: 3%;
}
</style>
