<template>
<div>
<div class="row">
   <div class="col" align="left">
       <router-link to="/">
     <v-btn color="white darken-2" flat value="allTeams">
          <v-icon large color="white darken-2">home</v-icon>
          <span class="title">Standings</span>
        </v-btn>
    </router-link>
    </div>
    <div class="col dropdown" align="right">
    <form id="filter" action="">

				<select id="selectTheState" v-model="states">
					<option value="all">Choose the state</option>
					<option v-for="(state, index) in getState" :key="index">{{state}}</option>
				</select>

			</form>
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
/* .row{
     margin-top:25%;
} */
.col{
    margin-top:28%;
}
.arrow{
    margin-bottom:6%;
}
.dropdown-menu {
    background-color: rgba(0,0,0,0.54);
}

a{
    color: rgb(182, 5, 5);
}
a:hover {
    color:rgb(206, 195, 195);
    text-decoration: none;
}
a:active, a:hover {
    outline-width: 0;
}
/* .dropdown{ */
    /* margin-right:5%; */
/* } */
</style>