<template>
  <div>
    <div class="top-1">
      <img src="../../nativeplugins/JY-FLSPlugin/android/res/drawable/back_black.png" mode="" @click="back">
      {{title}}
    </div>
    <div :style="{display: teamList.length < 4 ? 'flex' : 'unset'}" class="nav-top">
      <div :style="{flex: teamList.length < 4 ? 1 : 'unset'}" :class="{'active' : item.priceAreaId == activeId}"
        v-for="item in teamList" :key="item.priceAreaId" @click="getTypeList(item.priceAreaId)">{{item.price}}专区</div>
    </div>
    <list @load="scrollChange" class="my-shop">
      <div class="my-shop-top" style="font-size: 13px; padding: 1rem 0.5rem">今日已做任务<span> {{todayAreaTaskCount}}
        </span>次；累计已完成订单<span> {{totalAreaOrderWinningCount}} </span>条</div>
      <div class="shop-item" v-for="(item,index) in list" :key="index">
        <div class="shop-1">
          <div class="title">订单号：{{item.OrderNo}}{{item.OrderStatus === 6?'(已关闭)':''}}</div>
          <div :class="{'active1':item.OrderStatus===0||item.ManyPGLotteryStatus !== 1}" class="buy-type">
            {{item.OrderStatus===0?'待支付':item.ManyPGLotteryStatus === 1 ? '已完成'+(item.ManyPGReturnStatus===1?'，已返还':'，未返还') : '待完成'}}
          </div>
        </div>
        <div class="shop-2">
          <div class="zhuanqu">{{item.PriceAreaName}}专区</div>
          <img class="img" :src="item.ProductMainImage?item.ProductMainImage+'!100r70':''" mode="">
          <div class="title">{{item.ProductTitle}}</div>
        </div>
        <div class="shop-3">
          <div class="title">
            已做任务{{item.ManyPGLotteryStatus !== 1?item.UserTaskNum : item.UserTaskNum+1}}次，累计奖励￥{{item.UserTaskReturnPrice}}
          </div>
          <div class="price">实付款:￥{{item.TotalPrice}}</div>
        </div>
        <div class="shop-4">
          <div class="active" v-if="item.OrderStatus !== 6 && (item.OrderStatus!==0 && item.ManyPGLotteryStatus === 0)"
            @click="toGame(item)">做任务</div>
          <div v-if="item.OrderStatus===0" @click="cancelOrder(item)">取消订单</div>
          <div class="active" v-if="item.OrderStatus===0" @click="goPay(item)">去支付</div>
          <div v-if="item.OrderStatus!==0" @click="toOrderDetail(item)">查看详情</div>
        </div>
      </div>
      <!-- <div>{{u}}</div> -->
      <div v-if="list.length === 0" style="padding-top: 50%;">
        <no-data color="#999999" title="参加团购才能做任务哟~"></no-data>
        <div class="joinBuy" @click="joinBuy">参加团购</div>
      </div>
    </list>
  </div>

</template>

