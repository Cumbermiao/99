<template>
  <div class="repurchaseBox">
    <div class="newPeopleHead">
      <img @click="gobackIndex" :src="imgSrc('return.png')" mode="widthFix">
      <div class="title">百万品牌排行榜</div>
    </div>
    <div v-for="(item, index) in list" :key="index" class="repurchaseMain" style="margin-top: .625rem;">
      <div class="repurchaseMainHead">
        <div class="time">
          <div class="timeItem">
            <div class="shugang">

            </div>
            <div class="jiqi">
              {{ item.Phase }}
            </div>
          </div>
          <div class="shijian">
            {{ item.BeginDate }}-{{ item.EndDate }}
          </div>
        </div>
        <div class="logo">
          <img src="http://web991-oss.jiujiupingou.com/img/jiujiulog.png" mode="widthFix">
        </div>
        <div class="totalXiaoliang">
          总销量 <span>{{ item.TotalSaleNumber }}</span>
        </div>

      </div>
      <div class="jianjie">
        <div class="jianjieTitle">
          {{ item.Description }}
        </div>
      </div>
      <div class="shopList">
        <div class="mainFooter">
          <scroll-view scroll-x="true" class="bookshelf-content">
            <block v-for="(o, idx) in item.BrandProduct" :key="idx">
              <div class="mainFooterBox">
                <div class="shopImg">
                  <img :src="o.MainImage" mode="">
                </div>
                <span class="shopName">
                  {{ o.Title }}
                </span>
                <div class="energy">
                  <span>￥{{ o.Price }}</span>
                  <span>￥{{ o.OldPrice }}</span>
                </div>
                <div class="exchange">
                  销量{{ o.SaleNumber }}
                </div>
              </div>
            </block>
          </scroll-view>
        </div>
      </div>
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
        list: {}
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
      this.getList()
    },
    methods: {
      // 获取数据
      async getList() {
        let baseUrl = '/api/v1/BrandRanking/GetList'
        let res = await this.$http.post(baseUrl, {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            loading: '加载'
          }
        })
        let data = res.data
        // console.log(res.data.data)
        if (data.code === 1) {
          Toast.clear()
          this.list = data.data
        }
      },
      gobackIndex() {
        this.$router.push({path:'/home/index',replace:true})
      },
    }
  }
</script>

<style lang="less">

  .repurchaseBox {
    background: #F4F4F4;

    .newPeopleHead {
      width: 100%;
      height: 5.3125rem;
      background: linear-gradient(180deg, #FD5B3B 0%, #FF945F 100%);
      box-shadow: 0rem .125rem .375rem 0rem #E3E3E3;
      position: relative;

      image {
        position: absolute;
        width: .75rem;
        left: 1rem;
        top: 2.125rem;
        vertical-align: middle;
      }

      .title {
        text-align: center;
        width: 12.1875rem;
        height: 1.5625rem;
        font-size: 1.125rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 1.5625rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -0.78125rem;
        margin-left: -6.09375rem;
      }
    }

    .repurchaseMain {
      padding: .625rem;
      background: #FFFFFF;
      border-radius: .625rem;

      .repurchaseMainHead {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .time {
          .timeItem {
            display: flex;
            // justify-content: ;
            align-items: center;

            .shugang {
              width: .3125rem;
              height: 1rem;
              background: #FE784E;
              border-radius: .3125rem;
              margin-right: .375rem;
            }

            .jiqi {
              font-size: 1rem;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #5D5D5D;
            }
          }

          .shijian {
            font-size: .5rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #939393;
            margin-left: .3125rem;
            margin-top: .1875rem;
          }
        }

        .logo {
          image {
            vertical-align: middle;
            width: 3.125rem;
          }
        }

        .totalXiaoliang {
          font-size: .75rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #676767;

          text {
            font-size: 1rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #FF0000;
          }
        }
      }

      .jianjie {
        display: flex;
        justify-content: center;

        .jianjieTitle {
          width: 20.625rem;
          // height: 1.75rem;
          font-size: .75rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #808080;
          padding-bottom: 1.0625rem;
          padding-top: 1rem;
          border-bottom: .0625rem solid #CCCCCC;
        }
      }

      .shopList {

        // padding-bottom: .625rem;
        .mainFooter {
          .bookshelf-content {
            white-space: nowrap; // 滚动必须加的属性
            width: 97%;
            height: 9.375rem;
            padding: .625rem;
            margin: 0 auto;

            .mainFooterBox {
              width: 29%;
              margin-right: .625rem;
              display: inline-block;
              vertical-align: top;
              box-shadow: 0rem .0625rem .25rem 0rem rgba(195, 195, 195, 0.5);
              border-radius: .375rem;

              .shopImg {
                width: 100%;

                image {
                  width: 5.3125rem;
                  height: 5.3125rem;
                }
              }

              .shopName {
                font-size: .5rem;
                // font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #303030;
                margin-left: .3125rem;
                -webkit-text-size-adjust: none;
                margin-top: .4375rem;
                width: 90%;
                display: block;
                white-space: nowrap; //文本强制不换行；
                text-overflow: ellipsis; //文本溢出显示省略号；
                overflow: hidden; //溢出的部分隐藏；
              }

              .energy {
                margin: .4375rem 0;

                text:nth-child(1) {
                  font-size: .625rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #FF4200;
                  margin-right: .3125rem;
                }

                text:nth-child(2) {
                  font-size: .5rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #939393;
                  text-decoration: line-through;
                }

              }

              .exchange {
                font-size: .375rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #939393;
                margin: .3125rem 0;
                margin-left: .3125rem;
                padding-bottom: .3125rem;
              }
            }
          }
        }
      }
    }
  }
</style>