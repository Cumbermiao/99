<template>
  <div class="new-team">
    <div class="new-team-1">
      <div class="heart-img">
        <img :src="imgSrc('30_heart.png')">
      </div>
      <div class="heart-item">
        <div @click="toMyShop(0)">
          <img :src="imgSrc('ic_dwc.png')" mode="">
          <div>待完成</div>
        </div>
        <div @click="toMyShop(1)">
          <img :src="imgSrc('ic_ywc.png')" mode="">
          <div>已完成</div>
        </div>
        <div @click="toMyShop('')">
          <img :src="imgSrc('ic_wdtg.png')" mode="">
          <div>我的团购</div>
        </div>
        <div @click="toBalance()">
          <img :src="imgSrc('ic_hb.png')" mode="">
          <div>我的红包</div>
        </div>
      </div>
    </div>
    <div class="new-team-2">
      <div class="left">每天开放时间</div>
      <div class="right">
        <swipe class="swiperMy" ref="mySwiper" vertical :show-indicators="false" :autoplay="2000">
          <swipe-item v-for="(item,index) in teamList" :key="index">
            <span style="font-weight: unset;">【{{item.price}}专区】{{item.manyPGStartTime}}-{{item.manyPGEndTime}}</span>
          </swipe-item>
        </swipe>
      </div>
    </div>
    <div class="new-team-3">
      <div class="item" v-for="(item,index) in teamList" :key="index">
        <div class="item-img" @click="toMyShop(0,item.priceAreaId)">
          <div class="top-left">
            {{item.price}}专区
          </div>
          <img class="item-img-bac" :src="item.manyPGADImage" mode="">
          <div class="title">当前正在团购，马上就要成团啦</div>
        </div>
        <div class="item-bottom">
          <div class="item-people">
            <img v-for="i in 4" :key="i" :style="{left: (i-1)*12+'px'}"
              src="http://web991-oss.jiujiupingou.com/img/001.png" mode="">
            <img :style="{left: 48+'px'}" :src="imgSrc('ic_user_more.png')" mode="">
          </div>
          <div class="item-btn" style="margin-left: 10px;" @click="goShopList(item)">立即参团</div>
          <div class="item-btn1" @click="toMyShop(0,item.priceAreaId)">做任务</div>
        </div>
      </div>
      <div v-if="teamList.length === 0" style="padding-top: 20%;">
        <no-data></no-data>
      </div>
    </div>
  </div>
</template>

<script>
    import {
    Toast,
    Dialog,
    Swipe, 
    SwipeItem
  } from 'vant';
  import {
    imgUrl
  } from '../../api/config.js'
  import NoData from '../../components/noData/NoDate.vue'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    mapActions
  } from 'vuex';
  export default {
    components: {
      NoData,
      Swipe, 
      SwipeItem
    },
    data() {
      return {
        indicatorDots: false,
        autoplay: true,
        interval: 3000,
        duration: 200,
        teamList: [],
        pgLimitPerDay: null
      }
    },
    mounted() {
      this.getList()
      this.getSetting()
    },
    computed: {
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      }
    },
    methods: {
      ...mapActions('newGroup', ['setList','setReKey']),
      toBalance() {
        this.$router.push('/balance?type=redPage')
      },
      async getList() {
        Toast.loading({
          duration: 0,
          message: '正在加载...',
          forbidClick: true,
        });

        let res = await this.$http.post('/api/v1/PriceArea/GetList', {
          type: 1
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            loading: '加载'
          }
        })
        Toast.clear()
        let data = res.data
        if (data.code === 1) {
          Toast.clear()
          localStorage.setItem('list',JSON.stringify(data.data))
          this.teamList = data.data
        }
      },
      async getSetting() {
        let res = await this.$http.post('/api/v1/setting/get', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data
        if (data.code === 1) {
          this.pgLimitPerDay = data.data.pgLimitPerDay
        }
      },
      async goShopList(item) {
        if (this.pgLimitPerDay != '0') {
          Dialog.confirm({
            title: '提示',
            message: `每日现金支付限额${this.pgLimitPerDay}单`,
            showCancel: false
          }).then(async ()=>{
            let res = await this.$http.post('/api/v1/ManyPG/ManyPGArea', {
              id: item.priceAreaId
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
              this.$router.push('/newTeam/shopList?price=' + item.price + '&priceAreaId=' + item.priceAreaId)
            }
          })
        } else {
          let res1 = await this.$http.post('/api/v1/ManyPG/ManyPGArea', {
            id: item.priceAreaId
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp(),
              loading: '加载'
            }
          })
          let data1 = res1.data
          if (data1.code === 1) {
          Toast.clear()
            this.$router.push('/newTeam/shopList?price=' + item.price + '&priceAreaId=' + item.priceAreaId)
          }
        }
      },
      toMyShop(type, id = '') {
        if(id){
          this.setReKey(true)
        }
        let str = '我的团购'
        switch (type) {
          case 0:
            str = '待完成'
            break
          case 1:
            str = '已完成'
            break
          default:
            break
        }
        this.$router.push('/newTeam/myShop?type=' + type + '&title=' + str + '&areaId=' + id)
      }
    }
  }
