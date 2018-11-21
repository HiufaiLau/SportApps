<template>
    <div class=" theHeader " align="left">
        <router-link to="/">
            <v-btn color="white darken-2" flat value="allTeams">
                <v-icon large color="white darken-2">home</v-icon>
                <span class="title">Teams</span>
            </v-btn>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "teaminfoheader"
    }
</script>
<style>
    .theHeader {
        margin-top: 40%;
    }
</style>