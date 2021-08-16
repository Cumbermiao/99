<template>
  <div class="newWithdrawalBox">
    <div class="newWithdrawalHead" v-if="type !== 'redPage'">
      <div class="newWithdrawalHeadFl">
        <img v-if="type !== 'redPage'" style="width: 70upx;height: 70upx;" :src="info.Logo" mode="">
        <img v-else style="width: 70upx;height: 70upx;" :src="imgSrc('pay_ic_yue.png')" mode="">
        <div style="color: #999999;font-size: 14px;" class="">
          {{info.OrgName}}
        </div>
      </div>
      <div class="newWithdrawalHeadRl">
        <div style="font-size: 14px;" class="">
          {{info.Name}}
        </div>
        <div style="font-size: 14px;" class="">
          {{info.Account}}
        </div>
      </div>
    </div>
    <div style="font-size: 16px;text-align: center;margin: 10px 0;" class="">
      <span>{{type === 'redPage' ? '当前红包余额' : '当前余额'}}:</span>
      <span>{{type === 'redPage' ? userInfo.RedPackBalance : userInfo.Balance}}</span>
    </div>
    <div class="container9999">
      <div class='line'>
        <div class='lineLeft'>提现￥</div>
        <div class="lineRight">
          <field class="input" :focus="moneyFocus" maxlength="64" placeholder="请输入" @input="moneyChange"
            v-model="money" input-align="right" style="padding-right: 0px;margin-top:5px" placeholder-class="plaClass">
          </field>
          <span v-if="type !== 'redPage'"
            style="display: inline-block;width: 30%;text-align: left;color: grey;font-size: 14px;">00</span>
          <span v-else style="display: inline-block;width: 30%;text-align: left;color: grey;font-size: 14px;">0</span>
        </div>
      </div>
      <div class="" style="padding: 10px;text-align: center;" v-if="type !== 'redPage'">
        <span>可到账 ：<span>{{accountReceivable}}</span> </span>
        <span>服务费 ：<span>{{serviceCharge}}</span> </span>
      </div>
    </div>
    <div class="ruleTitle">
        <div class="ruleTitleHead">
          提现规则
        </div>
      <div v-if="type!=='redPage'">
        <div class="title">
          1、每天只能提现一次，节假日不能提现；
        </div>
        <div class="title">
          2、提现开放时间为{{maxPerDayInfo.startTime}}—{{maxPerDayInfo.endTime}}；
        </div>
        <div class="title">
          3、提现服务费为{{info.Rate}}%；
        </div>
        <div class="title">
          4、为了会员能准确的确认到账，同一收款账户一周内提现金额不能重复；
        </div>
        <!-- <div class="title" v-if="maxPerDayInfo.isAliPay">
          5、支付宝账户每月只能提现一次，按最后提现的时间起算。推荐使用银行卡！
        </div> -->
        <div class="title">
          5、 {{maxPerDayInfo.name}} {{maxPerDayInfo.limitDay}}天只能提现1次
        </div>
        <div class="title">
          6、 每次提现最少200。
        </div>
      </div>
      <div v-else>
        <div class="title">
          1、提现金额必须被10整除；<br>
          2、每日可提现{{ruleDetail.perDay || 0}}次；<br>
          3、每次提现最少{{ruleDetail.min || 0}}元，最多{{ruleDetail.max || 0}}元；
        </div>
      </div>
    </div>
    <div class="buttonBox" @click="showZhiFu">
      确认提现
    </div>
    <zhi-fu ref="zhiFu" :money="Number(money*100)" userName="提现" :buyKey='buyKey' @close='close' @save='submit'>
    </zhi-fu>
  </div>
</template>

