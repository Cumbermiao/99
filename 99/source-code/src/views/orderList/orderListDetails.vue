<template>
  <div class="orderListDetailsBox">
    <div class="orderListDetailsHead">
      <div class="name">
        <span>{{orderDetailsObj.AddressReceiver}}</span>
        <span>{{orderDetailsObj.AddressMobile}}</span>
      </div>
      <div class="addressFoor">
        {{orderDetailsObj.AddressDetail?orderDetailsObj.AddressDetail.replace('null',''):orderDetailsObj.AddressDetail}}
      </div>
    </div>
    <div class="" v-if="OrderStatus === '0'"
      style="display: flex;justify-content: center;margin-top: .625rem;align-items: center;">
      <span style="color: red;font-size: 1.5rem;">剩余时间</span>
      <span style="color: red;">{{hr}}:{{min}}:{{sec}}</span>
    </div>
    <div class="orderListItemMain">
      <div class="orderListItemMainFl">
        <img style="width: 6.25rem;" :src="orderDetailsObj.ProductMainImage" mode="widthFix">
      </div>
      <div class="orderListItemMainRl">
        <div class="orderListItemMainRlName">
          {{orderDetailsObj.ProductTitle}}
        </div>
        <div class="orderListItemMainRlBao">
          ￥{{orderDetailsObj.UnitPrice}}/件
        </div>
      </div>
    </div>
    <div class="priceInformationBox" style="display: flex;justify-content: space-between;">
      <div class="">
        团购成功
      </div>
      <div class="">
        <img v-for="(item,index) in 5" :key="index" style="width: 1.5rem;"
          src="http://web991-oss.jiujiupingou.com/img/001.png" mode="widthFix">
      </div>
    </div>
    <div class="priceInformationBox">
      <div class="priceInformation">
        <div class="priceInformationHead">
          价格信息
        </div>
        <div class="priceInformationFoor">
          <div class="commodityTotal">
            <span>商品单价</span>
            <span>￥{{orderDetailsObj.UnitPrice}}</span>
          </div>
          <div class="commodityTotal">
            <span>运费</span>
            <span>￥{{orderDetailsObj.ExpressPrice}}</span>
          </div>
          <div class="commodityTotal">
            <span>数量</span>
            <span>{{orderDetailsObj.Number}}</span>
          </div>
          <div v-if="orderDetailsObj.PayEnergyTicketNumber > 0" class="commodityTotal">
            <span>消费券</span>
            <span>{{orderDetailsObj.PayEnergyTicketNumber}}张</span>
          </div>
          <div class="commodityTotal">
            <span>实付款</span>
            <span>￥{{orderDetailsObj.PayPrice}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="orderIformationBox" style="padding-bottom: 4.0625rem;">
      <div class="orderIformation">
        <div class="orderIformationHead">
          订单信息
        </div>
        <div class="orderIformationFoor">
          <div class="commodityTotal" style="position: relative;">
            <span>订单编号：</span>
            <span>{{orderDetailsObj.OrderNo}}</span>
            <div @click="copy(orderDetailsObj.OrderNo)" style="position: absolute;right: 0;color: #D50606;">复制</div>
          </div>
          <div class="commodityTotal">
            <span>下单时间：</span>
            <span>{{orderDetailsObj.CreateTime}}</span>
          </div>
          <div class="commodityTotal">
            <span>支付方式：</span>
            <span v-if="orderDetailsObj.PayType === 1">支付宝支付</span>
            <span v-else-if="orderDetailsObj.PayType === 2">微信支付</span>
            <span v-else-if="orderDetailsObj.PayType === 3">余额支付</span>
            <span v-else-if="orderDetailsObj.PayType === 4">消费金支付</span>
            <span v-else-if="orderDetailsObj.PayType === 5">能量券支付</span>
            <span v-else-if="orderDetailsObj.PayType === 6">银联支付</span>
            <span v-else-if="orderDetailsObj.PayType === 7">微信支付(小程序)</span>
            <span v-else-if="orderDetailsObj.PayType === 8">支付宝支付-汇付</span>
            <span v-else-if="orderDetailsObj.PayType === 9">E云支付(支付宝)</span>
            <span v-else></span>
          </div>
          <div class="commodityTotal">
            <span>支付时间：</span>
            <span>{{orderDetailsObj.PayTime}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="priceInformationBox" v-if="orderDetailsObj.DeliveryStatus" style="padding-bottom: 4.0625rem;">
      <div class="priceInformation">
        <div class="priceInformationHead">
          快递信息
        </div>
        <div class="priceInformationFoor">
          <div class="commodityTotal">
            <span>发货时间</span>
            <span>{{orderDetailsObj.DeliveryTime}}</span>
          </div>
          <div class="commodityTotal">
            <span>快递公司</span>
            <span>{{orderDetailsObj.ExpressName}}</span>
          </div>
          <div class="commodityTotal" style="position: relative;">
            <span>快递单号</span>
            <span style="margin-right: 1.875rem;">{{orderDetailsObj.ExpressNo}}</span>
            <div @click="copy(orderDetailsObj.ExpressNo)" style="position: absolute;right: 0;color: #D50606;">复制</div>
          </div>
        </div>
      </div>
    </div>
    <div class="detailsFoorBtn">
      <div class="fr" @click="zaiciShop" v-if="OrderStatus === '4'">
        再次购买
      </div>
      <div class="fr" @click="payment" v-if="OrderStatus === '0'">
        去付款
      </div>
      <div class="fr" @click="confirmReceipt" v-if="OrderStatus === '2'">
        确认收货
      </div>
    </div>
  </div>
</template>

<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    Dialog,
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        orderDetailsObj: {},
        priceArea: {},
        OrderStatusStr: '',
        OrderStatus: '',
        hr: '',
        min: '',
        sec: '',
        CreateTime: '',
        isiOS: null,
        isAndroid: null
      }
    },
    created() {
      let option = this.$route.query
      this.navtitle(option)
      this.getOrderDetails(option.orderType, option.id)
      this.CreateTime = option.CreateTime
      this.countdown(this.CreateTime, 60)

    },
    methods: {
      countdown(val1, val2) {
        const that = this
        let newVal1 = val1
        if(val1){
          newVal1 = val1.replace(/-/g, '/')
        }
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
          that.countdown(that.CreateTime, 60)
        }, 1000)
      },
      // 判断导航标题
      navtitle(option) {
        this.OrderStatus = option.OrderStatus
        if (option.OrderStatus === '0') {
          this.OrderStatusStr = '待支付'
        } else if (option.OrderStatus === '1') {
          this.OrderStatusStr = '待发货'
        } else if (option.OrderStatus === '2') {
          this.OrderStatusStr = '待收货'
        } else if (option.OrderStatus === '4') {
          this.OrderStatusStr = '完成订单'
        }
        this.$store.commit('navTop/setTitle',{
          title: this.OrderStatusStr
        })
      },
      zaiciShop() {
        this.$router.push('/productdetails?pid=' + this.orderDetailsObj.ProductId)
      },
      async getOrderDetails(orderType, id) {
        let res = await this.$http.post('/api/v1/MyOrder/Detail', {
          id: id
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            loading: '加载'
          }
        })
        let data = res.data
        if (data.code === 1) {
          Toast.clear()
          this.orderDetailsObj = data.data
          this.priceArea = data.data.priceArea

        }
      },
      payment() {
        if (this.orderDetailsObj.IsManyPGPurchase === 1) {
          this.$router.push('/groupworkdetails/fugoupay?orderId=' + this.orderDetailsObj.OrderId + '&shifu=' + this
            .orderDetailsObj.PayPrice + '&createTime=' + this.orderDetailsObj.CreateTime)
        } else {
          this.$router.push('/confirmOrder/GoPay?orderId=' + this.orderDetailsObj.OrderId + '&shifukuan=' + this
            .orderDetailsObj.PayPrice + '&createTime=' + this.orderDetailsObj.CreateTime)
        }

      },
      confirmReceipt() {
        let that = this
        Dialog.confirm({
          title: '提示',
          message: '是否确认收货'
        }).then(async () => {
          let res1 = await that.$http.post('/api/v1/MyOrder/ConfirmReceive', {
            orderid: this.orderDetailsObj.OrderId
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp(),
              loading: '加载'
            }
          })
          if (res1 && res1.data.code == 1) {
            Toast('收货成功');
            this.$router.push('/orderList?orderType=Complete')
          }
        })
      },
      copy(numberOrder) {
        const u = navigator.userAgent;
        const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isiOS) {
          //vue调用iOS方法，且传值给iOS （iOS 方法名为 onItemClick）
          window.webkit.messageHandlers.copy.postMessage(numberOrder);
        } else {
          //vue调用Android方法，且传值给Android （Android方法名为 onItemClick）
          // eslint-disable-next-line
          nuandouAndroid.copy(numberOrder);
        }
      }
    }
  }
