<template>
  <div class="balanceBox" :style="balanceBoxStyle">
    <div class="balanceBox-top">
      <icon name="arrow-left icons" @click="back" />
      <span>{{title}}</span>
    </div>
    <div class="balanceBox-1" @scroll="gotoScroll" ref="opBottomEcharts">
      <div class="balanceHead">
        <div v-if="DrawingQuota" class="">
          <div class="title">
            {{type === 'redPage' ? '红包余额' : '余额'}}(元)
          </div>
          <div style="margin-bottom: 1.8rem">
            <div class="balanceNumber">
              {{type === 'redPage' ? userInfo.RedPackBalance : userInfo.Balance}}
            </div>
            <div class="toWithdraw" @click="toWithdraw">{{type === 'redPage' ? '结转' : '去提现'}}</div>
          </div>
          <div class="balanceHead-bottom" v-if="type !== 'redPage'">
            <div>
              累计充值（元）
              <div>{{rechargeAmount}}</div>
            </div>
            <div>
              累计提现（元）
              <div>{{drawingAmount}}</div>
            </div>
          </div>
          <div v-if="type !== 'redPage'"
            style="z-index: 999999;color: #333;margin-bottom: 1rem;padding: 0 1rem;font-size: .8125rem;">
            更新时间：{{updateTime}}</div>
          <div v-else style="z-index: 999999;color: #333;margin-bottom: 1rem;padding: 0 1.5rem;font-size: .8125rem;">
            规则：结转至余额</div>
        </div>
        <div v-else class="">
          <div style="color: #FFFFFF;font-size: .875rem;span-align: right;margin-right: .625rem;" class="">
            余额 (元)<span>￥{{type === 'redPage' ? userInfo.RedPackBalance : userInfo.Balance}}</span>
          </div>
          <div class="" style="color: red;span-align: center;margin-top: .9375rem;font-size: 3.125rem;">
            已被限制提现
          </div>
        </div>
      </div>

      <div class="tabsBox">
        <div class="qiehuan" v-for="(item, index) in tabsList" :key="index" :class="active === index?'active' : ''"
          @click="tabSelect(index)">
          {{ item }}
          <div class="search" @click="search" v-if="item==='余额明细'">
            <img v-if="active === index && type !== 'redPage'" :src="imgSrc('ic_sx_blur.png')" mode="">
            <img v-if="active !== index && type !== 'redPage'" :src="imgSrc('ic_sx_nor.png')" mode="">
          </div>
        </div>
      </div>
      <div class="balanceDetailed" v-if="active === 0">
        <div v-for="(item,index) in list" :key="index">
          <div class="balanceDetailedHead">
            <div class="item">
              {{item.recordType || '福卡退款'}}
            </div>
            <div class="jine">
              <span style="color:#FF1738"
                v-if="item.type === 1">+￥{{item.amount}}</span>
              <span v-else style="color: #333333;">-￥{{item.amount}}</span>
            </div>
          </div>
          <div class="balanceDetailedFoorter">
            <div class="time">
              {{item.createTime}}
            </div>
          </div>
        </div>
      </div>
      <div class="withdrawal" v-if="active === 1">
        <div class="withdrawalItem" v-for="(item,index) in getDrawingList" :key="index">
          <div class="" style="display: flex;justify-content: space-between;align-items: center;">
            <div class="" style="color: #333;">
              【{{item.accountName}}】 {{item.account}}
            </div>
            <div class="">
              <span style="color: #333;font-weight: bold;">￥{{item.money}}</span>
            </div>
          </div>
          <div class="" style="display: flex;justify-content: space-between;align-items: center;margin: .3125rem 0;">
            <div class="">
              {{item.time}}
            </div>
            <div class="">
              <span style="color: #FF9A17;" v-if="item.status === 0">提现中</span>
              <span style="color: #999999;" v-if="item.status === 1">待转账</span>
              <span style="color: #999999;" v-if="item.status === 2">提现成功</span>
              <span style="color: #FF1738;" v-if="item.status === 3">提现失败</span>
            </div>
          </div>
        </div>
      </div>
    </div>
     <!-- #ifndef MP-ALIPAY -->
     <div v-show="mubuKey" class="mubu">
        <div class="picker">
          <picker show-toolbar :columns='multiArray' @confirm="confirm" @cancel="onCancel">
          </picker>
        </div>
      </div>
      <!-- #endif -->
    <!-- <picker ref="picker" mode="multiSelector" @change="changePicker" :value="multiIndex" :range="multiArray">
    </picker> -->
  </div>
