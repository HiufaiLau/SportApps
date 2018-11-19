<template>

  <div class="container" align="center">
    <OneMatchSchedule v-for="(match, index) in allMatches" :oneMatch='match' :key="index" />
     <!-- <div class=" dates btn-group btn-group-justified">
  <button v-on:click="filterMatches" type="button" class="btn btn-dark">Finished</button>
  <button v-on:click="filterMatches" type="button" class="btn btn-dark">Current</button>
  <button v-on:click="filterMatches" type="button" class="btn btn-dark">Coming</button>
     </div> -->
</div>
  
    
    
 <!-- <div>
          <v-dialog v-model="dialog" width="500">
            <v-btn slot="activator" color="red lighten-2" dark>
              Click Me
            </v-btn>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                Match Highlight
              </v-card-title>

              <v-card-text>
                
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div> -->
</template>
<script>
import OneMatchSchedule from '@/components/OneMatchSchedule.vue'
  export default {
    name: 'matchschedule',
    props:['allMatches'],
    components: {
      OneMatchSchedule
    },
    data() {
      return {
        dialog: false,
      }
    }
  
  }
</script>
<style>
  a {
    color: #ff2d35;
    text-decoration: none;
    background-color: transparent;
  }

  a:hover {
    color: #3f3f3f;
    text-decoration: none;
    background-color: transparent;

  }

  h4 {
    color: rgb(202, 202, 202);
    text-decoration: none;
    font-size: 2rem;
  }

  .matchTable {
    border-style: groove;
    box-sizing: border-box;
    width: 310px;
    height: 260px;
    border: none;
    /* align-content: center;
    align-self: center; */
    padding-top: 20px;
    margin-bottom: 18%;
    border-radius: 10px;
    background-color: darkred;
    opacity: 0.7;
  }

  .score {
    /* font-size: 20px; */
    text-decoration: none;
  }

  .score:hover {
    color: darkred;
  }

  .dates{
   display: block;
    margin-left: auto;
    margin-right: auto;
    /* width: 50%; */
  /* margin-top:20%; */
    /* margin-bottom: 5%; */
    text-align: center;
}
.btn {
    /* margin-top: 3%; */
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
}
.btn-dark {
    color:rgb(219, 219, 219);
    background-color: #4d4a4b;
    border-color: #4d4a4b;
}
</style>