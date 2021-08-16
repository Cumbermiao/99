<template>
  <div class="tabs">
    <tabs v-model="activeIndex">
      <tab title="福卡">
        <list style="height: calc(100vh - 6.875rem);" class="item-1-2 scroll-v list" @load="loadMore()" offset='50'>
          <div @click="toDetail(item)" class="item"
            :style="{backgroundImage: `url(${item.DetailImg})`,height:imgHeight+'px'}" v-for="(item, i) in list"
            :key="i">
            <div :style="{color: typeColor(item.CardTypeName)}">
              <div class="name">{{item.CardTypeName}}</div>
              <div class="cardNo">编号：{{item.CardNo}}</div>
            </div>
          </div>
        </list>
      </tab>
      <tab title="成长金">
        <div class="item-2-heart">
          <div class="title">当前成长金</div>
          <div class="num">{{growthFund}}</div>
          <div class="team" @click="toTeam">帮助团友</div>
        </div>
        <div class="item-2-1">收益明细</div>
        <!-- #ifndef APP-NVUE -->
        <list class="item-2-2 scroll-v list" @load="loadMore()" offset='50'>
          <div class="list2" v-for="(item, i) in list2" :key="i">
            <div class="title">{{item.title}}</div>
            <div class="money" :style="{color: Number(item.recordType)===0?'#FF1738':'#333'}">
              {{Number(item.recordType)===0?'+'+item.amount:'-'+item.amount}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div style="padding-top: 4.6875rem;" class="commodityBox" v-if="list2.length === 0">
            <no-data></no-data>
          </div>
        </list>
      </tab>
    </tabs>
  </div>
</template>
<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import NoData from '../../components/noData/NoDate.vue'
  import {
    Tab,
    Tabs,
    List
  } from 'vant'
  export default {
    components: {
      NoData,
      Tab,
      Tabs,
      List
    },
    data() {
      return {
        activeIndex: 0,
        listCard: {
          jin: {
            url: "../../assets/images/jinCard_2.png",
            color: '#875D1F'
          },
          yin: {
            url: "../../assets/images/yinCard_2.png",
            color: '#4B5F79'
          },
          tong: {
            url: "../../assets/images/tongCard_2.png",
            color: '#885646'
          },
        },
        newsList: [],
        list: [],
        list2: [],
        tabIndex: 0,
        tabBars: [{
          name: '福卡',
          id: 'guanzhu'
        }, {
          name: '成长金',
          id: 'tuijian'
        }],
        scrollInto: "",
        imgHeight: '',
        pageIndex: 0,
        pageSize: 20,
        pageIndex1: 1,
        pageSize1: 20,
        reload: true,
        growthFund: 0,
        ajaxKey1: false,
        ajaxKey:false
      }
    },
    computed: {
      typeColor() {
        return (name) => {
          if (name.indexOf('金卡') !== -1) {
            return '#875D1F'
          } else if (name.indexOf('银卡') !== -1) {
            return '#4B5F79'
          } else {
            return '#885646'
          }
        }
      }
    },
    created() {
      this.getRecordList();
      this.getUerinfo();
      this.imgHeight = (window.innerWidth - 16) / 359 * 107
      setTimeout(() => {
        this.tabBars.forEach(() => {
          this.newsList.push({
            data: [],
            isLoading: false,
            refreshText: "",
            loadingText: '加载更多...'
          });
        });
        this.pageIndex= 1
        this.pageIndex1= 1
      }, 350)
    },
    methods: {
      toTeam() {
        this.$router.push('/myfightforfriends')
      },
      async getList(type) {
        if(this.ajaxKey1) {
          if(type == 1){
            this.pageIndex--
          }
          return
        }
        this.ajaxKey1 = true
        let res = await this.$http.post('/api/v1/BlessingCard/GetBlessingCardList', {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        this.ajaxKey1 = false
        let data = res.data;
        if (data.code === 1) {
          if(data.data.length === 0){
            this.ajaxKey1 = true
            return false
          }
          if (data.data.length > 0) {
            let dataMap = data.data
            this.list = this.reload ? dataMap : this.list.concat(dataMap);
            // this.reload = false;
          } else {
            // this.reload = false;
            // this.status = 'noMore'
          }
        }
      },
      async getUerinfo() {
        let res = await this.$http.post('/api/v1/userinfo/get', {
          type: 1
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if (res.data.code === 1) {
          this.growthFund = res.data.data.GrowthFund
        }
      },
      async getRecordList(type) {
        if(this.ajaxKey) {
          if(type == 1){
            this.pageIndex1--
          }
          return 
        }
        this.ajaxKey = true
        let res = await this.$http.post('/api/v1/BlessingCard/GrowthFundRecordList', {
          pageSize: this.pageSize1,
          pageIndex: this.pageIndex1
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        this.ajaxKey = false
        if (res.data.code === 1) {
          if(res.data.data.length === 0){
            this.ajaxKey = true
            return false
          }
          if (this.list2.length === 0) {
            this.list2 = res.data.data.map(res => {
              return {
                title: res.recordType === 0 ? '系统赠送' :
                res.recordType === 2 ? '成长金退回':`帮助${res.toUserTrueName?"【"+res.toUserTrueName+"】":""}${res.toUserMobile}成长`,
                amount: res.amount,
                time: res.createTime,
                recordType: res.recordType
              }
            })
          } else {
            this.list2.push(...res.data.data.map(res => {
              return {
                title: res.recordType === 0 ? '系统赠送' :
                res.recordType === 2 ? '成长金退回':`帮助${res.toUserTrueName?"【"+res.toUserTrueName+"】":""}${res.toUserMobile}成长`,
                amount: res.amount,
                time: res.createTime,
                recordType: res.recordType
              }
            }))
          }
        }
      },
      loadMore() {
        if (this.activeIndex === 0) {
          this.pageIndex++
          this.getList(1);
        } else {
          this.pageIndex1++
          this.getRecordList(1);
        }
      },
      ontabtap(e) {
        let index = e.target.dataset.current || e.currentTarget.dataset.current;
        this.switchTab(index);
      },
      ontabchange(e) {
        let index = e.target.current || e.detail.current;
        this.switchTab(index);
      },
      switchTab(index) {
        if (this.tabIndex === index) {
          return;
        }
        this.tabIndex = index;
        this.scrollInto = this.tabBars[index].id;
      },
      toDetail(json) {
        this.$router.push('/focas/cardDetail?json=' + JSON.stringify(json))
      }
    }
  }
</script>

<style lang="less" scoped>
  /* #ifndef APP-PLUS */
  page {
    width: 100%;
    min-height: 100%;
    display: flex;
  }

  /* #endif */

  .tabs {
    position: relative;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    background-color: #ffffff;
    /* #ifdef MP-ALIPAY || MP-BAIDU */
    /* #endif */
    background-color: #F3F4F8;
  }

  .tabs::before {
    position: absolute;
    top: .0625rem;
    content: "";
    width: 100%;
    height: .03125rem;
    background-color: #E5E5E5;
  }

  .scroll-h {
    width: 23.4375rem;
    /* #ifdef H5 */
    width: 100%;
    /* #endif */
    height: 2.75rem;
    flex-direction: row;
    /* #ifndef APP-PLUS */
    white-space: nowrap;
    /* #endif */
    background-color: #fff;

    /* flex-wrap: nowrap; */
    /* border-color: #cccccc;
      border-bottom-style: solid;
      border-bottom-width: .0625rem; */
    /deep/ .uni-scroll-view-content {
      display: flex;
    }
  }

  .line-h {
    height: .03125rem;
    background-color: #cccccc;
  }

  .uni-tab-item {
    flex: 1;
    /* #ifndef APP-PLUS */
    display: inline-block;
    /* #endif */
    flex-wrap: nowrap;
    padding-left: 1.0625rem;
    padding-right: 1.0625rem;
    text-align: center;
  }

  .uni-tab-item-title {
    color: #555;
    font-size: .9375rem;
    height: 2.75rem;
    line-height: 2.75rem;
    flex-wrap: nowrap;
    /* #ifndef APP-PLUS */
    white-space: nowrap;
    /* #endif */
  }

  .uni-tab-item-title {
    color: #999999;
  }

  .uni-tab-item-title-active {
    position: relative;
    color: #FF1738;
    font-weight: bold;
  }

  .uni-tab-item-title-active::after {
    position: absolute;
    left: calc(50% - .9375rem);
    bottom: -0.75rem;
    content: "";
    width: 1.875rem;
    height: .1875rem;
    background-color: #FF1738;
  }

  .swiper-box {
    flex: 1;
    height: calc(100vh - 6rem);
  }

  .item-2-2 {
    height: calc(100vh - 19.375rem);
    padding: 1.21875rem .75rem;
    border-radius: .5rem;
    margin: 0 .5rem;
    background-color: #fff;

    .list2 {
      position: relative;
      margin-bottom: 2.25rem;
      color: #333;
      &:last-child{
        margin-bottom: 0;
      }

      .title {
        width: 75%;
        margin-bottom: .59375rem;
        font-size: .9375rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .time {
        font-size: .75rem;
        color: #999;
      }

      .money {
        position: absolute;
        top: 0;
        right: 0;
        width: 25%;
        font-size: .9375rem;
        font-weight: bold;
        text-align: right;
      }
    }
  }

  .scroll-v {
    width: auto;
    overflow: auto;
  }

  .item-2-heart {
    position: relative;
    margin: .625rem .5rem;
    padding: 1.46875rem 1.59375rem 1.84375rem;
    border-radius: .5rem;
    color: #333;
    background-image: linear-gradient(to right, #F0A73E, #F6CE80);

    .title {
      margin-bottom: .5rem;
      font-size: .8125rem;
    }

    .num {
      font-size: 2.1875rem;
      font-weight: bold;
    }
  }

  .item-2-1 {
    margin: .9375rem .78125rem .75rem;
    color: #999999;
    font-size: .8125rem;
  }

  .item-1-2 {
    padding: .625rem .5rem;

    .item {
      position: relative;
      width: 100%;
      margin-bottom: .625rem;
      background-size: 100% 100%;

      >div {
        position: absolute;
        left: 25%;
        top: 50%;
        transform: translateY(-55%);

        .name {
          margin-bottom: .375rem;
          font-size: 1.125rem;
        }

        .cardNo {
          font-size: .8125rem;
        }
      }
    }
  }

  .commodityBox {
    text-align: center;
  }

  .team {
    position: absolute;
    top: 2.5625rem;
    right: 2.125rem;
    width: 5.25rem;
    height: 1.8125rem;
    border-radius: 1rem;
    line-height: 1.8125rem;
    color: #fff;
    text-align: center;
    font-size: .75rem;
    background-image: linear-gradient(to right, #E9A84A, #D97F0D);
  }
</style>