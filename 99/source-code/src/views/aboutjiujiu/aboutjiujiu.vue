<template>
	<div class="aboutjiujiuBox">
		<div class="aboutjiujiuMain">
			<img :src="imgSrc('jiujiu_logo.png')" mode="widthFix">
			<!-- <div class="" style="margin-top: 2.8125rem;color: rgb(166,166,166);">
				Copyright©2020
			</div>
			<div class="" style="color: rgb(166,166,166);">
				九九生活 版权所有
			</div>
			<div class="" style="color: rgb(166,166,166);margin: .9375rem 0 2.8125rem 0;">
				版本号 2.0.1
			</div> -->
			<div class="" style="margin-bottom: .9375rem;">
				<img src="http://web991-oss.jiujiupingou.com/img/copyright.png" mode="widthFix">
			</div>
			<div class="" style="margin-bottom: .9375rem;">
				关于：九九生活是一家专注于O2O和B2C{{$text.groupText.groupBuying}}模式的社区电商平台。九九生活打破了传统的电商购物模式，通过社区{{$text.groupText.groupBuying}}模式，做到发现式购买和场景式购物，其用户既是消费者，又可以是推广者，让购物变成一场更多人可以参与的社交活动。
			</div>
			<!-- <div class="" style="position: relative;">
				<div class="juzhon btm1" id="checkupdate" 
				style="width: 8.75rem;height: 2rem;line-height: 2rem; background-color: rgb(255,182,9);color: #fff;border-radius: .3125rem;position: absolute;left: 50%;margin-left: -4.375rem;">
				检查更新
				</div>
			</div> -->
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
			async getList() {
				await this.$http.get('http://121.41.116.40:81/ApiV1/Common/GetAppUpdateConfig.json')
				// let data = res.data
				// console.log(data)
			}
		}
	}
</script>

<style lang="less">
	.aboutjiujiuBox {
		.aboutjiujiuMain {
			padding: 6.25rem 2.8125rem 0 2.8125rem;
			text-align: center;
			image {
				width: 7.8125rem;
			}
		}
		
	}
</style>
