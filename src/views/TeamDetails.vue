<template>
    <div class=" myHeader " align="left" style="height:557px;" >
        <div class=" theHeader " align="left">
            <router-link to="/allteams">
                <v-btn color="white darken-2" flat value="allTeams">
                    <!-- <v-icon large color="white darken-2">home</v-icon> -->
                    <span class="title">Teams</span>
                </v-btn>
            </router-link>
        </div>
        <TeamData />
    </div>
</template>

<script>
    import TeamInfoHeader from '@/components/TeamInfoHeader.vue'
    import TeamData from '@/components/TeamData.vue'
    export default {
        name: "teamdetails",
        components: {
            TeamData,
            TeamInfoHeader
        },
    }
</script>
<style>
    .myHeader {
        margin-top: 24%;
    }
</style>