<script>
  import {
    Dialog,
    Toast,
    List
  } from 'vant';
  import NoData from '../../components/noData/NoDate.vue'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    name:'myShop',
    components: {
      NoData,
      List
    },
    data() {
      return {
        activeId: '',
        PageSize: 20,
        pageIndex: 1,
        list: [],
        ajaxKey: true,
        advId: null,
        mchId: null,
        taskToken: '',
        PriceAreaName: '',
        title: '',
        teamList: '',
        areaId: '',
        manyPGLotteryStatus: '',
        totalAreaOrderWinningCount: '',
        u: '',
        gameKey: false,
        toGameKey: false,
        todayAreaTaskCount: 0
      }
    },
    created() {
      let option = this.$route.query
      this.manyPGLotteryStatus = option.type
      this.title = option.title
      if(this.reKey){
        this.areaId = option.areaId
        this.setReKey(false)
      }
      if (localStorage.getItem('gameKey') == 'true') {
        localStorage.setItem('gameKey', false)
        this.$router.push(`/game`)
        this.gameKey = false
      } else {
        if(this.teamList.length === 0){
          this.getList2()
        }else{
          this.getList(true)
        }
      }
    },
    computed: {
      ...mapGetters('newGroup', ['priceAreaId','reKey']),
    },
    activated() {
      
      console.log('activated页面打开时触发');
    },
    deactivated() {
      console.log('deactivated页面关闭时触发');
    },
    mounted() {
      this.u = window.webkit && window.webkit.messageHandlers.onItemClick;
      window.closeVideo = this.closeVideo
    },
    methods: {
      ...mapActions('newGroup', ['setTaskToken', 'setPriceAreaId', 'setPrice', 'setReKey']),
      joinBuy() {
        let item = this.teamList.find(res => res.priceAreaId == this.areaId)
        this.$router.push('/newTeam/shopList?price=' + item.price + '&priceAreaId=' + item.priceAreaId)
      },
      async getToDateTaskNum(id) {
        let res = await this.$http.post('/api/v3/ManyPGProduct/GetToDateTaskNum', {
          priceAreaId: id
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
          this.todayAreaTaskCount = data.data.todayAreaTaskCount
          this.totalAreaOrderWinningCount = data.data.totalAreaOrderWinningCount
        }
      },
      getTypeList(id) {
        this.pageIndex = 1;
        this.areaId = id
        this.ajaxKey = true
        this.getList(true)
      },
      async getList2() {
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
        let data = res.data
        if (data.code === 1) {
          Toast.clear()
          this.teamList = data.data
          this.areaId = (this.areaId || this.priceAreaId) ? (this.areaId || this.priceAreaId) : data.data[0]
            .priceAreaId
          this.pageIndex = 1;
          this.ajaxKey = true
          this.getList(true)
        }
      },
      back() {
        this.$router.push({
          path: '/home/newTeam',
          replace: true
        })
      },
      goPay(item) {
        this.$router.push('/newTeam/goPay?orderId=' + item.OrderId + '&price=' + item.TotalPrice + '&createTime=' + item
          .CreateTime)
      },
      async cancelOrder(item) {
        Dialog.confirm({
          title: '提示',
          message: '是否取消订单'
        }).then(async () => {
          let res = await this.$http.post('/api/v3/ManyPGProduct/CancelOrder', {
            orderId: item.OrderId,
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp()
            }
          })
          let data = res.data
          if (data.code === 1) {
            Toast('取消成功');
            this.pageIndex = 1;
            this.ajaxKey = true
            this.getList(true)
          }
        })
      },
      closeVideo() {
        // Toast.loading({
        //   message: '正在跳转幸运转盘',
        //   forbidClick: true,
        // });
        // this.backKey = false
        // this.textAn = '安卓调用了该方法'
        // let res = await this.$http.post('/api/v1/AD/QueryShowAdvertise', {
        //   advId: this.advId,
        //   mchId: this.mchId
        // }, {
        //   custom: {
        //     url: '99',
        //     nonce: nonce(),
        //     timestamp: timestamp()
        //   }
        // })
        // this.backKey = true
        // Toast.clear()
        // let data = res.data
        // if (data.code === 1) {
        //   this.$router.push(`/game`)
        // }
        this.$router.push(`/game`)
      },
      isSafari() {
        var ua = navigator.userAgent.toLowerCase();

        if (ua.indexOf('applewebkit') > -1 && ua.indexOf('safari') > -1 &&
          ua.indexOf('linux') === -1 && ua.indexOf('android') === -1 && ua.indexOf('chrome') === -1 &&
          ua.indexOf('ios') === -1 && ua.indexOf('browser') === -1) {
          return true;
        } else {
          return false;
        }
      },
      async toGame(item) {
        this.setPrice(item.PriceAreaName)
        this.setPriceAreaId(item.PriceAreaId)
        this.PriceAreaName = item.PriceAreaName
        if (this.toGameKey) return
        const u = navigator.userAgent;
        const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        var device_type = navigator.userAgent; //获取userAgent信息
        // eslint-disable-next-line
        var md = new MobileDetect(device_type); //初始化mobile-detect
        var os = md.os(); //获取系统
        if (!this.isSafari()) {
          if (!((os == "AndroidOS" && window.nuandouAndroid) || (os == "iOS" && (window.webkit && window.webkit
              .messageHandlers.onItemClick)))) {
            Toast('请用移动端App进行登录');
            // return false
          }
        } else {
          this.toGameKey = true
          setTimeout(() => {
            this.toGameKey = false
          }, 3000)
          let res = await this.$http.post('/api/v3/ManyPGTask/StartAdvTask', {
            orderId: item.OrderId,
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp()
            }
          })
          let data = res.data
          if (data.code === 1) {
            this.setTaskToken(data.data.taskToken)
            this.taskToken = data.data.taskToken
            this.$router.push('/game') // Change: /newTeam/video
          } else {
            this.toGameKey = false
          }
          return false
        }

        Toast.loading({
          duration: 0,
          message: '正在请求任务...',
          forbidClick: true,
        });
        this.toGameKey = true
        setTimeout(() => {
          this.toGameKey = false
        }, 3000)
        let res = await this.$http.post('/api/v3/ManyPGTask/StartAdvTask', {
          orderId: item.OrderId,
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if (res) {
          let data = res.data
          if (data.code === 1) {
            // let d = ''
            // for(let n = 0; n < data.data.advData.mchId; n++){
            //   d+='.'
            // }
            Toast({
              duration: 6000,
              message:'正在拉起广告,广告类型：'+data.data.advData.mchId
            })
            this.setTaskToken(data.data.taskToken)
            this.advId = data.data.advData.advId
            this.mchId = data.data.advData.mchId
            this.taskToken = data.data.taskToken
            // uni.navigateTo({
            //   url: `../game/game?price=${this.PriceAreaName}&priceAreaId=${this.priceAreaId}&taskToken=${this.taskToken}&title=${this.title}&type=${this.manyPGLotteryStatus}`
            // })
            // setTimeout(() => {
            //   if (isiOS) {
            //     window.webkit.messageHandlers.onItemClick.postMessage(JSON.stringify(data.data.advData));
            //   } else {
            //     //vue调用Android方法，且传值给Android （Android方法名为 onItemClick）
            //     // eslint-disable-next-line
            //     nuandouAndroid.onItemClick(JSON.stringify(data.data.advData));
            //   }
            // }, 2000);
            this.$router.push('/newTeam/video')
          } else {   
            this.toGameKey = false
          }
        }
      },
      scrollChange() {
        if (!this.ajaxKey || this.pageIndex === 1) return
        this.pageIndex++;
        this.getList(false, 1)
      },
      getList(type = false, type1) {
        if (!this.ajaxKey) {
          if (type1 == 1) {
            this.pageIndex--;
          }
          return
        }
        this.ajaxKey = false
        Toast.loading({
          duration: 10000,
          message: '正在加载...'
        });
        setTimeout(async () => {
          let res = await this.$http.post('/api/v3/ManyPGProduct/GetManyOrderList', {
            manyPGLotteryStatus: this.manyPGLotteryStatus,
            pageSize: this.PageSize,
            pageIndex: this.pageIndex,
            priceAreaId: this.areaId
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp()
            }
          })
          if (res) {
            let data = res.data
            if (data.code === 1) {
              this.getToDateTaskNum(this.areaId)
              this.activeId = this.areaId
              Toast.clear()
              if (type) {
                let index = this.list.length
                this.list.splice(0, index, ...data.data)
              } else {
                this.list = this.list.concat(data.data)
              }
              if (data.data.length === 0) {
                this.ajaxKey = false
                return
              }
              this.ajaxKey = true
            } else {
              this.areaId = this.activeId
              this.pageIndex === 1 ? this.pageIndex : this.pageIndex--
            }
          } else {
            this.areaId = this.activeId
            this.pageIndex === 1 ? this.pageIndex : this.pageIndex--
          }

        }, 3000);
      },
      toOrderDetail(item) {
        this.$router.push('/newTeam/orderDetail?id=' + item.OrderId)
      },

    }
  }
