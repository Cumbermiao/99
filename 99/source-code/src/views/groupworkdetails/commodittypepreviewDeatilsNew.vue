<template>
	<div class="commodittypepreviewDeatilsBox">
		<div class="shopDetailsHead"></div>
		<div class="carousel">
			<swipe class="swiper" style="height: 365px;" :indicator-dots="indicatorDots" :autoplay="autoplay"
				:interval="interval" :duration="duration">
				<swipe-item v-for="(item,index) in productMainImageList" :key="index">
					<img style="width: 100%;height: 100%;"
						:src="item.ImageUrl">
				</swipe-item>
			</swipe>
		</div>
		<div class="shopDetailsHead"></div>
		<div class="shopDetailsMain">
			<div class="shopDetailsMainHead">
			<!-- 	<div class="shopDetailsMainHeadFl">
					<span style="font-size: 20px;margin-right: 5px;">￥{{detailsInfo.price}}</span>
					<span style="font-size: 12px;text-decoration: line-through;color: #808080;">价格￥{{detailsInfo.oldPrice}}</span>
				</div> -->
				<div class="shopDetailsMainHeadRl">
					销售{{detailsInfo.saleNumber}}
				</div>
			</div>
			<div class="shopDetailsMainCon">
				{{detailsInfo.title}}
			</div>
			<div class="shopDetailsMainCon" style="color: #BDBDBD;">
				{{detailsInfo.subTitle}}
			</div>
			<!-- <div class="shopDetailsMainFoor">
				每年100期·每期45分钟
			</div> -->
		</div>
		<div class="shopDetailsHead"></div>
		<div class="stock">
			<span>已选</span>
			<span>1个</span>
		</div>
		<div class="shopDetailsHead"></div>
		<div class="postage">
			<span>邮费</span>
			<span>包邮</span>
			<span> (若有退换货情况发生，邮费将由用户自理) </span>
		</div>
		<!-- 	<div class="partRegion">
			<span>部分地区因疫情、天气等原因实施物流管制，拍下商品将无法发货。</span>
		</div> -->
		<div class="shopDetailsHead"></div>
		<div class="cozyTips">
			<span>温馨提示</span>
			<span>农副产品请当面签收，如遇损坏可要求退回。</span>
		</div>
		<div class="shopDetailsHead"></div>
		<div class="shop-del">
			<span></span>
			<span>商品信息</span>
			<span></span>
		</div>
		<div class="" style="padding-bottom: 50px;">
			<div class="" style="width: 100%;" v-for="(item,index) in productDetailImageList" :key="index">
				<img style="width: 100%;" :src="item.ImageUrl" mode="widthFix">
			</div>
		</div>
		<div class="footerShop">
			<span @click="selectNow">立即选取</span>
		</div>
	</div>
</template>

<script>
	import {nonce , timestamp} from '../../util/random.js'
  import { Swipe, SwipeItem } from 'vant';
	export default {
    components:{Swipe, SwipeItem},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				detailsInfo: {},
				productMainImageList: [],
				productDetailImageList: [],
				xuanType: '',
				pid: '',
				OrderId:'',
				PriceAreaId: '',
				Price: ''
			}
		},
		onBackPress() {
      this.$router.push('/groupworkdetails/commoditypreviewNew?PriceAreaId=' + this.PriceAreaId + '&Price=' + this.Price)
			return true
		},
		created() {
      let option = this.$route.query
			this.getDetails(option.pid)
			this.pid = option.pid
			this.PriceAreaId = option.PriceAreaId
			this.Price = option.Price
		},
		methods: {
			async getDetails(pid) {
				let baseUrl = '/api/v1/product/get'
				let res = await this.$http.post(baseUrl,{pid:pid}, {
					custom: {
						url: '99',nonce:nonce(),timestamp:timestamp(),loading:'加载'
					}
				})
				let data = res.data
				// console.log(data)
				if (data.code === 1) {
					this.detailsInfo = data.data
					this.productMainImageList = data.data.productMainImageList
					this.productDetailImageList = data.data.productDetailImageList
				}
			},
			selectNow() {
        this.$router.push('/groupworkdetails/returnSelectNow?pid=' + this.pid + '&PriceAreaId=' + this.PriceAreaId + '&Price=' + this.Price)
			}
		}
	}
</script>

<style lang="less">
	.commodittypepreviewDeatilsBox {
		.shopDetailsHead {
			height: 10px;
			width: 100%;
			background: #f5f5f5;
		}

		.shopDetailsMain {
			padding: 15px;

			.shopDetailsMainHead {
				display: flex;
				justify-content: space-between;
				margin-bottom: 15px;

				.shopDetailsMainHeadFl {
					color: #D50606;
				}

				.shopDetailsMainHeadRl {
					color: #BDBDBD;
					font-size: 12px;
				}
			}

			.shopDetailsMainCon {
				font-size: 14px;
				color: #010101;
				margin-bottom: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}

			.shopDetailsMainFoor {
				font-size: 12px;
				color: #BDBDBD;
			}
		}

		.stock {
			padding: 15px;

			text {
				color: #999999;
				font-size: 14px;
			}

			text:nth-child(1) {
				margin-right: 10px;
			}
		}

		.postage {
			padding: 15px;

			text {
				font-size: 14px;
				color: #999999;
			}

			text:nth-child(1) {
				margin-right: 10px;
			}

			text:nth-child(2) {
				color: #333333;
			}

			text:nth-child(3) {
				font-size: 12px;
			}
		}

		.partRegion {
			padding: 0 15px;
			color: red;
			font-size: 14px;
		}

		.cozyTips {
			padding: 15px;

			text:nth-child(1) {
				margin-right: 10px;
				font-size: 14px;
				color: #999999;
			}

			text:nth-child(2) {
				font-size: 12px;
				color: #808080;
			}
		}

		.shop-del {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 15px;
			font-size: 14px;
			color: #999999;
			background: #f5f5f5;
			// margin-bottom: 10px;
			padding-bottom: 10px;

			text:nth-child(1) {
				display: inline-block;
				flex: 1;
				height: 1px;
				background: #DBDBDB;
			}

			text:nth-child(2) {
				margin: 0 15px;
			}

			text:nth-child(3) {
				display: inline-block;
				flex: 1;
				height: 1px;
				background: #DBDBDB;
			}
		}

		.footerShop {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 40px;
			background-color: white;
			display: flex;
			justify-content: center;
			align-items: center;

			text {
				width: 68%;
				height: 30px;
				background: #D50606;
				border-radius: 10px;
				text-align: center;
				color: white;
				line-height: 30px;
				display: block;
				// font-size: 0.28rem;
				font-size: 14px;

			}
		}

	}
</style>
