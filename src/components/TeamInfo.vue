<template>
    <div class="header">
        <img src="../assets/FCbayern.png" alt="FCByern" height="80" width="80" >
        <img class="score" src="../assets/dortmund.png" alt="Dortmund" height="80" width="80" >
        <img  src="../assets/FC_Schalke_04.png" alt="FC Schalke" height="80" width="80" >
        <img src="../assets/Hertha_BSC_Logo.svg.png" alt="Hertha Berlin" height="80" width="80">
    </div>
</template>

<script>
    export default {
        name: "TeamInfo"
    }
</script>
<style>
    .header {
        margin-top: 40%;
        margin-bottom: 16%;
    }

    .arrow {
        margin-bottom: 3%;
    }

    .form-control {
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
    }
</style>