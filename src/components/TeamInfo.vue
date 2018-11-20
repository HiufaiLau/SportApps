<template>
   <div class="teamsLogos">
       <oneTeamInfo v-for="(team, index) in allTeamsData" :teamInfo='allTeamsData' :oneTeam='team' :key="index"/>
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
            test: function() {
                console.log(this.allTeamsData)
            }
        },
        created() {
            this.test()
        }
    }
</script>
<style>
.teamsLogos{
    margin-bottom:18%;
}
.col{
    margin-top:3%;
    /* margin-bottom: 10%; */
    text-align: center;
}
    .arrow {
        margin-bottom: 3%;
    }

    /* .form-control {
        width: 300px;
    }

    form {
        margin-left: 10%;
    }

    input {
        margin-right: 5%;
    }
    .score{
        margin-right: 3%;
        margin-left: 3%;
    } */
    /* .col{
            margin-bottom: 1%;
    } */
</style>