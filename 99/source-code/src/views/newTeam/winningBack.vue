<template>
  <div class="winning-back">
    <div class="winning-1" style="winning1Stype"></div>
    <div class="winning-2">
      <div>您与{{winDate}}中奖，已满足满返条件！</div>
      <div>本金合计：<div style="color: #FF1738;display: inline-block;">{{totalReturnAmount}}</div> 元！</div>
    </div>
    <div class="winning-3">
      <div @click="save">返还到红包账户</div>
      <div @click="toCrad">返还到银行卡</div>
      <div @click="toShopList">继续团购</div>
    </div>
  </div>
</template>

<script>
    import {
  Toast,
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
        priceAreaId: null,
        price: 0,
        totalReturnAmount: 0,
        winDate: null
      }
    },
    computed: {
      winning1Stype() {
        return {
          backgroundImage: imgUrl ? 'url(' + imgUrl + 'fan_picture.png)' : ''
        }
      }
    },
    created() {
      let option = this.$route.query
      this.priceAreaId = option.PriceAreaId
      this.price = option.Price
      this.getInfo(option.PriceAreaId)
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
          this.winDate = data.data.winDate.split(' ')[0]
          this.canReturn = data.data.canReturn
          this.totalReturnAmount = data.data.totalReturnAmount
        }
      },
      toCrad() {
        this.$router.push(`/newTeam/card?price=${this.price}&priceAreaId=${this.priceAreaId}`)
      },
      toShopList() {
        this.$router.push('/groupworkdetails/fugouList?priceAreaId=' + this.priceAreaId + '&Price=' + this)
      }
    }
  }
</script>

<style lang="less" scoped>
  .winning-back {
    padding-top: 20%;
    color: #333;

    .winning-1 {
      width: 100vw;
      padding-bottom: 54%;
      background-size: 100% 100%;
    }

    .winning-2 {
      margin-top: 2.5rem;
      text-align: center;

      >div {
        margin-bottom: 0.5rem;
      }
    }

    .winning-3 {
      margin-top: 6.75rem;
      text-align: center;

      >div {
        width: 19.25rem;
        height: 2.75rem;
        border: 1px solid #FF1738;
        border-radius: 2.75rem;
        margin: 0 auto 0.625rem;
        line-height: 2.75rem;
        color: #FF1738;

        &:last-child {
          color: #fff;
          background-color: #FF1738;
        }
      }
    }
  }
</style>