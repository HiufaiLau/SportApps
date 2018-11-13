<template>

  <div class="container" align="center">
    <h4 class="marginForTopNavbar" align="center">Group A</h4><span></span>
    <div class="panel panel-default" align="center">
      <div class="panel-body matchTable">
        <img class="score" src="../assets/FCbayern.png" alt="FCByern" height="80" width="80" style="margin-right:8%">
        <span class="score"> 2 : 1 </span>
        <img src="../assets/dortmund.png" alt="Dortmund" height="80" width="80" style="margin-left:8%">
        <h6 class="score"><a href="">Highlight video</a> </h6>
        <br>
        <img class="score" src="../assets/FC_Schalke_04.png" alt="FC Schalke" height="80" width="80" style="margin-right:8%">
        <span class="score"> 2 : 1 </span>
        <img src="../assets/Hertha_BSC_Logo.svg.png" alt="Hertha Berlin" height="80" width="80" style="margin-left:8%">
        <h6 class="score"><a href="">Highlight video</a> </h6>
      </div>
    </div>

    <h4>Group B</h4>
    <div class="panel panel-default">
      <!-- <div class="panel-heading"> <h4>Group A</h4></div> -->
      <div class="panel-body matchTable">
        <img class="score" src="../assets/FCbayern.png" alt="FCByern" height="80" width="80" style="margin-right:8%">
        <span class="score"> 2 : 1 </span>
        <img src="../assets/dortmund.png" alt="FCByern" height="80" width="80" style="margin-left:8%">
        <h6 class="score"><a href="">Highlight video</a> </h6>
        <br>
        <img class="score" src="../assets/FC_Schalke_04.png" alt="FCByern" height="80" width="80" style="margin-right:8%">
        <span class="score"> 2 : 1 </span>
        <img src="../assets/Hertha_BSC_Logo.svg.png" alt="FCByern" height="80" width="80" style="margin-left:8%">
        <h6 class="score"><a href="">Highlight video</a> </h6>
      </div>
    </div>

    <h4>Group C</h4> 
    <div class="panel panel-default">
      <!-- <div class="panel-heading"> <h4>Group A</h4></div> -->
      <div class="panel-body matchTable">
        <img class="score" src="../assets/FCbayern.png" alt="FCByern" height="80" width="80" style="margin-right:8%">
        <span class="score"> 2 : 1 </span>
        <img src="../assets/dortmund.png" alt="FCByern" height="80" width="80" style="margin-left:8%">
        <h6 class="score"><a href="">Highlight video</a> </h6>
        <br>
        <img class="score" src="../assets/FC_Schalke_04.png" alt="FCByern" height="80" width="80" style="margin-right:8%">
        <span class="score"> 2 : 1 </span>
        <img src="../assets/Hertha_BSC_Logo.svg.png" alt="FCByern" height="80" width="80" style="margin-left:8%">
        <h6 class="score"><a href="">Highlight video</a> </h6>
      </div>
      <h4>Group D</h4>
      <div class="panel panel-default">
        <!-- <div class="panel-heading"> <h4>Group A</h4></div> -->
        <div class="panel-body matchTable">
          <img class="score" src="../assets/FCbayern.png" alt="FCByern" height="80" width="80" style="margin-right:8%">
          <span class="score"> 2 : 1 </span>
          <img src="../assets/dortmund.png" alt="FCByern" height="80" width="80" style="margin-left:8%">
          <h6 class="score"><a href="">Highlight video</a> </h6>
          <br>
          <img class="score" src="../assets/FC_Schalke_04.png" alt="FCByern" height="80" width="80" style="margin-right:8%">
          <span class="score"> 2 : 1 </span>
          <img src="../assets/Hertha_BSC_Logo.svg.png" alt="FCByern" height="80" width="80" style="margin-left:8%">
          <h6 class="score"><a href="">Highlight video</a> </h6>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'matchschedule',
    components: {

    }
  }
</script>
<style>
/* .marginForTopNavbar{
  margin-top: 5%;
} */
  .matchTable {
    border-style: groove;
    box-sizing: border-box;
    width: 310px;
    height: 280px;
    border: none;
    /* align-content: center;
    align-self: center; */
    padding-top: 20px;
    margin-bottom: 20%;
    border-radius: 10px;
    background-color: darkred;
    opacity: 0.7;
  }

  .score {
    font-size: 20px;
  }
</style>