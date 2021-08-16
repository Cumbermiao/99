<template>
  <div class="go-pay">
    <div class="pay-1">
      <div class="money">
        <div style="display: inline-block;">￥</div>{{price}}
      </div>
      <div class="time">
        剩余时间
        <div class="right">
          <div>00</div>:
          <div>{{m}}</div>:
          <div>{{s}}</div>
        </div>
      </div>
    </div>
    <div class="title">选择支付方式</div>
    <div class="pay-2">
      <div class="item" @click="checkType(1)">
        <img class="left" :src="imgSrc('pay_ic_zfb.png')" alt="">
        <div class="item-1">支付宝支付</div>
        <div class="cheack">
          <img v-show="payType===1" :src="imgSrc('pay_ic_sel.png')" mode="">
        </div>
      </div>
      <div class="item" @click="checkType(2)">
        <img class="left" :src="imgSrc('ic_ysf.png')" alt="">
        <div class="item-1">银联/云闪付</div>
        <div class="cheack">
          <img v-show="payType===2" :src="imgSrc('pay_ic_sel.png')" mode="">
        </div>
      </div>
      <div class="item" @click="checkType(3)">
        <img class="left" :src="imgSrc('pay_ic_wx.png')" alt="">
        <div class="item-1">微信支付</div>
        <div class="cheack">
          <img v-show="payType===3" :src="imgSrc('pay_ic_sel.png')" mode="">
        </div>
      </div>
      <div class="item" @click="checkType(0)">
        <img class="left" :src="imgSrc('pay_ic_yue.png')" alt="">
        <div class="item-1">余额支付（当前余额：{{userInfo.Balance}}）</div>
        <div class="cheack">
          <img v-show="payType===0" :src="imgSrc('pay_ic_sel.png')" mode="">
        </div>
      </div>
    </div>
    <div class="pay-btn" :style="{backgroundColor: saveBtn?'#ccc':'#FF1738'}" @click="querenzhifu">
      {{saveBtn?'正在支付':'确认支付'}}</div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  import {
    imgUrl,
    buyUrl
  } from '../../api/config.js'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    mapActions
  } from 'vuex';
  export default {
    data() {
      return {
        payType: 0,
        orderId: '',
        price: '',
        userInfo: {},
        m: '60',
        s: '00',
        index: null,
        saveBtn: false,
        aliPay: null,
        unionPay: null,
        createTime: null,
        advId: null,
        priceAreaId: '',
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
      this.priceAreaId = option.priceAreaId
      this.orderId = option.orderId
      this.price = option.price
      this.getTime(option.createTime)
      new Date(this.createTime)
      this.getUserInfo()
      this.time()
      this.getAliPay()
    },
    mounted() {},
    methods: {
      ...mapActions('newGroup', ['setReKey']),
      toZhifu() {
        this.$router.push('/cashing?urlZhifu=https://cash.yunfastpay.com/jumpwx/gfHf9LgbDzs&orderId=' + this.orderId)
      },
      getTime(time) {
        let newVal1 = time.replace(/-/g, '/')
        let t1 = new Date().getTime()
        let t2 = new Date(newVal1).getTime()
        if ((t1 - t2) > 1000 * 60 * 60) {
          this.m = 0;
          this.s = 0;
        } else {
          let t = (1000 * 60 * 60) - t1 + t2
          this.m = parseInt(t / 60000)
          this.s = parseInt((t - this.m * 1000 * 60) / 1000)
        }
      },
      async getAliPay() {
        let res = await this.$http.post('/api/v1/MyOrder/GetPayChannelStatus', {
          isManyPGPurchase: false,
          isManyPGOrder: true
        }, {
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
      time() {
        this.index = setInterval(() => {
          let s = Number(this.s) - 1
          let m = Number(this.m)
          if (m === 0 && s < 0) {
            clearInterval(this.index)
            this.s = '00'
          } else if (s < 0) {
            this.m = (m - 1) < 10 ? '0' + (m - 1) : (m - 1)
            this.s = 59
          } else if (s >= 0) {
            this.s = s < 10 ? '0' + s : s
          }
        }, 1000)
      },
      checkType(i) {
        this.payType = i
        if (this.payType == 1) {
          if (!this.aliPay) {
            Toast('支付宝通道升级维护中');
          }
        }
        if (this.payType === 2) {
          if (!this.unionPay) {
            Toast('云闪付通道升级维护中');
          }
        }
        if (this.payType === 3) {
          if (!this.wxMiniPay) {
            Toast('微信支付通道升级维护中');
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
      // payWx(){
      //   const u = navigator.userAgent;
      //   const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      //    if (isiOS) {
      //     //vue调用iOS方法，且传值给iOS (iOS 方法名为 payWeixin)
      //     Toast('IOS进来了')
      //     window.webkit.messageHandlers.payWeixin.postMessage(JSON.stringify({"orderId": this.orderId,"userId":getUserId()}));
      //   } else {
      //     //vue调用Android方法，且传值给Android (Android方法名为 payWeixin)
      //     // eslint-disable-next-line
      //     nuandouAndroid.payWeixin(JSON.stringify({"orderId": this.orderId}));
      //   }
      // },
      async querenzhifu() {
        // if (this.payType == 3) {
        //   this.payWx()
        //   return false
        // }
        let that = this
        if (that.payType == 1) {
          if (!that.aliPay) {
            Toast('支付宝通道升级维护中');
            return false
          }
        }
        if (this.payType === 2) {
          if (!this.unionPay) {
            Toast('云闪付通道升级维护中');
            return false
          }
        }
        if (this.payType === 3) {
          if (!this.wxMiniPay) {
            Toast('微信支付通道升级维护中');
            return false
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
        if (this.saveBtn) {
          return false
        }
        this.saveBtn = true
        if (that.userInfo.Balance < that.shifukuan) {
          Toast('余额不足');
          return false
        }
        let res = await that.$http.post('/api/v1/myOrder/AppPayV2', {
          method: that.payType,
          orderId: that.orderId
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            codePay: '支付'
          }
        })
        this.saveBtn = false
        let data = res.data
        if (that.payType === 0) {
          if (data.code === 0) {
            this.setReKey(true)
            Toast('下单成功');
            setTimeout(() => {
              this.$router.push('/newTeam/myShop?type=&title=我的团购&areaId=' + this.priceAreaId)
            }, 1000)
          } else {
            Toast(data.msg);
          }
        } else {
          if (data.code === 0) {
            var device_type = navigator.userAgent; //获取userAgent信息
            // eslint-disable-next-line
            var md = new MobileDetect(device_type); //初始化mobile-detect
            var os = md.os(); //获取系统
            if (os == "AndroidOS" || os == "iOS") {
              if (that.payType === 2) {
                this.$router.push({
                  name: 'cashing',
                  params: {
                    urlZhifu: data.data,
                    orderId: that.orderId
                  }
                })
              } else {
                this.$router.push({
                  name: 'iframeZhifu',
                  params: {
                    urlZhifu: data.data,
                    orderId: that.orderId,
                    buyType: 'newPintuan'
                  }
                })
                // this.$router.push('/confirmOrder/iframeZhifu?urlZhifu=' + data.data + '&orderId=' + that.orderId + '&buyType=newPintuan')
              }
            } else {
              this.$router.push('/confirmOrder/orderQrcode?orderId=' + that.orderId + '&url=' + data.data +
                '&buyType=newPintuan')
            }
          } else {
            Toast(data.msg);
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .go-pay {
    padding: 0.78125rem;
    color: #333;

    .pay-1 {
      padding: 4.375rem 0 6rem;
      text-align: center;

      .money {
        font-size: 2.625rem;

        div {
          font-size: 1.5rem;
        }
      }

      .time {
        margin-top: 0.5rem;
        line-height: 1.2rem;
        font-size: 12px;
        color: #666;

        div {
          display: inline-block;
          color: #333;
        }

        .right {
          font-weight: bold;

          div {
            padding: 0.2rem 0.3125rem;
            margin: 0 0.4rem;
            background-color: #F5F5F5;
          }
        }
      }
    }

    .title {
      margin-bottom: 1.1rem;
      font-weight: bold;
    }

    .pay-2 {
      font-size: 15px;

      .item {
        position: relative;
        display: flex;
        flex-wrap: wrap;

        .left {
          width: 1.5rem;
          height: 1.5rem;
          margin-top: 1.2rem;
        }

        .item-1 {
          width: calc(100% - 2.5rem);
          padding: 1.4rem 0;
          border-bottom: 1px solid #E5E5E5;
          margin-left: 1rem;
        }

        .cheack {
          position: absolute;
          top: 1.5rem;
          right: 1rem;
          width: 1.125rem;
          height: 1.125rem;
          border-radius: 50%;

          &::after {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            border: 1px solid #ccc;
            border-radius: 50%;
          }

          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
    }

    .pay-btn {
      position: absolute;
      bottom: 10px;
      width: calc(100% - 1.5625rem);
      height: 2.75rem;
      border-radius: 2.75rem;
      line-height: 2.75rem;
      font-size: 15px;
      text-align: center;
      color: #fff;
    }
  }
</style>