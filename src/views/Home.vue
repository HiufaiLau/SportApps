<template>
  <!-- <v-container class="panel panel-default" pre-scrollable scroll-y fixed align="center"> -->
      <HomePage />
  <!-- </v-container> -->
</template>

<script>
  import HomePage from '@/components/HomePage'
  export default {
    components: {
      HomePage
    },
     data() {
      return {
        // isLoading: true,
      }
    }
  }
</script>
<style>
/* .panel{
  margin-top:40%;
    max-height: 800px;
  } */
</style>
