<template>
  <div class=" myHeader " align="left">
       <router-link to="/">
      <img  class="arrow" src="../assets/arrow.png" alt="back" height="30" width="30">
   <span style="font-size:25px; margin-top:0%">Teams Info</span>
   </router-link>
  <form class="form-inline" align="center">
            <input class="form-control mr-sm-2" align="center" type="search" placeholder="Search the team" aria-label="Search">

        </form>
  </div>
</template>

<script>
    export default {
        name: "TeamInfoHeader"
    }
</script>
<style>
.myHeader{
    margin-top: 25%;
}
    .form-control {
        width: 260px;
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