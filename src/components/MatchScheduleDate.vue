<template>
  <div class=" dates btn-group btn-group-justified">
  <button type="button" class="btn btn-dark">Last Matches</button>
  <button type="button" class="btn btn-dark">Today</button>
  <button type="button" class="btn btn-dark">Next Matches</button>
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