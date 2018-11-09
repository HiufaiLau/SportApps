<template>
  <div class="allMatches">
    <div class="myHeader">
      <img src="../assets/arrow.png" alt="back" height="30" width="30">
   <span style="font-size:30px; margin-top:1%"> Matches</span>
    </div>

    <h4>Group A</h4>
    <div class="matchTable">
      <img class="score" src="../assets/FCbayern.png" alt="FCByern" height="80" width="80" style="margin-right:8%"> <span class="score"> 2  :  1 </span>
       <img src="../assets/dortmund.png" alt="FCByern" height="80" width="80" style="margin-left:8%">
       <h6 class="score"><a href="">Highlight video</a> </h6>
       <br>
        <img class="score" src="../assets/FC_Schalke_04.png" alt="FCByern" height="80" width="80" style="margin-right:8%"> <span class="score"> 2  :  1 </span>
       <img src="../assets/Hertha_BSC_Logo.svg.png" alt="FCByern" height="80" width="80" style="margin-left:8%">
       <h6 class="score"><a href="">Highlight video</a> </h6>
    </div>
     <!-- <div class="matchTable">
     
    </div> -->
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
.matchTable{
  border-style: groove;
 box-sizing: border-box;
    width: 300px;
    height: 280px;    
    border: 1px solid rgb(53, 53, 53);
    align-content: center;
    align-self: center;
    padding-top: 25px;
    padding-bottom: 25px;
   /* align-items: flex-end;
   display: flex */
   margin-left: 9%;
    border-radius: 10px;
  }
</style>
