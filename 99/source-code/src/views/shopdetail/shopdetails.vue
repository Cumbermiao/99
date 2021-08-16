<template>
  <div class="shopDetailsBox">
    <div class="shopDetailsHead"></div>
    <div class="carousel">
      <swipe class="swiper" style="height: 365px;" :indicator-dots="indicatorDots" :autoplay="autoplay"
        :interval="interval" :duration="duration">
        <swipe-item>
          <img style="width: 100%;height: 100%;"
            src="https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg">
        </swipe-item>
        <swipe-item>
          <img style="width: 100%;height: 100%;"
            src="https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg">
        </swipe-item>
        <swipe-item>
          <img style="width: 100%;height: 100%;"
            src="https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg">
        </swipe-item>
      </swipe>
    </div>
    <div class="shopDetailsHead"></div>
    <div class="shopDetailsMain">
      <div class="shopDetailsMainHead">
        <div class="shopDetailsMainHeadFl">
          能量卷 × 1
        </div>
        <div class="shopDetailsMainHeadRl">
          已兑换成功 2 件
        </div>
      </div>
      <div class="shopDetailsMainCon">
        芷诺堂国内首款量子级“植物灸”亚健康调理产品哪里痛涂哪里
      </div>
      <div class="shopDetailsMainFoor">
        每年100期·每期45分钟
      </div>
    </div>
    <div class="shopDetailsHead"></div>
    <div class="stock">
      <span>库存</span>
      <span>0件</span>
    </div>
    <div class="shopDetailsHead"></div>
    <div class="postage">
      <span>邮费</span>
      <span>包邮</span>
      <span>（快递请当面签收，如遇损坏可要求退回）</span>
    </div>
    <div class="shopDetailsHead"></div>
    <div class="partRegion">
      <span>部分地区因疫情、天气等原因实施物流管制，拍下商品将无法发货。</span>
    </div>
    <div class="shopDetailsHead"></div>
    <div class="cozyTips">
      <span>温馨提示</span>
      <span>兑换商品一律不支持退换</span>
    </div>
    <div class="shopDetailsHead"></div>
    <div class="shop-del">
      <span></span>
      <span>商品信息</span>
      <span></span>
    </div>
    <div class="" style="padding-bottom: 50px;">
      <rich-text :nodes="strings"></rich-text>
    </div>
    <div class="footerShop">
      <span>立即兑换</span>
    </div>
  </div>
</template>

<script>
  import {
    Swipe,
    SwipeItem
  } from 'vant';
  export default {
    components: {
      Swipe,
      SwipeItem
    },
    data() {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        strings: '<div style="text-align:center;"><img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png"/></div>'
      }
    },
    methods: {

    }
  }
</script>

<style lang="less">
  .shopDetailsBox {
    .shopDetailsHead {
      height: 10px;
      width: 100%;
      background: #f5f5f5;
    }

    .shopDetailsMain {
      padding: 15px;

      .shopDetailsMainHead {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        .shopDetailsMainHeadFl {
          color: #D50606;
        }

        .shopDetailsMainHeadRl {
          color: #BDBDBD;
          font-size: 12px;
        }
      }

      .shopDetailsMainCon {
        font-size: 14px;
        color: #010101;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .shopDetailsMainFoor {
        font-size: 12px;
        color: #BDBDBD;
      }
    }

    .stock {
      padding: 15px;

      text {
        color: #999999;
        font-size: 14px;
      }

      text:nth-child(1) {
        margin-right: 10px;
      }
    }

    .postage {
      padding: 15px;

      text {
        font-size: 14px;
        color: #999999;
      }

      text:nth-child(1) {
        margin-right: 10px;
      }

      text:nth-child(2) {
        color: #333333;
      }

      text:nth-child(3) {
        font-size: 12px;
      }
    }

    .partRegion {
      padding: 0 15px;
      color: red;
      font-size: 14px;
    }

    .cozyTips {
      padding: 15px;

      text:nth-child(1) {
        margin-right: 10px;
        font-size: 14px;
        color: #999999;
      }

      text:nth-child(2) {
        font-size: 12px;
        color: #808080;
      }
    }

    .shop-del {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 15px;
      font-size: 14px;
      color: #999999;
      background: #f5f5f5;
      // margin-bottom: 10px;
      padding-bottom: 10px;

      text:nth-child(1) {
        display: inline-block;
        flex: 1;
        height: 1px;
        background: #DBDBDB;
      }

      text:nth-child(2) {
        margin: 0 15px;
      }

      text:nth-child(3) {
        display: inline-block;
        flex: 1;
        height: 1px;
        background: #DBDBDB;
      }
    }

    .footerShop {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 40px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      text {
        width: 68%;
        height: 30px;
        background: #D50606;
        border-radius: 10px;
        text-align: center;
        color: white;
        line-height: 30px;
        display: block;
        // font-size: 0.28rem;
        font-size: 14px;

      }
    }

  }
</style>