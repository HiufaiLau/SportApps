<template>
  <v-container>
      <HomePage />
  </v-container>
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