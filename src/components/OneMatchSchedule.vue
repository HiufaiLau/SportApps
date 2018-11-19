<template>
    <div>
        <h4 class="marginForTopNavbar" align="center">Matchday {{oneMatch.matchday}}</h4><span></span>
    <div class="panel panel-default" align="center">
      <div class="panel-body matchTable">
        <img class="score" src="../assets/FCbayern.png" alt="FCByern" height="40" width="40" style="margin-right:23%" align="center">
         <img src="../assets/dortmund.png" alt="Dortmund" height="40" width="40" style="margin-left:8%" align="center"> 
         <br>
         <br>
         <span style="margin-right:5%;" align="center">{{oneMatch.awayTeam.name}}</span>
         
         <span style="margin-left:5%" align="center">{{oneMatch.homeTeam.name}}</span>
         <h1 class="score">{{oneMatch.score.fullTime.awayTeam}} : {{oneMatch.score.fullTime.homeTeam}}</h1>
        <h5 style="color:red;">{{oneMatch.utcDate}}</h5>
        <h6 class="score"><a href="">{{oneMatch.status}}</a> </h6>
        <!-- <br>
        <img class="score" src="../assets/FC_Schalke_04.png" alt="FC Schalke" height="80" width="80" style="margin-right:8%">
        <span class="score"> 2 : 1 </span>
        <img src="../assets/Hertha_BSC_Logo.svg.png" alt="Hertha Berlin" height="80" width="80" style="margin-left:8%">
        <h6 class="score"><a href="">Highlight video</a> </h6> -->
      </div>
    </div>
        <!-- <p>{{oneMatch.homeTeam.name}}</p> -->
    </div>
</template>

<script>
export default {
    name: 'oneMatchSchedule',
    props: ['oneMatch']
}
</script>

<style>

</style>
