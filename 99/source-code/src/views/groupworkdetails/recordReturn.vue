<template>
  <div class="recordRetuturnBox">
    <div class="" style="height: .9375rem;background: #F7F7F7;">

    </div>
    <div class="recordRetuturnList">
      <div class="recordRetuturnListItem" v-for="(item,index) in infoList" :key="index">
        <div class="headReturn">
          <div class="">
            <span style="color: #333333;font-weight: 500;" v-if="item.ReturnType === 1">原路返回</span>
            <span style="color: #333333;font-weight: 500;" v-if="item.ReturnType === 2">兑换等价商品</span>
            <span v-if="item.ReturnType === 1"
              style="color: #FF4040;font-weight: 500;">+￥{{item.DrawingInfo.ReturnAmount}}</span>
          </div>
          <div class="">
            <div class="" v-if="item.ReturnType === 1">
              <span v-if="item.ReturnStatus === 1" style="color: #FFB017;">返还中</span>
              <span v-if="item.ReturnStatus === 2" style="color: #BBBBBB;">已返还</span>
              <span v-if="item.ReturnStatus === 3" style="color: #FF4040;">返还失败</span>
            </div>
            <div class="" v-else>
              <span v-if="item.OrderInfo.Status === 0">待发货</span>
              <span v-if="item.OrderInfo.Status === 1">待发货</span>
              <span v-if="item.OrderInfo.Status === 2">待收货</span>
              <span v-if="item.OrderInfo.Status === 3">待评价</span>
              <span v-if="item.OrderInfo.Status === 4">已完成</span>
              <span v-if="item.OrderInfo.Status === 5">换货</span>
              <span v-if="item.OrderInfo.Status === 6">关闭</span>
            </div>
          </div>
        </div>
        <div class="">
          <span style="font-size: .875rem;color: #999999;" v-if="item.OrderInfo.ProductTitle"> <span>商品名称:</span>
            {{item.OrderInfo.ProductTitle}}</span>
        </div>
        <div class="foorReturn">

          <div style="flex: 1;" class="">
            <span v-if="item.ReturnType === 1">{{item.DrawingInfo.OrgName}} <br> {{item.DrawingInfo.CardNum}}</span>
            <span v-if="item.ReturnType === 2"> <span v-if="item.OrderInfo.OrderNo">订单号:</span>
              {{item.OrderInfo.OrderNo}}</span><br>
            <span v-if="item.ReturnType === 2"> <span v-if="item.OrderInfo.ExpressNo">快递单号:</span>
              {{item.OrderInfo.ExpressNo}}</span>
          </div>
          <div class="">
            {{item.Time}}
          </div>
        </div>
        <div class="" style="text-align: right;">
          <span @click="receivingGoods(item)"
            style="display: inline-block;width: 3.75rem;height: 1.875rem;line-height: 1.875rem;font-size: .75rem;background: #007AFF;color: #FFFFFF;text-align: center;border-radius: .3125rem;"
            v-if="item.OrderInfo.Status === 2">确认收货</span>
        </div>
      </div>

    </div>
    <uni-load-more :status="status" :icon-size="14" :content-text="contentText" />
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
        infoList: [],
        pagesize: 10,
        pageIndex: 1,
        reload: false,
        totalCount: 0,
        status: 'more',
        contentText: {
          contentdown: '上拉加载更多~',
          contentrefresh: '加载中',
          contentnomore: '没有更多数据了~'
        },
        PriceAreaId: ''
      }
    },
    onReachBottom() { //上拉触底函数
      if (this.totalCount > this.infoList.length) {
        // this.status = 'loading';
        this.pageIndex++
        this.getList()
      } else {
        this.status = 'noMore'
      }
    },
    created() {
      let option = this.$route.query
      this.getList(option.PriceAreaId)
      this.PriceAreaId = option.PriceAreaId
    },
    methods: {
      async getList(PriceAreaId) {
        let res = await this.$http.post('/api/v1/WinBack/Record', {
          pageIndex: this.pageIndex,
          pageSize: this.pagesize,
          priceAreaId: PriceAreaId
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
          this.totalCount = data.data.totalCount
          if (data.data.totalCount > 0) {
            let dataMap = data.data.list
            this.infoList = this.reload ? dataMap : this.infoList.concat(dataMap);
            this.reload = false;
          } else {
            this.infoList = []

          }
          if (this.totalCount === this.infoList.length) {
            this.reload = false;
            this.status = 'noMore'
          }
        }
      },
      receivingGoods(item) {
        let that = this
        Dialog.confirm({
          title: '提示',
          message: '是否确认收货'
        }).then(async () => {
          let res1 = await that.$http.post('/api/v1/WinBack/ConfirmReceive', {
            orderId: item.OrderInfo.OrderId
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp(),
              loading: '加载'
            }
          })
          let data = res1.data
          if (data.code === 1) {
            Toast('收货成功');
            this.infoList = []
            that.getList(that.PriceAreaId)
          }
        })

      }
    }
  }
</script>

<style lang="less">
  .recordReturn {
    height: 100%;
    background: #F7F7F7;
  }

  .recordRetuturnList {
    padding: .625rem;
    background: #FFFFFF;

    .recordRetuturnListItem {
      border-bottom: .0625rem solid #e5e5e5;
      padding: 1rem 0;

      .headReturn {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;

      }

      .foorReturn {
        margin-top: .5625rem;
        display: flex;
        justify-content: space-between;
        font-size: .8125rem;
        font-weight: 500;
        color: #999999;
      }
    }
  }
</style>