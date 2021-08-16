<template>
	<div class="manyPGOrderListDetailsBox">
		<div class="manyPGOrderListHead"></div>
		<div class="" v-if="orderDetailsObj.AddressId !== 0" style="padding: .9375rem;background: #FFFFFF;margin-bottom: .625rem;">
			<div class="">
				<span style="margin-right: 1.875rem;">{{orderDetailsObj.AddressReceiver}}</span>
				<span>{{orderDetailsObj.AddressMobile}}</span>
			</div>
			<div class="" style="margin-top: .3125rem;">
				{{orderDetailsObj.AddressDetail}}
			</div>
		</div>
		<div class="manyPGOrderListItemMainBox">
			<div class="manyPGOrderListItemMain">
				<div class="manyPGOrderListItemMainFl">
					<img style="width: 5rem;height: 5rem;"
						:src="orderDetailsObj.ProductMainImage" mode="">
				</div>
				<div class="manyPGOrderListItemMainRl">
					<div class="numberPintuan" v-if="orderDetailsObj.AddressId === 0">
						{{orderDetailsObj.UnitPrice}}元/{{priceArea.ManyPGPeopleNumber}}人成团
					</div>
					<div class="numberPintuan" v-else>
						{{orderDetailsObj.ProductTitle}}
					</div>
					<div class="payment">
						先付款,后选品；购物不纠结,让{{$text.groupText.groupBuying}}更简单
					</div>
					<div class="commodityPrice">
						￥{{orderDetailsObj.UnitPrice}}/件 共{{orderDetailsObj.Number}}件商品
					</div>
					<div class="reward">
						<span v-if="typeBle === 'Wait'">{{$text.groupText.groupBuying}}中</span>
						<span v-if="typeBle === 'NotWinning'">未{{$text.groupText.singleGroupBuying}}中，预付款已退回</span>
						<span v-if="(orderDetailsObj.ManyPGSelectProduct === 1) && (typeBle === 'Winning') && (orderDetailsObj.AddressId === 0) " @click="xuanzeshop(item)">前去选择您心仪的商品</span>
					</div>
				</div>
			</div>
		</div>
		<div class="priceInformationBox">
			<div class="priceInformation">
				<div class="priceInformationHead">
					价格信息
				</div>
				<div class="priceInformationFoor">
					<div class="commodityTotal">
						<span>商品总金额</span>
						<span>￥{{orderDetailsObj.TotalPrice}}</span>
					</div>
					<div class="commodityTotal">
						<span>运费</span>
						<span>￥{{orderDetailsObj.ExpressPrice}}</span>
					</div>
					<div class="commodityTotal">
						<span>数量</span>
						<span>{{orderDetailsObj.Number}}</span>
					</div>
					<div class="commodityTotal">
						<span>应付金额</span>
						<span>￥{{orderDetailsObj.TotalPrice}}</span>
					</div>
					<div class="commodityTotal">
						<span>获得奖金</span>
						<span>￥{{orderDetailsObj.ManyPGBalance}}</span>
					</div>
					<div class="commodityTotal">
						<span>获得积分</span>
						<span>￥{{orderDetailsObj.ManyPGPoint}}</span>
					</div>
					<div class="commodityTotal">
						<span>获得消费金</span>
						<span>￥{{orderDetailsObj.ManyPGConsume}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="orderIformationBox">
			<div class="orderIformation">
				<div class="orderIformationHead">
					订单信息
				</div>
				<div class="orderIformationFoor">
					<div class="commodityTotal" v-if="orderDetailsObj.ManyPGRanking > 0">
						<span>参团编号</span>
						<span>{{orderDetailsObj.ManyPGRanking}}</span>
					</div>
					<div class="commodityTotal">
						<span>订单编号</span>
						<span>{{orderDetailsObj.OrderNo}}</span>
					</div>
					<div class="commodityTotal">
						<span>参团时间</span>
						<span>{{orderDetailsObj.PayTime}}</span>
					</div>
					<div class="commodityTotal" v-if="orderDetailsObj.ManyPGFullGroup === 1">
						<span>成团时间</span>
						<span>{{orderDetailsObj.ManyPGFullGroupTime}}</span>
					</div>
					<div class="commodityTotal">
						<span>支付方式</span>
						<span v-if="orderDetailsObj.PayType === 1">支付宝支付</span>
						<span v-else-if="orderDetailsObj.PayType === 2">微信支付</span>
						<span v-else-if="orderDetailsObj.PayType === 3">余额支付</span>
						<span v-else-if="orderDetailsObj.PayType === 4">消费金支付</span>
						<span v-else-if="orderDetailsObj.PayType === 5">能量券支付</span>
						<span v-else-if="orderDetailsObj.PayType === 6">银联支付</span>
						<span v-else-if="orderDetailsObj.PayType === 7">微信支付(小程序)</span>
						<span v-else-if="orderDetailsObj.PayType === 8">支付宝支付-汇付</span>
						<span v-else></span>
					</div>
					<div class="commodityTotal">
						<span>支付时间</span>
						<span>{{orderDetailsObj.PayTime}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="priceInformationBox" v-if="orderDetailsObj.DeliveryStatus" style="margin-bottom: 4.0625rem;">
			<div class="priceInformation">
				<div class="priceInformationHead">
					快递信息
				</div>
				<div class="priceInformationFoor">
					<div class="commodityTotal">
						<span>发货时间</span>
						<span>{{orderDetailsObj.DeliveryTime}}</span>
					</div>
					<div class="commodityTotal">
						<span>快递公司</span>
						<span>{{orderDetailsObj.ExpressName}}</span>
					</div>
					<div class="commodityTotal">
						<span>快递单号</span>
						<span>{{orderDetailsObj.ExpressNo}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="btnFoorOrderBox">
			<div class="btnFoorOrder" @click="againOrder">
				再来一单
			</div>
		</div>
	</div>
</template>
<script>
    import {
    Toast
  } from 'vant';
	import { mapGetters } from 'vuex';
	import {nonce , timestamp} from '../../util/random.js'
	export default {
		data() {
			return {
				typeBle:null,
				orderDetailsObj: {},
				priceArea: {},
				typefanhui:''
			}
		},
		computed:{
			...mapGetters('common', ['teamObj'])
		},
		created() {
      let option = this.$route.query
			if (option.type) {
				this.typeBle = option.type
				let title = ''
				if (option.type === 'Wait') {
					title = this.$text.groupText.groupBuying + '中'
				} else if (option.type === 'Winning') {
					title = this.$text.groupText.groupBuying +  '成功'
				} else {
					title = '未' + this.$text.groupText.singleGroupBuying + '中'
				}
        this.$store.commit('navTop/setTitle',{
          title
        })
			}
			this.typefanhui = option.typefanhui
			this.getOrderDetails(option.orderId)
		},
		onBackPress() {
			if (this.typefanhui === 'ping') {
        this.$router.push("/ManyPGOrderList?type=Winning")
				return true
			}
		},
		methods:{
			async getOrderDetails(id) {
				let res = await this.$http.post('/api/v1/MyOrder/Detail', {id:id}, {custom: {url: '99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				// console.log(data)
				if (data.code === 1) {
          Toast.clear()
					this.orderDetailsObj = data.data
					this.priceArea = data.data.priceArea
				}
			},
			againOrder() {
        this.$router.push("/groupworkdetails?Price=" + this.priceArea.Price + '&PriceAreaId=' + this.priceArea.PriceAreaId)
			},
			xuanzeshop() {
        this.$router.push("/groupworkdetails/xuanzeshop?priceAreaId=" + this.priceArea.PriceAreaId + '&pirceTitle=' + this.priceArea.Price + '&OrderId=' + this.orderDetailsObj.OrderId)
			}
		}
	}
</script>
<style lang="less">
	.manyPGOrderListDetailsBox {
    padding: .625rem;
		background: #F7F7F7;
    >view{
      border-radius: .3125rem;
    }
		.manyPGOrderListHead {
			width: 100%;
			height: .625rem;
		}
		.manyPGOrderListItemMainBox {
			padding: .9375rem;
			background: #FFFFFF;
			.manyPGOrderListItemMain {
				display: flex;
			
				.manyPGOrderListItemMainFl {
					margin-right: .8125rem;
				}
			
				.manyPGOrderListItemMainRl {
					font-size: .75rem;
			
					.numberPintuan {
						color: #333333;
						margin-bottom: .3125rem;
					}
			
					.payment {
						color: #999999;
						margin-bottom: .3125rem;
					}
			
					.commodityPrice {
						color: #999999;
						margin-bottom: .3125rem;
					}
			
					.reward {
						font-size: .8125rem;
						color: #FF0000;
					}
				}
			}
		}
		.priceInformationBox {
			padding: .3125rem .9375rem 0;
			background: #FFFFFF;
			margin-top: .625rem;
			.priceInformation {
				.priceInformationHead {
					border-bottom: .0625rem solid #EEEEEE;
					height: 2.8125rem;
					line-height: 2.8125rem;
          font-weight: bold;
				}
				.priceInformationFoor {
					.commodityTotal {
						display: flex;
						justify-content: space-between;
						height: 2.6875rem;
						line-height: 2.6875rem;
						font-size: .875rem;
						text:nth-child(1) {
							color: #333333;
						}
						text:nth-child(2) {
							color: #FF0000;
						}
					}
				}
			}
		}
		.orderIformationBox {
			padding: .3125rem .9375rem 0;
			background: #FFFFFF;
			margin-top: .625rem;
			.orderIformation {
				.orderIformationHead {
					border-bottom: .0625rem solid #EEEEEE;
					height: 2.8125rem;
					line-height: 2.8125rem;
          font-weight: bold;
				}
				.orderIformationFoor {
					.commodityTotal {
						display: flex;
						height: 2.6875rem;
						line-height: 2.6875rem;
						font-size: .875rem;
						text:nth-child(1) {
							color: #333333;
							margin-right: 1.875rem;
						}
						text:nth-child(2) {
							color: #959595;
						}
					}
				}
			}
		}
		.btnFoorOrderBox {
			display: flex;
			justify-content: flex-end;
			position: fixed;
      left: 0;
			bottom: 0;
			width: 100%;
			left: 0;
      box-shadow: 0 0 .625rem .3125rem #eee;
			background-color: #fff;
			padding: .9375rem .5rem .9375rem 0;
			.btnFoorOrder {
				font-size: .875rem;
				color: #fff;
				width: 5rem;
				height: 1.875rem;
				line-height: 1.875rem;
				text-align: center;
				border-radius: 1.875rem;
				margin-right: .75rem;
        background-image: linear-gradient(to right,#FBB663,#FB6463);
			}
		}
	}
</style>