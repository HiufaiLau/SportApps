<template>
         <v-container class="panel panel-default" pre-scrollable scroll-y fixed align="center">
        <h4 class="marginForTopNavbar" align="center">Matchday {{oneMatch.matchday}}</h4><span></span>
        <div class="panel panel-default" align="center">
            <div class="panel-body matchTable">
                <img class="score" :src="twoLogos.away" alt="awayLogo" height="100" width="70" style="margin-right:23%"
                    align="center">
                <img class="score" :src="twoLogos.home" alt="homeLogo" height="100" width="70" style="margin-left:8%"
                    align="center">
                <br>
                
                <!-- <span style="margin-right:5%;" align="left">{{oneMatch.awayTeam.name}}</span>
                <span style="margin-left:5%" align="right">{{oneMatch.homeTeam.name}}</span> -->
                <h1 class="score">{{oneMatch.score.fullTime.awayTeam}} : {{oneMatch.score.fullTime.homeTeam}}</h1>
                <h5 style="color:red;">{{oneMatch.utcDate}}</h5>
                <h6 class="score"><a href="">{{oneMatch.status}}</a> </h6>
            </div>
        </div>
         </v-container>
</template>

<script>
    export default {
        name: 'oneMatchSchedule',
        props: ['oneMatch', 'twoLogos'],
        methods: {
            test: function () {
                // console.log(this.twoLogos)
                // console.log(this.oneMatch)
            }
        },
        created() {
            this.test()
        }
    }
</script>

<style>

</style>