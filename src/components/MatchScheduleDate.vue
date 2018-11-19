<template>
  <div class=" dates btn-group btn-group-justified">
  <button v-on:click="finished()" type="button" class="btn btn-dark">Finished</button>
  <button v-on:click="current()" type="button" class="btn btn-dark">Current</button>
  <button v-on:click="upcoming()" type="button" class="btn btn-dark">Coming</button>
</div>
</template>
<script> 


export default {
  name: 'matchscheuledate',
  // components: {
    
  // },
  methods:{
    finished(){
      this.$parent.findFinishedMatches();
    },
    current(){
       this.$parent.findCurrentMatches() ;
    },
    upcoming(){
       this.$parent.findUpcomingMatches() ;
    }
  }
}

</script>
<style>
.dates{
   display: block;
    margin-left: auto;
    margin-right: auto;
    /* width: 50%; */
  /* margin-top:20%; */
    /* margin-bottom: 5%; */
    text-align: center;
}
.btn {
    /* margin-top: 3%; */
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
}
.btn-dark {
    color:rgb(219, 219, 219);
    background-color: #4d4a4b;
    border-color: #4d4a4b;
}
</style>