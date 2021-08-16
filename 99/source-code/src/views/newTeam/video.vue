<template>
  <div class="video" v-show="videoKey" >
    <video id="myVideo" ref="myPlayer" autoplay muted :controls='false' :src="videoSrc" @ended="onPlayerEnded($event)" webkit-playsinline='true'  playsinline='true'></video>
       <!-- <video-player class="vide-p" :options="videoOptions" ref="myPlayer" @ended="onPlayerEnded($event)">
        您的浏览器不支持 video 标签。
    </video-player> -->
  </div>
</template>

<script>
import { Toast } from 'vant'
  // import { videoPlayer } from "vue-video-player";
  import "video.js/dist/video-js.css";
  import "vue-video-player/src/custom-theme.css";
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  export default {
    // components: {
    //     videoPlayer
    // },
    data() {
      return {
        videoKey: false,
        videoContext: null,
        autoplay: true,
        videoSrc: '',
        controls:false,
        videoOptions: {
          autoplay: true, // 如果为true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 是否视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4", // 类型
            src: "" // url地址
          }],
          poster: "", // 封面地址
          notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        }
      }
    },
    mounted() {
      this.getVideoUrl()
    },
    methods: {
      paly(){
        const myVideo = this.$refs.myPlayer;
        myVideo.play()
      },
      onPlayerEnded() {
        localStorage.setItem('gameKey',true)
        this.$router.go(-1)
        // let pages = getCurrentPages(); //获取所有页面栈实例列表
        // let nowPage = pages[pages.length - 1]; //当前页页面实例
        // let prevPage = pages[pages.length - 2]; //上一页页面实例
        // prevPage.$vm.gameKey = true; //修改上一页data里面的sercode参数值
        // uni.navigateBack({ //uni.navigateTo跳转的返回，默认1为返回上一级
        //   delta: 1
        // });
      },
      async getVideoUrl() {
        Toast.loading({
          duration: 0,
          message: '正在加载广告...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v1/ad/getoneadv', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        Toast.clear()
        if (res.data.code === 1) {
          this.videoOptions.sources[0].src = res.data.data.url;
          setTimeout(() => {
            this.videoKey = true
            this.paly()
            // uni.createVideoContext('video', this).play()
            // uni.createVideoContext('myVideo').play()
          }, 500)
          this.videoSrc = res.data.data.url;
        }
        // videobox.play();
      }
    }
  }
</script>

<style lang="less" scoped>
  .video {
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }

  /deep/ .video-player {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  video {
    position: relative;
    top: 50%;
    width: 100vw;
    height: 100vh;
    transform: translateY(-50%);
  }

  .mubu {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    background-color: rgba(0, 0, 0, 0);
    z-index: 99999;
  }
  /deep/ .vide-p .vjs-control-bar{
    display: none !important;
  }
</style>