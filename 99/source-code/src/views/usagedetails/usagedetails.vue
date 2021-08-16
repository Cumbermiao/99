<template>
  <div class="usageDetailsBox">
    <div class="usageDetailsHead">
      <img :src="imgSrc('ellipseback.png')" mode="widthFix">
      <div class="title">
        当前剩余能领券
      </div>
      <div class="numberHead">
        10000张
      </div>
    </div>
    <div class="usageDetailsMain">
      <div class="usageDetailsItem">
        <div class="usageDetailsItemHead">
          <div class="usageDetailsItemHeadFl">
            关闭订单退回
          </div>
          <div class="usageDetailsItemHeadRl">
            2021-04-01 10:22:48
          </div>
        </div>
        <div class="usageDetailsItemFoor">
          <div class="usageDetailsItemFoorFl">
            订单：710235678退回
          </div>
          <div class="usageDetailsItemFoorRl">
            2张
          </div>
        </div>
      </div>
      <div class="usageDetailsItem">
        <div class="usageDetailsItemHead">
          <div class="usageDetailsItemHeadFl">
            关闭订单退回
          </div>
          <div class="usageDetailsItemHeadRl">
            2021-04-01 10:22:48
          </div>
        </div>
        <div class="usageDetailsItemFoor">
          <div class="usageDetailsItemFoorFl">
            订单：710235678退回
          </div>
          <div class="usageDetailsItemFoorRlAv">
            2张
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
  export default {
    data() {
      return {

      }
    },
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .usageDetailsBox {
    background-color: #F7F7F7;
    padding: .625rem;

    .usageDetailsHead {
      position: relative;
      text-align: center;

      image {
        width: 100%;
      }

      .title {
        position: absolute;
        top: 1.875rem;
        left: 1rem;
        font-size: .875rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFD387;
      }

      .numberHead {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1.5625rem;
        margin-left: -9.375rem;
        width: 18.75rem;
        height: 3.125rem;
        z-index: 1000;
        font-size: 2rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
      }
    }

    .usageDetailsMain {
      .usageDetailsItem {
        background: #FFFFFF;
        // border-bottom: .125rem solid #F7F7F7;
        padding: 1.25rem .625rem;
        margin-bottom: .125rem;

        .usageDetailsItemHead {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .usageDetailsItemHeadFl {
            flex: 1;
            color: #333333;
            font-size: 1rem;
          }

          .usageDetailsItemHeadRl {
            color: #666666;
            font-size: .875rem;
          }
        }

        .usageDetailsItemFoor {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: .9375rem;

          .usageDetailsItemFoorFl {
            flex: 1;
            color: #000;
            font-size: .75rem;
            font-weight: bold;
          }

          .usageDetailsItemFoorRl {
            font-size: .875rem;
            color: #d50606;
          }

          .usageDetailsItemFoorRlAv {
            font-size: .875rem;
            color: #f1ab25;
          }
        }
      }
    }
  }
</style>