</script>

<style lang="less" scoped>
  .joinBuy {
    width: 120px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin: 30px auto 0;
    border: 1px solid #FF1738;
    border-radius: 5px;
    color: #FF1738;
  }

  .top-1 {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 30px;
    padding: 7px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    z-index: 9999;

    img {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 20px;
      height: 20px;
      z-index: 99999;
    }
  }

  .nav-top {
    position: fixed;
    top: 44px;
    width: 100vw;
    height: 44px;
    line-height: 44px;
    white-space: nowrap;
    font-size: 15px;
    font-weight: bold;
    background-color: #fff;
    overflow: auto;
    z-index: 9999;

    >div {
      display: inline-block;
      width: 100px;
      text-align: center;
    }

    .active {
      position: relative;
      color: #FF1738;

      &::after {
        position: absolute;
        left: 50%;
        bottom: 1px;
        transform: translateX(-50%);
        content: '';
        width: 4.5rem;
        height: 3px;
        background-color: #FF1738;
      }
    }
  }

  .my-shop {
    position: relative;
    width: auto;
    height: calc(100vh - 88px);
    padding-top: 88px;
    color: #333;
    background-color: #F3F4F8;

    .my-shop-top {
      font-weight: bold;
      color: #666;

      span {
        color: #FF1738;
      }
    }

    .shop-item {
      margin: 0 0.5rem;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      background-color: #fff;
    }

    .shop-1 {
      display: flex;
      flex-wrap: wrap;
      padding: 0.75rem;
      font-size: 14px;

      .title {
        width: calc(100% - 7.5rem);
      }

      .buy-type {
        width: 7.5rem;
        text-align: right;
      }

      .buy-type.active1 {
        color: #FF1738;
      }
    }

    .shop-2 {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      padding: 0 0.75rem 1.3rem;
      border-bottom: 1px solid #E5E5E5;

      .zhuanqu {
        position: absolute;
        top: 0;
        left: 0.75rem;
        width: 3.5rem;
        height: 1.2rem;
        line-height: 1.2rem;
        border-radius: 0.5rem 0 0.5rem 0;
        font-size: 12px;
        text-align: center;
        color: #fff;
        background-color: #FF1738;
        z-index: 99;
      }

      .img {
        width: 5.625rem;
        height: 5.625rem;
        border-radius: 0.5rem;
      }

      .title {
        width: calc(100% - 6.375rem);
        padding-left: 0.75rem;
        font-weight: bold;
      }
    }

    .shop-3 {
      padding: 0.8rem 0.75rem 1.2rem;
      text-align: right;

      div {
        display: inline-block;
        font-size: 13px;
      }

      .title {
        color: #666;
      }

      .price {
        margin-left: 1rem;
      }
    }

    .shop-4 {
      padding-right: 0.75rem;

      div {
        float: right;
        display: inline-block;
        width: 6rem;
        height: 2rem;
        line-height: 2rem;
        border: 1px solid #BBBBBB;
        border-radius: 2.5rem;
        margin-left: 0.5rem;
        margin-bottom: 0.85rem;
        font-size: 14px;
        text-align: center;
      }

      &::after {
        display: block;
        content: '';
        clear: both;
      }

      .active {
        border: 1px solid #FF1738;
        color: #fff;
        background-color: #FF1738;
      }
    }
  }
</style>