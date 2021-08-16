<template>
	<div class="confirmBox">
		<div class="confirmBoxHead">
			<div class="manyPGOrderListItemMain">
				<div class="manyPGOrderListItemMainFl">
					<img style="width: 80px;height: 80px;"
						:src="priceAreaObj.ManyPGMainImage" mode="">
				</div>
				<div class="manyPGOrderListItemMainRl">
					<div class="numberPintuan">
						{{teamObj.price}}元{{teamObj.manyPGPeopleNumber}}人{{$text.groupText.groupBuying}}
					</div>
					<div class="payment">
						先付款,后选品；购物不纠结,让{{$text.groupText.groupBuying}}购更简单
					</div>
					<div class="commodityPrice">
						￥{{teamObj.price}}/件 共1件商品
					</div>
				</div>
			</div>
		</div>
		<div class="confirmBoxFoor">
			<div class="" style="font-size: 14px;margin-bottom: 10px;">
				活动规则
			</div>
			<div class="">
				<img style="width: 100%;" :src="priceAreaObj.ManyPGRuleImage" mode="widthFix">
			</div>
		</div>
		<div class="confirmBoxFoorBtn">
			<div class="confirmBoxFoorBtnFl">
				<span style="color: #6F6F6F;font-size: 16px;margin-left: 25px;">共1件</span>
				<span style="color: #6F6F6F;">合计:</span>
				<span style="color: #FF4200;margin-left: 18px;font-size: 22px">￥{{teamObj.price}}</span>
			</div>
			<div class="confirmBoxFoorBtnRl" @click="goPlay">
				去支付
			</div>
		</div>
	</div>
</template>

<script>
	import {nonce , timestamp} from '../../util/random.js'
	import { mapGetters,mapActions } from 'vuex';
	export default {
		data() {
			return {
				priceAreaObj: {},
				PriceAreaId: null
			}
		},
		computed:{
			...mapGetters('common', ['teamObj'])
		},
		created() {
      let option = this.$route.query
			this.getList(option.PriceAreaId)
			this.PriceAreaId = option.PriceAreaId
		},
		methods:{
			...mapActions('common',['setTeamObj', 'setManyPGMainImage']),
			async getList(priceAreaId) {
				let res = await this.$http.post('/api/v1/ManyPG/ManyPGArea',{id:priceAreaId},{custom:{url:'99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				// console.log(data)
				if (data.code === 1) {
					this.priceAreaObj = data.data.PriceArea
				}
			},
			goPlay: function(){
        this.setManyPGMainImage(this.priceAreaObj.ManyPGMainImage)
        this.$router.push('/groupworkdetails/goplayPintuan?PriceAreaId=' + this.PriceAreaId + '&jiage=' + this.teamObj.price)
			}
		}
	}
</script>

<style lang="less">
	page {
		background: #F7F7F7;
	}

	.confirmBox {
		background: #F7F7F7;

		.confirmBoxHead {
			background: #FFFFFF;
			padding: 15px;

			.manyPGOrderListItemMain {
				display: flex;

				.manyPGOrderListItemMainFl {
					margin-right: 13px;
				}

				.manyPGOrderListItemMainRl {
					font-size: 12px;

					.numberPintuan {
            margin-top: 7px;
						margin-bottom: 7px;
            color: #333333;
					}

					.payment {
						color: #999999;
						margin-bottom: 7px;
					}

					.commodityPrice {
						color: #000;
						margin-bottom: 7px;
						color: #D62B1E;
					}
				}
			}
		}

		.confirmBoxFoor {
			padding: 15px;
			background: #FFFFFF;
			margin-top: 10px;
			padding-bottom: 70px;
		}

		.confirmBoxFoorBtn {
			position: fixed;
			bottom: 0;
			height: 60px;
			width: 100%;
			display: flex;
			background: white;

			.confirmBoxFoorBtnFl {
				display: flex;
				justify-content: flex-end;
				height: 60px;
				align-items: center;
			}

			.confirmBoxFoorBtnRl {
        position: absolute;
        top: 10px;
        right: 31px;
				width: 107px;
				height: 40px;
        border-radius: 40px;
				line-height: 40px;
				background-image: linear-gradient(to right,#FBB663,#FB6463);
				text-align: center;
				color: white;
			}
		}
	}
</style>
