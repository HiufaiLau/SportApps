<template>
  <div class=" myHeader " align="left">
       <router-link to="/">
     <v-btn color="white darken-2" flat value="allTeams">
          <v-icon large color="white darken-2">home</v-icon>
          <span class="title">Teams</span>
        </v-btn>
    </router-link>

  <form class="form-inline" align="center">
            <input class="form-control" align="center" type="search" placeholder="Search the team" aria-label="Search">
        </form>
  </div>
</template>

<script>
    export default {
        name: "teaminfoheader"
    }
</script>
<style>
.myHeader{
    margin-top: 25%;
}
    .form-control {
        width: 6;
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