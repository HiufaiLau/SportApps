<template>
  <div class="schedule">
      <MatchScheduleHeader/>
     <MatchScheduleDate/>
    <MatchSchedule />
  </div>
</template>
<script> // @ is an alias to /src


import MatchSchedule from '@/components/MatchSchedule.vue'
import MatchScheduleDate from '@/components/MatchScheduleDate.vue'
import MatchScheduleHeader from '@/components/MatchScheduleHeader.vue'
export default {

  name: 'schedule',
  components: {
MatchSchedule, 
MatchScheduleDate,
MatchScheduleHeader
  }
}

</script>
<style>

</style>
