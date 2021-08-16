<template>
  <iframe :src='url'></iframe>
</template>

<script>
  import {
    getPhone,
    getUserId,
  } from '../../util/token.js'
  export default {
    data() {
      return {
        url: ""
      }
    },
    created() {
      this.url =
        `https://ykf-webchat.7moor.com/wapchat.html?accessId=fee5fea0-eb57-11eb-b3f6-6548e8efdfde&fromUrl=&urlTitle=&language=ZHCN&clientId=${getUserId()}&otherParams={"nickName":${getPhone()}}`
    }
  }
</script>

<style>
  iframe {
    width: 100vw;
    height: 100vh;
    border: unset;
  }
</style>