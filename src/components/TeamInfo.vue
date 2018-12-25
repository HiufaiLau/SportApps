<template>
    <div class="teamsLogos" style="height:453px;">
        <v-container class="panel panel-default" pre-scrollable scroll-y fixed align="center">
            <oneTeamInfo v-for="(team, index) in allTeamsData" :teamInfo='allTeamsData' :oneTeam='team' :key="index" />
        </v-container>
    </div>
</template>

<script>
    import oneTeamInfo from '@/components/oneTeamInfo.vue'
    export default {
        name: "TeamInfo",
        props: ['allTeamsData'],
        components: {
            oneTeamInfo
        },
        methods: {
            test: function () {
                console.log(this.allTeamsData)
            },

        },
        created() {
            this.test()
        }
    }
</script>
<style>
    .panel {
        max-height: 450px;
    }

    .teamsLogos {
        margin-bottom: 18%;
    }

    .col {
        margin-top: 3%;
        /* margin-bottom: 10%; */
        text-align: center;
    }

    .arrow {
        margin-bottom: 3%;
    }

    .panel {
        max-height: 535px;
    }
</style>