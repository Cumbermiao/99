<template>
  <div class="accountNumberBox">
    <div class="accountNumber" v-for="(item,index) in numberList" :key="index" @click="itemClick(item)">
      <div class="accountNumberFl">
        <img style="width: 2.1875rem;height: 2.1875rem;" :src="item.Logo" mode="">
        <div class="">
          <span>{{item.OrgName}}</span>
        </div>
      </div>
      <div class="accountNumberRl">
        <div class="name">
          {{item.Name}}
        </div>
        <div class="number">
          {{item.Account}}
        </div>
        <div class="name" style="color: #999999;">
          服务费率{{item.Rate}}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    Toast,
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        numberList: [],
        Price: null,
        PriceAreaId: null,
        totalReturnAmount: null,
        winDate: null
      }
    },
    created() {
      let option = this.$route.query
      this.PriceAreaId = option.PriceAreaId
      this.Price = option.Price
      this.getInfo(option.PriceAreaId)
    },
    mounted() {
      this.getListNumber()
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
      async getListNumber() {
        this.numberList = []
        let res = await this.$http.post('/api/v1/Drawing/GetCardList', {}, {
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

          for (let i = 0; i < data.data.length; i++) {
            if (data.data[i].OrgName !== '支付宝') {
              this.numberList.push(data.data[i])
            }
          }
        }
      },
      itemClick(item) {
        let that = this
        let newtotalReturnAmount = this.totalReturnAmount * (1 - item.Rate / 100)
        Dialog.confirm({
          title: '提示',
          message: `确定返还到卡号\n【${item.Account}】吗?\n实际返还金额【${newtotalReturnAmount}】`,
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
            setTimeout(function () {
              this.$router.push('/groupworkdetails?Price=' + that.Price + '&PriceAreaId=' + that.PriceAreaId)
            }, 1000)
          }
        })
      },
    }
  }
</script>

<style lang="less">
  .accountNumberBox {
    .accountNumber {
      padding: .625rem;
      display: flex;
      background: #f2f2f2;
      align-items: center;
      margin-bottom: .625rem;

      .accountNumberFl {
        margin-right: .625rem;
        text-align: center;
        font-size: .875rem;
        color: #999;

        image {
          vertical-align: middle;
        }
      }

      .accountNumberRl {
        font-size: .875rem;
      }
    }

    .buttonBox {
      width: 91%;
      margin: 0 auto;
      height: 84rpx;
      border-radius: 84rpx;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      // position: fixed;
      bottom: 30rpx;
      // left: 0;
      // right: 0;
      background-color: #4a8be9;
      margin-bottom: 1.25rem;
    }
  }
</style>