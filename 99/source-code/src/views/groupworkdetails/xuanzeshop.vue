<template>
  <div class="commoditypreview">

    <div class="mainFooterBox" v-for="(item,index) in commodityList" :key="index">
      <div
        @click="toUrl('/groupworkdetails/commodittypepreviewDeatils?pid=' + item.ProductId + '&type=xuan' + '&OrderId=' + OrderId + '&pirceTitle=' + pirceTitle + '&priceAreaId=' + priceAreaId)">
        <div class="shopImg">
          <img :src="item.MainImage" mode="">
        </div>
      </div>
      <div class="" @click="selectNow(item)"
        style="height: 36px;line-height: 36px;text-align: center;background-color:#D50606;color: #FFFFFF;border-radius: 0px 0px 10px 10px;">
        立即选取
      </div>
    </div>
    <div v-show="isLoadMore" v-if="commodityList.length === 0">
      <!-- <uni-load-more :status="loadStatus"></uni-load-more> -->
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  // import uniLoadMore from '@/components/uni-load-more/uni-load-more'
  export default {
    data() {
      return {
        commodityList: [],
        priceAreaId: null,
        pageIndex: 1,
        pageSize: 10,
        loadStatus: 'loading', //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
        isLoadMore: false,
        OrderId: '',
        pirceTitle: ''
      }
    },
    components: {
      // uniLoadMore
    },
    created() {
      let option = this.$route.query
      this.$store.commit('navTop/setTitle',{
        title: option.pirceTitle + '-商品列表'
      })
      this.pirceTitle = option.pirceTitle
      this.priceAreaId = option.priceAreaId
      this.OrderId = option.OrderId
      this.getList()
    },
    onBackPress() {
      this.$router.push('/ManyPGOrderList/ManyPGOrderList?type=Winning')
      return true
    },
    onReachBottom() { //上拉触底函数
      if (!this.isLoadMore) { //此处判断，上锁，防止重复请求
        if (this.commodityList.length >= 10) {
          this.isLoadMore = true
          this.pageIndex += 1
          this.getList()
        }
      }
    },
    methods: {
      async getList() {
        let res = await this.$http.post('/api/v1/product/getlist', {
          priceareaid: this.priceAreaId,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
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
          for (let i = 0; i < data.data.list.length; i++) {
            this.commodityList.push(data.data.list[i])
          }
          this.totalCount = data.data.totalCount
          if (this.commodityList.length === this.totalCount) {
            this.isLoadMore = false
          }
        }
      },
      selectNow(item) {
        // console.log(item)
      this.$router.push('/groupworkdetails/selectNow?ProductId=' + item.ProductId + '&OrderId=' + this.OrderId + '&pirceTitle=' + this
            .pirceTitle + '&priceAreaId=' + this.priceAreaId)
      }
    }
  }
</script>

<style lang="less">
  .commoditypreview {
    background: #F7F7F7;

    .mainFooterBox {
      float: left;
      width: 175px;
      box-shadow: 0px 1px 4px 0px rgba(195, 195, 195, 0.5);
      border-radius: 6px;
      margin-top: 10px;
      margin-left: 7px;

      .shopImg {
        width: 100%;
        height: 175px;

        image {
          width: 100%;
          height: 175px;
        }
      }

      .shopName {
        font-size: 10px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #3E332D;
        margin-left: 9px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .energy {
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        margin-top: 8px;
        margin-left: 9px;

        text:nth-child(1) {
          color: #d50606;
          font-size: 20px;
        }

        text:nth-child(2) {
          color: #999;
          font-size: 16px;
          text-decoration: line-through;
        }
      }

      .exchange {
        font-size: 6px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #888888;
        margin-top: 15px;
        margin-left: 9px;
        padding-bottom: 13px;
      }
    }
  }
</style>