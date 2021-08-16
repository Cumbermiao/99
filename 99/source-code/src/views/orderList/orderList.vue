<template>
  <div class="orderListBox">
    <div class="" style="display: flex;justify-content: center;padding-top: 6.25rem;" v-if="commodityList.length === 0">
      <img style="width: 10.125rem;" :src="imgSrc('test.png')" mode="widthFix">
    </div>
    <div class="" v-else>
      <div class="orderListItem" v-for="(item,index) in commodityList" :key="index">
        <div class="orderListItemHead" @click="daizhifu(item)">
          <div v-if="item.OrderStatus === 4" class="orderListItemHeadFl" style="font-size: .875rem;height: 1.3125rem;">
            <span>付款时间：{{item.PayTime}}</span>
          </div>
          <div v-else class="orderListItemHeadRl">
            <span v-if="item.OrderStatus === 0" style="font-size: .875rem;">等待买家付款</span>
            <span v-else-if="item.OrderStatus === 1" style="font-size: .875rem;">待发货</span>
            <span v-else-if="item.OrderStatus === 2" style="font-size: .875rem;">待收货</span>
          </div>
        </div>
        <div class="orderListItemMain" @click="daizhifu(item)">
          <div class="orderListItemMainFl">
            <img style="width: 6.71875rem;height: 6.71875rem;" :src="item.ProductMainImage" mode="">
          </div>
          <div class="orderListItemMainRl">
            <div class="orderListItemMainRlName">
              {{item.ProductTitle}}
            </div>
            <div class="orderListItemPalyFl">
              <div class="title"><span>商品单价:</span> ￥{{item.UnitPrice}}</div>
              <div class="num">购买数量×{{item.Number}}</div>
            </div>
            <div class="orderListItemMainRlBao">
              <div class="title">
                <span>订单号:{{item.OrderNo}}</span>
              </div>
              <div class="orderListItemPalyRl">
                <span>实付款:</span>
                <span style="color: #FF4200;">￥{{item.PayPrice}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="orderListItemPaly" @click="daizhifu(item)">
          <div class="img">
            <img v-for="(item,index) in 5" :key="index" style="width: 1.3125rem;"
              src="http://web991-oss.jiujiupingou.com/img/001.png" mode="widthFix">
          </div>
          <div class="title">大陆地区包邮</div>
        </div>
        <div class="orderListItemFoorBtn">
          <span class="orderBtnRrey close" v-if="item.OrderStatus === 0" @click="cancelOrder(item)">取消订单</span>
          <span class="orderBtnRrey" v-if="item.OrderStatus !== 0"
            @click="orderListDetails(item.OrderId,item)">订单详情</span>
          <span class="orderBtnRed" v-if="item.OrderStatus === 0" @click="payment(item)">付款</span>
          <span class="orderBtnRed save"
            v-if="(item.OrderStatus !== 0) && (item.OrderStatus !== 4) && (item.OrderStatus !== 1)"
            @click="confirmReceipt(item.OrderId)">确定收货</span>
        </div>
      </div>
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
  import {
    Dialog,
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        orderTypeStr: null,
        orderType: null,
        pageSize: 9999,
        pageIndex: 1,
        commodityList: [],
        reload: false,
        status: 'more',
        contentText: {
          contentdown: '上拉加载更多~',
          contentrefresh: '加载中',
          contentnomore: '我是有底线的~'
        }
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
      this.navtitle(option)
    },
    onBackPress() {
      this.$router.push({path:'/home/user',replace:true})
      return true
    },
    mounted() {
      this.getOrderList()
    },
    methods: {
      daizhifu(item) {
        if (item.OrderStatus === 0) {
          this.$router.push('/orderListDetails?orderType=' + this.orderType + '&id=' + item.OrderId + '&OrderStatus=' +
            item.OrderStatus + '&CreateTime=' + item.CreateTime)
        }
      },
      // 判断导航标题
      navtitle(option) {
        this.orderType = option.orderType
        if (option.orderType === 'All') {
          this.orderTypeStr = '全部订单'
        } else if (option.orderType === 'WaitPay') {
          this.orderTypeStr = '待支付'
        } else if (option.orderType === 'WaitSend') {
          this.orderTypeStr = '待发货'
        } else if (option.orderType === 'WaitReceive') {
          this.orderTypeStr = '待收货'
        } else if (option.orderType === 'Complete') {
          this.orderTypeStr = '完成订单'
        }
        this.$store.commit('navTop/setTitle',{
          title: this.orderTypeStr
        })
      },

      async getOrderList() {
        let res = await this.$http.post('/api/v1/MyOrder/GetOrderList', {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          orderType: this.orderType
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
          this.commodityList = data.data
        }
      },
      // 查看订单详情
      orderListDetails(id, item) {
        this.$router.push('/orderList/orderListDetails?orderType=' + this.orderType + '&id=' + id + '&OrderStatus=' +
          item.OrderStatus)
      },
      confirmReceipt(id) {
        let that = this
        Dialog.confirm({
          title: '提示',
          message: '是否确认收货',
          showCancelButton: true
        }).then(async () => {
          let res1 = await that.$http.post('/api/v1/MyOrder/ConfirmReceive', {
            orderid: id
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
            this.getOrderList()
          }
        })
      },
      payment(item) {
        if (item.IsManyPGPurchase === 1) {
          this.$router.push('/groupworkdetails/fugoupay?orderId=' + item.OrderId + '&shifu=' + item.PayPrice +
            '&createTime=' + item.CreateTime)
        } else {
          this.$router.push('/confirmOrder/GoPay?orderId=' + item.OrderId + '&shifukuan=' + item.PayPrice +
            '&createTime=' + item.CreateTime)
        }

      },
      cancelOrder(item) {
        Dialog.confirm({
          title: '提示',
          message: '是否取消订单'
        }).then(async () => {
          let res1 = await this.$http.post('/api/v1/MyOrder/CancelOrder', {
            orderId: item.OrderId
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp(),
              loading: '加载'
            }
          })
          if (res1 && res1.data.code == 1) {
            Toast('取消成功');
            this.getOrderList()
          }

        })
      }
    }
  }
</script>

<style lang="less">
  .orderListBox {
    height: 100vh;
    background: #F7F7F7;

    .orderListItem {
      padding: .625rem;
      background: #FFFFFF;
      margin-bottom: .625rem;

      .orderListItemHead {
        display: flex;
        justify-content: space-between;
        text-align: right;
        color: #FF4200;

        .orderListItemHeadFl {
          flex: 1;
          text-align: left;
          margin-bottom: .3125rem;
          color: #757575;
        }

        .orderListItemHeadRl {
          width: 100%;
          margin-bottom: .4375rem;
          text-align: right;
        }
      }

      .orderListItemMain {
        display: flex;
        flex-wrap: wrap;

        .orderListItemMainFl {
          width: 6.6875rem;
          margin-right: .3125rem;
        }

        .orderListItemMainRl {
          width: calc(100% - 7.3125rem);
          padding-left: .3125rem;

          .orderListItemMainRlName {
            height: 2.5rem;
            font-weight: bold;
            font-size: .875rem;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }

      .orderListItemPaly {
        display: flex;
        flex-wrap: wrap;
        border-bottom: .0625rem solid #D8D8D8;
        margin-top: .3125rem;

        .img {
          width: calc(100% - 6.25rem);
          height: 1.875rem;
          overflow: hidden;
        }

        .title {
          width: 6.25rem;
          font-size: .75rem;
          text-align: right;
        }
      }

      .orderListItemFoorBtn {
        text-align: right;
        margin-top: .625rem;
        font-size: .875rem;

        >span {
          margin-left: .625rem;
          height: 1.625rem;
          display: inline-block;
          line-height: 1.5625rem;
        }

        .orderBtnRrey {
          width: 5.625rem;
          text-align: center;
          border: .0625rem solid #FF4200;
          color: #FF4200;
          border-radius: 1.0625rem;
        }

        .close {
          border: .0625rem solid #757575;
          color: #757575;
        }

        .orderBtnRed {
          width: 5rem;
          text-align: center;
          border: .0625rem solid #FF4200 !important;
          color: #FF4200;
          border-radius: 1.0625rem;
        }

        .save {
          border: unset;
          color: #fff;
          background-image: linear-gradient(to right, #FB6463, #FBB663);
        }
      }
    }
  }

  .orderListItemPalyFl {
    display: flex;
    flex-wrap: wrap;
    font-size: .8125rem;
    margin-top: .625rem;

    .title {
      width: calc(100% - 6.25rem);
      color: #FF4200;

      span {
        color: #757575
      }
    }

    .num {
      width: 6.25rem;
      text-align: right;
      color: #757575;
    }
  }

  .orderListItemMainRlBao {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.25rem;

    .title {
      width: calc(100% - 6.25rem);
      font-size: .75rem;
    }

    .orderListItemPalyRl {
      width: 6.25rem;
      text-align: right;
      font-size: .875rem;
    }
  }
</style>