<template>
  <div class="container999">
    <div class='line'>
      <div class='lineLeft'>原密码</div>
      <div class="lineRight">
        <field class="input" type="password" v-model="password" placeholder-class="plaClass" placeholder='请输入原密码'>
        </field>
      </div>
    </div>
    <div class='line'>
      <div class='lineLeft'>新密码</div>
      <div class="lineRight">
        <field class="input" type="password" v-model="newPassword" placeholder-class="plaClass" placeholder='请输入6位以上密码'>
        </field>
      </div>
    </div>
    <div class='line'>
      <div class='lineLeft'>重复密码</div>
      <div class="lineRight">
        <field class="input" type="password" v-model="resetPassword" placeholder-class="plaClass"
          placeholder='请输入再次输入新密码'></field>
      </div>
    </div>
    <div class="buttonBox" @click="submit">
      确定提交
    </div>
  </div>
</template>

<script>
  import {
    Field,
    Toast,
    Dialog
  } from 'vant';
  import {
    removeUserId,
    removeToken,
    removeUserCode,
    removePhone
  } from '../../util/token.js'
  const util = require('../../util/util.js'); //防重点击函数
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  export default {
    components: {
      Field
    },
    data() {
      return {
        password: '',
        newPassword: '',
        resetPassword: ''
      };
    },
    methods: {
      // 提交
      submit: util.throttle(async function () {
        // console.log(this.newPassword)
        // console.log(this.resetPassword)
        if (this.password.length === '') {
          Toast('密码不足6位');
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
        let res = await this.$http.post('/api/v1/UserInfo/ModifyPassword', {
          outpassword: this.password,
          password: this.newPassword,
          rpassword: this.resetPassword
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
          Toast.clear()
          Dialog.confirm({
            title: '提示',
            message: `${data.msg},请重新登录`,
            confirmButtonText: '重新登录',
            showCancelButton: false
          }).then(() => {
            this.$router.push('/login')
            removeUserId()
            removeToken()
            removeUserCode()
            removePhone()
          }).catch(() => {
            this.$router.push('/login')
            removeUserId()
            removeToken()
            removeUserCode()
            removePhone()
          })
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
</style>