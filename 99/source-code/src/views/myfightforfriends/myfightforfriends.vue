<template>
  <div class="myFightForBox">
    <div class="headTitle">
      全部{{totalNumber}}人
    </div>
    <div class="" style="margin-top: 36upx;padding: 0 24upx;">
      <list class="list bookshelf-content" finished-text="没有更多了" @load="moreData">
        <div class="listItem" v-for="(item,index) in list" :key="index">
          <div class="itemHead">
            <div class="itemHeadFl">
              <img :src="imgSrc('grzl_user.png')" mode="widthFix">
            </div>
            <div class="itemHeadRl">
              <div class="name">
                <span v-if="item.Name">{{item.Name}}</span>
                <span v-else>未实名</span>
                <img v-for="(item,index) in item.UserLevel" :key="index" src="https://static.jiujiupingou.com/Static/img/icons/icon-star.png" mode="widthFix">
              </div>
              <div class="phone">
                {{item.Mobile}}
              </div>
            </div>
            <div class="help" @click="showHelp(item.UserId,item.Name)">帮助他成长</div>
          </div>
          <div class="itemFoor">
            <div class="number">
              昨日拼团次数：{{item.OrderCount}}
            </div>
            <div class="dateReg">
              注册时间：{{item.RegisterTime}}
            </div>
          </div>
        </div>
        <!-- <uni-load-more :status="status" :icon-size="14" :content-text="contentText" /> -->
      </list>
    </div>
    <div class="popup">
      <popup style="width:96vw;border-radius: 5px;" v-model="popupVisible" ref="inputDialog" type="dialog">
        <div class="popup">
          <div class="heart">帮助他成长</div>
          <div class="title">
            <div class="left">当前成长金：{{growthFund}} </div>
            <div class="t">（1成长金=￥1）</div>
            <div class="span" @click="toCard">获取成长金</div>
          </div>
          <div class="input">
            <div class="span">充值￥</div>
            <!-- <input :focus="moneyFocus" type="number" v-model="money" placeholder="请输入充值成长金"
              @input="setMoney" /> -->
            <field input-align="center" autofocus="autofocus" type="number" placeholder="请输入充值成长金" v-model="money"></field>
          </div>
          <div class="button">
            <div class="close" @click="close">取消</div>
            <div class="save" @click="showPay">确认</div>
          </div>
        </div>
      </popup>
    </div>
    <div class="zhifu" v-if="buyKey">
      <div class="top-1">
        <div class="heart">
          <img src="../../nativeplugins/JY-FLSPlugin/android/res/drawable/close_icon.png" mode="" @click="closeBtn">请输入支付密码
        </div>
        <div class="name">{{userName || '未实名'}}</div>
        <div class="money">￥{{money}}</div>
        <div class="type">
          <div class="left">支付方式</div>
          <div class="right">余额</div>
        </div>
        <div class="zhifu-list">
          <div class="item" :class="{'active':pasw==''}">
            <input ref="passBtn" type="text" maxlength="6" v-model="pasw" pattern="[0-9]*" @input="setPasw" />
            <div class="dian" v-if="pasw&&pasw.length>=1"></div>
            <div class="shu" v-show="shuKey"></div>
          </div>
          <div class="item" v-for="item in 5" :key="item" :class="{'active':pasw.length==item}">
            <input type="text" maxlength="6" v-model="pasw" pattern="[0-9]*" @input="setPasw" />
            <div class="dian" v-if="pasw&&pasw.length>=(item+1)"></div>
            <div class="shu" v-show="shuKey"></div>
          </div>
        </div>
      </div>
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
  // import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
  import {
    Dialog,
    Toast,
    Popup,
    Field,
    List
  } from 'vant';
  export default {
    components: {
      Popup,
      Field,
      List
    },
    data() {
      return {
        value:'',
        popupVisible: false,
        buyKey: false,
        pasw: '',
        money: null,
        reload: false,
        status: 'more',
        contentText: {
          contentdown: '上拉加载更多~',
          contentrefresh: '加载中',
          contentnomore: '没有更多了'
        },
        pageIndex: 0,
        pageSize: 10,
        list: [],
        totalNumber: null,
        userId: '',
        growthFund: 0,
        haveBuy: false,
        ajax: true,
        paswFocus: false,
        moneyFocus: false,
        userName: '',
        shuKey: true,
        loading: true,
        ajaxKey: true
      }
    },
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
    created() {
      // this.getList()
      this.getAllNumber()
      this.getUerinfo()
      this.getBuyKey()
      setInterval(() => {
        this.shuKey = !this.shuKey
      }, 500)
    },
    methods: {
      moreData() { //上拉触底函数
        // this.status = 'loading';
        this.pageIndex++
        this.getList(1)
      },
      closeBtn() {
        this.buyKey = false
        this.money = null
        this.pasw = ''
      },
      setPasw() {
        if (this.pasw.length == 6 && this.ajax) {
          this.ajax = false
          this.save()
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
      showPay() {
        this.close()
        if (this.haveBuy) {
          this.buyKey = true
          this.$nextTick(function () {
            this.$refs.passBtn.focus()
            // this.paswFocus = true
          })
        } else {
          this.money = null
          Dialog.confirm({
            title: '提示',
            message: '设置支付密码',
            confirmButtonText: '跳转'
          }).then(()=>{
            this.$router.push('/editBuyPassword/noteVerify')
          })
        }
      },

      async getUerinfo() {
        let res = await this.$http.post('/api/v1/userinfo/get', {
          type: 1
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if (res.data.code === 1) {
          this.growthFund = res.data.data.GrowthFund
        }
      },
      async getList(type) {
        if(!this.ajaxKey) {
          if(type == 1){
            this.pageIndex--
          }
          return
        }
        this.ajaxKey = false;
        let res = await this.$http.post('/api/v1/UserInfo/GetGroupPartnerList', {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        this.ajaxKey = true;
        let data = res.data
        if (data.code === 1) {
          if (data.data.length > 0) {
            let dataMap = data.data
            this.list = this.reload ? dataMap : this.list.concat(dataMap);
            this.reload = false;
          } else {
            this.ajaxKey = false
            this.reload = false;
            this.status = 'noMore'
          }
        }
      },
      async getAllNumber() {
        let res = await this.$http.post('/api/v1/UserInfo/GetGroupPartnerAmount', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data
        if (data.code === 1) {
          this.totalNumber = data.data.amount
        }
      },
      showHelp(UserId, name) {
        this.userName = name
        this.getUerinfo()
        this.userId = UserId;
        this.popupVisible = true
        this.$nextTick(function () {
          this.moneyFocus = true
        })
      },
      close() {
        this.popupVisible = false
      },
      async save() {
        let money = this.money;
        this.money = ''
        let pasw = this.pasw;
        this.pasw = ''
        Toast.loading({
          duration: 0,
          message: '加载中...',
          forbidClick: true,
        });
        let res = await this.$http.post('/api/v1/BlessingCard/Send', {
          toUserId: this.userId,
          amount: money,
          tradePassword: pasw
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        this.buyKey = false
        this.ajax = true
        if (res) {
          let data = res.data
          if (data.code === 1) {
            Toast('帮助成功');
            this.getUerinfo()
            // this.clearList()
          }
        }
      },
      clearList(){
        this.ajaxKey = true
        this.reload = true;
        this.status = 'more'
        this.pageIndex = 1
        this.getList()
      },
      toCard() {
        this.$router.push('/focas/focasNine')
      }
    }
  }
</script>

<style scoped lang="less">
  .popup{
    /deep/ .mint-cell-wrapper{
      background-image: unset;
      background-size: unset;
    }
    /deep/ .mint-cell:last-child{
      background-image: unset;
    }
    /deep/ .mint-cell{
      min-height: unset;
    }
  }
  .myFightForBox {
    height: calc(100vh - 44px);
    background: #F3F4F8;
    overflow: auto;

    .headTitle {
      padding: 0 12px;
      padding-top: 18px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #999999;
    }

    .list {
      height: 84vh;

      .listItem {
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 12px;
        background: #FFFFFF;

        .itemHead {
          position: relative;
          display: flex;
          border-bottom: 1px solid #E5E5E5;
          padding-bottom: 12px;

          .itemHeadFl {
            img {
              width: 64px;
              margin-right: 12.5px;
            }
          }

          .itemHeadRl {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .name {
              display: flex;
              align-items: center;

              span {
                font-size: 17px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #333333;
                margin-right: 9.5px;
              }

              img {
                width: 13px;
                margin-right: 3px;
              }
            }

            .phone {
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #999999;
              opacity: 0.99;
            }
          }

          .help {
            position: absolute;
            top: -2px;
            right: 0;
            padding: 5px;
            border-radius: 5px;
            color: #fff;
            background-color: #ff8b24;
          }
        }

        .itemFoor {
          margin-top: 14.5px;

          .number {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #FF8831;
          }

          .dateReg {
            margin-top: 7.5px;
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #BBBBBB;
          }
        }
      }
    }
  }

  .popup {
    padding: 18px;
    text-align: center;
    background-color: #fff;

    .heart {
      font-size: 20px;
      color: #ff8b24;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .title {
      margin-bottom: 20px;

      .left {
        display: inline-block;
        height: 20px;
      }

      .t {
        display: inline-block;
        font-size: 12px;
      }

      .span {
        display: inline-block;
        padding: 5px;
        border-radius: 5px;
        color: #fff;
        background-color: #ff8b24;
      }
    }

    .input {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      margin: 30px 0;

      .span {
        width: 60px;
        color: #000;
        font-size: 20px;
        font-weight: bold;
      }
      >.van-field{
        width: calc(100% - 60px);
        font-size: 17px;
        padding: 0;
      }
    }

    .button {
      display: flex;
      padding-top: 20px;

      >div {
        flex: 1;
      }

      .save {
        color: #ff8b24;
      }
    }
  }

  .zhifu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding-top: 100px;
    background-color: rgba(0, 0, 0, 0.5);

    >.top-1 {
      width: 75%;
      height: 235px;
      padding: 20px;
      border-radius: 10px;
      margin: 0 auto;
      text-align: center;
      background-color: #fff;

      .heart {
        position: relative;
        font-size: 14px;
        font-weight: bold;

        img {
          position: absolute;
          top: 4px;
          left: 0;
          width: 14px;
          height: 14px;
        }
      }

      .name {
        margin-top: 20px;
      }

      .money {
        font-size: 32px;
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 20px;
      }

      .type {
        display: flex;
        padding: 16px 0;
        font-size: 14px;

        >div {
          flex: 1;
        }

        .left {
          text-align: left;
        }

        .right {
          text-align: right;
        }
      }

      .zhifu-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;

        >div {
          position: relative;
          width: 14%;
          padding-bottom: 14%;
          border: 1px solid #eaeaea;
          margin-left: 1.4%;
          background-color: #eaeaea;

          input {
            position: absolute;
            height: 100%;
            opacity: 0;
          }

          .dian {
            position: absolute;
            top: 35%;
            left: 36%;
            width: 30%;
            padding-bottom: 30%;
            border-radius: 50%;
            background-color: #000;
          }
        }

        >div.active {
          position: relative;
          background-color: #fff;

          .shu::after {
            position: absolute;
            left: 51%;
            top: 25%;
            content: "";
            width: 1px;
            height: 50%;
            background-color: #333;
          }
        }
      }
    }
  }
</style>