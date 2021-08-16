<template>
  <div class="order-list">
    <div class="back" @click="back">
      <img src="../../nativeplugins/JY-FLSPlugin/android/res/drawable/back_icon1.png" mode="">
      订单详情
    </div>
    <div class="content" :style="{height: `calc(100vh - ${detail.PayStatus ? 9.075 : 5.72}rem)`}">
      <div class="content-top">
        <div class="title">
          <div>{{detail.AddressReceiver}}</div>
          <div>{{detail.AddressMobile}}</div>
        </div>
        <div>
          {{detail.AddressDetail}}
        </div>
        <img class="bottom" :src="imgSrc('dd_adress_mail.png')" mode="">
      </div>
      <div class="foot">
        <div class="order">
          <div class="order-img">
            <img :src="detail.ProductMainImage?detail.ProductMainImage+'!100r70':''" mode="">
          </div>
          <div class="order-right">
            <div class="title">{{detail.ProductTitle}}</div>
            <div class="price">￥{{detail.PayPrice}}/件</div>
          </div>
        </div>
        <div class="foot-2">
          <div>团购成功</div>
          <div class="t">
            <img v-for="i in 5" :key="i" :style="{right: (i-1)*8+'px'}"
              src="http://web991-oss.jiujiupingou.com/img/001.png" mode="">
            <img :style="{right: 42+'px'}" :src="imgSrc('ic_user_more.png')" mode="">
          </div>
        </div>
      </div>
      <div class="order-1">
        <div class="order-item">
          <div class="order-left">任务次数</div>
          <div class="order-right">{{detail.ManyPGLotteryStatus === 1 ? (detail.UserTaskNum + 1) : detail.UserTaskNum}}
          </div>
        </div>
        <div class="order-item">
          <div class="order-left">累计奖励</div>
          <div class="order-right">￥{{detail.UserTaskReturnPrice}}</div>
        </div>
      </div>
      <div class="order-2">
        <div class="order-item">
          <div class="order-left">商品单价</div>
          <div class="order-right">￥{{detail.UnitPrice}}</div>
        </div>
        <div class="order-item">
          <div class="order-left">运费</div>
          <div class="order-right">￥0.00</div>
        </div>
        <div class="order-item">
          <div class="order-left">数量</div>
          <div class="order-right">1</div>
        </div>
        <div class="order-item">
          <div class="order-left">总额</div>
          <div class="order-right">￥{{detail.UnitPrice}}</div>
        </div>
      </div>
      <div class="order-3">
        <div class="order-item">
          <div class="order-item-1">订单编号：</div>
          <div class="order-item-2">{{detail.OrderNo}}</div>
        </div>
        <div class="order-item">
          <div class="order-item-1">下单时间：</div>
          <div class="order-item-2">{{detail.CreateTime}}</div>
        </div>
        <div class="order-item">
          <div class="order-item-1">支付方式：</div>
          <div class="order-item-2">{{payType}}</div>
        </div>
        <div class="order-item">
          <div class="order-item-1">支付时间：</div>
          <div class="order-item-2">{{detail.PayTime}}</div>
        </div>
      </div>
      <div class="order-4">
        <div class="order-item">
          <div class="order-item-1">发货时间：</div>
          <div class="order-item-2">{{detail.DeliveryStatus?detail.DeliveryTime:'暂未发货'}}</div>
        </div>
        <div class="order-item">
          <div class="order-item-1">快递公司：</div>
          <div class="order-item-2">{{detail.DeliveryStatus?detail.ExpressName:'无'}}</div>
        </div>
        <div class="order-item">
          <div class="order-item-1">快递单号：</div>
          <div class="order-item-2">{{detail.DeliveryStatus?detail.ExpressNo:'无'}}</div>
        </div>
      </div>
    </div>
    <div class="order-foot" v-if="detail.PayStatus">
      <div class="left" @click="toGoodsDetail">再来一单</div>
      <div class="right" v-if="!detail.ReceivingStatus && detail.DeliveryStatus" @click="save">确认收货</div>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  import {
    imgUrl
  } from '../../api/config.js'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  export default {
    data() {
      return {
        id: null,
        detail: {}
      }
    },
    created() {
      let option = this.$route.query
      this.id = option.id
      this.getDetail(option.id)
    },
    mounted() {

    },
    computed: {
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      },
      payType() {
        switch (this.detail.PayType) {
          case 3:
            return '余额'
          default:
            return '现金支付'
        }
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      toGoodsDetail() {
        this.$router.push('/newTeam/goodsDetail?mpId=' + this.detail.ProductId)
      },
      async save() {
        let res = await this.$http.post('/api/v3/ManyPGProduct/ConfirmReceive', {
          orderId: this.id
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
          Toast('确认收货成功');
          setTimeout(() => {
            this.$router.go(-1)
          }, 1000)
        }
      },
      async getDetail(id) {
        Toast.loading({
          duration: 0,
          message: '正在加载...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v3/ManyPGProduct/GetManyOrderDetail', {
          id
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
          this.detail = data.data
          this.detail.PayPrice = data.data.PayPrice.toFixed(2)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .back {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 30px;
    padding: 7px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    background-image: linear-gradient(to right, #FF1738, #FF4560);
    z-index: 9999;

    img {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 20px;
      height: 20px;
      z-index: 99999;
    }
  }

  .order-list {
    height: calc(100vh - 2.75rem);
    padding-top: 2.75rem;
    color: #333;
    background-image: linear-gradient(to right, #FF1738, #FF4560);
    overflow: hidden;

    .content {
      padding: 1rem 0.5rem;
      border-radius: 1rem 1rem 0 0;
      background-color: #F3F4F8;
      overflow: auto;

      .content-top,
      .foot,
      .order-1,
      .order-2,
      .order-3,
      .order-4 {
        padding: 1rem 0.75rem;
        border-radius: 0.8rem;
        margin-bottom: 0.5rem;
        background-color: #fff;
      }

      .content-top {
        position: relative;

        .title {
          margin-bottom: 0.625rem;

          >div {
            display: inline-block;
            font-weight: bold;

            &:last-child {
              margin-left: 0.5rem;
            }
          }
        }

        .jiantou {
          position: absolute;
          top: 35px;
          right: 15px;
          width: 0.5rem;
          height: 0.85rem;
        }

        .bottom {
          position: absolute;
          bottom: 0;
          width: calc(100% - 1.6rem);
          height: 2px;
        }
      }

      .foot {
        margin-top: 0.625rem;

        .order {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #E5E5E5;

          .order-img {
            width: 5.625rem;
            height: 5.625rem;

            img {
              max-width: 100%;
              max-height: 100%;
              border-radius: 0.5rem;
            }
          }

          .order-right {
            width: calc(100% - 6.625rem);
            padding-left: 1rem;

            .title {
              font-size: 14px;
            }

            .num {
              margin-top: 2px;
              font-size: 11px;
              color: #999;
            }

            .price {
              position: absolute;
              bottom: 1.5rem;
              font-size: 13px;
            }
          }
        }

        .foot-2 {
          position: relative;
          display: flex;
          margin-top: 1.125rem;

          >div {
            flex: 1;
            color: #666;
            font-size: 12px;
          }

          .t {
            img {
              position: absolute;
              width: 16px;
              height: 16px;
            }
          }
        }
      }

      .order-1,
      .order-2 {
        font-size: 13px;

        .order-item {
          display: flex;
          margin-bottom: 1rem;

          &:last-child {
            margin-bottom: 0;

            .order-right {
              color: #FF1738;
            }
          }

          >div {
            flex: 1;
          }

          .order-left {
            color: #999;
          }

          .order-right {
            text-align: right;
          }
        }
      }

      .order-3,
      .order-4 {
        .order-item {
          font-size: 13px;
          margin-bottom: 1rem;

          &:last-child {
            margin-bottom: 0;
          }

          >div {
            display: inline-block;
          }

          .order-item-1 {
            color: #999;
          }
        }
      }
    }

    .order-foot {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 3.375rem;
      line-height: 3.375rem;
      background-color: #fff;
      text-align: center;

      >div {
        display: inline-block;
        width: 8.5rem;
        height: 2.25rem;
        border-radius: 2.25rem;
        border: 1px solid #FF1738;
        line-height: 2.25rem;
        text-align: center;
      }

      .left {
        margin-right: 5%;
        color: #FF1738;
      }

      .right {
        margin-left: 5%;
        color: #fff;
        background-color: #FF1738;
      }
    }
  }
</style>