<template>
  <view>
  </view>
</template>

<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        AdvertiseId: ''
      }
    },
    mounted() {
      window.closeVideo = this.closeVideo
    },
    created() {
      this.getAd()
    },
    methods: {
      async closeVideo() {
        this.$store.commit('navTop/setBackKey',{
          setBackKey: false
        })
        Toast.loading({
          duration: 0,
          message: '正在处理观看记录',
          forbidClick: true,
        });
        //let res = await this.$http.post('/api/v1/AD/QueryShowAdvertise', {mchid: this.AdvertiseId},  {
        let res = await this.$http.post('/api/v1/AD/QueryShowAdvertise', {
          aid: 1,
          mchid: this.AdvertiseId
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        this.$store.commit('navTop/setBackKey',{
          setBackKey: true
        })
        Toast.clear();
        let data = res.data
        if (data.code === 1) {
          this.$router.go(-1)
        }
      },
      async getAd() {
        Toast.loading({
          duration: 0,
          message: '加载中...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v1/AD/Get', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        Toast.clear()
        let data = res.data
        if (data.code === 1) {
          this.AdvertiseId = data.data.mchId
          const u = navigator.userAgent;
          const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
          if (isiOS) {
            //vue调用iOS方法，且传值给iOS （iOS 方法名为 onItemClick）
            window.webkit.messageHandlers.onItemClick.postMessage(JSON.stringify(data.data));
          } else {
            //vue调用Android方法，且传值给Android （Android方法名为 onItemClick）
            // eslint-disable-next-line
            nuandouAndroid.onItemClick(JSON.stringify(data.data));
          }
        }
      }
    }
  }
</script>

<style>

</style>