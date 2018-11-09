<template>
  <div class="schedule">
      <StandingsHeader/>
     <StandingsTable/>
  </div>
</template>
<script> // @ is an alias to /src


import StandingsHeader from '@/components/StandingsHeader.vue'
import StandingsTable from '@/components/StandingsTable.vue'

export default {

  name: 'schedule',
  components: {
StandingsHeader,
StandingsTable
  }
}

</script>
<style>

</style>
