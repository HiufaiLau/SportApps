<template>
  <div class="schedule" >
    <MatchScheduleHeader />
    <MatchScheduleDate />
    <MatchSchedule :allMatches='matchesToShow' :allLogos="getLogo" />
  </div>
</template>
<script>
  // @ is an alias to /src
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
        // isLoading: true,
        bottomNav: "schedule",
        // finishedMatches: [],
        // currentMatches: [],
        matchesToShow: []
      }
    },
    computed: {
      getLogo() {
        return this.$route.params.dataToPass
      }
    },
    created() {
      this.getFetch();
    },
    methods: {
      getFetch: function () {
        fetch("https://api.jsonbin.io/b/5bedde3fd4d48e387e5b4683", {
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
            this.matchesToShow = this.footballData;
            this.isLoading = false;
          });
      },
      findFinishedMatches() {
        console.log('in findFinished')
        this.matchesToShow = this.footballData.filter(oneMatchDay => {
          return oneMatchDay.status == "FINISHED"
        });
        // console.log(this.matchesToShow)
      },
      findCurrentMatches() {
        this.matchesToShow = this.footballData.filter(oneMatchDay => {
          return oneMatchDay.matchday == oneMatchDay.season.currentMatchday
        });
        // console.log(this.matchesToShow)
      },
      findUpcomingMatches() {
        this.matchesToShow = this.footballData.filter(oneMatchDay => {
          return oneMatchDay.status == "SCHEDULED"
        });
        // console.log(this.matchesToShow)
      },
      showAllMatches() {
        this.matchesToShow = this.footballData.filter(oneMatchDay => {
          return oneMatchDay.status == "SCHEDULED" || oneMatchDay.status == "FINISHED"
        });
        // console.log(this.matchesToShow)
      }
    }
  }
</script>
<style>

</style>