<template>
  <div class="confirmOrderBox">
    <div class="confirmOrderAddress" v-if="addressKey" @click="urlHrefDizhi">
      <div class="confirmOrderAddressFl" v-if="!IsDefaultMy">
        <div>
          <div class="" style="margin-bottom: .9375rem;">
            <span style="margin-right: 2.5rem;">{{addressIs?addressIs.Receiver:''}}</span>
            <span>{{addressIs?addressIs.Mobile:''}}</span>
          </div>
          <div style="font-size: .875rem;" class="">
            <span v-if="addressIs.Province !== 'null'">{{addressIs.Province}}</span>
            <span v-if="addressIs.City !== 'null'">{{addressIs.City}}</span>
            <span v-if="addressIs.County !== 'null'">{{addressIs.County}}</span>
            <span v-if="addressIs.County !== 'null'">{{addressIs.County}}</span>
            <span v-if="addressIs.Detail !== 'null'">{{addressIs.Detail}}</span>
          </div>
        </div>

      </div>
      <div class="confirmOrderAddressFl" v-else @click="urlHrefDizhi" style="width: 100%;">
        选择地址
      </div>
      <div class="confirmOrderAddressRl" @click="urlHrefDizhi">
        <img style="width: .8125rem;" src="http://static.jiujiupingou.com/Static/img/bg16.png" mode="widthFix" />
      </div>
    </div>
    <div class="commodity">
      <div class="commodityFl">
        <img style="width: 5.46875rem;" :src="orderDetailsObj.mainImage" mode="widthFix" />
      </div>
      <div class="commodityRl">
        <div class="title1">
          {{orderDetailsObj.title}}
        </div>
        <div class="title2">
          {{orderDetailsObj.subTitle}}
        </div>
        <!-- <div class="">
					【小米10S在4月29号-5月5号享白条24期免息】骁龙870,双扬立体声【小米11ultra限时享24期免息戳】
				</div> -->
        <div class="jiage">
          ￥{{orderDetailsObj.price}}/ 件
        </div>
      </div>
    </div>
    <div class=""
      style="display: flex;justify-content: space-between;padding: .9375rem;font-size: .875rem;background: #FFFFFF;margin-top: .625rem;">
      <div class="">
        购买数量
      </div>
      <div class="">
        1
      </div>
    </div>
    <div v-if="kuaidiKey" class=""
      style="display: flex;justify-content: space-between;padding: .9375rem;font-size: .875rem;background: #FFFFFF;margin-top: .625rem;">
      <div class="">
        配送方式
      </div>
      <div class="">
        快递
      </div>
    </div>
    <div v-if="orderDetailsObj.energyTicketNumber > 0" class=""
      style="display: flex;justify-content: space-between;padding: .9375rem;font-size: .875rem;background: #FFFFFF;margin-top: .625rem;">
      <div class="">
        使用【{{orderDetailsObj.energyTicketNumber}}】张能量券抵扣
      </div>
      <div class="" style="width: 1.25rem;height: 1.25rem;">
        <img @click="tabsChoiceNo" v-if="choiceAgreementNo" style="width: 1.125rem;margin-bottom: -0.25rem;"
         :src="imgSrc('fangkuang.png')" mode="widthFix" />
        <img @click="tabsChoice" v-if="choiceAgreement" style="width: 1.125rem;margin-bottom: -0.25rem;"
         :src="imgSrc('xuanzhong.png')" mode="widthFix" />
      </div>
    </div>
    <div class="" v-if="orderDetailsObj.energyTicketNumber > 0" style="font-size: .875rem;">
      注意：选中能量券抵扣后，提交订单时将会先扣券，订单关闭后退回。
    </div>
    <div class="submitpay">
      <div>
        <span>实付款:</span>
        <span v-if="!choiceAgreement" style="color: red;margin-left: .625rem;">￥{{orderDetailsObj.price}}</span>
        <span v-if="choiceAgreement" s
          style="color: red;margin-left: .625rem;">{{orderDetailsObj.energyTicketPrice}}</span>
      </div>
      <span class="btnPaly" style="margin-left: 3.125rem;" @click="goPlay">去支付</span>
    </div>
  </div>
</template>

