<template>
  <div class="order-list">
    <div class="top1" @click="back">
        <img src="../../nativeplugins/JY-FLSPlugin/android/res/drawable/back_icon1.png" mode="">
        确认订单
      </div>
    <div class="content-1">
      
      <div class="top-top" @click="urlHrefDizhi">
        <div class="title" v-if="addressIs">
          <div>{{addressIs? addressIs.Receiver : ''}}</div>
          <div style="margin-left: 10px;">{{addressIs? addressIs.Mobile : ''}}</div>
        </div>
        <div class="top-1" v-if="addressIs">
          <span v-if="addressIs.Province !== 'null'">{{addressIs.Province}}</span>
          <span v-if="addressIs.City !== 'null'">{{addressIs.City}}</span>
          <span v-if="addressIs.County !== 'null'">{{addressIs.County}}</span>
          <span v-if="addressIs.Detail !== 'null'">{{addressIs.Detail}}</span>
        </div>
        <div class="top-2" v-if="!addressIs" style="line-height: 2.75rem;">
          请选择地址
        </div>
        <img class="jiantou" :src="imgSrc('jiantou.png')" mode="">
        <img class="bottom" :src="imgSrc('dd_adress_mail.png')" mode="">
      </div>
      <div class="foot">
        <div class="order">
          <div class="order-img">
            <img :src="detail.mainImage?detail.mainImage+'!100r70':''" mode="">
          </div>
          <div class="order-right">
            <div class="title">{{detail.title}}</div>
            <div class="num">{{detail.subTitle}}</div>
            <div class="price">￥{{detail.price}}/件</div>
          </div>
        </div>
        <div class="foot-2">
          <div>购买数量</div>
          <div class="t">1</div>
        </div>
        <div class="foot-2">
          <div>配送方式</div>
          <div name="t" class="t">快递</div>
        </div>
      </div>
    </div>
    <div class="order-foot">
      <div class="left">
        <div>实付：</div>
        <div class="price">
          ￥
          <div style="display: inline-block;">{{price1(detail.price||'')}}</div>
          .{{price2(detail.price||'')}}
        </div>
      </div>
      <div :style="{backgroundColor: ajaxKey?'#FF1738':'#ccc'}" class="right" @click="goPlay">{{ajaxKey?'去支付':'正在跳转'}}
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
  import {
    mapActions,
    mapGetters
  } from 'vuex';
  export default {
    data() {
      return {
        detail: {},
        ajaxKey: true,
        priceAreaId: ''
      }
    },
    computed: {
      ...mapGetters('address', ['addressIs', 'addressXuanze']),
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      },
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
    created() {
      let option = this.$route.query
      this.priceAreaId = option.priceAreaId
      this.detail = JSON.parse(option.detail || "{}")
      if(JSON.stringify(this.addressIs) === '{}'){
        this.getAddress();
      }
    },
    mounted() {
      // let t = null
      // console.log("t",t);
      // t = document.getElementsByName('t')
      // console.log("t",t);
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      // 跳转地址
      urlHrefDizhi() {
        this.$router.push('/confirmOrder/xuanzedizhi?pid=' + this.pid + '&addressId=' + (this.addressIs ? this.addressIs
          .AddressId : ''))
      },
      ...mapActions('address', ['setAddressIs']),
      async getAddress() {
        let res = await this.$http.post('/api/v1/address/getlist', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data
        if (data.code === 1) {
          this.addressList = data.data
          for (let i = 0; i < this.addressList.length; i++) {
            if (this.addressList[i].IsDefault) {
              this.IsDefaultObj = this.addressList[i]
            }
          }
          this.setAddressIs(this.IsDefaultObj)
        }
      },
      async goPlay() {
        let that = this
        if (!this.ajaxKey) return
        this.ajaxKey = false;
        if (JSON.stringify(that.addressIs) === '{}' || JSON.stringify(that.addressIs) === undefined) {
          this.ajaxKey = true;
          Toast('请选择收货地址');
          return
        }
        if (that.detail.stockQuantity <= 0) {
          this.ajaxKey = true;
          Toast('库存不足');
          return
        }

        let res = await that.$http.post('/api/v3/ManyPGProduct/CreateManyPGProductOrder', {
          ProductId: that.detail.productId,
          AddressId: that.addressIs.AddressId
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        
        this.ajaxKey = true;
        if(res){
          let data = res.data
          if (data.code === 1) {
            Toast.clear()
            this.$router.push('/newTeam/goPay?orderId=' + data.data.orderId + '&price=' + that.detail.price + '&createTime=' + data
                .data.createTime + '&priceAreaId=' + that.priceAreaId)
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .top1 {
    position: sticky;
    top: 0;
    height: 30px;
    padding: 7px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    background-color: #FF1738;

    img {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 20px;
      height: 20px;
    }
  }
  .order-list {
    height: calc(100vh - 3.75rem);
    color: #333;
    background-color: #FF1738;
    overflow: hidden;

    .content-1 {
      height: calc(100vh - 9.075rem);
      padding: 1rem 0.5rem;
      border-radius: 1rem 1rem 0 0;
      margin-top: 1rem;
      background-color: #F3F4F8;
      overflow: auto;

      .top-top {
        position: relative;
        padding: 1rem 0.75rem;
        border-radius: 0.8rem;
        background-color: #fff;

        .top-1 {
          span {
            padding-right: 1rem;
            margin-right: 5px;
          }
        }

        .title {
          margin-bottom: 0.625rem;

          >div {
            display: inline-block;
            font-weight: bold;
          }
        }

        .jiantou {
          position: absolute;
          top: 35px;
          right: 15px;
          width: 0.5rem;
          height: 0.85rem;
        }

        .bottom {
          position: absolute;
          bottom: 0;
          width: calc(100% - 1.6rem);
          height: 2px;
        }
      }

      .foot {
        padding: 1rem 0.75rem;
        border-radius: 0.8rem;
        margin-top: 0.625rem;
        background-color: #fff;

        .order {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #E5E5E5;

          .order-img {
            width: 5.625rem;
            height: 5.625rem;

            img {
              max-width: 100%;
              max-height: 100%;
              border-radius: 0.5rem;
            }
          }

          .order-right {
            width: calc(100% - 6.625rem);
            padding-left: 1rem;

            .title {
              font-size: 14px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }

            .num {
              margin-top: 2px;
              font-size: 11px;
              color: #999;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }

            .price {
              position: absolute;
              bottom: 1.5rem;
              font-size: 13px;
            }
          }
        }

        .foot-2 {
          display: flex;
          margin-top: 1.125rem;

          >div {
            flex: 1;
            color: #666;
            font-size: 12px;
          }

          .t {
            text-align: right;
          }
        }
      }
    }

    .order-foot {
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 3.625rem;
      line-height: 3.625rem;
      background-color: #fff;

      div {
        display: inline-block;
      }

      .left {
        width: calc(100% - 11.25rem);
        margin-right: 1.875rem;
        text-align: right;
        font-size: 14px;

        .price {
          font-size: 11px;
          color: #FF1738;

          div {
            font-size: 16px;
          }
        }
      }

      .right {
        width: 11.25rem;
        height: 2.75rem;
        border-radius: 2.75rem;
        margin-top: 0.4375rem;
        margin-right: 0.5rem;
        line-height: 2.75rem;
        font-size: 15px;
        text-align: center;
        color: #fff;
      }
    }
  }
</style>