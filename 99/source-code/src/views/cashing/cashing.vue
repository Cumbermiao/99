<template>
  <div id="iframe" class="">
    <div v-show="typeBuy === 'wx'">
      <div class="" style="text-align: center;font-size: 32upx;color: red;margin-top: 20px;">
        支付确认中{{zhifuqurenzhong}}
      </div>
      <div class="" style="margin-top: 20px;text-align: center;display: flex;justify-content: center;">
        <div class="" style="width: 218upx;height: 218upx;">
          <div ref="myQrcode"></div>
        </div>
      </div>
      <div class="" style="color: red;text-align: center;margin-top: 10px;">
        请截图到微信扫码支付
      </div>
    </div>
    <!-- <view style="display: inline-block;" v-for="(item,i) in showKey" :key="i">{{item}}</view> -->
    <!-- <iframe :src="urlZhifu"></iframe> -->
  </div>
</template>

<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import qrCode from 'qrcodejs2'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        orderId: null,
        zhifuqurenzhong: '',
        ishavepay: 0,
        urlZhifu: '',
        AdvertiseId: '',
        advId: '',
        mchId: '',
        showKey: [],
        data1: '',
        token: "",
        typeBuy: ''
      }
    },
    created() {
      let option = this.$route.params
      if (option.typeBuy === 'wx') {
        this.$store.commit('navTop/setTitle', {
          title: '微信支付'
        })
      } else {
        this.$store.commit('navTop/setTitle', {
          title: '银联/云闪付'
        })
      }
      this.typeBuy = option.typeBuy || 'yun'
      this.token = option.token
      this.orderId = option.orderId

      let that = this
      setTimeout(function () {
        that.ishavepay = 1
        // uni.hideLoading()
      }, 300000)
      this.$nextTick(() => {
        if (that.typeBuy == 'yun') {
          that.urlZhifu = decodeURIComponent(option.urlZhifu)
          // this.initQrCode(this.urlZhifu)
          // window.location.href = this.urlZhifu
        } else if (that.typeBuy == 'wx') {
          that.initQrCode(option.urlZhifu)
          // if(option.urlZhifu.indexOf('.alipay.com')>0) {
          //   this.urlZhifu = option.urlZhifu
          //   // this.initQrCode(option.urlZhifu)
          // } else {
          //   // let newUrlZhifu = encodeURIComponent(option.urlZhifu+'&token='+this.token) 
          //   // let feiAliPay = 'alipays://platformapi/startapp?appId=20000067&url='+ newUrlZhifu
          //   // this.initQrCode(feiAliPay)
          // }

        }

        if (that.ishavepay === 0) {
          that.payload()
        }
        if (that.typeBuy == 'yun') {
          var iframe = document.createElement("iframe");
          iframe.src = that.urlZhifu;
          iframe.style.border = "unset";
          iframe.style.width = "100vw";
          iframe.style.height = "100vh";
          document.getElementById("iframe").appendChild(iframe);
          Toast.loading({
            duration: 6000,
            message: '加载中...',
          });
        }
      })
    },
    // onBackPress() {
    //   uni.navigateBack({
    //     delta: 2
    //   })
    // },
    mounted() {
      window.closeVideo = this.closeVideo
    },
    destroyed() {
      this.ishavepay = 1
      Toast.clear()
    },
    methods: {
      payload() {
        switch (this.zhifuqurenzhong) {
          case '':
            this.zhifuqurenzhong = '.';
            break
          case '.':
            this.zhifuqurenzhong = '..';
            break
          case '..':
            this.zhifuqurenzhong = '...'
            break
          case '...':
            this.zhifuqurenzhong = ''
            break
          default:
        }
        this.havepay()
        setTimeout(
          () => {
            if (this.ishavepay === 0) {
              this.payload()
            }
          }, 3000)
      },
      initQrCode(url) {
        new qrCode(this.$refs.myQrcode, {
          text: url,
          width: 115,
          height: 115,
          correctLevel: qrCode.CorrectLevel.H
        })
        // let domain = window.location.protocol + "//" + window.location.host;
      },
      async havepay() {
        if (this.ishavepay === 0) {
          let res = await this.$http.post('/api/v1/MyOrder/GetOrderPayStatus', {
            orderId: this.orderId
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp()
            }
          })
          let data = res.data
          if (data.code === 1) {
            this.showKey.push(data.data)
            if (data.data) {
              this.ishavepay = 1
              this.$router.push('/confirmOrder/wanPayment')
            }
          }
        }
      },

      cancelBtn() {
        this.$router.push('/home/index')
      }
    }
  }
</script>
<style lang="less" scoped>
  iframe {
    width: 100vw;
    height: 100vh;
    border: unset;

  }

  #iframe {
    >div {
      width: 100vw;
      height: 80vh;
    }
  }
</style>