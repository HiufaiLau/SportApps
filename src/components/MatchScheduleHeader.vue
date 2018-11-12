
<template>

    <div class="myHeader" align="left">
      <img  class="arrow" src="../assets/arrow.png" alt="back" height="30" width="30">
   <span style="font-size:30px; margin-top:1%"> Matches</span>
    </div>
</template>
<script> // @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {

  name: 'matchscheduleheader',
  components: {
 
  }
}

</script>
<style>
.myHeader{
    margin-top:35%;
}
.arrow{
    margin-bottom: 3%;
}
</style>
