<template>
  <div class="paysuccessBox" :style="{backgroundImage: 'url('+imageURL+')'}">
    <div class="payHead">
      支付成功
    </div>
    <div class="payMainBox">
      <div class="payMain">
        <div class="payMainHead" style="display: flex;margin-bottom: 15px;">
          <img style="width: 90px;margin-right: 15px;" :src="ManyPGMainImage" mode="widthFix">
          <div class="">
            <div class="" style="font-size: 14px;color: #333333;margin-bottom: 7px;">
              {{teamObj.price}}元{{teamObj.manyPGPeopleNumber}}人{{$text.groupText.groupBuying}}
            </div>
            <div class="" style="font-size: 12px;color: #999999;margin-bottom: 7px;">
              先付款后选品；购物不纠结,让{{$text.groupText.groupBuying}}更简单
            </div>
            <div class="" style="font-size: 12px;color: #E2351E;margin-bottom: 7px;">
              {{teamObj.joinPeopleNumber}}/{{teamObj.manyPGPeopleNumber}}人
            </div>
            <div class="" style="font-size: 12px;color: #E2351E;">
              ￥{{teamObj.price}}/件 共1件商品
            </div>
          </div>
        </div>
        <div class="borderBox" style="height: 1px; border-bottom: 1px dashed #DE1722;margin-bottom: 25px;">

        </div>
        <div class="" style="display: flex;justify-content: center;align-items: center;margin-bottom: 14px;">
          <img v-for="(item,index) in teamObj.joinPeopleNumber" :key="index" style="width: 32px;"
            src="https://static.jiujiupingou.com/Static/img/interval_rithg.png" mode="widthFix">
          <div class="" style="margin: 0 15px;color: #DE1722;font-size: 16px;">
            {{$text.groupText.groupBuying}}中
          </div>
          <img style="width: 32px;" src="https://static.jiujiupingou.com/Static/img/interval_left.png"
            mode="widthFix">
        </div>
        <div class="" style="text-align: center;color: #35BCAB;font-size: 14px;margin-bottom: 20px;">
          参团成功
        </div>
        <div class="" style="text-align: center;color: #666666;font-size: 12px;margin-bottom: 20px;">
          请留意成团开奖通知
        </div>
        <div class="" style="display: flex;justify-content: space-between;margin-bottom: 40px;">
          <div class="">
            <img style="width: 33px;" src="http://web991-oss.jiujiupingou.com/img/001.png" mode="widthFix">
          </div>
          <div class="" style="font-size: 14px;">
            差 <span style="color: #E02E24;">{{teamObj.joinPeopleNumber}}</span> 人成团
          </div>
        </div>
        <div class="btnPaySuccess">
          <div class="haoyou" @click="haoyou">
            邀请好友参团
          </div>
          <div class="fanhuiindex" @click="fanhuiindex">
            返回首页
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  export default {
    data() {
      return {
        imageURL: 'http://static.jiujiupingou.com/Static/img/background1.png!600r70'
      }
    },
    computed: {
      ...mapGetters('common', ['teamObj', 'ManyPGMainImage'])
    },
    methods: {
      haoyou() {
        this.$router.push('/QRcode/QRcode')
      },
      fanhuiindex() {
        this.$router.push('/team/team')
      }
    }
  }
</script>

<style lang="less">
  .paysuccessBox {
    height: 100%;

    .payHead {
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #FFFFFF;
      font-size: 18px;
    }

    .payMainBox {
      padding: 10px;

      .payMain {
        background: #FFFFFF;
        padding: 25px 7px;

        .btnPaySuccess {
          display: flex;
          justify-content: space-between;

          .haoyou {
            width: 160px;
            height: 50px;
            background: #DE1722;
            border-radius: 24px;
            text-align: center;
            line-height: 50px;
            color: white;
            font-size: 16px;
          }

          .fanhuiindex {
            width: 160px;
            height: 50px;
            border-radius: 24px;
            text-align: center;
            line-height: 50px;
            font-size: 16px;
            color: #999999;
            background-color: white;
            border: 1px solid #999999;
          }
        }
      }
    }
  }
</style>