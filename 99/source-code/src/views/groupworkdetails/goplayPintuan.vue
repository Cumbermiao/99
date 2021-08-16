<template>
  <div class="goPayBox">
    <div class="bag" style="text-align: center;">

    </div>
    <div style="font-size: 36px;text-align: center;height: 70px;background: #FFFFFF;line-height: 70px;" class="">
      ￥{{jiage}}
    </div>
    <div style="padding: 15px 15px 5px;background: #FFFFFF;margin-top: 10px;">
      <div class="">
        选择支付方式
      </div>
      <div class="pay-type-list">
        <div class="type-item" style="border-bottom: 1px solid #CCCCCC;" @click="changePayType(1)">
          <img style="width: 16px;vertical-align: middle;margin-right: 10px;"
            src="http://static.jiujiupingou.com/Static/img/bg23.png" mode="widthFix">
          <div class="con">
            <span class="tit">支付宝支付<span class="discount">本单最高减免{{discount}}元</span></span>
          </div>
          <label class="radio">
            <radio value="" color="#ffb609" :checked="payType == '1'" />
          </label>
        </div>
        <div class="type-item" style="border-bottom: 1px solid #CCCCCC;" @click="changePayType(2)">
          <img style="width: 32upx;vertical-align: middle;margin-right: 10px;" :src="imgSrc('ic_ysf.png')"
            mode="widthFix">
          <div class="con">
            <span class="tit">银联/云闪付<span class="discount">本单最高减免{{discount}}元</span></span>
          </div>
          <label class="radio">
            <radio value="" color="#ffb609" :checked="payType == '2'" />
          </label>
        </div>
        <div class="type-item" @click="changePayType(0)">
          <img style="width: 16px;vertical-align: middle;margin-right: 10px;"
            src="http://static.jiujiupingou.com/Static/img/bg21.png" mode="widthFix">
          <div class="con">
            <span>可用余额 ¥{{userInfo.Balance}}</span>
          </div>
          <label class="radio">
            <radio value="" color="#ffb609" :checked="payType == 0" />
          </label>
        </div>
      </div>
    </div>
    <div class="sbm1" @click="querenzhifu">
      {{timeCode}}{{textCode}}
    </div>
  </div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import Radio from '@/components/public/redio.vue'
  import {
    Toast
  } from 'vant';
  export default {
    components: {
      Radio
    },
    data() {
      return {
        yueBl: true,
        zhifubaoBl: false,
        userInfo: {},
        orderId: '',
        shifukuan: 0,
        urlZhifu: '',
        jiage: 0,
        AdvertiseId: '',
        textAn: '默认',
        payType: 0,
        aliPay: null,
        timeCode: '',
        textCode: '确认支付',
        disabledCode: false,
        PriceAreaId: '',
        discount: 0,
        unionPay: null
      }
    },
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
    created() {
      let option = this.$route.query
      this.PriceAreaId = option.PriceAreaId
      this.getUserInfo()
      this.jiage = option.jiage
      this.getAliPay()
      this.getMyDiscount()
    },
    mounted() {
      window.closeVideo = this.closeVideo
    },
    methods: {
      async getMyDiscount() {
        let res = await this.$http.post('/api/v1/MyOrder/GetMyDiscount', {
          priceAreaId: this.PriceAreaId
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if (res) {
          let data = res.data
          if (data.code === 1) {
            this.discount = data.data
          }
        }
      },
      async getUserInfo() {
        let res = await this.$http.post('/api/v1/UserInfo/Get', {
          type: 1
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data
        if (data.code === 1) {
          this.userInfo = data.data
        }
      },
      async getAliPay() {
        let res = await this.$http.post('/api/v1/MyOrder/GetPayChannelStatus', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data
        // console.log(data)
        if (data.code === 1) {
          this.aliPay = data.data.aliPay
          this.unionPay = data.data.unionPay
        } else {
          Toast(data.msg);
        }
      },
      async closeVideo() {
        this.$store.commit('navTop/setBackKey',{
          setBackKey: false
        })
        Toast.loading({
          duration: 0,
          message: '正在处理观看记录',
          forbidClick: true,
        });
        // this.textAn = '安卓调用了该方法'
        let res = await this.$http.post('/api/v1/AD/QueryShowAdvertise', {
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
          this.$router.push("/groupworkdetails/paysuccess")
        }
      },
      //选择支付方式
      changePayType(type) {
        this.payType = type;
        if (this.payType === 1) {
          if (this.aliPay !== 0) {
            Toast('支付宝通道升级维护中');
            return
          }
        }
        if (this.payType === 2) {
          if (this.unionPay !== 0) {
            Toast('云闪付通道升级维护中');
            return
          }
        }

      },
      setInterValFunc() {
        this.timeCode = 30;
        this.textCode = '秒';
        this.setTime = setInterval(() => {
          if (this.timeCode - 1 == 0) {
            this.timeCode = '';
            this.textCode = '确认支付';
            this.disabledCode = false;
            clearInterval(this.setTime);
          } else {
            this.timeCode--;
          }
        }, 1000);
      },
      async querenzhifu() {
        if (this.payType !== 1) {
          if (this.aliPay !== 0) {
            Toast('支付宝通道升级维护中');
            return
          }
        }
        if (this.payType === 2) {
          if (this.unionPay !== 0) {
            Toast('云闪付通道升级维护中');
            return
          }
        }
        if (this.disabledCode) {
          Toast('请30秒后重试');
          return
        }
        let baseUrl = null
        let customObj = {}

        baseUrl = '/api/v1/MyOrder/ManyPGPayV2'
        customObj = {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
          }
        }
        this.disabledCode = true
        this.setInterValFunc()
        Toast.loading({
          duration: 0,
          message: '加载中...',
          forbidClick: true,
        });
        let res = await this.$http.post(baseUrl, {
          priceAreaId: this.PriceAreaId,
          payType: this.payType
        }, customObj)

        let data = res.data
        if (this.payType === 0) {
          if (data.code === 1) {
            let res1 = await this.$http.post('/api/v1/AD/Get', {}, {
              custom: {
                url: '99',
                nonce: nonce(),
                timestamp: timestamp()
              }
            })

            let data1 = res1.data
            if (data1.code === 1) {
              this.AdvertiseId = data1.data.mchId
            }
            Toast.clear()
            const u = navigator.userAgent;
            const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (isiOS) {
              //vue调用iOS方法，且传值给iOS （iOS 方法名为 onItemClick）
              window.webkit.messageHandlers.onItemClick.postMessage(JSON.stringify(data1.data));
            } else {
              //vue调用Android方法，且传值给Android （Android方法名为 onItemClick）
              // eslint-disable-next-line
              nuandouAndroid.onItemClick(JSON.stringify(data1.data));
            }

          } else {
            Toast.clear()
            Toast(data.msg);
          }
        } else {
          if (data.code === 1) {
            Toast.clear()
            var device_type = navigator.userAgent; //获取userAgent信息
            // eslint-disable-next-line
            var md = new MobileDetect(device_type); //初始化mobile-detect
            var os = md.os(); //获取系统
            if (os == "AndroidOS" || os == "iOS") {
              this.urlZhifu = data.data.qrCode
              if(this.payType === 2){
                this.$router.push(
                  { name: 'cashing', params: { 
                    urlZhifu: data.data.qrCode,
                    orderId:data.data.orderId,
                    type:"pintuan"
                  }
                }
               )
              }else{
                this.$router.push('/confirmOrder/iframeZhifu?urlZhifu=' + data.data.qrCode + '&orderId=' + data.data
                .orderId + '&type=pintuan')
              }
              
            } else {
              this.$router.push('/confirmOrder/orderQrcode?orderId=' + data.data.orderId + '&url=' + data.data
                .qrCode + '&OrderNo=' + data.data.OrderNo + '&type=pintuan')
            }
          } else {
            Toast.clear()
            Toast(data.msg);
          }
        }

      }
    }
  }
</script>

<style lang="less">
  .goPayBox {
    .bag {
      height: 110px;
      background-image: linear-gradient(to right, #FBB663, #FB6463);
    }

    .pay-type-list {
      // margin-top: 20upx;
      background-color: #fff;
      // padding-left: 60upx;

      .type-item {
        height: 60px;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        position: relative;
      }

      .tit {
        // font-size: $font-lg;
        // color: $font-color-dark;
        margin-bottom: 2px;
      }

      .con {
        flex: 1;
        display: flex;
        flex-direction: column;

        // font-size: $font-sm;
        // color: $font-color-light;
        .discount {
          float: right;
          padding: 0 2px;
          border: 1px solid #FF570A;
          border-radius: 2px;
          margin-right: 5px;
          color: #FF570A;
        }
      }
    }
  }

  .sbm1 {
    position: fixed;
    bottom: 25px;
    left: 50%;
    margin-left: -155px;
    width: 310px;
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    background-image: linear-gradient(to right, #FBB663, #FB6463);
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
</style>