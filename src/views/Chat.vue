<template>
  <div class="chat" align="center" >
    <ChatLoginHeader />
    <ChatLogin />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ChatLogin from '@/components/ChatLogin.vue'
  import ChatLoginHeader from '@/components/ChatLoginHeader.vue'


  export default {

    name: 'chat',
    components: {
      ChatLogin,
      ChatLoginHeader
    },
    data() {
      return {
        // isLoading: true,
      }
    }
  }
</script>