<template>
  <div class="edit">
    <div class="edit-1">设置支付密码</div>
    <div class="edit-2">{{title}}</div>
    <div class="list">
      <div class="item" :class="{'active':pasw==''}">
        <input :autofocus="paswFocus" type="text" maxlength="6" v-model="pasw" pattern="[0-9]*" @input="setPasw"/>
        <div class="dian" v-if="pasw&&pasw.length>=1"></div>
        <div class="shu" v-show="shuKey"></div>
      </div>
      <div class="item" v-for="item in 5" :key="item" :class="{'active':pasw.length==item}">
        <input type="text" maxlength="6" v-model="pasw" pattern="[0-9]*" @input="setPasw"/>
        <div class="dian" v-if="pasw&&pasw.length>=(item+1)"></div>
        <div class="shu" v-show="shuKey"></div>
      </div>
    </div>
    <div v-if="saveKey" class="btn" @click="save">下一步</div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  import {nonce , timestamp} from '../../util/random.js'
   export default {
     data(){
       return {
         pasw: "",
         againPsd: "",
         ajax: true,
         title: '设置6位数字支付密码',
         type: "",
         saveKey:false,
         paswFocus: true,
         shuKey: true,
       }
     },
     created(){
       let option = this.$route.query
       this.type = option.type
       this.outpassword = option.outpassword
       this.smsCode = option.smsCode
       setInterval(()=>{
           this.shuKey = !this.shuKey
       },500)
     },
     methods:{
       setPasw(){
         if(this.pasw.length == 6){
           if(!this.againPsd){
             this.title = '再次输入支付密码'
             setTimeout(()=>{
               this.againPsd = this.pasw
               this.pasw = ''
             },500)
           }else if(this.ajax){
              this.ajax = false
              this.saveKey = true
           } else {
              this.saveKey = false
           }
         }
       },
       async save(){
        Toast.loading({
          duration: 0,
          message: '加载中...',
          forbidClick: true,
        });
         let res;
         if(this.type === 'pasd' || this.type === 'old'){
           let url = ''
           if(this.type === 'pasd'){
             url = '/api/v1/UserInfo/ModifyOldTradePassword'
           }else if(this.type === 'old'){
             url = '/api/v1/UserInfo/SetTradePasswordForLoginPassword'
           }
           let pasw = this.pasw;
           this.pasw = null
           res = await this.$http.post(url, {
             outpassword: this.outpassword,
             password: pasw,
             rpassword: this.againPsd,
           },{custom: {url: '99',nonce:nonce(),timestamp:timestamp()}})
         } else {
           res = await this.$http.post('/api/v1/UserInfo/ModifyTradePassword', {
             smsCode: this.smsCode,
             password:this.pasw,
             rpassword:this.againPsd,
           },{custom: {url: '99',nonce:nonce(),timestamp:timestamp()}})
         }
         this.buyKey = false
         this.ajax=true
         if(res){
           let data = res.data
           if (data.code === 1) {
             Toast('成功设置密码');
             setTimeout(()=>{
                this.$router.push({path:'/home/user',replace:true})
             },1000)
           }else{
            this.againPsd = ''
            this.title = '设置6位数字支付密码'
            this.saveKey = false
           }
         }else{
            this.againPsd = ''
            this.title = '设置6位数字支付密码'
            this.saveKey = false
         }
       },
     }
   }
</script>

<style lang="less" scoped>
  .edit{
    height: 100vh;
    text-align: center;
    background-color: #f5f5f5;
    .edit-1{
      padding: 10px 0;
      font-size: 18px;
      font-weight: bold;
    }
    .edit-2{
      padding-top: 10px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
      color: #777;
    }
  }
  .list{
    margin: 30px auto 10px;
    
    >div{
      position: relative;
      display: inline-block;
      width: 15%;
      padding-bottom: 15%;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      background-color: #fff;
      
      &:last-child{
        border-right: 1px solid #ccc;
      }
      input{
        position: absolute;
        height: 100%;
        opacity: 0;
        width: 30px;
        left: 10px;
      }
      .dian{
        position: absolute;
        top: 35%;
        left: 36%;
        width: 30%;
        padding-bottom: 30%;
        border-radius: 50%;
        background-color: #000;
      }
    }
    >div.active{
      position: relative;
      background-color: #fff;
      .shu::after{
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
  .btn{
    height: 40px;
    border-radius: 4px;
    margin: 40px 20px;
    line-height: 40px;
    color: #fff;
    background-image: linear-gradient(to right,#FB6463,#FBB663);
  }
</style>
