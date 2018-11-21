<template>
  <v-container>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-esle>
      <HomePage />
    </div>
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
        isLoading: true,
      }
    }
  }
</script>