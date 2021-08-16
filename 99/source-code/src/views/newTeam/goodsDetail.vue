<template>
  <div class="goods-detail">
    <div class="goods-1">
      <swipe class="swiper" :autoplay="2000" indicator-color="white">
        <swipe-item v-for="(item, i) in detail.productMainImageList || []" :key="i">
          <img :src="item.ImageUrl+'!600r70'">
        </swipe-item>
      </swipe>
      <img class="back" :src="imgSrc('shopfanhui.png')" mode="" @click="back">
      <div class="bottom">
        <div class="heart">团购</div>
        <div class="money">￥<div>{{price1(detail.price)}}</div>.{{price2(detail.price)}}</div>
        <div class="old-price">价格￥{{detail.oldPrice}}</div>
        <div class="buy">
          <img src="https://static.jiujiupingou.com/H5Static/images/xq_ic_star.png" mode="" v-for="i in 5" :key="i+100">
        </div>
      </div>
    </div>
    <div class="goods-2">
      <div class="title">【{{detail.price}}专区】{{detail.title}}</div>
      <div class="title-1">生鲜产品不支持拒收，如有破损联系客服秒赔付</div>
    </div>
    <div class="goods-3">
      <div class="goods-item">
        <div class="left">活动</div>
        <div class="right">
          <div class="right-1">返回积分</div>
          <div class="right-2">团购结束后获得购物积分</div>
        </div>
      </div>
    </div>
    <div class="goods-4">
      <div class="goods-item">
        <div class="left">已选</div>
        <div class="right">
          <div class="right-3">1件</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="left">运费</div>
        <div class="right">
          <div class="right-3">包邮<div class="r">（如有退货情况发生，邮费将由用户自理）</div>
          </div>
          <div class="right-4">农副产品请当面签收，如遇损坏可要求退回。</div>
        </div>
      </div>
    </div>
    <div class="goods-8">
      <div class="top-1">
        <div class="left">
          <div style="color: #FF1738;">99</div>人在团购，可直接参与
        </div>
        <div class="right">
          仅显示3个可参与的团购
        </div>
      </div>
      <div class="item" @click="goOrder">
        <img src="http://web991-oss.jiujiupingou.com/img/001.png" mode="">
        <div class="left">九九生活用户</div>
        <div class="right">
          <div class="right-1">还差1人成团</div>
          <div class="right-2">去团购</div>
        </div>
      </div>
      <div class="item" @click="goOrder">
        <img src="http://web991-oss.jiujiupingou.com/img/001.png" mode="">
        <div class="left">九九生活用户</div>
        <div class="right">
          <div class="right-1">还差1人成团</div>
          <div class="right-2">去团购</div>
        </div>
      </div>
      <div class="item" @click="goOrder">
        <img src="http://web991-oss.jiujiupingou.com/img/001.png" mode="">
        <div class="left">九九生活用户</div>
        <div class="right">
          <div class="right-1">还差1人成团</div>
          <div class="right-2">去团购</div>
        </div>
      </div>
    </div>
    <div class="goods-5">
      <div class="goods-item">
        <div class="left">温馨提示</div>
        <div class="right">
          部分地区因疫情影响、天气等原因实施物流管制，拍下商品将无法发货。
        </div>
      </div>
    </div>
    <div class="goods-6">
      <img v-for="(item,index) in detail.productDetailImageList || []" :key='index' :src="item.ImageUrl+'!600r70'"
        mode="widthFix">
    </div>
    <div class="goods-7">
      <div class="goods-item">
        团购价格是您团购购买商品时的价格，划线价格可能是商品的专柜价、吊牌价、零售价、指导价或该商品曾展示过的销售价等，并非价格法《禁止价格欺诈行为的规定》。规定的原价，仅供您参考。
      </div>
      <div class="goods-item">
        特别提示，实际的成交价格可能因您使用优惠券等发生变化，最终以确认订单页的价格为准，若商家单独对价格进行说明的，以商家的表述为准。
      </div>
      <div class="goods-item">
        以上页面展示信息仅供参考，商品以实物为准，如快递无法配送买家提供的送货地址，将默配送到最近距离的送货地，由本人自提。新疆、西藏、内蒙古、青海、宁夏、甘肃、海南部分偏远地区以及港、澳、台邮费自理，可联系客服。
      </div>
      <div class="goods-item">
        收货人在签收商品时应对商品进行验收后再签收，“如签收后发现商品除质量问题以外，需退换货处理的，用户需自己承担相应的物流费用。”
      </div>
    </div>
    <div class="foot">
      <!-- <div class="left" @click="toShopList">更多推荐</div> -->
      <div class="right" @click="goOrder">
        <div>立即团购</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Toast,
    Swipe, 
    SwipeItem,
  } from 'vant';
  import {
    imgUrl
  } from '../../api/config.js'
  import http from '../../api/index.js'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  export default {
    components:{
      Swipe,
      SwipeItem
    },
    data() {
      return {
        mpId: '',
        detail: {}
      }
    },
    computed: {
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      },
      price1() {
        return (price) => {
          let p = (price?price:'0.0') + ''
          return p ? p.split('.')[0] : '0'
        }
      },
      price2() {
        return (price) => {
          let p = price + ''
          if (p.split('.')[1]) {
            return p.split('.')[1].length === 1 ? p.split('.')[1] + '0' : p.split('.')[1]
          } else {
            return '00'
          }
        }
      }
    },
    created() {
      let option = this.$route.query
      this.mpId = option.mpId
      this.getDetail()
    },
    methods: {
      toShopList() {
        this.$router.push('/newTeam/shopList?priceAreaId=' + this.detail.priceAreaId)
      },
      back() {
        this.$router.go(-1)
      },
      goOrder() {
        this.$router.push(
          `/newTeam/orderList?detail=${JSON.stringify(this.detail)}&priceAreaId=${this.detail.priceAreaId}`)
      },
      async getDetail() {
        Toast.loading({
          duration: 0,
          message: '正在加载...',
          forbidClick: true,
        });
        let res = await http.post('/api/v3/ManyPGProduct/GetDetail', {
          mpId: this.mpId
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data
        if (data.code === 1) {
          Toast.clear()
          this.detail = data.data
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods-detail {
    color: #333;
    background-color: #F3F4F8;

    >div {
      background-color: #fff;
    }

    .goods-1 {
      position: relative;
      background-size: 100% 100%;

      .swiper {
        height: 80vw;

        // margin-top: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .back {
        position: absolute;
        width: 2rem;
        height: 2rem;
        top: 1.25rem;
        left: 0.75rem;
      }

      .bottom {
        position: absolute;
        bottom: -2.5rem;
        width: calc(100% - 1.5rem);
        height: 3.5rem;
        padding: 0 0.75rem;
        border-radius: 1rem 1rem 0 0;
        background-image: linear-gradient(to right, #FF1738, #FF178A);

        >div {
          margin-top: 0.8rem;
          color: #fff;
          font-size: 12px;
          display: inline-block;
        }

        .heart {
          position: absolute;
          top: 0.45rem;
          padding: 0.1rem 0.625rem;
          border-radius: 1rem;
          color: #FF1738;
          background-color: #fff;
        }

        .money {
          padding-left: 3.5rem;
          font-size: 15px;

          div {
            display: inline-block;
            font-size: 24px;
          }
        }

        .old-price {
          margin-left: 0.5rem;
          text-decoration: line-through;
        }

        .buy {
          position: absolute;
          top: 0.8rem;
          right: 1rem;

          img {
            width: 10px;
            height: 10px;
            margin-left: 2px;
          }
        }
      }
    }

    .goods-2 {
      padding: 1.25rem 0.75rem;
      margin-top: 2.45rem;

      .title {
        font-weight: bold;
      }

      .title-1 {
        margin-top: 0.75rem;
        font-size: 13px;
        color: #FFA646;
      }
    }

    .goods-3,
    .goods-4 {
      padding: 1.125rem 0.75rem;
      margin-top: 0.5rem;
      font-size: 14px;

      .goods-item {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;

        &:last-child {
          margin-bottom: 0;
        }

        .left {
          width: 50px;
          line-height: 1.4rem;
          color: #999999;
        }

        .right {
          width: calc(100% - 50px);

          >div {
            display: inline-block;
          }

          .right-1 {
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-size: 13px;
            font-weight: bold;
            color: #FF1738;
            background-color: rgba(255, 23, 56, 0.1);
          }

          .right-2 {
            margin-left: 0.6rem;
            font-weight: bold;
          }

          .right-3 {
            font-weight: bold;

            .r {
              display: inline;
              font-weight: initial;
            }
          }

          .right-4 {
            margin-top: 5px;
            color: #999;
          }
        }
      }
    }

    .goods-5 {
      padding: 1.125rem 0.75rem;
      margin-top: 0.5rem;
      font-size: 14px;

      .goods-item {
        display: flex;
        flex-wrap: wrap;

        .left {
          width: 80px;
          line-height: 1.4rem;
          color: #FF1738;
          font-weight: bold;
        }

        .right {
          width: calc(100% - 80px);
          line-height: 1.5rem;
          color: #999999;
        }
      }
    }

    .goods-6 {
      img {
        width: 100vW;
      }
    }

    .goods-7 {
      font-size: 13px;
      color: #666;

      .goods-item {
        position: relative;
        padding: 1.4375rem 0.75rem 0 1.75rem;
        line-height: 1.2rem;

        &:last-child {
          padding: 1.4375rem 0.75rem 1.4375rem 1.75rem;
        }

        &::after {
          position: absolute;
          top: 1.85rem;
          left: 0.75rem;
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #FF1738;
        }
      }
    }

    .foot {
      position: -webkit-sticky;
      position: sticky;
      bottom: 0;
      display: flex;
      padding: 0.325rem 0.75rem;
      height: 39px;
      font-size: 14px;
      text-align: center;
      color: #fff;

      >div {
        flex: 1;
        line-height: 39px;
      }

      .left {
        border-radius: 39px 0 0 39px;
        background-image: linear-gradient(to right, #3F1B21, #5E2D33);
      }

      .right {
        border-radius: 39px;
        background-image: linear-gradient(to right, #FF1738, #FF178A);
      }
    }

    .goods-8 {
      padding: 1.125rem 0.75rem;
      margin-top: 0.5rem;

      .top-1 {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 2.75rem;

        div {
          display: inline-block;
        }

        .left {
          width: 60%;
          font-size: 14px;
        }

        .right {
          width: 40%;
          font-size: 12px;
          color: #999;
          text-align: right;
        }
      }

      .item {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        font-size: 13px;
        margin-bottom: 1.875rem;

        &:last-child {
          margin-bottom: 0;
        }

        img {
          position: absolute;
          top: -2px;
          width: 1.5rem;
          height: 1.5rem;
        }

        .left {
          width: calc(40% - 2rem);
          padding-left: 2rem;
        }

        .right {
          width: calc(60%);
          text-align: right;

          .right-1 {
            padding-right: 4.5rem;
          }

          .right-2 {
            position: absolute;
            top: -0.5rem;
            right: 0;
            width: 4rem;
            height: 1.75rem;
            border-radius: 1.75rem;
            line-height: 1.75rem;
            text-align: center;
            font-size: 12px;
            color: #fff;
            background-color: #FF1738;
          }
        }
      }
    }
  }
</style>