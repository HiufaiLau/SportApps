<template>
  <div class="schedule">
    <MatchSchedule />
  </div>
</template>
<script> // @ is an alias to /src


import MatchSchedule from '@/components/MatchSchedule.vue'

export default {

  name: 'schedule',
  components: {
 MatchSchedule 

  }
}

</script>