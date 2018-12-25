<template>
    <div>
        <div class="row">
            <div class="head" align="left">
                <router-link to="/">
                    <v-btn color="white darken-2" flat value="allTeams">
                        <v-icon large color="white darken-2">home</v-icon>
                        <span class="title">Standings</span>
                    </v-btn>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'standingsheader',
        components: {

        }
    }
</script>
<style>
    .head {
        margin-top: 40%;
    }

    .arrow {
        margin-bottom: 6%;
    }

    .dropdown-menu {
        background-color: rgba(0, 0, 0, 0.54);
    }

    a {
        color: rgb(182, 5, 5);
    }

    a:hover {
        color: rgb(206, 195, 195);
        text-decoration: none;
    }

    a:active,
    a:hover {
        outline-width: 0;
    }

    .form-control {
        width: 150;
        margin-top: 2%;
        /* display: block;
    margin-left: auto;
    margin-right: auto; */
    }

    form {
        margin-left: 10%;
    }

    input {
        margin-right: 5%;
    }

    /* .dropdown{ */
    /* margin-right:5%; */
    /* } */
</style>