<script>
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
  import util from '../../util/util.js'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        num: 1,
        defaultAddressRadio: false,
        choiceAgreementNo: true,
        choiceAgreement: false,
        addressList: [],
        IsDefaultObj: {},
        IsDefaultMy: true,
        orderDetailsObj: {},
        priceArea: {},
        pid: null,
        checkedXuanze: '1',
        checkBoxText: false,
        goPlayDisable: false,
        addressKey: true,
        inputKey: true,
        kuaidiKey: true,
        type: ''
      }
    },
    computed: {
      ...mapGetters('address', ['addressIs', 'addressXuanze']),
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
    created() {
      let option = this.$route.query
      if (option.type === 'card') {
        let obj = JSON.parse(option.json)
        this.type = option.type
        this.addressKey = false;
        this.inputKey = false;
        this.kuaidiKey = false;
        this.orderDetailsObj = {
          cardTypeId: obj.cardTypeId,
          mainImage: imgUrl+'99logo.png',
          title: obj.typeName,
          subTitle: "",
          price: obj.sellPrice,
        }
      } else {
        this.getOrderDetails(option.pid)
        this.pid = option.pid
        if (!this.addressXuanze) {
          this.getAddress()
        } else {
          this.IsDefaultMy = false
        }
      }
    },
    methods: {
      setNum(data) {
        this.num = data.detail.value.replace(/[^\d]/g, '')
      },
      ...mapActions('address', ['setAddressIs']),
      tabsChoiceNo() {
        this.choiceAgreementNo = false
        this.choiceAgreement = true
      },
      tabsChoice() {
        this.choiceAgreementNo = true
        this.choiceAgreement = false
      },
      defaultAddressRadioClick() {
        if (this.defaultAddressRadio) {
          this.defaultAddressRadio = false
        } else {
          this.defaultAddressRadio = true
        }
      },
      cheClick() {
        // console.log(e)
      },
      // 跳转地址
      urlHrefDizhi() {
        this.$router.push('/confirmOrder/xuanzedizhi?pid=' + this.pid + '&addressId=' + this.addressIs.AddressId)
      },
      async getOrderDetails(id) {
        let res = await this.$http.post('/api/v1/Product/Get', {
          pid: id
        }, {
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
          this.orderDetailsObj = data.data
          this.priceArea = data.data.priceArea
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
        if(res){
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
        }
      },

      goPlay: util.throttle(async function () {
        if (this.type !== 'card') {
          let that = this
          if (that.IsDefaultMy) {
            Toast('请选择收货地址');
            return
          }
          if (that.orderDetailsObj.stockQuantity <= 0) {
            Toast('库存不足');
            return
          }
          Toast.loading({
            duration: 0,
            message: '加载中...',
            forbidClick: true,
          });
          let shifukuan = null
          if (that.choiceAgreement) {
            shifukuan = that.orderDetailsObj.energyTicketPrice
          } else {
            shifukuan = that.orderDetailsObj.price
          }

          let res = await that.$http.post('/api/v1/MyOrder/AddProductOrder', {
            ProductId: that.pid,
            AddressId: that.addressIs.AddressId,
            UseTicket: that.choiceAgreement,
            Amount: 1,
            IsManyPGPurchase: 0,
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp()
            }
          })
          let data = res.data
          if (data.code === 1) {
            Toast.clear();
            this.$router.push('/confirmOrder/GoPay?orderId=' + data.data.orderId + '&shifukuan=' + shifukuan + '&createTime=' +
              data.data.createTime)
          }
        } else {
          this.$router.push(
            `/confirmOrder/GoPay?shifukuan=${this.num*this.orderDetailsObj.price}&type=card&num=${this.num}&cardTypeId=${this.orderDetailsObj.cardTypeId}`
            )
        }
      }, 3000)
    }
  }
</script>

<style lang="less">
  .confirmOrderBox {
    padding: .625rem;
    color: #404040;
    background: #F7F7F7;

    >div {
      border-radius: .3125rem;
    }

    .confirmOrderAddress {
      background: #FFFFFF;
      padding: .9375rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .commodity {
      padding: .9375rem;
      display: flex;
      align-items: center;
      background: #FFFFFF;
      margin-top: .625rem;

      .commodityRl {
        padding-top: .3125rem;
        margin-left: .625rem;
        font-size: .75rem;

        .title1 {
          margin-bottom: .875rem;
          font-weight: bold;
        }

        .title2 {
          margin-bottom: .875rem;
          color: #757575 !important;
        }

        .jiage {
          font-size: .875rem;
          color: red;
        }
      }
    }

    .activeAddress {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAYAAACrUDmFAAAAAXNSR0IArs4c6QAABTFJREFUaAXtmW9MHEUUwN8b7oAColQId2ia2qb9YEwa0g/6ocT7ywXi1Q8CFdMEohaDaKNo1CYmEhP/pzFREmttLEbTpsG2SKVnODjQEGNSrYlJrY2mxkS55U/BPz0L3O2ObzCL273d7V054a7pfZmZ92bevt/M2zdvAeEa+v0RCKyNyQvdyHmQI56zlZW78Frhmwi4tygyHOOcb1CZbMxezdRBLreS39Msy/ClFg4Az1XYbGdtuQzGGxvzpJkLrymK8pSWAxF+5vkYwJOh+ZwN0T+DwfLY3xePcOAeHdxP+fY17ptDoV+FPCcBx2vdW0GBY8D5Oi2cCEs7s3kqwuFxVZ5z72DU62oBmY/p4RDw+7xidrcWLqdOkLe12aXzP+6lRPK4ejpqS3DfQX6hzxkKTakytc2JEJ3Y7q2UY3IvOV2jOr7UInxbwvP8pcPDF5Zkmk7Wh6hU675TjinfkM9JcJQtTxUVFHvN4ARnVgPS/fawosAXAPwWzaEsdgnuqwKw+W8aGJjV67TjrAxRut/yo7PT3ZRIdmmdXeojjNmLSusr+vv/WpKZdLIOcMrvr0rw+FHO4S4jn+nkRpHl3+MYHIwZ6fWyrArRSZ9vW0JJnDaDo1t7yFFWUZ8qnIDNGsCo39Uh80SEKpNK/SmIMZ3cZ85b1wext/eSkd5MtuohyltbC6XfftnHFd5i6iTCpw77mgYMhebN5pjJVxVwxudbNweyKLm2mjlI8uPOjZt34P79cYs5pqpVC9FowOueh8TXVnCI2OuscTVdLZygXgQUZdBEnWcj7+paEeBxr7sTZCVMyaTCdOsRDznKypuxqythOicFBVLmqpYhMUAPc9KOnWeI7ZXhyGAKa9OewoPBouiliwfo1JqtFtN70+OocT1EcIrVvFR0OO5znQYO1drJBHqwsOTGzrK+vt+18uX0pdra2xQ5fpyqki1XsHOAwvKRTMCJ5xCgO0Y7WqR/KKXlKFXp7Y6hkU/0unTHEz53QAY4RM9Za7WWNvYdRzjSQS23mpeOjlE4HDFaIEJW4byPvr8OR+vqzN8Vo8UameTzPEdxdvJKcMDwLefQyKOZhBNuIK+rK5Dic+KvUfUav/TdacbYbtrdw3qF2XiysbFEnp3uIbv3mc1R5Qhsr3M48rQ6zmS7eA+K4laane4lZ7ZbGafd7behrV3/1axfM+n3b5KVRB9VJbfrdUljhFerhkb3JMkzJFi8Fqj8WXBs2NRAAEet7IoNiCvxM5LP/aDZvGitt4FKrlOpwNE7/uL/CSd8vKySoXvQJo19/hGB7DADUOXk3Blk/D3k+IOCMEfZ8Q56b++njLxNnWPZIjxPcC9ZzsmA8jJAYU/8rXFiZqqHEsPODNg3NIEMn3WGR143VGZYmFS5ULjKlTWuFgrXgxl+1r/mEDtXCk48MOkEVSgKU4z6PfsovbepsuW09CAOyHY7hyLdy7GT7lpTQGFIQNI99jYljI50DWvnCzjOoL0qPPquVr4SfUtA1QEq596k/X9CHafTUqhTDoJdVBG9n866TM1NegeNDFO2e5IcfcNIZyWjNTL9n651teCEbykBiolURj3DkKWc1unUEsjYzqpw5EOxfrV+KYWo1rmoz/UC3XddWpm+T0bjkJf3gHNw+GO9bqXHaQMKByWve48C/GVDZxEXKCyaMvEVYmg/TWHKIaq16xgeeQUZPEYyqmD++9En1hRwdm+2wAnPruoEVaQpr3dzHHkTXQLrqWw7W1x4wwelJ05Mq/rr7fUdWP4O/AP2Ss0GlCgUhgAAAABJRU5ErkJggg==) no-repeat right center;
      background-size: .875rem auto;
    }

    .submitpay {
      position: fixed;
      left: 0rem;
      bottom: 0rem;
      height: 2.5rem;
      width: 100%;
      padding: .625rem 0 .3125rem;
      text-align: center;
      background-color: #fff;

      div {
        margin-left: 1.5625rem;
        line-height: 2rem;
        text-align: left;

        span:last-child {
          position: absolute;
          left: 4.375rem;
          font-size: 1.375rem;
        }
      }
    }

    .btnPaly {
      position: absolute;
      top: .5625rem;
      right: 1.25rem;
      width: 7.5rem;
      height: 2.25rem;
      line-height: 2.25rem;
      border-radius: 1.125rem;
      border: none;
      outline: none;
      background-image: linear-gradient(to right, #FBB663, #FB6463);
      color: #fff;
      display: inline-block;
    }
  }
</style>