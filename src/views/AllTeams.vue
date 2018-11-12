<template>
<div class="teams">
<TeamInfoHeader/>
</div>
</template>

<script> // @ is an alias to /src
import TeamInfoHeader from '@/components/TeamInfoHeader.vue'

export default {

  name: 'allteams',
  components: {
    TeamInfoHeader
  }
}

</script>