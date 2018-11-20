<template>
    <div class="teamsLogos">
        <div class="row">

            <div class="col d-flex">
                <router-link :to="{ name: 'teamdetails', params: { dataToPass: this.teamInfo } }">
                <p>{{oneTeam.name}}</p>
                    <img :src="oneTeam.crestUrl" alt="team-icon" height="150" width="150">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "oneTeamInfo",
        props:['oneTeam', 'teamInfo']
    }
</script>
<style>
p{
        color: darkred;
    font-size: 20px;
}
    .teamsLogos {
        margin-bottom: 18%;
        width: 100%;
    }

    .col {
        margin-top: 3%;
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
    } */

    .score {
        margin-right: 3%;
        margin-left: 3%;
    }

    /* .col{
            margin-bottom: 1%;
    } */
</style>