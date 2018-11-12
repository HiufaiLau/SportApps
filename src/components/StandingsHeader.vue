<template>
<div class="row">
   <div class="col myHeader" align="left">
       <router-link to="/">
      <img  class="arrow" src="../assets/arrow.png" alt="back" height="30" width="30">
   <span style="font-size:25px; margin-top:0%"> Standings</span>
   </router-link>
    </div>
    <div class="col dropdown" align="right">
    <button class="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown">Teams
    <span class="caret"></span></button>
    <ul class="dropdown-menu ">
      <li align="center"><a href="#">Dortmund</a></li>
      <li align="center"><a href="#">Bayern</a></li>
      <li align="center"><a href="#">Hertha Berlin</a></li>
    </ul>
  </div>
</div>
</template>
<script> 
export default {
  name: 'standingsheader',
  components: {
    
  }
}

</script>
<style>
.col{
    margin-top:40%;
}
.arrow{
    margin-bottom:6%;
}
.dropdown{
    margin-right:5%;
}
</style>