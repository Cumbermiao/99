<template>
  <div class="shop-list">
    <div class="shop-item" v-for="(item,i) in list" :key="i">
      <div class="shop-img" :style="shopImg"></div>
      <div class="buy">已团99件</div>
      <div class="shop-content">Erno Laszlo/奥伦纳素豆 腐霜50ml哑光清爽不粘...</div>
      <div class="shop-num">
        <div class="left">￥<div style="display: inline-block;font-size: 19px;">99</div>.00</div>
        <div class="right">￥99.00</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
  export default{
    data(){
      return {
        list:[{},{}]
      }
    },
    computed:{
      shopImg(){
        return {backgroundImage: imgUrl?'url('+imgUrl+'30_heart.png)':''}
      }
    },
  }
</script>

<style lang="less">
  .shop-list{
    height: calc(100vh - 60px);
    padding: 0.5rem;
    color: #333;
    background-color: #F3F4F8;
    .shop-item{
      float: left;
      width: calc(50% - 2.5px);
      border-radius: 0.5rem;
      margin-bottom: 0.375rem;
      background-color: #fff;
      overflow: hidden;
      &:nth-child(2n-1){
        margin-right: 5px;
      }
      .shop-img{
        padding-bottom: 100%;
        background-size: 100% 100%;
      }
      .buy{
        padding: 0 0.5rem 0.5rem;
        font-size: 12px;
        color: #999999;
      }
      .shop-content{
        padding: 0.3rem 0.625rem;
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .shop-num{
        padding: 0 0.375rem;
        margin-bottom: 0.5rem;
        .left{
          float: left;
          font-size: 12px;
          font-weight: bold;
          color: #FF1738;
        }
        .right{
          float: left;
          margin-left: 10px;
          font-size: 12px;
          line-height: 30px;
          color: #bbb;
          text-decoration: line-through;
        }
      }
    }
  }
</style>
