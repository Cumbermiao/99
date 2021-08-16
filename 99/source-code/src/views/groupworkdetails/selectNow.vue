<template>
  <div class="selectNowBox">
    <div class="confirmOrderAddress">
      <div class="confirmOrderAddressFl" v-if="!IsDefaultMy" @click="urlHrefDizhi">
        <div class="">
          <div class="" style="margin-bottom: .9375rem;">
            <span style="margin-right: 2.5rem;">{{addressIs.Receiver}}</span>
            <span>{{addressIs.Mobile}}</span>
          </div>
          <div style="font-size: .875rem;" class="">
            <span v-if="addressIs.Province !== 'null'">{{addressIs.Province}}</span>
            <span v-if="addressIs.City !== 'null'">{{addressIs.City}}</span>
            <span v-if="addressIs.County !== 'null'">{{addressIs.County}}</span>
            <span v-if="addressIs.Detail !== 'null'">{{addressIs.Detail}}</span>
          </div>
        </div>

      </div>
      <div class="confirmOrderAddressFl" v-else @click="urlHrefDizhi" style="width: 100%;">
        选择地址
      </div>
      <div class="confirmOrderAddressRl" @click="urlHrefDizhi">
        <img style="width: .8125rem;" src="http://static.jiujiupingou.com/Static/img/bg16.png" mode="widthFix">
      </div>
    </div>
    <div class="" style="padding: .9375rem;background: #FFFFFF;margin-top: .625rem;display: flex;">
      <img style="width: 5rem;height: 5rem;margin-right: .625rem;" :src="detailsInfo.mainImage" mode="">
      <div class="" style="flex: 1;">
        <div class="" style="font-size: .75rem;">
          {{detailsInfo.title}}
        </div>
        <!-- <div class="" style="font-size: 24upx;margin-top: .625rem;">
					￥ {{detailsInfo.price}}/件
				</div> -->
      </div>
    </div>
    <div style="padding: .9375rem;display: flex;justify-content: space-between;background: #FFFFFF;margin-top: .625rem;"
      class="">
      <div class="">
        邮费
      </div>
      <div class="">
        包邮
      </div>
    </div>
    <div style="padding: .9375rem;display: flex;justify-content: space-between;background: #FFFFFF;margin-top: .625rem;"
      class="">
      <div class="">
        配送方式
      </div>
      <div class="">
        快递
      </div>
    </div>
    <div class="confirm-order" @click="confirmOrderBtn">
      确定订单
    </div>
  </div>
</template>

<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    mapActions,
    mapGetters
  } from 'vuex';
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        IsDefaultMy: true,
        ProductId: '',
        OrderId: '',
        detailsInfo: {},
        priceAreaId: '',
        pirceTitle: ''
      }
    },
    created() {
      let option = this.$route.query
      this.ProductId = option.ProductId
      this.OrderId = option.OrderId
      this.pirceTitle = option.pirceTitle
      this.priceAreaId = option.priceAreaId
      this.getDetails(this.ProductId)
      if (!this.addressXuanze) {
        this.getAddress()
      } else {
        this.IsDefaultMy = false
      }
    },
    onBackPress() {
      this.$router.push('/groupworkdetails/commodittypepreviewDeatils?pid=' + this.ProductId + '&OrderId=' + this
        .OrderId + '&type=xuan' + '&pirceTitle=' + this.pirceTitle + '&priceAreaId=' + this.priceAreaId)
      return true
    },
    computed: {
      ...mapGetters('address', ['addressIs', 'addressXuanze'])
    },
    methods: {
      ...mapActions('address', ['setAddressIs']),
      async getDetails(pid) {
        let baseUrl = '/api/v1/product/get'
        let res = await this.$http.post(baseUrl, {
          pid: pid
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
          this.detailsInfo = data.data
          this.productMainImageList = data.data.productMainImageList
          this.productDetailImageList = data.data.productDetailImageList
        }
      },
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
              this.IsDefaultMy = false
            }
          }
          this.setAddressIs(this.IsDefaultObj)
        }
      },
      urlHrefDizhi() {
        this.$router.push('/groupworkdetails/xuanzedizhi?ProductId=' + this.ProductId + '&OrderId=' + this.OrderId +
          '&type=xuan' + '&pirceTitle=' + this.pirceTitle + '&priceAreaId=' + this.priceAreaId)
      },
      async confirmOrderBtn() {
        if (this.IsDefaultMy) {
          Toast('请选择收货地址');
          return
        }
        let res = await this.$http.post('/api/v1/MyOrder/ManyPGProductConfirm', {
          orderId: this.OrderId,
          productId: this.ProductId,
          addressId: this.addressIs.AddressId
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
          Toast(data.msg);
          this.$router.push('/ManyPGOrderList/manyPGOrderListDetails?type=Winning&orderId=' + this.OrderId +
            '&typefanhui=ping')
        }
      }
    }
  }
</script>

<style lang="less">
  .selectNowBox {
    background: #F7F7F7;

    .confirmOrderAddress {
      background: #FFFFFF;
      padding: .9375rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .confirm-order {
      position: fixed;
      width: 100%;
      bottom: 0;
      height: 3.125rem;
      line-height: 3.125rem;
      text-align: center;
      font-size: 1rem;
      color: white;
      background: #D50606;
    }
  }
</style>