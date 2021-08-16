<template>
  <div class="container999">
    <div class='line'>
      <div class='lineLeft'>手机号</div>
      <div class="lineRight">
        <input class="input" type="text" v-model="phone" placeholder-class="plaClass" placeholder='请输入手机号'>
      </div>
    </div>
    <div class='line'>
      <div class='lineLeft'>短信验证码</div>
      <div class="lineRight">
        <input class="input" type="text" v-model="code" placeholder-class="plaClass" placeholder='请输入验证码'>
        <span style="font-size: 14px !important;color: #4da3f3 !important;display: inline-block;width: 80px;"
          @click="getCodeRegister">{{timeCode}}{{textCode}}</span>
      </div>
    </div>
    <div class='line'>
      <div class='lineLeft'>新密码</div>
      <div class="lineRight">
        <input class="input" type="password" v-model="newPassword" placeholder-class="plaClass"
          placeholder='请输入6位以上密码'>
      </div>
    </div>
    <div class='line'>
      <div class='lineLeft'>重复密码</div>
      <div class="lineRight">
        <input class="input" type="password" v-model="resetPassword" placeholder-class="plaClass"
          placeholder='请输入再次输入新密码'>
      </div>
    </div>
    <div class="buttonBox" @click="submit">
      确定提交
    </div>
  </div>
</template>

<script>
  var graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js");
  const util = require('../../util/util.js'); //防重点击函数
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        phone: '',
        code: '',
        newPassword: '',
        resetPassword: '',
        timeCode: '',
        textCode: '获取验证码',
        disabledCode: false
      };
    },
    methods: {
      // 提交
      submit: util.throttle(async function () {
        if (this.phone === '') {
          Toast('请输入正确手机号');
          return
        }
        if (this.code === '') {
          Toast('请输入短信验证码');
          return
        }
        if (this.newPassword.length === '') {
          Toast('密码不足6位');
          return
        }
        if (this.newPassword !== this.resetPassword) {
          Toast('两次密码不一致');
          return
        }
        let res = await this.$http.post('/api/v1/Passport/ForgetPasswordSubmit', {
          name: this.phone,
          password: this.newPassword,
          rpassword: this.resetPassword,
          smsCode: this.code
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
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)

        }
      }, 1000), //防重点击,1s内只可点击一次
      async getCodeRegister() {
        var rule = [{
          name: "phone",
          checkType: "phoneno",
          checkRule: "",
          errorMsg: "请输入正确的手机号"
        }]
        if (this.disabledCode) {
          Toast({
            title: '请60秒后重试',
            icon: "none"
          });
          return
        }
        let checkRes = graceChecker.check({
          phone: this.phone
        }, rule)
        if (checkRes) {
          this.disabledCode = true
          this.setInterValFunc()
          let res = await this.$http.post('/api/v1/Passport/ForgetPasswordSendMobileSms', {
            name: this.phone
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

            Toast({
              title: '获取验证码成功',
              icon: "none"
            });
          } else {
            Toast({
              title: data.msg,
              icon: "none"
            });
          }
        } else {
          Toast({
            title: graceChecker.error,
            icon: "none"
          });
        }
      },
      setInterValFunc() {
        this.timeCode = 60;
        this.textCode = '秒';
        this.setTime = setInterval(() => {
          if (this.timeCode - 1 == 0) {
            this.timeCode = '';
            this.textCode = '重新获取';
            this.disabledCode = false;
            clearInterval(this.setTime);
          } else {
            this.timeCode--;
          }
        }, 1000);
      },
    }
  }
</script>

<style lang="less">
  .container999 {
    .title {
      height: 40px;
      line-height: 40px;
      padding-left: 4%;
      border-bottom: 1px solid #f5f5f5;
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
      position: fixed;
      bottom: 50px;
      left: 0;
      right: 0;
      background-image: linear-gradient(to right, #FBB663, #FB6463);
    }

    .tri {
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      right: 15px !important;
      border-top: 8px solid #545151;
    }

    .line {
      margin-top: 15px;
      height: 50px;
      width: 92%;
      margin: 0 auto;
      border-bottom: 1px solid #f5f5f5;
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
        width: 25%;
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
        border: unset;
        color: #545151;
      }

      .picker {
        height: 100%;
        justify-content: flex-start;
        display: flex;
        align-content: center;
        width: 250px;
      }

      .picker {
        height: 42px;
        line-height: 42px;
      }
    }

    width: 100vw;
    font-size: 14px;
    // min-height: 100vh;
    overflow: hidden;
    color: #6b8082;
    position: relative;
  }
</style>