<template>
  <div class="schedule">
     <div v-if="isLoading">
          <p>Loading...</p>
        </div>
        <div v-else>
      <StandingsHeader/>
     <StandingsTable :allStandings='standingData'/>
        </div>
  </div>
</template>
<script> // @ is an alias to /src


import StandingsHeader from '@/components/StandingsHeader.vue'
import StandingsTable from '@/components/StandingsTable.vue'


export default {

  name: 'schedule',
  components: {
StandingsHeader,
StandingsTable,
  },
   props: ['passingAllStandings'],
     data() {
      return {
        standingData: [],
        isLoading: true,
      }
    },

created() {
      this.getFetch();
    },
    methods: {
      getFetch: function () {
        fetch("http://api.jsonbin.io/b/5bf2a315269bb82f9330fa2d", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.standingData = data.standings[0].table;
            console.log(this.standingData);
            this.isLoading = false;
          });
      }
    }

}
</script>

<style>
.schedule{
    /* width: 350px;
    height: 800px; */
        /* margin-left: 3%; */
       

}
</style>
