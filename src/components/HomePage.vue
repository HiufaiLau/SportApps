<template>
  <div class="homeHeader row" align="center">
    
    <div class="col mt-6">
          <router-link to="/schedule">
          <img src="../assets/standing2.jpg" height="200" width="320">
          <h3>Match Schedule</h3>
          </router-link>
   </div>
   <div class="col mt-1 ">
<router-link to="/standings">
          <img src="../assets/football.jpg" height="200" width="320">
             <h3>Standings</h3>
             </router-link>
   </div>
   <div class="col mt-1 ">
     <router-link to="/allteams">
          <img src="../assets/schedule.jpg" height="200" width="320">
          <h3>About all teams</h3>
          </router-link>
   </div>
     <div class="col mt-1 mb-1 ">
       <router-link to="/chat">
          <img src="../assets/chat.jpg" height="200" width="320">
          <h3>Chatroom</h3>
      </router-link>
   </div>
   
   </div>
</template>

<script>
  export default {
    name: "HomePage"
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.homeHeader {
/* padding-top: 70%; */
/* padding-bottom: 10%;  */
    margin-top: 20%;
    margin-bottom:10%;
}
img{
  border-radius: 10px;
}
  /* h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  } */
</style>