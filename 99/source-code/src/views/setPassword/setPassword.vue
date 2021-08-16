<template>
  <div class="container999">
    <div class='line'>
      <div class='lineLeft'>密码</div>
      <div class="lineRight">
        <input class="input" type="password" v-model="password" placeholder-class="plaClass"
          placeholder='请输入6位以上密码'>
      </div>
    </div>
    <div class='line'>
      <div class='lineLeft'>重复密码</div>
      <div class="lineRight">
        <input class="input" type="password" v-model="newpassword" placeholder-class="plaClass"
          placeholder='请输入再次输入新密码'>
      </div>
    </div>
    <div class="" style="margin-top: 1.875rem;text-align: center;color: red;font-size: 1rem;">
      以后将使用该密码登录，请认真设置
    </div>
    <div class="buttonBox" @click="submit">
      确定提交
    </div>
  </div>
</template>

<script>
  const util = require('../../util/util.js'); //防重点击函数
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        password: '',
        newpassword: ''
      }
    },
    methods: {
      submit: util.throttle(function () {
        if (this.password.length < 6) {
          Toast('请输入6位以上密码');
          return
        }
        if (this.newpassword === '') {
          Toast('请再次输入密码');
        } else {
          if (this.password !== this.newpassword) {
            Toast('两次输入密码不正确');
            return
          }
        }
      }, 1000), //防重点击,1s内只可点击一次
    }
  }
</script>

<style lang="less">
  .plaClass {
    color: #dbdbdb;
  }

  .container999 {
    .title {
      height: 80rpx;
      line-height: 80rpx;
      padding-left: 4%;
      border-bottom: .0625rem solid #f5f5f5;
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
      position: fixed;
      bottom: 100rpx;
      left: 0;
      right: 0;
      background-color: #4a8be9;
    }

    .tri {
      width: 0;
      height: 0;
      border-left: 8rpx solid transparent;
      border-right: 8rpx solid transparent;
      right: 30rpx !important;
      border-top: 16rpx solid #545151;
    }

    .line {
      margin-top: 30rpx;
      height: 100rpx;
      width: 92%;
      margin: 0 auto;
      border-bottom: .0625rem solid #f5f5f5;
      display: flex;

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

      .lineLeft {
        display: flex;
        width: 20%;
        align-items: center;
        height: 100%;
        font-weight: bold;
        color: #000000;
      }

      .input {
        padding-right: 20rpx;
        height: 100%;
        width: 70%;
        text-align: left;
        font-size: 28rpx;
        color: #545151;
      }

      .picker {
        height: 100%;
        justify-content: flex-start;
        display: flex;
        align-content: center;
        width: 500rpx;
      }

      picker {
        height: 84rpx;
        line-height: 84rpx;
      }
    }

    width: 100vw;
    font-size: .875rem;
    // min-height: 100vh;
    overflow: hidden;
    color: #6b8082;
    position: relative;
  }
</style>