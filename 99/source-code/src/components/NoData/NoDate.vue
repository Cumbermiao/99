<template>
  <div class="no-date">
    <img :src="imgSrc('nodate.png')" mode="">
    <div>暂无数据哟~</div>
  </div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
  export default{
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
  }
</script>

<style lang="less">
  .no-date{
    text-align: center;
    img{
      width: 9.46875rem;
      height: 6rem;
      margin-bottom: 3rem;
    }
  }
</style>
