<template>
  <div class="loginBox1" :style="{backgroundImage: 'url('+imageURL+')'}"
    style="background-size: 100% 100%;">
    <!-- 登录 -->
    <div class="login_input_div" v-if="loginBoxBl">
      <!-- 手机号 -->
      <div class="login_input" v-show="!noPasswordKey">
        <img src="http://static.jiujiupingou.com/Static/img/02.png" mode="widthFix"/>
        <span>+86:</span>
        <input
          style="-webkit-appearance: none;border: none;background: transparent; outline: none;width: 135px;font-size: 15px;color: #FFFFFF;display: inline-block;overflow: visible;height:100%"
          id="name" maxlength="11" placeholder="输入11位手机号" v-model="phoneNumber" />
        <span v-if="VerificationCode" style="font-size: 14px !important;color: #ffffff !important;"
          @click="getCodeRegister">{{timeCode}}{{textCode}}</span>
      </div>
      <!-- 密码或者邀请码 -->
      <div class="login_input phone_code">
        <img src="http://static.jiujiupingou.com/Static/img/03.png" mode="widthFix"/>
        <span v-if="VerificationCodeNo">密码:</span>
        <input v-if="VerificationCodeNo" type="password"
          style="-webkit-appearance: none;border: none;background: transparent; outline: none;width: 135px;font-size: 15px;color: #FFFFFF;display: inline-block;overflow: visible;height:100%"
          id="password" placeholder="请输入密码" v-model="passWordLogin" />
        <span v-if="VerificationCode">验证码:</span>
        <input v-if="VerificationCode" type="number"
          style="-webkit-appearance: none;border: none;background: transparent; outline: none;width: 135px;font-size: 15px;color: #FFFFFF;display: inline-block;overflow: visible;height:100%"
          id="password" v-model="codeVerification" placeholder="请输入验证码" />
      </div>
      <!-- 再次密码 -->
      <div class="login_input phone_code" v-show="noPasswordKey">
        <img src="http://static.jiujiupingou.com/Static/img/03.png" mode="widthFix"/>
        <span>再次输入:</span>
        <input type="password"
          style="-webkit-appearance: none;border: none;background: transparent; outline: none;width: 135px;font-size: 15px;color: #FFFFFF;display: inline-block;overflow: visible;height:100%"
          id="password" placeholder="再次输入密码" v-model="rpassword" />
      </div>
      <div class="check-div" v-show="codeKey">
        <div class="check-code">
          <img :src="imgSrc('ic_code.png')" mode="">
          <input class="input" color="#fff" v-model="imgCode" id="imgCode" type="text" placeholder="输入验证码" placeholder-style=“color:#fff;”>
        </div>
        <canvas @click="setCode()" id="canvas" width="160" height="40" class="codeImg" title="看不清，换一张"></canvas>
      </div>
      <span v-if="VerificationCodeNo && !noPasswordKey"
        style="font-size: 14px;color: #ffffff;margin-left: 53%;margin-top: 20px;display: inline-block;"
        @click="VerificationCodeClick">手机验证码登录</span>
      <span v-if="VerificationCode && !noPasswordKey"
        style="font-size: 14px;color: #ffffff;margin-left: 53%;margin-top: 20px;display: inline-block;"
        @click="passwordLogin">密码登录</span>
      <!-- <span v-if="noPasswordKey"
        style="font-size: 14px;color: #ffffff;margin-left: 53%;margin-top: 20px;display: inline-block;"
        @click="reLogin">重新登录</span> -->
      <!-- <navigator url="../register/register"  hover-class="none" animation-type="none"> -->
      <span style="font-size: 14px;color: #ffffff;margin-left: 53%;margin-top: 20px;display: inline-block;"
        @click="meiyouNumber">没有账号？点击注册</span>
      <!-- 			</navigator> -->
      <span v-if="VerificationCodeNo"
        style="font-size: 14px;color: #ffffff;margin-left: 53%;margin-top: 20px;display: inline-block;"
        @click="wangjiPassword">忘记密码</span>
      <div class="login_div ifip320" style="margin-top:30px">
        <div class="">
          <img @click="tabsChoiceNo" v-if="choiceAgreementNo" style="width: 18px;margin-bottom: -4px;"
            src="http://static.jiujiupingou.com/Static/img/nocheck.png" mode="widthFix"/>
          <img @click="tabsChoice" v-if="choiceAgreement" style="width: 18px;margin-bottom: -4px;"
            src="http://static.jiujiupingou.com/Static/img/check.png" mode="widthFix"/>
          <span style="color: #FFFFFF;">同意</span>
          <span style="color: #891005;span-decoration: underline ;" @click="zhucexieyi">《九九生活注册服务协议》</span>
          <span style="color: #FFFFFF;">和</span>
          <br>
          <span style="color: #891005;span-decoration: underline ;" @click="zhengce">《九九生活隐私政策》</span>
        </div>
        <span class="loginBtn" @click="login()">快速登录</span>
      </div>
      <div class="login_div ifip320" style="margin-top: 30px;">
        <div @click="toUrl" hover-class="none">
          <span style="color: #ffffff;    span-decoration: underline;">关于九九生活</span>
        </div>
      </div>
    </div>


    <!-- 注册 -->

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
  import http from '../../api/index.js'
  import {
    setToken,
    setUserCode,
    setPhone,
    setUser_string,
    setId
  } from '../../util/token.js'
  var graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js");
  import {
    Toast,
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        noPasswordKey: false,
        imageURL: 'http://web991-oss.jiujiupingou.com/img/bg03.png',
        // 选择
        choiceAgreementNo: true,
        choiceAgreement: false,
        // 验证码展示
        VerificationCodeNo: true,
        VerificationCode: false,
        // 登录或者注册
        loginBoxBl: true,
        RegisterBoxBl: false,
        // 手机号
        // 登录的
        phoneNumber: '',
        passWordLogin: '',
        codeVerification: '',
        timeCode: '',
        textCode: '获取验证码',
        disabledCode: false,
        codeKey: false,
        imgCode: null,
        rpassword: ''
      }
    },
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      }
    },
    created() {
      if (!this.$route.params.phone) {
        this.phoneNumber = this.$route.params.phone
      }
    },
    methods: {
       /**生成一个随机数**/
       randomNum(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
      },
      /**生成一个随机色**/
      randomColor(min, max) {
          var r = this.randomNum(min, max);
          var g = this.randomNum(min, max);
          var b = this.randomNum(min, max);
          return "rgb(" + r + "," + g + "," + b + ")";
      },
      /**绘制验证码图片**/
      drawPic(num) {
          var canvas = document.getElementById("canvas");
          var width = canvas.width;
          var height = canvas.height;
          var ctx = canvas.getContext('2d');
          ctx.textBaseline = 'bottom';
  
          /**绘制背景色**/
          ctx.fillStyle = this.randomColor(180, 240); //颜色若太深可能导致看不清
          ctx.fillRect(0, 0, width, height);
          /**绘制文字**/
  
          var txt = num;
          ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色
          ctx.font = this.randomNum(25, 35) + 'px SimHei'; //随机生成字体大小
          var x = 22;
          var y = 35;
          var deg = this.randomNum(-10, 8);
          //修改坐标原点和旋转角度
          ctx.translate(x, y);
          ctx.rotate(deg * Math.PI / 180);
          ctx.fillText(txt, 0, 0);
          // //恢复坐标原点和旋转角度
          ctx.rotate(-deg * Math.PI / 180);
          ctx.translate(-x, -y);
          /* } */
          /* /**绘制干扰线**/
          for (var i = 0; i < 8; i++) {
              ctx.strokeStyle = this.randomColor(40, 180);
              ctx.beginPath();
              ctx.moveTo(this.randomNum(0, width), this.randomNum(0, height));
              ctx.lineTo(this.randomNum(0, width), this.randomNum(0, height));
              ctx.stroke();
          }
          /**绘制干扰点**/
          for (let i = 0; i < 100; i++) {
              ctx.fillStyle = this.randomColor(0, 255);
              ctx.beginPath();
              ctx.arc(this.randomNum(0, width), this.randomNum(0, height), 1, 0, 2 * Math.PI);
              ctx.fill();
          }
      },
      async setCode(){
        let res = await http.post('/api/v1//Passport/VerifyCode', {
          mobile: this.phoneNumber
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if(res && res.data.code === 1){
          this.drawPic(res.data.data.imgCode);
        }
      },
      toUrl(){
        this.$router.push('/aboutjiujiu')
      },
      tabsChoiceNo() {
        this.choiceAgreementNo = false
        this.choiceAgreement = true
      },
      tabsChoice() {
        this.choiceAgreementNo = true
        this.choiceAgreement = false
      },
      VerificationCodeClick() {
        this.VerificationCodeNo = false
        this.VerificationCode = true
      },
      reLogin(){
        this.noPasswordKey = false
        this.passWordLogin = ''
        this.rpassword = ''
        this.phoneNumber = ''
        this.imgCode = ''
        this.codeVerification = ''
      },
      passwordLogin() {
        this.VerificationCodeNo = true
        this.VerificationCode = false
      },
      zhucexieyi() {
        this.$router.push('/aboutjiujiu/zhucexieyi')
      },
      zhengce() {
        this.$router.push('/aboutjiujiu/yinsizhengce')

      },
      wangjiPassword() {
        this.$router.push('/wangjiPassword')
      },
      async setPassword(){
        if(this.passWordLogin !== this.rpassword){
          Toast('两次密码不一致')
          return
        }
        let res = await http.post('/api/v1/passport/SetPassword', {
          password: this.passWordLogin,
          rpassword: this.rpassword
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            loading: '加载'
          }
        })
        if(res.data.code === 1){
          Toast.clear()
          Dialog.confirm({
            title: '提示',
            message: '密码设置成功',
            confirmButtonText: '确认',
            showCancelButton: false
          }).then(()=>{
            this.noPasswordKey = false
            this.VerificationCode = false
            this.login()
          })
        }
      },
      // 点击登录
      async login() {
        if(this.noPasswordKey){
          this.setPassword()
          return false
        }
        var rule = [{
          name: "phoneNumber",
          checkType: "phoneno",
          checkRule: "",
          errorMsg: "请输入正确的手机号"
        }];
        let login_type = null
        if (this.VerificationCode) {
          login_type = 1
          this.passWordLogin = null
          if (this.codeVerification === '') {
            Toast('请输入验证码');
            return
          }
        } else {
          login_type = 2
          if (this.passWordLogin === null) {
            Toast('请输入6-16密码');
            return
          }
        }
        let checkRes = graceChecker.check({
          phoneNumber: this.phoneNumber
        }, rule)
        if (checkRes) {
          if (this.choiceAgreement) {
            let res =null
            if(login_type === 2){
              res = await http.post('/api/v1/Passport/LoginPasswordSubmit', {
                name: this.phoneNumber,
                password: this.passWordLogin,
                imgCode: this.imgCode || ''
              }, {
                custom: {
                  url: '99',
                  nonce: nonce(),
                  timestamp: timestamp(),
                  loading: '加载'
                }
              })
            }else{
              res = await http.post('/api/v1/Passport/LoginSubmit', {
                name: this.phoneNumber,
                smsCode: this.codeVerification
              }, {
                custom: {
                  url: '99',
                  nonce: nonce(),
                  timestamp: timestamp(),
                  loading: '加载'
                }
              })
            }
            let data = res.data
            if (data.code === 1) {
              Toast.clear()
              setToken(data.data.userToken)
              // setId(JSON.stringify(data.data.id))
              setUserCode(data.data.userCode)
              setPhone(this.phoneNumber)
              setUser_string(data.data.nickName)
              setId(data.data.userId)
              // setis_anchor(JSON.stringify(data.data.is_anchor))
              if(data.data.hasPassword || login_type === 2){
                if(data.data.existArea){
                  this.$router.replace('/home/index')
                }else{
                  this.$router.replace('/user/details')
                }
              }else{
                this.noPasswordKey = !data.data.hasPassword
                this.VerificationCodeNo = true
                this.VerificationCode = false
                Dialog.confirm({
                  title: '提示',
                  message: '设置密码才能登录',
                  confirmButtonText: '确认',
                  showCancelButton: false
                })
              }
            } else {
              if (data.code == -4) {
                Toast(data.msg);
              } else {
                if(data.data && data.data.loginNum > 3){
                  this.codeKey = true
                  this.setCode()
                }
                Toast(data.msg);
              }
            }
          } else {
            Toast('请先同意《用户隐私政策和协议条款》');
          }
        } else {
          Toast(graceChecker.error);
        }

      },
      async getCodeRegister() {
        var rule = [{
          name: "phoneNumber",
          checkType: "phoneno",
          checkRule: "",
          errorMsg: "请输入正确的手机号"
        }]
        if (this.disabledCode) {
          Toast('请60秒后重试')
          return
        }
        let checkRes = graceChecker.check({
          phoneNumber: this.phoneNumber
        }, rule)
        if (checkRes) {
          this.disabledCode = true
          this.setInterValFunc()
          Toast.loading({
            duration: 0,
            message: '加载中...',
            forbidClick: true,
          });
          let res = await http.post('/api/v1/Passport/LoginSendMobileSms', {
            name: this.phoneNumber
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp()
            }
          })
          Toast.clear()
          let data = res.data
          Toast(data.msg)
        } else {
          Toast(graceChecker.error)
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
      meiyouNumber() {
        this.$router.push('/agreement/registerAgreement')
      },
    }
  }
</script>

<style lang="less">
  .loginBox1 {
    position: relative;
    height: 99.5vh;

    .login_input_div {
      position: absolute;
      top: 30%;
      width: 100%;

      .login_input {
        border: 1px solid #fff;
        border-radius: 50px;
        padding: 9px 0;
        margin: auto;
        width: 300px;
        height: 20px;
        display: flex;
        align-items: center;
        input::-webkit-input-placeholder{
          color: #fff;
        }

        img {
          width: 20px;
          margin-left: 18px;
          margin-right: 5px;
        }

        span {
          font-size: 15px;
          color: #FFFFFF;
          margin-right: 3px;
        }

        .uni-input-placeholder {
          color: #FFFFFF;
        }
      }

      .phone_code {
        margin-top: 20px;
      }

      .login_div {
        width: 100%;
        text-align: center;

        .loginBtn {
          display: inline-block;
          width: 300px;
          height: 40px;
          line-height: 40px;
          background: #ffd35b;
          color: #FFFFFF;
          text-align: center;
          border-radius: 50px;
          margin: auto;
          margin-top: 20px;
        }
      }
    }
  }
  .check-div {
    display: flex;
    flex-wrap: wrap;
    width: 302px;
    height: 45px;
    margin: 20px auto;
  }

  .check-code {
    position: relative;
    width: 150px;
    height: 38px;
    border: 1px solid #fff;
    border-radius: 40px;
    img{
      position: absolute;
      top: 8px;
      left: 20px;
      width: 20px;
      height: 22px;
    }
  }

  .check-code .input {
    width: calc(100% - 40px);
    padding: 9.5px 0;
    padding-left: 25px;
    border: unset;
    margin-left: 20px;
    font-size: 15px;
    color:#fff;
    background-color: rgba(0, 0, 0, 0);
    .uni-input-placeholder {
      color: #FFFFFF;
    }
  }

  .check-code .input:focus-visible {
    outline: unset;
  }

  .check-div canvas {
    width: calc(100% - 162px);
    height: 80rpx;
    margin-left: 10px;
  }
</style>