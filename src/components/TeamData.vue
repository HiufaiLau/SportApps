<template>
    <div class="panel text-xs-center">
        <v-expansion-panel >
    <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <div slot="header">Home Stadium</div>
      <v-card>
        <v-card-text><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1240635562367!2d7.462931414955928!3d51.49259077963268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9177d916a7495%3A0x52801b14ebaf1dba!2sDortmund+Stadion!5e0!3m2!1sen!2sde!4v1542132542876"
                    width="310" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </v-card-text>
      </v-card>
    </v-expansion-panel-content>

    <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <div slot="header">Goal Keepers</div>
      <v-card>
        <v-card-text>name A</v-card-text>
        <v-card-text>name B</v-card-text>
        <v-card-text>name C</v-card-text>
      </v-card>
    </v-expansion-panel-content>
     <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <div slot="header">Defenders</div>
      <v-card>
        <v-card-text>name A</v-card-text>
        <v-card-text>name B</v-card-text>
        <v-card-text>name C</v-card-text>
      </v-card>
    </v-expansion-panel-content>
    
     <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <div slot="header">Midfielders</div>
      <v-card>
        <v-card-text>name A</v-card-text>
        <v-card-text>name B</v-card-text>
        <v-card-text>name C</v-card-text>
      </v-card>
    </v-expansion-panel-content>

     <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <div slot="header">Forwards</div>
      <v-card>
        <v-card-text>name A</v-card-text>
        <v-card-text>name B</v-card-text>
        <v-card-text>name C</v-card-text>
      </v-card>
    </v-expansion-panel-content>

     <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <div slot="header">Coach</div>
      <v-card>
        <v-card-text>name A</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
        <!-- <v-menu transition="fade-transition"> -->
            <!-- <v-btn slot="activator" dark color="primary">Fade Transition</v-btn>
            <v-card>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1240635562367!2d7.462931414955928!3d51.49259077963268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9177d916a7495%3A0x52801b14ebaf1dba!2sDortmund+Stadion!5e0!3m2!1sen!2sde!4v1542132542876"
                    width="400" height="600" frameborder="0" style="border:0" allowfullscreen></iframe> -->
                <!-- <v-list-tile v-for="n in 5" :key="n" @click="">
          <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
        </v-list-tile> -->
            <!-- </v-card> -->
        <!-- </v-menu> -->
    </div>
</template>
<script>
    export default {
        name: "teamdata"
    }
</script>
<style>
.panel{
    margin-bottom:18%;
}
    /* .col{
    margin-top:3%;
    margin-bottom: 18%;
    text-align: center;
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
    } */
    /* .col{
            margin-bottom: 1%;
    } */
</style>