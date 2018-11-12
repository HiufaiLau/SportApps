<template>
    <div class="header">
      <div class="myHeader" align="left">
        <router-link to="/">
      <img  class="arrow" src="../assets/arrow.png" alt="back" height="30" width="30">
   <span style="font-size:25px; margin-top:1%"> About all teams</span>
    </router-link>
    </div>
    <form class="form-inline my-2 my-lg-0" >
      <input class="form-control mr-sm-2" align="center" type="search" placeholder="Search the team" aria-label="Search">
      <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
    </form>
        </div>
</template>

<script>
  export default {
    name: "TeamInfoHeader"
  }
</script>
<style>
.header {
    margin-top: 40%;
    margin-bottom:16%;
}

.arrow{
    margin-bottom: 3%;
}
.form-control{
    width: 300px;
}
form{
    margin-left: 10%;
}
input{
    margin-right: 5%;
}
</style>
