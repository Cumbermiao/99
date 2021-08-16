<template>
  <div class="">
    <div class="" style="display: flex;justify-content: center;margin-top: 3.125rem;">
      <img style="width: 7.5rem;" src="http://static.jiujiupingou.com/Static/img/dingdan.png" mode="aspectFit">
    </div>
    <div class="" style="text-align: center;font-size: 1rem;margin-top: .625rem;">
      下单完成
    </div>
    <div class="" style="text-align: center;margin-top: .625rem;font-size: .875rem;">
      商家会尽快完成出货
    </div>
    <div class="" style="display: flex;justify-content: center;">
      <div class="orderBtn" @click="seeOrderAll">
        查看订单
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      seeOrderAll() {
        this.$router.push('/orderList?orderType=All')
      }
    }
  }
</script>

<style>
  .orderBtn {
    width: 11.875rem;
    height: 2.5rem;
    border: none;
    line-height: 2.5rem;
    text-align: center;
    outline: none;
    background-color: rgb(255, 174, 9);
    color: #fff;
    border-radius: 1.25rem;
    font-size: 1.125rem;
    margin-top: 3.125rem;
  }
</style>