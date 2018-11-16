<template>
 <v-container>
  <HomePage/>
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
        footballData: [],
        isLoading: true,
        bottomNav: "schedule"
      }
    },
    created() {
      this.getFetch();
    },
    methods: {
      getFetch: function () {
        fetch("http://api.jsonbin.io/b/5bedde3fd4d48e387e5b4683", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.footballData = data;
            console.log(this.footballData);
            this.isLoading = false;
          });
      }
    }
  }
</script>