<template>
  <div class="accountNumberBox">
    <div class="accountNumber" v-for="(item,index) in numberList" :key="index" @click="newWithdrawal(item.Id)">
      <div class="accountNumberFl">
        <img style="width: 35px;height: 35px;" :src="item.Logo" mode="">
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
      <div class="heng" v-show="index !== numberList.length-1"></div>
    </div>
    <div class="buttonBox" @click="submit">
      添加新账户
    </div>
    <div class="mubu" v-show="mubuKey">
      <div class="bottom" :style="bottomStyle">
        <div class="title">
          提现方式
          <img :src="imgSrc('close_hui.png')" mode="" @click="close">
        </div>
        <div class="heart">
          <div>账户类型</div>
          <div>提现周期</div>
          <!-- <div>到账时间</div> -->
        </div>
        <div class="content-div">
          <div class="content" v-for="(item,index) in bankList" :key="index">
            <div>{{item.name}}</div>
            <div>{{item.limitDay?item.limitDay+'天':'——'}}</div>
            <!-- <div>{{item.arrival?item.arrival+'天':'——'}}</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
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
        bottomStyle: {
          bottom: "-481px"
        },
        mubuKey: true,
        numberList: [],
        bankList: []
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
      this.getListNumber()
      this.getListBank()
      this.$store.commit('navTop/setRightUrl',{
        rightUrl: '/balance/accountAdmin'
      })
    },
    mounted() {
      setTimeout(() => {
        this.bottomStyle = {
          bottom: "0px"
        }
      }, 100)
    },
    methods: {
      async getListNumber() {
        let res = await this.$http.post('/api/v1/Drawing/GetCardList', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            loading: '加载'
          }
        })
        Toast.clear()
        let data = res.data
        // console.log(data)
        if (data.code === 1) {
          Toast.clear()
          this.numberList = data.data
        }
      },
      async getListBank() {
        let res = await this.$http.post('/api/v1/Drawing/GetBankList', {}, {
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
          this.bankList = data.data
        }
      },
      newWithdrawal(id) {
        this.$router.push('/balance/newWithdrawal?id=' + id)
      },
      submit() {
        this.$router.push('/balance/newAccount')
      },
      close() {
        this.mubuKey = false
      }
    }
  }
</script>

<style lang="less">
  .accountNumberBox {
    height: calc(100vh - 55px);
    padding-top: 10px;
    background-color: #F7F7F7;
    overflow: auto;

    .accountNumber {
      position: relative;
      display: flex;
      background: #f2f2f2;
      align-items: center;
      background-color: #fff;

      .heng {
        &::after {
          position: absolute;
          left: 20px;
          bottom: 0;
          content: "";
          width: calc(100vw - 40px);
          height: 1px;
          background-color: #E0E0E0;
        }
      }

      .accountNumberFl {
        width: 100px;
        padding: 20px 0;
        margin-right: 10px;
        text-align: center;
        font-size: 14px;
        color: #999;

        img {
          vertical-align: middle;
        }
      }

      .accountNumberRl {
        width: calc(100vw - 140px);
        font-size: 14px;
        text-align: right;
      }
    }

    .buttonBox {
      width: 91%;
      margin: 81px auto 0;
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

    .mubu {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);

      .bottom {
        position: absolute;
        width: 100vw;
        height: 482px;
        border-radius: 15px 15px 0 0;
        text-align: center;
        color: #333333;
        background-color: #ffffff;
        transition: 0.3s;

        .title {
          position: relative;
          margin: 20.5px 0 20px;
          font-size: 16px;

          img {
            position: absolute;
            top: 5px;
            right: 16px;
            width: 12px;
            height: 12px;
          }
        }

        .content-div {
          height: 365px;
          overflow: auto;
        }

        .content-div::-webkit-scrollbar {
          display: none
        }

        .heart,
        .content {
          display: flex;
          height: 48px;
          border-bottom: 1px solid #E5E5E5;

          >div {
            flex: 1;
            position: relative;
            top: 50%;
            /*偏移*/
            margin-top: -9px;
          }
        }

        .heart {
          border-top: 1px solid #E5E5E5;
          font-size: 14px;
        }

        .content {
          font-size: 13px;
          color: #666666;
        }

        .content:nth-child(2n+1) {
          background-color: #FAFAFA;
        }
      }
    }
  }
</style>