</script>

<style lang="less">
  .orderListDetailsBox {
    background: #F7F7F7;

    .orderListDetailsHead {
      padding: .625rem;
      background: #FFFFFF;

      .name {
        font-size: 1rem;
        margin-right: .625rem;
      }

      .addressFoor {
        font-size: .75rem;
        color: #b8b8b8;
        margin-top: .625rem;
        padding-bottom: .625rem;
      }
    }

    .orderListItemMain {
      display: flex;
      padding: .625rem;
      background: #FFFFFF;
      margin-top: .625rem;

      .orderListItemMainFl {
        margin-right: .3125rem;
      }

      .orderListItemMainRl {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .orderListItemMainRlName {
          font-size: .875rem;
        }

        .orderListItemMainRlBao {
          font-size: .875rem;
        }
      }
    }

    .orderIformationBox {
      padding: .9375rem;
      padding-bottom: 0;
      background: #FFFFFF;
      margin-top: .625rem;

      .orderIformation {
        .orderIformationHead {
          border-bottom: .0625rem solid #EEEEEE;
          height: 2.8125rem;
          line-height: 2.8125rem;
        }

        .orderIformationFoor {
          .commodityTotal {
            display: flex;
            height: 2.6875rem;
            line-height: 2.6875rem;
            font-size: .875rem;
            position: relative;

            text:nth-child(1) {
              color: #333333;
              margin-right: 1.875rem;
            }

            text:nth-child(2) {
              color: #959595;
            }
          }
        }
      }
    }

    .priceInformationBox {
      padding: .9375rem;
      // padding-bottom: 80upx;
      background: #FFFFFF;
      margin-top: .625rem;

      .priceInformation {
        .priceInformationHead {
          border-bottom: .0625rem solid #EEEEEE;
          height: 2.8125rem;
          line-height: 2.8125rem;
        }

        .priceInformationFoor {
          .commodityTotal {
            display: flex;
            justify-content: space-between;
            height: 2.6875rem;
            line-height: 2.6875rem;
            font-size: .875rem;

            text:nth-child(1) {
              color: #333333;
            }

            text:nth-child(2) {
              color: #D50606;
            }
          }
        }
      }
    }

    .detailsFoorBtn {
      position: fixed !important;
      width: 100%;
      height: 2.5rem;
      // line-height: 2.5rem;
      background-color: #fff;
      padding: 0rem;
      position: relative;
      bottom: 0rem;
      left: 0rem;
      padding-top: .625rem;
      padding-right: .625rem;
      overflow: hidden;

      .fr {
        float: right;
        margin-right: 1.25rem;
        width: 5rem;
        height: 1.875rem;
        text-align: center;
        line-height: 1.875rem;
        font-size: .875rem;
        color: #fff;
        border-radius: 1.875rem;
        background-image: linear-gradient(to right, #FBB663, #FB6463);
      }
    }
  }
</style>