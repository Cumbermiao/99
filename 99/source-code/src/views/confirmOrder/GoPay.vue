<template>
  <div class="goPayBox">
    <div class=""
      style="background-image: linear-gradient(to right,#FB6463,#FBB663);display: flex;justify-content: center;align-items: center;height: 6.25rem;line-height: 6.25rem;color: #fff;font-size: 1.125rem;">
      <span v-if="timeKey" style="font-size: .875rem;">剩余时间</span>
      <span v-if="timeKey" style="">{{hr}}:{{min}}:{{sec}}</span>
      <span v-if="!timeKey" style="font-size: 2.5rem;">￥{{shifukuan}}</span>
    </div>
    <div v-if="timeKey"
      style="color: #FF0000;font-size: 2.25rem;text-align: center;height: 4.375rem;line-height: 4.375rem;background: #FFFFFF;"
      class="">
      ￥{{shifukuan}}
    </div>
    <div style="padding: .9375rem .9375rem .3125rem;background: #FFFFFF;margin-top: .625rem;">
      <div class="" style="">
        选择支付方式
      </div>
      <div class="pay-type-list">
        <div v-show="zhifubaoKey" class="type-item" style="border-bottom: .0625rem solid #CCCCCC;"
          @click="changePayType(1)">
          <img style="width: 1rem;vertical-align: middle;margin-right: .625rem;"
            src="http://static.jiujiupingou.com/Static/img/bg23.png" mode="widthFix" />
          <div class="con">
            <span class="tit">支付宝支付<span class="discount1">本单最高减免{{discount}}元</span></span>
          </div>
          <label class="radio">
            <radio value="" color="#FB6463" :checked="payType == 1" />
          </label>
        </div>
        <div v-show="zhifubaoKey" class="type-item" style="border-bottom: 1px solid #CCCCCC;" @click="changePayType(2)">
          <img style="width: 1rem;vertical-align: middle;margin-right: 10px;" :src="imgSrc('ic_ysf.png')"
            mode="widthFix">
          <div class="con">
            <span class="tit">银联/云闪付<span class="discount1">本单最高减免{{discount}}元</span></span>
          </div>
          <label class="radio">
            <radio value="" color="#FB6463" :checked="payType == 2" />
          </label>
        </div>
        <div v-show="zhifubaoKey" class="type-item" style="border-bottom: 1px solid #CCCCCC;" @click="changePayType(3)">
          <img style="width: 1rem;vertical-align: middle;margin-right: 10px;" :src="imgSrc('pay_ic_wx.png')"
            mode="widthFix">
          <div class="con">
            <span class="tit">微信支付<span class="discount1">本单最高减免{{discount}}元</span></span>
          </div>
          <label class="radio">
            <radio value="" color="#FB6463" :checked="payType == 3" />
          </label>
        </div>
        <div class="type-item" @click="changePayType(0)">
          <img style="width: 1rem;vertical-align: middle;margin-right: .625rem;"
            src="http://static.jiujiupingou.com/Static/img/bg21.png" mode="widthFix" />
          <div class="con">
            <span>可用余额<span style="display: inline-block;color: #FF4200;margin-left: .625rem;">¥{{userInfo.Balance}}
              </span></span>
          </div>
          <label class="radio">
            <radio value="" color="#FB6463" :checked="payType == 0" />
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
  import Radio from '@/components/public/redio.vue'
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
        hour: 0,
        reset: false,
        createTime: '',
        hr: '',
        min: '',
        sec: '',
        payType: 0,
        aliPay: null,
        isiOS: null,
        isAndroid: null,
        timeCode: '',
        textCode: '确认支付',
        disabledCode: false,
        zhifubaoKey: true,
        timeKey: true,
        type: '',
        saveBtn: false,
        discount: 0,
        unionPay: null,
        wxMiniPay: null
      }
    },
    computed: {
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      },
    },
    created() {
      let option = this.$route.query
      this.getUserInfo()
      this.getMyDiscount()
      if (option.type !== 'card') {
        this.orderId = option.orderId
        this.shifukuan = option.shifukuan
        this.createTime = option.createTime
        this.countdown(this.createTime, 60)
        this.getAliPay()
      } else {
        this.type = option.type;
        this.zhifubaoKey = false;
        this.timeKey = false;
        this.shifukuan = option.shifukuan;
        this.num = option.num;
        this.cardTypeId = option.cardTypeId;
      }
    },
    methods: {
      async getMyDiscount() {
        let res = await this.$http.post('/api/v1/MyOrder/GetMyDiscount', {
          priceAreaId: this.PriceAreaId || ''
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
          // if (this.isiOS) {
          // 	that.countdown(that.createTime.replace(/-/g,'/'), 60)
          // } else if (this.isAndroid) {
          // 	that.countdown(that.createTime, 60)
          // } else {

          // }
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
      //选择支付方式
      changePayType(type) {
        this.payType = type;
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
        let baseUrl = null
        if (this.disabledCode) {
          Toast('请30秒后重试');
          return
        }
        let customObj = {}
        // if (that.payType === 1) {
        //   baseUrl = '/api/v1/MyOrder/ProductOrderPay'
        //   payType = 3
        //   customObj = {
        //     custom: {
        //       url: '99',
        //       nonce: nonce(),
        //       timestamp: timestamp(),
        //     }
        //   }
        // } else {
        //   baseUrl = '/api/v1/myorder/AppPay'
        //   customObj = {
        //     custom: {
        //       url: '99',
        //       nonce: nonce(),
        //       timestamp: timestamp(),
        //       codePay: '支付'
        //     }
        //   }
        // }
        baseUrl = '/api/v1/MyOrder/AppPayV2'
        customObj = {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            codePay: '支付'
          }
        }
        let data = ''
        if (this.type !== 'card') {
          this.disabledCode = true
          this.setInterValFunc()
          Toast.loading({
            duration: 0,
            message: '加载中...',
            forbidClick: true,
          });
          let res = await that.$http.post(baseUrl, {
            orderId: this.orderId,
            method: this.payType
          }, customObj)
          if (res) {
            data = res.data
          }
        } else {
          if (this.saveBtn) {
            return false
          }
          this.saveBtn = true
          if (that.userInfo.Balance < that.shifukuan) {
            Toast('余额不足');
            return false
          }
          let res = await that.$http.post('/api/v1/BlessingCard/Buy', {
            cardTypeId: that.cardTypeId,
            amount: that.num
          }, customObj)
          if (res) {
            if (res.data.code === 1) {
              Toast('下单成功');
              setTimeout(()=> {
                this.saveBtn = false
                this.$router.go(-3)
              }, 2000)
              return false
            }
          }
          this.saveBtn = false
        }

        if (that.payType === 0) {
          if (data.code === 0) {
            Toast.clear()
            Toast('下单成功');
            setTimeout(()=>{
              this.$router.push('/orderList?orderType=All')
            }, 1000)
          } else {
            Toast.clear()
            Toast(data.msg);
          }
        } else {
          if (data.code === 0) {
            Toast.clear()
            var device_type = navigator.userAgent; //获取userAgent信息
            // eslint-disable-next-line
            var md = new MobileDetect(device_type); //初始化mobile-detect
            var os = md.os(); //获取系统
            // const u = navigator.userAgent;
            // const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

            if (os == "AndroidOS" || os == "iOS") {
              if (this.payType === 2) {
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
                    orderId: that.orderId
                  }
                })
                // this.$router.push('/confirmOrder/iframeZhifu?urlZhifu=' + data.data + '&orderId=' + that.orderId)
              }
            } else {
              this.$router.push('/confirmOrder/orderQrcode?orderId=' + that.orderId + '&url=' + data.data)
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
    background: #F7F7F7;

    .pay-type-list {
      // margin-top: 20upx;
      background-color: #fff;
      // padding-left: 60upx;

      .type-item {
        height: 3.75rem;
        padding: .625rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .9375rem;
        position: relative;
      }

      .tit {
        // font-size: $font-lg;
        // color: $font-color-dark;
        margin-bottom: .125rem;

        .discount1 {
          float: right;
          padding: 0 2px;
          border: 1px solid #FF570A;
          border-radius: 2px;
          margin-right: 5px;
          color: #FF570A;
        }
      }

      .con {
        flex: 1;
        display: flex;
        flex-direction: column;
        // font-size: $font-sm;
        // color: $font-color-light;
      }
    }
  }

  .sbm1 {
    position: fixed;
    bottom: 1.5625rem;
    left: 50%;
    margin-left: -9.6875rem;
    width: 19.375rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    border: none;
    outline: none;
    background-image: linear-gradient(to right, #FBB663, #FB6463);
    color: #fff;
    text-align: center;
    line-height: 2.5rem;
  }
</style>