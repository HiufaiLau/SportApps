<template>
  <div class="header">
     <div id="nav" class=" row">
    <div class="col mt-6">
          <router-link to="/schedule">
          <img src="../assets/standing2.jpg" height="200" width="340">
          <h3>Match Schedule</h3>
          </router-link>
   </div>
   <div class="col mt-1 ">
<router-link to="/standings">
          <img src="../assets/football.jpg" height="200" width="340">
             <h3>Standings</h3>
             </router-link>
   </div>
   <div class="col mt-1 ">
     <router-link to="/allteams">
          <img src="../assets/schedule.jpg" height="200" width="340">
          <h3>About all teams</h3>
          </router-link>
   </div>
     <div class="col mt-1 mb-1 ">
       <router-link to="/chat">
          <img src="../assets/chat.jpg" height="200" width="340">
          <h3>Chatroom</h3>
      </router-link>
   </div>
   </div>
    <!-- <div class="col" style=" padding-top: 20px;">
      <span>
        <h1 style="font-size:30px;" >Bundesliga</h1>
      </span>
    </div> -->
     
    
    <!-- <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul> -->
    <!-- <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
  export default {
    name: "HomePage"
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
    margin-top: 40%;
    margin-bottom:16%;
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