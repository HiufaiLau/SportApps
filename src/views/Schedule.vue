<template>
  <div class="schedule">
     <div v-if="isLoading">
          <!-- <img src="./assets/loading.gif" height="200" width="200" style="background-color:darkred;"> -->
          <p>Loading...</p>
        </div>
        <div v-else>
      <MatchScheduleHeader/>
     <MatchScheduleDate/>
    <MatchSchedule :allMatches='footballData' />
    </div>
  </div>
</template>
<script> // @ is an alias to /src


import MatchSchedule from '@/components/MatchSchedule.vue'
import MatchScheduleDate from '@/components/MatchScheduleDate.vue'
import MatchScheduleHeader from '@/components/MatchScheduleHeader.vue'
export default {

  name: 'schedule',
  components: {
MatchSchedule, 
MatchScheduleDate,
MatchScheduleHeader
  },
  props: ["passingAllMatches"],
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
            this.footballData = data.matches;
            console.log(this.footballData);
            this.isLoading = false;
          });
      }
    }
}

</script>
<style>

</style>
