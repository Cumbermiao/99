<template>
  <div class="container999">
    <div class='line' @click="bindPickerChange">
      <div class='lineLeft'>账户类型</div>
      <div class="lineRight">
        {{array[0].values[index]}}
        <div class="tips tri" style="position: absolute;"></div>
      </div>
    </div>
    <div class='line'>
      <div class='lineLeft'>户主姓名</div>
      <div class="lineRight">
        <div class="">
          {{userInfo.TrueName}}
        </div>
      </div>
    </div>
    <div class='line'>
      <div class='lineLeft'>账户</div>
      <div class="lineRight">
        <field class="input" placeholder="请输入账户" maxlength="64" v-model="accountInput" placeholder-class="plaClass">
        </field>
      </div>
    </div>
    <div class='line' v-if="openAnAccount">
      <div class='lineLeft'>开户行</div>
      <div class="lineRight">
        <field class="input" placeholder="请输入开户行" maxlength="64" v-model="bankOfDeposit" placeholder-class="plaClass">
        </field>
      </div>
    </div>
    <div class="" style="font-size: 28upx;margin: .625rem 0;color: #FB6463;text-align: center;">
      请务必确认账号准确性，一经转账，无法退回
    </div>
    <div class="buttonBox" @click="submit">
      我已核对无误，确认提交
    </div>
    <!-- #ifndef MP-ALIPAY -->
    <div v-show="mubuKey" class="mubu">
      <div class="picker">
        <picker show-toolbar :columns='array' @confirm="confirm" @cancel="onCancel">
        </picker>
      </div>
    </div>
    <!-- #endif -->
  </div>
</template>

