<template>
  <div class="card">
    <div class="item" :style="itemStyle" v-for="(item,index) in bankList" :key="index" @click="save(item)">
      <div class="top">
        <div class="heart">
          <image :src="item.Logo" mode=""></image>{{item.OrgName}}
        </div>
        <div class="bank">
          <div>{{num(item.Account||'',0,4)}}</div>
          <div>{{num(item.Account||'',4,8)}}</div>
          <div>{{num(item.Account||'',8,12)}}</div>
          <div>{{num(item.Account||'',12,16)}}</div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">持卡人：{{item.Name}}</div>
        <div class="right">服务费率{{item.Rate}}%</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Dialog,
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
    computed: {
      num() {
        return (num, start, end) => {
          if ((num.length - 1) < start) {
            return ""
          } else if ((num.length - 1) < end) {
            return num.substring(start, num.length - 1)
          } else {
            return num.substring(start, end)
          }
        }
      },
      itemStyle() {
        return {
          height: ((window.innerWidth - 16) / 359) * 163 + 4 + 'px',
          backgroundImage: imgUrl ? 'url(' + imgUrl + 'bank_nor.png)' : ''
        }
      }
    },
    data() {
      return {
        priceAreaId: null,
        price: 0,
        bankList: [],
        winDate: null,
        totalReturnAmount: 0
      }
    },
    created() {
      let option = this.$route.query
      this.priceAreaId = option.priceAreaId
      this.price = option.price
      this.getListBank()
      this.getInfo(option.priceAreaId)
    },
    methods: {
      async getInfo(priceAreaId) {
        let res = await this.$http.post('/api/v1/ManyPG/ManyPGArea', {
          id: priceAreaId
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
          this.winDate = data.data.winDate
          this.totalReturnAmount = data.data.totalReturnAmount
        }
      },
      save(item) {
        let that = this
        let newtotalReturnAmount = this.totalReturnAmount * (1 - item.Rate / 100)
        Dialog.confirm({
          title: '提示',
          message: `确定返还到卡号\n【${item.Account}】吗?\n实际返还金额【${newtotalReturnAmount}】`
        }).then(async () => {
          let res = await that.$http.post('/api/v1/WinBack/ReturnToCardSubmit', {
            cardid: item.Id,
            priceareaid: that.PriceAreaId,
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
            Toast('成功');
            setTimeout(() => {
              this.$router.push('/newTeam/shopList?priceAreaId=' + that.priceAreaId)
            }, 1000)
          }
        })
      },
      async getListBank() {
        let res = await this.$http.post('/api/v1/Drawing/GetCardList', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            loading: '加载'
          }
        })
        let data = res.data
        // console.log(data)
        if (data.code === 1) {
            Toast.clear()
            this.bankList = data.data.map(res => {
            res.Rate = res.Rate.toFixed(2)
            return res
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .card {
    padding: 0.625rem 0.5rem;

    .item {
      background-size: 100% 100%;

      .top {
        padding: 1rem 1.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);

        .heart {
          position: relative;
          padding-left: 28px;
          font-size: 15px;
          color: #fff;

          image {
            position: absolute;
            top: 0;
            left: 0;
            width: 22px;
            height: 22px;
            border-radius: 50%;
          }
        }

        .bank {
          display: flex;
          padding: 2.2rem 0 1.2rem;

          >div {
            flex: 1;
            font-size: 24px;
            color: #fff;
          }
        }
      }

      .bottom {
        display: flex;
        padding: 0 1.5rem;
        font-size: 12px;
        color: #fff;

        >div {
          position: relative;
          flex: 1;
          line-height: 2.6rem;
        }

        .left::after {
          position: absolute;
          top: 15px;
          right: 0;
          content: '';
          width: 1px;
          height: 15px;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .right {
          margin-left: 20px;
        }
      }
    }
  }
</style>