</script>

<style lang="less" scoped>
  .new-team {
    height: calc(100vh - 3.125rem);
    background-color: #F3F4F8;
    overflow: auto;

    .new-team-1 {
      background-color: #fff;

      .heart-img {
        width: 100vw;
        height: 16.5625rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .heart-item {
        display: flex;
        color: #666666;
        font-size: 14px;
        padding-bottom: 1.25rem;

        >div {
          flex: 1;
          text-align: center;
        }

        img {
          width: 4.3125rem;
          height: 4.3125rem;
          margin-top: 0.75rem;
        }
      }
    }

    .new-team-2 {
      display: flex;
      padding: 1rem;
      border-radius: 0.5rem;
      margin: 0.75rem;
      background-color: #fff;

      >div {
        font-size: 13px;
      }

      .left {
        position: relative;
        padding-left: 1rem;

        &::after {
          position: absolute;
          top: 7.5px;
          left: 3px;
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #333;
        }
      }

      .right {
        position: relative;
        margin-left: 0.75rem;

        .swiperMy {
          position: absolute;
          top: -1px;
          left: 0;
          // background-color: red;
          width: 220px;
          height: 38px;
          font-size: 14px;
        }
      }
    }

    .new-team-3 {
      padding: 0.75rem;
      border-radius: 0.5rem;
      background-image: linear-gradient(#ffffff, #F3F4F8);
      background-color: #fff;

      .item {
        margin-bottom: 0.5rem;
      }

      .item-img {
        position: relative;
        border-radius: 0.5rem 0.5rem 0 0;
        overflow: hidden;

        .top-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 68px;
          height: 22px;
          line-height: 22px;
          border-radius: 0.5rem 0 0.5rem 0;
          text-align: center;
          font-size: 12px;
          color: #fff;
          background-color: #ff1738;
          z-index: 99;
        }

        .item-img-bac {
          width: 100%;
          height: 8.6875rem;
        }

        .title {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 0.3rem 0.5rem;
          font-size: 11px;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }

      .item-bottom {
        padding: 0.625rem 0.75rem;
        border-radius: 0 0 0.5rem 0.5rem;
        background-color: #fff;

        &::after {
          content: "";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }

        .item-people {
          float: left;
          position: relative;
          padding-top: 0.156rem;

          img {
            position: absolute;
            width: 1.6875rem;
            height: 1.6875rem;
          }
        }

        .item-btn,
        .item-btn1 {
          float: right;
          width: 5.75rem;
          height: 2rem;
          border-radius: 0.375rem;
          line-height: 2rem;
          text-align: center;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.75);
        }

        .item-btn {
          background-image: linear-gradient(to right, #D40BFF, #FF1531);
        }

        .item-btn1 {
          background-image: linear-gradient(to right, #FF1C0B, #FFB119);
        }
      }
    }
  }
</style>