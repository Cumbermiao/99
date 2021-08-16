<template>
	<div class="shopIndexBox">
		<img :src="imgSrc('attract.png')" mode="">
		<div class="attractInvestment">
			火热招商中
		</div>
	</div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
	export default {
		data() {
			return {
				
			}
		},
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
		methods: {
			
		}
	}
</script>

<style lang="less">
	.shopIndexBox {
		position: relative;
		height: 100%;
		image {
			width: 100%;
			height: 100%;
		}
		.attractInvestment {
			width: 250px;
			height: 63px;
			font-size: 50px;
			font-family: HelloFont-WenYiHei, HelloFont;
			font-weight: normal;
			color: #FFFFFF;
			line-height: 63px;
			position: absolute;
			top: 171px;
			left: 50%;
			margin-left: -125px;
		}
	}
</style>
