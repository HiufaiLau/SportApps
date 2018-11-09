<template>
<div class="home">
<ChatLogin/>
</div>
</template>

<script> // @ is an alias to /src
import ChatLogin from '@/components/ChatLogin.vue'

export default {

  name: 'chat',
  components: {
    ChatLogin
  }
}

</script>