<template>
  <div class="goPayBox">
    <div class="" style="display: flex;justify-content: center;margin-top: .625rem;align-items: center;">
      <span style="color: red;font-size: .875rem;">剩余时间</span>
      <span style="color: red;">{{hr}}:{{min}}:{{sec}}</span>
    </div>
    <div style="font-size: 3.125rem;text-align: center;margin-top: 4.6875rem;height: 4.375rem;background: #FFFFFF;"
      class="">
      ￥ {{shifu}}
    </div>
    <div style="padding: .9375rem;background: #FFFFFF;margin-top: .625rem;">
      <div class="" style="margin-bottom:1.875rem ;">
        选择支付方式
      </div>
      <div class=""
        style="position: relative;border-bottom: .0625rem solid #CCCCCC;padding: .625rem 0;display: flex;justify-content: space-between;align-items: center;"
        @click="checkedPay(1)">
        <div class="">
          <img style="width: 1rem;vertical-align: middle;margin-right: .625rem;"
            src="http://static.jiujiupingou.com/Static/img/bg23.png" mode="widthFix">
          支付宝
          <span class="discount">本单立减{{discount}}元</span>
        </div>
        <div class="" v-if="zhifubaoBl">
          <label class="radio" :class="{'active':payType == 1}">
            <!-- <radio value="" color="#FB6463" :checked="payType == 1" /> -->
          </label>
        </div>
      </div>
      <div class=""
        style="position: relative;border-bottom: 1px solid #CCCCCC;padding: 10px 0;display: flex;justify-content: space-between;align-items: center;"
        @click="checkedPay(2)">
        <div class="">
          <img style="width: 1rem;vertical-align: middle;margin-right: 10px;" :src="imgSrc('ic_ysf.png')"
            mode="widthFix">
          银联/云闪付
          <text class="discount">本单最高减免{{discount}}元</text>
        </div>
        <div class="" v-if="zhifubaoBl">
          <div class="radio" :class="{'active':payType == 2}">
            <!-- <radio value="" color="#FB6463" :checked="payType == 2" /> -->
          </div>
        </div>
      </div>
      <div class=""
        style="position: relative;border-bottom: 1px solid #CCCCCC;padding: 10px 0;display: flex;justify-content: space-between;align-items: center;"
        @click="checkedPay(3)">
        <div class="">
          <img style="width: 1rem;vertical-align: middle;margin-right: 10px;" :src="imgSrc('pay_ic_wx.png')"
            mode="widthFix">
          微信支付
          <text class="discount">本单最高减免{{discount}}元</text>
        </div>
        <div class="" v-if="zhifubaoBl">
          <div class="radio" :class="{'active':payType == 3}">
            <!-- <radio value="" color="#FB6463" :checked="payType == 2" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="sbm1" @click="querenzhifu">
      {{timeCode}} {{textCode}}
    </div>
  </div>
</template>