<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    Dialog,
    Toast,
    Field
  } from 'vant';
  import zhiFu from "../../components/public/zhifu.vue"
  export default {
    components: {
      Field,
      zhiFu
    },
    data() {
      return {
        info: {},
        userInfo: {},
        money: null,
        accountReceivable: 0,
        serviceCharge: 0,
        id: null,
        maxPerDay: 0,
        maxPerDayInfo: {},
        buyKey: false,
        haveBuy: false,
        moneyFocus: true,
        type: '',
        ruleDetail: {},
        ajaxKey: true
      }
    },
    created() {
      let option = this.$route.query
      this.type = option.type
      this.getUserInfo()
      this.id = option.id
      if (option.type !== 'redPage') {
        this.getInfo(option.id)
        this.getMaxPerDay()
      } else {
        this.getRule()
      }
    },
    mounted() {
      this.getBuyKey()
    },
    methods: {
      async getRule() {
        let res = await this.$http.post('/api/v3/ManyPGRedPackDrawings/GetRule', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if (res.data.code === 1) {
          this.ruleDetail = res.data.data
        }
      },
      async getBuyKey() {
        let res = await this.$http.post('/api/v1/UserInfo/GetTradeInfo', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if (res.data.code === 1) {
          this.haveBuy = res.data.data
        }
      },
      showZhiFu() {
        if (!this.ajaxKey) return false
        this.ajaxKey = false

        if (this.type === 'redPage') {
          Dialog.confirm({
            title: '提示',
            message: `确定要红包提现${this.money}0元？`
          }).then(async () => {
            Toast.loading({
              duration: 0,
              message: '加载中...',
              forbidClick: true,
            });
            let res1 = await this.$http.post('/api/v3/ManyPGRedPackDrawings/DrawingSubmit', {
              amount: this.money * 10,
            }, {
              custom: {
                url: '99',
                nonce: nonce(),
                timestamp: timestamp()
              }
            })
            Toast.clear()
            this.ajaxKey = true
            let data = res1.data
            if (data.code === 1) {
              Toast(data.msg);
              setTimeout(() => {
                this.$router.go(-1)
              }, 2000)
            } else {
              Toast(data.msg);
            }
          }).catch(() => {
            this.ajaxKey = true
          })
        } else {
          if (!this.money) {
            Toast('请输入金额')
            this.ajaxKey = true
            return false
          }
          if (this.haveBuy) {
            this.buyKey = true
            this.$refs.zhiFu.paswFocus = true
          } else {
            this.money = null
            Dialog.confirm({
              title: '提示',
              message: '设置支付密码',
              confirmButtonText: '跳转'
            }).then(() => {
              this.$router.push('/editBuyPassword/noteVerify')
            })
          }
        }
      },
      close() {
        this.ajaxKey = true
        this.buyKey = false
      },
      async getUserInfo() {
        Toast.loading({
          duration: 0,
          message: '加载中...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v1/UserInfo/Get', {
          type: 1
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        Toast.clear()
        let data = res.data
        if (data.code === 1) {
          this.userInfo = data.data
        }
      },
      async getMaxPerDay() {
        let res = await this.$http.post('/api/v1/Drawing/GetSetting', {
          cardId: this.id
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data
        // console.log(data)
        // 内测期间，为了保证账户资金安全，仅提供提现体验服务，单笔提现额度不能超过{maxPerDay}。
        this.maxPerDay = data.data.maxPerDay
        this.maxPerDayInfo = data.data
        if (data.code === 1) {
          Dialog.confirm({
            title: '提示',
            message: `内测期间，为了保证账户资金安全，仅提供提现体验服务，单笔提现额度不能超过${data.data.maxPerDay}。`,
            showCancelButton: false
          })
        } else {
          Toast(data.msg);
        }
      },
      async getInfo(id) {
        let res = await this.$http.post('/api/v1/Drawing/GetCard', {
          id: id
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data
        this.info = data.data
      },
      moneyChange() {
        let money = this.money;
        var reg = new RegExp("^[0-9]*$");
        if(!reg.test(money.substring(money.length-1,money.length))){
          money = money.substring(0,money.length-1)
          this.money = money
        }
        this.serviceCharge = Number(`${money||0}00`) * ((this.info.Rate || 0) / 100)
        this.accountReceivable = Number(`${money||0}00`) - this.serviceCharge || 0
      },
      submit(tradePassword) {
        if (this.maxPerDay < this.money + '00') {
          Toast('内测期间，为了保证账户资金安全，仅提供提现体验服务，单笔提现额度不能超过' + this.maxPerDay + '。');
          return true
        }
        if (this.money === '') {
          Toast('请输入提现金额');
          return true
        }
        Dialog.confirm({
          title: '提示',
          message: `确定要提现${this.money}00元？可到账${this.accountReceivable},服务费${this.serviceCharge}`
        }).then(async () => {
          Toast.loading({
            duration: 0,
            message: '加载中...',
            forbidClick: true,
          });
          let res1 = await this.$http.post('/api/v1/Drawing/DrawingSubmit', {
            cardid: this.id,
            money: this.money,
            tradePassword: tradePassword
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp()
            }
          })
          if (res1) {
            let data = res1.data
            if (data.code === 1) {
              Toast(data.msg);
              this.$router.push('/balance')
            } else {
              Toast(data.msg);
            }
          } else {
            this.close()
          }
        })
      }
    }
  }
</script>

<style lang="less">
  .newWithdrawalBox {
    background: #F7F7F7;

    .newWithdrawalHead {
      padding: 15px;
      background: #FFFFFF;
      display: flex;

      .newWithdrawalHeadFl {
        text-align: center;
      }

      .newWithdrawalHeadRl {
        margin-left: 10px;
      }
    }

    .container9999 {
      background: #FFFFFF;

      .line {
        margin-top: 15px;
        height: 50px;
        width: 92%;
        margin: 0 auto;
        border-bottom: 1px solid #f5f5f5;
        display: flex;

        #myStyle {
          width: 45px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          border: 1px solid #EEEEEE;
          border-radius: 10px;
        }

        .active {
          background: #ffb609;
          color: #fff;
          border: none;
        }

        .lineRight {
          .tips {
            color: #9a9a9c;
            font-weight: bold;
          }

          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          text-align: right;

        }

        .activeAddress {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAYAAACrUDmFAAAAAXNSR0IArs4c6QAABTFJREFUaAXtmW9MHEUUwN8b7oAColQId2ia2qb9YEwa0g/6ocT7ywXi1Q8CFdMEohaDaKNo1CYmEhP/pzFREmttLEbTpsG2SKVnODjQEGNSrYlJrY2mxkS55U/BPz0L3O2ObzCL273d7V054a7pfZmZ92bevt/M2zdvAeEa+v0RCKyNyQvdyHmQI56zlZW78Frhmwi4tygyHOOcb1CZbMxezdRBLreS39Msy/ClFg4Az1XYbGdtuQzGGxvzpJkLrymK8pSWAxF+5vkYwJOh+ZwN0T+DwfLY3xePcOAeHdxP+fY17ptDoV+FPCcBx2vdW0GBY8D5Oi2cCEs7s3kqwuFxVZ5z72DU62oBmY/p4RDw+7xidrcWLqdOkLe12aXzP+6lRPK4ejpqS3DfQX6hzxkKTakytc2JEJ3Y7q2UY3IvOV2jOr7UInxbwvP8pcPDF5Zkmk7Wh6hU675TjinfkM9JcJQtTxUVFHvN4ARnVgPS/fawosAXAPwWzaEsdgnuqwKw+W8aGJjV67TjrAxRut/yo7PT3ZRIdmmdXeojjNmLSusr+vv/WpKZdLIOcMrvr0rw+FHO4S4jn+nkRpHl3+MYHIwZ6fWyrArRSZ9vW0JJnDaDo1t7yFFWUZ8qnIDNGsCo39Uh80SEKpNK/SmIMZ3cZ85b1wext/eSkd5MtuohyltbC6XfftnHFd5i6iTCpw77mgYMhebN5pjJVxVwxudbNweyKLm2mjlI8uPOjZt34P79cYs5pqpVC9FowOueh8TXVnCI2OuscTVdLZygXgQUZdBEnWcj7+paEeBxr7sTZCVMyaTCdOsRDznKypuxqythOicFBVLmqpYhMUAPc9KOnWeI7ZXhyGAKa9OewoPBouiliwfo1JqtFtN70+OocT1EcIrVvFR0OO5znQYO1drJBHqwsOTGzrK+vt+18uX0pdra2xQ5fpyqki1XsHOAwvKRTMCJ5xCgO0Y7WqR/KKXlKFXp7Y6hkU/0unTHEz53QAY4RM9Za7WWNvYdRzjSQS23mpeOjlE4HDFaIEJW4byPvr8OR+vqzN8Vo8UameTzPEdxdvJKcMDwLefQyKOZhBNuIK+rK5Dic+KvUfUav/TdacbYbtrdw3qF2XiysbFEnp3uIbv3mc1R5Qhsr3M48rQ6zmS7eA+K4laane4lZ7ZbGafd7behrV3/1axfM+n3b5KVRB9VJbfrdUljhFerhkb3JMkzJFi8Fqj8WXBs2NRAAEet7IoNiCvxM5LP/aDZvGitt4FKrlOpwNE7/uL/CSd8vKySoXvQJo19/hGB7DADUOXk3Blk/D3k+IOCMEfZ8Q56b++njLxNnWPZIjxPcC9ZzsmA8jJAYU/8rXFiZqqHEsPODNg3NIEMn3WGR143VGZYmFS5ULjKlTWuFgrXgxl+1r/mEDtXCk48MOkEVSgKU4z6PfsovbepsuW09CAOyHY7hyLdy7GT7lpTQGFIQNI99jYljI50DWvnCzjOoL0qPPquVr4SfUtA1QEq596k/X9CHafTUqhTDoJdVBG9n866TM1NegeNDFO2e5IcfcNIZyWjNTL9n651teCEbykBiolURj3DkKWc1unUEsjYzqpw5EOxfrV+KYWo1rmoz/UC3XddWpm+T0bjkJf3gHNw+GO9bqXHaQMKByWve48C/GVDZxEXKCyaMvEVYmg/TWHKIaq16xgeeQUZPEYyqmD++9En1hRwdm+2wAnPruoEVaQpr3dzHHkTXQLrqWw7W1x4wwelJ05Mq/rr7fUdWP4O/AP2Ss0GlCgUhgAAAABJRU5ErkJggg==) no-repeat right center;
          background-size: 14px auto;
        }

        .lineLeft {
          display: flex;
          width: 20%;
          align-items: center;
          height: 100%;
          font-weight: bold;
          color: #000000;
        }

        .input {
          padding-right: 10px;
          height: 100%;
          width: 70%;
          text-align: left;
          font-size: 14px;
          color: #545151;
        }

        .picker {
          height: 100%;
          justify-content: flex-start;
          display: flex;
          align-content: center;
          width: 250px;
        }

        picker {
          height: 42px;
          line-height: 42px;
        }
      }
    }

    .ruleTitle {
      padding: 15px;

      .ruleTitleHead {
        font-size: 16px;
        font-weight: 700;
        margin: 10px;
      }

      .title {
        font-size: 12px;
        margin: 10px 0;
      }
    }

    .buttonBox {
      width: 91%;
      margin: 0 auto;
      height: 42px;
      border-radius: 42px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      // position: fixed;
      bottom: 15px;
      // left: 0;
      // right: 0;
      background-image: linear-gradient(to right, #FB6463, #FBB663);
      margin-bottom: 20px;
    }
  }
</style>