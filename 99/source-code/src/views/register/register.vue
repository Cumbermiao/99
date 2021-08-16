<template>
  <div class="loginBox" :style="{backgroundImage: 'url('+imageURL+')'}"
    style="background-size: 100% 100%; width: 100%;height: 100vh;">
    <div class="login_input_div">
      <!-- 手机号 -->
      <div class="login_input">
        <img src="http://static.jiujiupingou.com/Static/img/02.png" mode="widthFix">
        <span>+86:</span>
        <input
          style="-webkit-appearance: none;height:100%;border: none;background: transparent; outline: none;width: 8.4375rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;"
          id="name" maxlength="11" placeholder="输入11位手机号" v-model="phoneRegister" />
        <span style="font-size: .875rem !important;color: #ffffff !important;"
          @click="getCodeRegister">{{timeCode}}{{textCode}}</span>
      </div>
      <!-- 密码或者邀请码 -->
      <div class="login_input phone_code">
        <img src="http://static.jiujiupingou.com/Static/img/03.png" mode="widthFix">
        <span>验证码:</span>
        <input type="number"
          style="-webkit-appearance: none;height:100%;border: none;background: transparent; outline: none;width: 8.4375rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;"
          id="password" v-model="codeRegister" placeholder="请输入验证码" />
      </div>
      <div class="login_input phone_code">
        <img src="http://static.jiujiupingou.com/Static/img/03.png" mode="widthFix">
        <span>密码:</span>
        <input type="password"
          style="-webkit-appearance: none;height:100%;border: none;background: transparent; outline: none;width: 8.4375rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;"
          id="password" v-model="registerpassWord" placeholder="请输入密码" />
      </div>
      <div class="login_input phone_code">
        <img src="http://static.jiujiupingou.com/Static/img/03.png" mode="widthFix">
        <span>重复密码:</span>
        <input type="password"
          style="-webkit-appearance: none;height:100%;border: none;background: transparent; outline: none;width: 8.4375rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;"
          id="password" v-model="newRegisterpassWord" placeholder="请输入再次输入新密码" />
      </div>
      <div class="login_input phone_code">
        <img src="http://static.jiujiupingou.com/Static/img/04.png" mode="widthFix">
        <span>邀请码:</span>
        <input type="text"
          style="-webkit-appearance: none;height:100%;border: none;background: transparent; outline: none;width: 8.4375rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;"
          id="password" v-model="invitationCode" placeholder="邀请码或邀请人手机号" />
      </div>
      <!-- <navigator url="../login/login"  hover-class="none"> -->
      <span style="font-size: .875rem;color: #ffffff;margin-left: 53%;margin-top: 1.25rem;display: inline-block;"
        @click="yiyouNumber">已有账号？点击登录</span>
      <!-- </navigator> -->
      <div class="login_div ifip320" style="margin-top: 1.5625rem">
        <div class="">
          <img @click="tabsChoiceNo" v-if="choiceAgreementNo" style="width: 1.125rem;margin-bottom: -0.25rem;"
            src="http://static.jiujiupingou.com/Static/img/nocheck.png" mode="widthFix">
          <img @click="tabsChoice" v-if="choiceAgreement" style="width: 1.125rem;margin-bottom: -0.25rem;"
            src="http://static.jiujiupingou.com/Static/img/check.png" mode="widthFix">
          <span style="color: #FFFFFF;">同意</span>
          <span style="color: #891005;text-decoration: underline ;" @click="zhucexieyi">《九九生活注册服务协议》</span>
          <span style="color: #FFFFFF;">和</span>
          <br>
          <span style="color: #891005;text-decoration: underline ;" @click="zhengce">《九九生活隐私政策》</span>
        </div>
        <span class="loginBtn" @click="registerBtn">注册</span>
      </div>
      <div class="login_div ifip320" style="margin-top: .625rem;">
        <div @click="toUrl('/aboutjiujiu')" hover-class="none">
          <span style="color: #ffffff;    text-decoration: underline;">关于九九生活</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../api/index.js'
  var graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js");
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
        imageURL: 'http://web991-oss.jiujiupingou.com/img/bg03.png',
        // 选择
        choiceAgreementNo: true,
        choiceAgreement: false,
        // 注册的
        phoneRegister: '',
        codeRegister: '',
        invitationCode: '',
        timeCode: '',
        registerpassWord: '',
        newRegisterpassWord: '',
        textCode: '获取验证码',
        disabledCode: false
      }
    },
    created() {
      let option = this.$route.query
      if (option.type === 'agree') {
        this.choiceAgreement = true
        this.choiceAgreementNo = false
      }
    },
    methods: {
      toUrl(url){
        this.$router.push(url)
      },
      tabsChoiceNo() {
        this.choiceAgreementNo = false
        this.choiceAgreement = true
      },
      tabsChoice() {
        this.choiceAgreementNo = true
        this.choiceAgreement = false
      },
      yiyouNumber() {
        this.$router.push('/login')
      },
      zhucexieyi() {
        this.$router.push('/aboutjiujiu/zhucexieyi')
      },
      zhengce() {
        this.$router.push('/aboutjiujiu/yinsizhengce')
      },
      // 获取验证码
      async getCodeRegister() {
        var rule = [{
          name: "phoneRegister",
          checkType: "phoneno",
          checkRule: "",
          errorMsg: "请输入正确的手机号"
        }]
        if (this.disabledCode) {
          Toast('请60秒后重试');
          return
        }
        let checkRes = graceChecker.check({
          phoneRegister: this.phoneRegister
        }, rule)
        if (checkRes) {
          this.disabledCode = true
          this.setInterValFunc()
          let res = await http.post('/api/v1/Passport/RegisterSendMobileSms', {
            name: this.phoneRegister
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
          } else {
            Toast(data.msg);
          }
        } else {
          Toast(graceChecker.error);
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
      // 注册
      async registerBtn() {
        var rule = [{
          name: "phoneRegister",
          checkType: "phoneno",
          checkRule: "",
          errorMsg: "请输入正确的手机号"
        }]
        let checkRes = graceChecker.check({
          phoneRegister: this.phoneRegister
        }, rule)
        if (checkRes) {
          if (this.codeRegister === '') {
            Toast('请输入验证码');
            return
          }
          if (this.invitationCode === '') {
            Toast('请输入邀请码');
            return
          }
          if (this.registerpassWord === '') {
            Toast('请输入密码');
            return
          }
          if (this.newRegisterpassWord === '') {
            Toast('请再次输入密码');
            return
          }
          if (this.newRegisterpassWord !== this.registerpassWord) {
            Toast('两次密码不一致');
            return
          }
          if (this.choiceAgreement) {
            let res = await http.post('/api/v1/Passport/RegisterSubmit', {
              name: this.phoneRegister,
              smsCode: this.codeRegister,
              beInvitorCode: this.invitationCode,
              password: this.registerpassWord,
              rpassword: this.newRegisterpassWord,
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
              Toast('注册成功')
              setTimeout(function () {
                this.$router.push('/login?phone=' + this.phoneRegister)
              }, 1000)
            }
          } else {
            Toast('请先同意《用户隐私政策和协议条款》');
          }
        } else {
          Toast(graceChecker.error);
        }
      }
    }
  }
</script>

<style lang="less">
  .loginBox {
    height: 100%;

    .login_input_div {
      padding-top: 57%;
      width: 100%;

      .login_input {
        border: .0625rem solid #fff;
        border-radius: 3.125rem;
        // height: 2.6875rem;
        // line-height: 2.6875rem;
        padding: .5625rem 0;
        margin: auto;
        width: 18.75rem;
        display: flex;
        align-items: center;

        img {
          width: 1.25rem;
          margin-left: 1.125rem;
          margin-right: .3125rem;
        }

        span {
          font-size: .9375rem;
          color: #FFFFFF;
          margin-right: .1875rem;
        }

        .uni-input-placeholder {
          color: #FFFFFF;
        }
      }

      .phone_code {
        margin-top: .625rem;
      }

      .login_div {
        width: 100%;
        text-align: center;

        .loginBtn {
          display: inline-block;
          width: 18.75rem;
          height: 2.5rem;
          line-height: 2.5rem;
          background: #ffd35b;
          color: #FFFFFF;
          text-align: center;
          border-radius: 3.125rem;
          margin: auto;
          margin-top: 1.25rem;
        }
      }
    }
  }
</style>