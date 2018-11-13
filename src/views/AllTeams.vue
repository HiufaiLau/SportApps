<template>
<div class="teams">
<TeamInfoHeader/>

<TeamInfo/>
</div>
</template>

<script> // @ is an alias to /src
import TeamInfoHeader from '@/components/TeamInfoHeader.vue'
import TeamInfo from '@/components/TeamInfo.vue'

export default {

  name: 'allteams',
  components: {
    TeamInfoHeader,TeamInfo
  }
}

</script>