</template>

<script>
  import {
    Toast,
    Icon,
    Picker
  } from 'vant';
  import {
    imgUrl
  } from '../../api/config.js'
  import {
    getPhone
  } from '../../util/token.js'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  export default {
    components:{
      Icon,
      Picker
    },
    data() {
      return {
        ajaxKey: false,
        ajaxKey1: false,
        title: '账户余额',
        active: 0,
        pageIndex: 1,
        pageSize: 10,
        list: [],
        balance: 0,
        totalCount: 0,
        getDrawingList: [],
        userInfo: {},
        reload: false,
        status: 'more',
        contentspan: {
          contentdown: '上拉加载更多~',
          contentrefresh: '加载中',
          contentnomore: '没有更多数据了~'
        },
        DrawingQuota: true,
        guid: this.uuid(),
        maxId: -1,
        multiIndex: 0,
        mubuKey: false,
        multiArray: [{
          values: ['全部','推荐奖励','提现','提现退回','未中奖奖励','广告红利','消费支付','未中奖返还','未中奖现金返还'],
          defaultIndex: 0
        }],
        searchList: [{
          id: 0,
          name: '全部'
        }, {
          id: 2,
          name: '推荐奖励'
        }, {
          id: 3,
          name: '提现'
        }, {
          id: 4,
          name: '提现退回'
        }, {
          id: 5,
          name: '未中奖奖励'
        }, {
          id: 6,
          name: '广告红利'
        }, {
          id: 8,
          name: '消费支付'
        }, {
          id: 9,
          name: '未中奖返还'
        }, {
          id: 16,
          name: '未中奖现金返还'
        }],
        recordType: 0,
        type: '',
        rechargeAmount: 0,
        drawingAmount: 0,
        updateTime: '',
        loadFlag: true
      }
    },
    created() {
      let option = this.$route.query
      this.type = option.type
      this.balance = option.Balance
      if (option.type === 'redPage') {
        this.title = '我的红包'
      } else {
        this.getWalletInfo()
      }
    },
    mounted() {
      this.pageIndex = 1
      this.list = []
      this.getUserInfo()
      this.getDrawing()
      this.getBanlancerecord()
    },
    onNavigationBarButtonTap() {

    },
    // onBackPress(e) {
    // 	uni.switchTab({
    // 		url:'../user/user'
    // 	})
    // 	return true
    // },
    onReachBottom() { //上拉触底函数
      if (this.active === 0) {
        if (this.pageSize > this.list.length) {
          this.status = 'noMore'
        } else {
          // this.status = 'loading';
          this.pageIndex++
          this.getBanlancerecord()
        }
      }
    },
    computed: {
      balanceBoxStyle() {
        return {
          backgroundImage: imgUrl ? 'url(' + imgUrl + 'balance_bg.png)' : ''
        }
      },
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      },
      tabsList() {
        if (this.type === 'redPage') {
          return [
            '红包明细',
            '红包提现记录'
          ]
        } else {
          return [
            '余额明细',
            '提现记录'
          ]
        }
      }
    },
    methods: {
      gotoScroll(){
        if(this.loadFlag){
          let clientHeight = this.$refs.opBottomEcharts.clientHeight;  
          let scrollTop=this.$refs.opBottomEcharts.scrollTop;
          let scrollHeight=this.$refs.opBottomEcharts.scrollHeight;
          //滚动条到底部的条件:div 到头部的距离 + 屏幕高度 = 可滚动的总高度
          if(scrollTop+clientHeight >= scrollHeight-50){
            this.pageIndex++;
            if(this.active === 0){
              this.getBanlancerecord()
            }else{
              this.getDrawing()
            }
          }  
        }else{
          return;
        }
      },
      onCancel(){
        this.mubuKey = false
      },
      confirm(data,index){
        this.maxId = -1
        this.guid = this.uuid()
        
        this.pageIndex = 1
        this.recordType = this.searchList[index].id
        this.list = []
        this.mubuKey = false
        this.getBanlancerecord()
      },
      search(){
        this.mubuKey = true
      },
      async getWalletInfo() {
        let res = await this.$http.post('/api/v1/UserInfo/GetWalletInfo', {
          type: 1
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        // console.log(res)
        let data = res.data
        // console.log(data)
        if (data.code === 1) {
          this.updateTime = data.data.updateTime
          this.rechargeAmount = data.data.rechargeAmount
          this.drawingAmount = data.data.drawingAmount
        }
      },
      toWithdraw() {
        if (this.type !== 'redPage') {
          if (0 < this.userInfo.DrawingQuota && this.userInfo.DrawingQuota < 100) {
            Toast('已被限制提现');
            return
          }
          if (this.userInfo.IsCertID) {
            this.$router.push('/balance/withdrawal')
          } else {
            Toast('您还未实名认证，请先实名认证');
          }
        } else {
          this.$router.push('/balance/newWithdrawal?type=redPage')
        }
      },
      back() {
        this.$router.go(-1)
      },
      changePicker(data) {
        this.pageIndex = 1
        this.recordType = this.searchList[data.detail.value[0]].id
        this.list = []
        this.getBanlancerecord()
      },
      tabSelect(e) {
        this.active = e
        // this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60 
      },
      async getUserInfo() {
        Toast.loading({
          duration: 0,
          message: '正在加载...',
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
        // console.log(res)
        Toast.clear()
        let data = res.data
        // console.log(data)
        if (data.code === 1) {
          this.userInfo = data.data
          if (0 < this.userInfo.DrawingQuota && this.userInfo.DrawingQuota < 100) {
            this.DrawingQuota = false
          } else {
            this.DrawingQuota = true
          }
        }
      },
      // 明细
      async getBanlancerecord() {
        if(this.ajaxKey) return
        this.ajaxKey = true
        let url = '/api/v1/BalanceRecord/GetListV0';
        let obj = {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          maxBalanceRecord: this.maxId,
          key: this.guid,
          recordType: this.recordType || 0
        }
        if (this.type === 'redPage') {
          url = '/api/v3/ManyPGRedPackRecord/GetList';
          obj = {
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
          }
        }
        this.status = 'loading';
        Toast.loading({
          duration: 0,
          message: '加载中...',
          forbidClick: true,
        });
        //let res = await this.$http.post('/api/v1/BalanceRecord/GetList' ,{
        let res = await this.$http.post(url, obj, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        Toast.clear()
        this.ajaxKey = false
        let data = res.data
        if (data.code === 1) {
          //console.log(this.pageIndex)
          // this.list = data.data.list
          let cnt_list = []
          if (this.type === 'redPage') {
            this.ajaxKey = data.data.length === 0
            cnt_list = data.data.map(res => {
              return {
                createTime: res.CreateTime,
                type: res.Type,
                amount: res.Amount,
                recordType: res.Explain
              }
            });
          } else {
            this.ajaxKey = data.data.list.length === 0
            cnt_list = data.data.list;
          }
          if (cnt_list.length > 0) {
            this.list = this.reload ? cnt_list : this.list.concat(cnt_list);
            this.reload = false;
            if (this.pageSize > this.list.length) {
              this.status = 'noMore'
            } else {
              this.status = 'more'
            }
          } else {
            this.status = 'noMore'
            this.reload = false;
          }
          this.maxId = data.data.maxId;
        }
      },
      // 提现Drawing/GetList
      async getDrawing() {
        if(this.ajaxKey1) return
        this.ajaxKey1 = true
        let url = '/api/v1/Drawing/GetList';
        if (this.type === 'redPage') {
          url = '/api/v3/ManyPGRedPackDrawings/GetList';
        }

        let res = await this.$http.post(url, {
          pageIndex: 1,
          pageSize: 9999
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        this.ajaxKey1 = false
        let data = res.data
        // console.log(data)
        if (data.code === 1) {
          this.ajaxKey1 = data.data.length === 0
          if (this.type === 'redPage') {
            this.getDrawingList = data.data.map(res => {
              return {
                time: res.CreateTime,
                money: res.Amount,
                status: 2,
                orgName: '余额',
                accountName: '自己',
                account: getPhone()
              }
            })
          } else {
            this.getDrawingList = data.data
          }
        }
      },
      uuid() {
        var s = [];
        var hexDigits = '0123456789abcdef';
        for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4';
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = '-';

        this.uuidA = s.join('');
        return this.uuidA;
      },
    }
  }
</script>

<style lang="less" scoped>
  .balanceBox {
    background-size: 100% 14.375rem;
    background-repeat: repeat-x;
    background-color: #F3F4F8;
    overflow: hidden;

    .balanceBox-top {
      // position: fixed;
      // top: 0;
      width: 100vw;
      height: 1.875rem;
      padding: .4375rem;
      line-height: 1.875rem;
      text-align: center;
      font-weight: bold;
      color: #fff;
      z-index: 9999;

      img {
        position: absolute;
        top: .625rem;
        left: .625rem;
        width: 1.25rem;
        height: 1.25rem;
        z-index: 99999;
      }
    }

    .balanceBox-1 {
      height: calc(100vh - 8.375rem);
      overflow: auto;
      padding: 5rem 0.5rem 0.5rem;
    }

    .balanceHead {
      position: relative;
      width: 100%;
      border-radius: 0.5rem;
      overflow: hidden;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0rem .625rem 1.25rem 0rem rgba(0, 0, 0, 0.02), -0.125rem 0rem 0rem 0rem #FFFFFF, 0rem .125rem 0rem 0rem #FFFFFF;

      .balanceHead-bottom {
        position: relative;
        display: flex;
        padding: 1rem 0;
        border-top: .0625rem solid #e5e5e5;
        margin: 0 1rem;
        text-align: center;
        z-index: 999;

        >div {
          flex: 1;
          color: #999999;

          >div {
            margin-top: 0.5rem;
            color: #333;
            font-weight: bold;
          }
        }
      }

      .toWithdraw {
        position: relative;
        display: inline-block;
        width: 3.75rem;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius: 1.5rem;
        margin-left: 0.5rem;
        text-align: center;
        color: #9D081D;
        font-size: .75rem;
        background-color: rgba(255, 46, 75, 0.1);
        z-index: 999;
      }

      .title {
        position: relative;
        font-size: .8125rem;
        padding: 1.625rem 0 0 1.625rem;
        color: #333;
        z-index: 999;
      }

      .balanceNumber {
        position: relative;
        display: inline-block;
        padding-left: 1.625rem;
        color: #333;
        font-size: 2.5rem;
        font-weight: bold;
        vertical-align: middle;
        z-index: 999;
      }
    }

    .tabsBox {
      position: relative;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 0.5rem 0.5rem 0 0;
      margin-top: .9375rem;
      height: 3.125rem;
      line-height: 3.125rem;
      background-color: #fff;

      &::before {
        position: absolute;
        bottom: .125rem;
        content: '';
        width: 100%;
        height: .0625rem;
        background-color: #e5e5e5;
      }

      .qiehuan {
        position: relative;
        width: 50%;
        text-align: center;
      }

      .active {
        color: #2A9DFF;
      }

      .active::before {
        position: absolute;
        left: 50%;
        bottom: .125rem;
        content: '';
        width: 30%;
        height: .125rem;
        transform: translateX(-50%);
        background-color: #2A9DFF;
      }
    }

    .balanceDetailed {
      color: #BDBBBB;
      font-size: .875rem;
      padding: .9375rem;
      border-radius: 0 0 0.5rem 0.5rem;
      background-color: #fff;

      >div {
        padding: .625rem 0;
      }

      .balanceDetailedHead {
        display: flex;
        justify-content: space-between;

        .item {
          font-size: .9375rem;
          color: #333;
        }
      }

      .balanceDetailedFoorter {
        margin-top: .5rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: .9375rem;
      }

      .jine {
        font-size: .9375rem;
        font-weight: bold;
      }
    }

    .withdrawal {
      padding: .9375rem;
      color: #BDBBBB;
      font-size: .875rem;
      background-color: #fff;

      .withdrawalItem {
        position: relative;
        padding: .625rem 0 .625rem 0;

        img {
          position: absolute;
          left: 0;
          top: 1rem;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
      }
    }
  }

  .search {
    position: absolute;
    top: .1875rem;
    right: 1.875rem;
    height: 1.25rem;
    line-height: unset;

    img {
      width: 1rem;
      height: 1rem;
    }
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
  .balanceBox-top {
    position: relative;
    height: 30px;
    padding: 7px 0;
    line-height: 30px;
    text-align: center;
  }

  .balanceBox-top .icons {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 23px;
  }

  .balanceBox-top span {
    font-weight: bold;
    font-size: 17px;
  }

  .balanceBox-top .right {
    position: absolute;
    top: 6px;
    right: 10px;
    font-size: 12px;
    color: #333;
  }
</style>