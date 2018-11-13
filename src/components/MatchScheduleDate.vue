<template>
  <div class=" dates btn-group btn-group-justified">
  <button type="button" class="btn btn-danger">Last Matches</button>
  <button type="button" class="btn btn-danger">Today</button>
  <button type="button" class="btn btn-danger">Next Matches</button>
</div>
</template>
<script> 


export default {
  name: 'matchscheuledate',
  components: {
    
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
</style>