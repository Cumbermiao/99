<template>
  <div>
    <div class="top1">
      <img src="../../nativeplugins/JY-FLSPlugin/android/res/drawable/back_black.png" mode="" @click="back">
      {{heartTitle}}
      <div class="top1-1" @click="toFugouList">满单记录</div>
    </div>
    <div class="top">
      今日已做任务{{todayAreaTaskCount}}次；累计已完成订单{{totalAreaOrderWinningCount}}条
    </div>
    <list class="shop-list"  @load="scrollChange" >
      <div class="shop-item" v-for="(item,index) in list" :key="index" @click="goGoodsDetail(item)">
        <div class="shop-img" :style="{backgroundImage:'url('+item.MainImage+'!200r80)'}"></div>
        <div class="shop-content">{{item.Title}}</div>
        <div class="shop-num">
          <div class="left">￥<div style="display: inline-block;font-size: 15px;">{{price1(item.Price)}}</div>
            .{{price2(item.Price)}}</div>
          <div class="right">
            <image src="https://static.jiujiupingou.com/H5Static/images/tg_ic_star.png" mode="" v-for="i in 5"
              :key="i+100"></image>
          </div>
        </div>
        <div class="shop-btn">立即团购</div>
      </div>
      <div v-if="list.length === 0" style="padding-top: 50%;">
        <no-data></no-data>
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
  export default {
    components: {
      NoData,
      List
    },
    data() {
      return {
        priceAreaId: '',
        pageSize: 20,
        pageIndex: 1,
        list: [],
        ajaxKey: true,
        todayAreaTaskCount: '',
        totalAreaOrderWinningCount: '',
        price: '',
        heartTitle: ''
      }
    },
    computed: {
      price1() {
        return (price) => {
          let p = price + ''
          return p.split('.')[0]
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
    onBackPress() {
      this.$router.go(-1)
      // uni.navigateBack({
      //   delta: 2
      // })
      return
    },
    created() {
      let option = this.$route.query
      this.heartTitle = option.price + '专区'
      this.price = option.price
      this.priceAreaId = option.priceAreaId
      this.showKey = option.showKey || 1
      if (this.showKey === 1) {
        this.getManyPGArea()
      }
    },
    mounted() {
      this.pageIndex = 1
      this.getList(true)
      this.getToDateTaskNum()
    },
    methods: {
      toFugouList(){
        this.$router.push('/newTeam/orderListFugou?priceAreaId='+this.priceAreaId)
      },
      back() {
        this.$router.push({path:'/home/newTeam',replace:true})
      },
      async getToDateTaskNum() {
        let res = await this.$http.post('/api/v3/ManyPGProduct/GetToDateTaskNum', {
          priceAreaId: this.priceAreaId
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
      async getManyPGArea() {
        let res = await this.$http.post('/api/v1/ManyPG/ManyPGArea', {
          id: this.priceAreaId
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
          if (data.data.IsWinningTen === 1) {
            Dialog.confirm({
              title: '',
              message: '该专区中奖满10单，点击确定参与复购（由于复购订单巨大，预计7天内发货）',
              confirmText: "确认", // 确认按钮文字  
              showCancel: false, // 是否显示取消按钮，默认为 true
              confirmColor: '#FF1738'
            }).then(()=>{
              this.$router.push('/groupworkdetails/fugouList?priceAreaId=' + this.priceAreaId + '&Price=' + this)
            })
          }
        }
      },
      scrollChange() {
        if (!this.ajaxKey) return
        this.pageIndex++;
        this.getList(false,1)
      },
      goGoodsDetail(item) {
        this.$router.push('/newTeam/goodsDetail?mpId=' + item.ProductId)
      },
      async getList(type = false,type1) {
        if (!this.ajaxKey) {
          if(type1==1){
            this.pageIndex--
          }
          return
        }
        this.ajaxKey = false
        Toast.loading({
          duration: 0,
          message: '正在加载...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v3/ManyPGProduct/GetList', {
          priceAreaId: this.priceAreaId,
          pageSize: this.pageSize,
          pageIndex: this.pageIndex
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
          if (data.data.list.length === 0) {
            this.ajaxKey = false
            return
          }
          if (type) {
            this.list = data.data.list
          } else {
            this.list = this.list.concat(data.data.list)
          }
          this.ajaxKey = true
        }
      },
    }
  }
</script>

<style lang="less">
  .top1 {
    position: sticky;
    top: 0;
    height: 30px;
    padding: 7px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    color: #000;
    background-color: #fff;

    img {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 20px;
      height: 20px;
    }
    .top1-1{
      position: absolute;
      top: 7px;
      right: 10px;
      font-size: 12px;
      font-weight: initial;
    }
  }

  .top {
    position: sticky;
    top: 2.75rem;
    height: 2.25rem;
    padding: 0 0.75rem;
    line-height: 2.25rem;
    font-size: 13px;
    color: #fff;
    background-image: linear-gradient(to right, #AE22FF, #FF3284);
  }

  .shop-list {
    width: auto;
    height: calc(100vh - 96px);
    padding: 0.5rem;
    background-color: #F3F4F8;

    .shop-item {
      float: left;
      width: calc(50% - 2.5px);
      border-radius: 0.5rem;
      margin-bottom: 0.375rem;
      background-color: #fff;
      overflow: hidden;

      &:nth-child(2n-1) {
        margin-right: 5px;
      }

      .shop-img {
        padding-bottom: 100%;
        background-size: 100% 100%;
      }

      .shop-content {
        height: 1.8rem;
        padding: 0.5rem 0.625rem;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .shop-num {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.375rem;

        .left {
          width: calc(100% - 90px);
          font-size: 12px;
          font-weight: bold;
          color: #FF1738;
        }

        .right {
          width: 90px;
          margin-top: 3px;
          font-size: 12px;
          color: #999999;
          text-align: right;

          image {
            width: 10px;
            height: 10px;
            margin-left: 2px;
          }
        }
      }

      .shop-btn {
        padding: 0.45rem 0;
        border-radius: 2rem;
        margin: 0.75rem 0.3125rem 0.375rem;
        text-align: center;
        font-size: 12px;
        color: #fff;
        background-color: #FF1738;
      }
    }
  }
</style>