<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    Toast,
    Field,
    Picker
  } from 'vant';
  export default {
    components: {
      Field,
      Picker
    },
    data() {
      return {
        mubuKey: false,
        array: [{
          values: [],
          defaultIndex: 0
        }],
        array1:[],
        index: 0,
        openAnAccount: false,
        accountType: '',
        userInfo: {},
        accountInput: '',
        bankOfDeposit: ''
      }
    },
    created() {
      this.getOgs()
      this.getUserInfo()
    },
    methods: {
      onCancel(){
        this.mubuKey = false
      },
      confirm(value, index) {
        // console.log('picker发送选择改变，携带值为', e.target.value)   用于输出改变索引值
        this.index = index //将数组改变索引赋给定义的index变量
        this.accountType = value[0] //将array【改变索引】的值赋给定义的jg变量
        //	// console.log("籍贯为：",this.jg)		//输出获取的籍贯值，例如：中国
        if (this.accountType === '支付宝') {
          this.openAnAccount = false
        } else if (this.accountType === '') {
          this.openAnAccount = false
        } else {
          this.openAnAccount = true
        }
        this.onCancel()
      },
      async getUserInfo() {
        Toast.loading({
          duration: 0,
          message: '加载中...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v1//UserInfo/Get', {
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
      async getOgs() {
        let res = await this.$http.post('/api/v1/Drawing/GetOgs', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data
        if (data.code === 1) {
          this.array1 = data.data.map(res=>(res.id))
          this.array[0].values = data.data.map(res=>(res.name))
        }
      },
      bindPickerChange() { //改变的事件名
        this.mubuKey = true;
      },
      async submit() {
        if (this.accountInput === '') {
          Toast('请输入账户');
          return
        }
        if (!this.accountType === '支付宝') {
          if (this.bankOfDeposit === '') {
            Toast('请输入开户行');
            return
          }
        }
        Toast.loading({
          duration: 0,
          message: '加载中...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v1/Drawing/AddCard', {
          OrgId: this.array1[this.index],
          CardNum: this.accountInput,
          OpeningBankName: this.bankOfDeposit
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
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style lang="less">
  .container999 {
    height: 94vh;
    .title {
      height: 2.5rem;
      line-height: 2.5rem;
      padding-left: 4%;
      border-bottom: .0625rem solid #f5f5f5;
    }

    .buttonBox {
      width: 91%;
      margin: 0 auto;
      height: 2.625rem;
      border-radius: 2.625rem;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      bottom: 3.125rem;
      left: 0;
      right: 0;
      background-image: linear-gradient(to right, #FB6463, #FBB663);
    }

    .tri {
      width: 0;
      height: 0;
      border-left: .25rem solid transparent;
      border-right: .25rem solid transparent;
      right: .9375rem !important;
      border-top: .5rem solid #545151;
    }

    .line {
      margin-top: .9375rem;
      height: 3.125rem;
      width: 92%;
      margin: 0 auto;
      border-bottom: .0625rem solid #f5f5f5;
      display: flex;

      #myStyle {
        width: 2.8125rem;
        height: 1.25rem;
        line-height: 1.25rem;
        text-align: center;
        border: .0625rem solid #EEEEEE;
        border-radius: .625rem;
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

      }

      .activeAddress {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAYAAACrUDmFAAAAAXNSR0IArs4c6QAABTFJREFUaAXtmW9MHEUUwN8b7oAColQId2ia2qb9YEwa0g/6ocT7ywXi1Q8CFdMEohaDaKNo1CYmEhP/pzFREmttLEbTpsG2SKVnODjQEGNSrYlJrY2mxkS55U/BPz0L3O2ObzCL273d7V054a7pfZmZ92bevt/M2zdvAeEa+v0RCKyNyQvdyHmQI56zlZW78Frhmwi4tygyHOOcb1CZbMxezdRBLreS39Msy/ClFg4Az1XYbGdtuQzGGxvzpJkLrymK8pSWAxF+5vkYwJOh+ZwN0T+DwfLY3xePcOAeHdxP+fY17ptDoV+FPCcBx2vdW0GBY8D5Oi2cCEs7s3kqwuFxVZ5z72DU62oBmY/p4RDw+7xidrcWLqdOkLe12aXzP+6lRPK4ejpqS3DfQX6hzxkKTakytc2JEJ3Y7q2UY3IvOV2jOr7UInxbwvP8pcPDF5Zkmk7Wh6hU675TjinfkM9JcJQtTxUVFHvN4ARnVgPS/fawosAXAPwWzaEsdgnuqwKw+W8aGJjV67TjrAxRut/yo7PT3ZRIdmmdXeojjNmLSusr+vv/WpKZdLIOcMrvr0rw+FHO4S4jn+nkRpHl3+MYHIwZ6fWyrArRSZ9vW0JJnDaDo1t7yFFWUZ8qnIDNGsCo39Uh80SEKpNK/SmIMZ3cZ85b1wext/eSkd5MtuohyltbC6XfftnHFd5i6iTCpw77mgYMhebN5pjJVxVwxudbNweyKLm2mjlI8uPOjZt34P79cYs5pqpVC9FowOueh8TXVnCI2OuscTVdLZygXgQUZdBEnWcj7+paEeBxr7sTZCVMyaTCdOsRDznKypuxqythOicFBVLmqpYhMUAPc9KOnWeI7ZXhyGAKa9OewoPBouiliwfo1JqtFtN70+OocT1EcIrVvFR0OO5znQYO1drJBHqwsOTGzrK+vt+18uX0pdra2xQ5fpyqki1XsHOAwvKRTMCJ5xCgO0Y7WqR/KKXlKFXp7Y6hkU/0unTHEz53QAY4RM9Za7WWNvYdRzjSQS23mpeOjlE4HDFaIEJW4byPvr8OR+vqzN8Vo8UameTzPEdxdvJKcMDwLefQyKOZhBNuIK+rK5Dic+KvUfUav/TdacbYbtrdw3qF2XiysbFEnp3uIbv3mc1R5Qhsr3M48rQ6zmS7eA+K4laane4lZ7ZbGafd7behrV3/1axfM+n3b5KVRB9VJbfrdUljhFerhkb3JMkzJFi8Fqj8WXBs2NRAAEet7IoNiCvxM5LP/aDZvGitt4FKrlOpwNE7/uL/CSd8vKySoXvQJo19/hGB7DADUOXk3Blk/D3k+IOCMEfZ8Q56b++njLxNnWPZIjxPcC9ZzsmA8jJAYU/8rXFiZqqHEsPODNg3NIEMn3WGR143VGZYmFS5ULjKlTWuFgrXgxl+1r/mEDtXCk48MOkEVSgKU4z6PfsovbepsuW09CAOyHY7hyLdy7GT7lpTQGFIQNI99jYljI50DWvnCzjOoL0qPPquVr4SfUtA1QEq596k/X9CHafTUqhTDoJdVBG9n866TM1NegeNDFO2e5IcfcNIZyWjNTL9n651teCEbykBiolURj3DkKWc1unUEsjYzqpw5EOxfrV+KYWo1rmoz/UC3XddWpm+T0bjkJf3gHNw+GO9bqXHaQMKByWve48C/GVDZxEXKCyaMvEVYmg/TWHKIaq16xgeeQUZPEYyqmD++9En1hRwdm+2wAnPruoEVaQpr3dzHHkTXQLrqWw7W1x4wwelJ05Mq/rr7fUdWP4O/AP2Ss0GlCgUhgAAAABJRU5ErkJggg==) no-repeat right center;
        background-size: .875rem auto;
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
        padding-right: .625rem;
        height: 100%;
        width: 70%;
        text-align: left;
        font-size: .875rem;
        color: #545151;
      }

      .picker {
        height: 100%;
        justify-content: flex-start;
        display: flex;
        align-content: center;
        width: 15.625rem;
      }

      picker {
        height: 2.625rem;
        line-height: 2.625rem;
      }
    }

    width: 100vw;
    font-size: .875rem;
    // min-height: 100vh;
    overflow: hidden;
    color: #6b8082;
    position: relative;
  }
  .mubu{
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    .picker {
      position: absolute;
      bottom: 0;
      width: 100vw;
    }
  }
</style>