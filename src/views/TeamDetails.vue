<template>
    <div class=" myHeader " align="left">
        <TeamInfoHeader />
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
        // data() {
        //     return {
        //         isLoading: true,
        //     }
        // }
    }
</script>
<style>
    .myHeader {
        margin-top: 24%;
    }

    /* .form-control {
        width: 260px;
        margin-top: 2%; */
    /* display: block;
    margin-left: auto;
    margin-right: auto; */
    /* }

    form {
        margin-left: 10%;
    }

    input {
        margin-right: 5%;
    } */
</style>