<script>
  import {
    imgUrl,
    buyUrl
  } from '../../api/config.js'
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
        yueBl: true,
        zhifubaoBl: true,
        userInfo: {},
        orderId: '',
        shifu: 0,
        urlZhifu: '',
        hour: 0,
        reset: false,
        createTime: '',
        hr: '',
        min: '',
        sec: '',
        aliPay: null,
        isiOS: null,
        isAndroid: null,
        timeCode: '',
        textCode: '确认支付',
        disabledCode: false,
        discount: 0,
        payType: 1,
        unionPay: null,
        wxMiniPay: null
      }
    },
    computed: {
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      }
    },
    created() {
      let option = this.$route.query
      this.discount = option.discount
      this.getUserInfo()
      this.orderId = option.orderId
      this.shifu = option.shifu
      this.createTime = option.createTime
      this.countdown(this.createTime, 60)
      this.getMyDiscount()
    },
    methods: {
      checkedPay(type) {
        this.payType = type
        if (this.payType === 1) {
          if (!this.aliPay) {
            Toast('支付宝通道升级维护中');
            return
          }
        }
        if (this.payType === 2) {
          if (!this.unionPay) {
            Toast('云闪付通道升级维护中');
            return
          }
        }
        if (this.payType === 3) {
          if (!this.wxMiniPay) {
            Toast('微信支付通道升级维护中');
            return
          }
        }
      },
      async getMyDiscount() {
        let res = await this.$http.post('/api/v1/MyOrder/GetMyDiscount', {}, {
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
      countdown(val1, val2) {
        const that = this
        let newVal1 = val1.replace(/-/g, '/')
        var now = new Date(newVal1); //处理开始时间
        var minutes = Number(val2); //处理输入的过期时间
        var end = now.setMinutes(now.getMinutes() + minutes); //计算最后时间
        var time_now = new Date().getTime(); //当前时间
        var msec = end - time_now; //最后时间-当前时间
        if (msec > 0) {
          let hr = parseInt(msec / 1000 / 60 / 60 % 24)
          let min = parseInt(msec / 1000 / 60 % 60)
          let sec = parseInt(msec / 1000 % 60)
          hr = hr > 9 ? hr : '0' + hr
          min = min > 9 ? min : '0' + min
          sec = sec > 9 ? sec : '0' + sec,
            // document.getElementById('timer').innerHTML=`${day}天${hr}小时${min}分${sec}秒`
            that.hr = hr
          that.min = min
          that.sec = sec
        } else {
          clearInterval(tim);
        }

        var tim = setTimeout(function () {
          that.countdown(that.createTime, 60)

        }, 1000)
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
          this.wxMiniPay = data.data.wxMiniPay
        } else {
          Toast(data.msg);
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
        let that = this
        if (that.payType == 1) {
          if (!that.aliPay) {
            Toast('支付宝通道升级维护中');
            return
          }
        }
        if (this.payType === 2) {
          if (!this.unionPay) {
            Toast('云闪付通道升级维护中');
            return
          }
        }
        if (this.payType === 3) {
          if (!this.wxMiniPay) {
            Toast('微信支付通道升级维护中');
            return
          }
        }
        if (this.payType === 3) {
          this.$router.push({
            name: 'cashing',
            params: {
              urlZhifu: `${buyUrl}/WxPay/Index?orderId=${this.orderId}`,
              orderId: this.orderId,
              typeBuy: 'wx'
            }
          })
          return false
        }
        if (this.disabledCode) {
          Toast('请30秒后重试');
          return
        }
        this.disabledCode = true
        this.setInterValFunc()
        Toast.loading({
          duration: 0,
          message: '加载中...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v1/MyOrder/AppPayV2', {
          orderId: this.orderId,
          method: this.payType
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            codePay: '支付'
          }
        })
        Toast.clear()
        let data = res.data

        if (data.code === 0) {
          var device_type = navigator.userAgent; //获取userAgent信息
          // eslint-disable-next-line
          var md = new MobileDetect(device_type); //初始化mobile-detect
          var os = md.os(); //获取系统
          // else if (uni.getSystemInfoSync().platform === 'ios') {
          // 	this.urlZhifu = data.data
          // } 
          if (os == "AndroidOS" || os == "iOS") {
            this.urlZhifu = data.data
            if (this.payType === 2) {
              this.$router.push({
                name: 'cashing',
                params: {
                  urlZhifu: data.data,
                  orderId: this.orderId
                }
              })
            } else {
              this.$router.push({
                name: 'iframeZhifu',
                params: {
                  urlZhifu: data.data,
                  orderId: this.orderId
                }
              })
              // this.$router.push('/confirmOrder/iframeZhifu?urlZhifu=' + data.data + '&orderId=' + this.orderId)
            }
          } else {
            this.$router.push('/confirmOrder/orderQrcode?orderId=' + this.orderId + '&url=' + data.data)
          }
        } else {
          Toast(data.msg);
        }

      }
    }
  }
</script>

<style lang="less" scoped>
  .goPayBox {
    background: #F7F7F7;

    .radio {
      position: relative;
      display: block;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      line-height: 20px;
      text-align: center;
      border: 1px solid rgb(209, 209, 209);
      background-color: rgb(255, 255, 255);

      &.active {
        &::after {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 16px;
          height: 16px;
          content: '';
          border-radius: 50%;
          background-image: linear-gradient(to right, #FBB663, #FB6463);
        }
      }
    }
  }

  .sbm1 {
    position: fixed;
    bottom: 1.5625rem;
    left: 50%;
    margin-left: -6.875rem;
    width: 13.75rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    border: none;
    outline: none;
    background-image: linear-gradient(to right, #FBB663, #FB6463);
    color: #fff;
    text-align: center;
    line-height: 2.5rem;
  }

  .discount {
    position: absolute;
    top: .5625rem;
    right: 2.1875rem;
    padding: 0 .125rem;
    border: .0625rem solid #FF570A;
    border-radius: .125rem;
    margin-right: .3125rem;
    color: #FF570A;
  }
</style>