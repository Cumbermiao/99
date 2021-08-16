<template>
  <div class="note">
    <div class="note-1">
      <div class="phone">+86 {{phone}}</div>
      <div v-if="!oldKey" :class="{'active':!timeKey}" class="note-1-code" @click="getCode">{{codeTitle}}</div>
    </div>
    <div class="note-2"><div>{{oldKey?'登录密码':'验证码'}}：</div>
      <field class="input" v-if="!oldKey" maxlength="6" v-model="setCode" placeholder="请输入验证码"></field>
      <field class="input" type="password" v-else v-model="setCode" placeholder="请输入登录密码"></field>
    </div>
    <div class="text" @click="isOld">{{oldKey?'短信验证':'登录密码验证'}}</div>
    <div class="note-3" @click="save">确认</div>
  </div>
</template>

<script>
  import {nonce , timestamp} from '../../util/random.js'
  import {getPhone} from '../../util/token.js'
  import {
    Field, Toast
  } from 'vant';
  export default {
    components:{Field},
    data(){
      return {
        phone: '',
        code: '',
        setCode: null,
        codeTitle: '获取验证码',
        index: null,
        timeKey: true,
        oldKey: false
      }
    },
    created() {
      this.phone = getPhone()
    },
    methods:{
      isOld(){
        this.oldKey = !this.oldKey
      },
      async getCode(){
        if(this.timeKey){
          this.timeKey = false
          this.codeTitle = 60
          this.index = setInterval(()=>{
            this.codeTitle--
            if(this.codeTitle === 0){
              this.timeKey = true
              this.codeTitle = '获取验证码'
              clearInterval(this.index)
            }
          },1000)
          let res = await this.$http.post('/api/v1/UserInfo/TradePasswordSendMobileSms',{},{custom:{url:'99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
          if(res){
            if (res.data.code === 1) {
              Toast.clear()
              this.code = res.data.data
            }
          }
        }else{
          return 
        }
      },
      async save(){
        if(!this.oldKey){
          let res = await this.$http.post('/api/v1/UserInfo/CheckSmsCode',{smsCode:this.setCode},{custom:{url:'99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
          if (res.data.code === 1) {
            Toast.clear()

            this.$router.push(`/editBuyPassword/againPsd?smsCode=${this.setCode}&type=code`)
          }
        }else{
          let res = await this.$http.post('/api/v1/UserInfo/CheckLoginPassword',{outpassword:this.setCode},{custom:{url:'99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
          if (res.data.code === 1) {
            Toast.clear()

            this.$router.push(`/editBuyPassword/againPsd?outpassword=${this.setCode}&type=old`)
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .note{
    height: 100vh;
    background-color: #f5f5f5;
    padding: 20px;
    .note-1{
      position: relative;
      height: 50px;
      padding-bottom: 5px;
      border-bottom: 1px solid #ccc;
      .phone{
        line-height: 50px;
      }
      .note-1-code{
        position: absolute;
        top: 10px;
        right: 0;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
        background-image: linear-gradient(to right,#FB6463,#FBB663);
      }
      .note-1-code.active{
        background-color: #ccc;
      }
    }
    .note-2{
      display: flex;
      flex-wrap: wrap;
      padding: 20px 0 10px;
      border-bottom: 1px solid #ccc;
      >div{
        width: 80px;
      }
      .input{
        width: calc(100% - 80px);
        padding: unset;
        background-color: unset;
      }
    }
    .note-3{
      height: 35px;
      border-radius: 4px;
      margin-top: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      background-image: linear-gradient(to right,#FB6463,#FBB663);
    }
    .text{
      margin-top: 10px;
      text-align: right;
      font-size: 14px;
      color: #FB6463;
    }
  }
</style>
