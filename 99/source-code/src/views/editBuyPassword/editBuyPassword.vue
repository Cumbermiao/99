<template>
  <div class="edit">
    <div class="edit-1">验证支付密码</div>
    <div class="edit-2">输入当前密码，以身份验证</div>
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
    <div class="foot" @click="toNote">忘记密码</div>
  </div>
</template>

<script>
  import {nonce , timestamp} from '../../util/random.js'
   export default {
     data(){
       return {
         pasw: "",
         ajax: true,
         paswFocus: true,
         shuKey: true,
       }
     },
     created() {
       setInterval(()=>{
           this.shuKey = !this.shuKey
       },500)
     },
     methods:{
       setPasw(){
         if(this.pasw.length>6){
           this.pasw = this.pasw.substring(0,6)
         }else if(this.pasw.length == 6 && this.ajax){
           this.ajax=false
           this.save()
         }
       },
       async save(){
         let res = await this.$http.post('/api/v1/UserInfo/CheckOldTradePassword', {
           outpassword: this.pasw
         },{custom: {url: '99',nonce:nonce(),timestamp:timestamp()}})
         this.buyKey = false
         this.ajax=true
         let data = res.data
         if (data.code === 1) {
            this.$router.push(`/editBuyPassword/againPsd?outpassword=${this.pasw}&type=pasd`)
         }
       },
       toNote(){
         this.$router.push('/editBuyPassword/noteVerify')
       }
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
  .foot{
    margin-right: 20px;
    text-align: right;
    color: #999;
  }
</style>
