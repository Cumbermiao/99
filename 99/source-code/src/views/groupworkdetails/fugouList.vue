<template>
  <div class="commoditypreview">
    <div v-for="(item,index) in commodityList" :key="index"
      @click="toUrl('/groupworkdetails/fugouDetails?pid=' + item.ProductId + '&priceAreaId=' + priceAreaId + '&Price=' + Price)"
      hover-class="none">
      <div class="mainFooterBox">
        <div class="shopImg">
          <img :src="item.MainImage" mode="">
        </div>
        <div class="shopName">
          {{item.Title}}
        </div>
        <div class="energy">
          <span>￥{{item.Price}}</span>
          <span>￥{{item.OldPrice}}</span>
        </div>
        <div class="exchange">
          已售{{item.SaleNumber}}件
        </div>
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
        pageSize: 100000000,
        loadStatus: 'loading', //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
        isLoadMore: false,
        Price: ''
      }
    },
    // components: {
    // 	uniLoadMore
    // },
    created() {
      let option = this.$route.query
      this.priceAreaId = option.priceAreaId
      this.Price = option.Price
      this.getList()
    },
    // onBackPress() {
    //   this.$router.push('/groupworkdetails/groupworkdetails?Price=' + this.Price + '&PriceAreaId=' + this.priceAreaId)
    //   return true
    // },
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
      toUrl(url) {
        this.$router.push(url)
      },
      async getList() {
        let res = await this.$http.post('/api/v1/product/getlist', {
          purchaseAreaId: this.priceAreaId,
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
    }
  }
</script>

<style lang="less">
  .commoditypreview {
    display: flex;
    flex-wrap: wrap;
    background: #F7F7F7;
    padding-top: .625rem;
    >div{
      width: calc(50% - 0.68rem);
      margin: 0 .4375rem .625rem;
      &:nth-child(2n){
        margin-left: unset;
      }
    }

    .mainFooterBox {
      box-shadow: 0rem .0625rem .25rem 0rem rgba(195, 195, 195, 0.5);
      border-radius: .375rem;

      .shopImg {
        width: 100%;

        img {
          width: 100%;
          height: 10.9375rem;
        }
      }

      .shopName {
        font-size: .625rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #3E332D;
        margin-left: .5625rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .energy {
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        margin-top: .5rem;
        margin-left: .5625rem;

        span:nth-child(1) {
          color: #d50606;
          font-size: 1.25rem;
        }

        span:nth-child(2) {
          color: #999;
          font-size: 1rem;
          text-decoration: line-through;
        }
      }

      .exchange {
        font-size: .375rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #888888;
        margin-top: .9375rem;
        margin-left: .5625rem;
        padding-bottom: .8125rem;
      }
    }
  }
</style>