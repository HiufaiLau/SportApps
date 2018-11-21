<template>
  <div class="teams">
    <TeamInfoHeader />
    <TeamInfo :allTeamsData='teamsData' />
  </div>
</template>

<script>
  // @ is an alias to /src
  import TeamInfoHeader from '@/components/TeamInfoHeader.vue'
  import TeamInfo from '@/components/TeamInfo.vue'
  export default {

    name: 'allteams',
    components: {
      TeamInfoHeader,
      TeamInfo,
    },
    props: ['passingAllteams'],

    data() {
      return {
        teamsData: [],
        infoToShow: []
            }
        },
        
    created() {
      this.getFetch();
    },
    methods: {
      getFetch: function () {
        fetch("http://api.jsonbin.io/b/5bf42eef746e9b593ec04ab0", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.teamsData = data.teams;
            console.log(this.teamsData);
            this.isLoading = false;
          });
      },
       infoFilterByImage() {
                this.infoToShow = this.teamsData.filter(oneTeamInfo => {
                    return oneTeamInfo.name == this.teamsData.name
                });
                console.log(this.infoToShow)
            }
    }

  }
</script>