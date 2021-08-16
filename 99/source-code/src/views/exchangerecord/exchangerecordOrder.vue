<template>
	<div class="exchangeRecordOrderBox">
		<div class="exchangeRecordOrderBoxBack"></div>
		<div class="exchangeRecordOrderBoxHead">
			<div class="exchangeRecordOrderBoxHeadFl">
				<img src="http://static.jiujiupingou.com/Static/img/address.png" mode="widthFix">
			</div>
			<div class="exchangeRecordOrderBoxHeadRl">
				<div class="exchangeRecordOrderBoxHeadRlHead">
					<span>张</span>
					<span>17650501414</span>
				</div>
				<div class="exchangeRecordOrderBoxHeadRlFoor">
					福建厦门海沧区测试问题
				</div>
			</div>
		</div>

		<div class="exchangeRecordOrderBoxMain">
			<div class="tabsContentMain">
				<div class="tabsContentMainFl">
					<img style="width: 160upx;"
						src="https://static1.jiujiupingou.com/Product/Main/2020/12/29/89654286ee7480w-626h-627.jpg!100r70"
						mode="widthFix">
				</div>
				<div class="tabsContentMainRl">
					<div class="tabsContentMainRlName">
						小蜜丰益生元饮品半乳糖果糖肠道健康守护香港品牌10ml×20袋
					</div>
					<div class="tabsContentMainRlNumber">
						商品单价:能量卷×1共1件商品
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
						<span>商品单价</span>
						<span>能量卷×1</span>
					</div>
					<div class="commodityTotal">
						<span>运费</span>
						<span>￥0</span>
					</div>
					<div class="commodityTotal">
						<span>数量</span>
						<span>1</span>
					</div>
					<div class="commodityTotal">
						<span>实付款</span>
						<span>能量卷×1</span>
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
					<div class="commodityTotal">
						<span>订单状态</span>
						<span>待发货</span>
					</div>
					<div class="commodityTotal" style="position: relative;">
						<span>订单编号</span>
						<span>67000</span>
						<div @click="copy" style="position: absolute;right: 0;color: #D50606;">复制</div>
					</div>
					<div class="commodityTotal">
						<span>兑换时间</span>
						<span>2020-02-20</span>
					</div>
					<div class="commodityTotal">
						<span>支付方式</span>
						<span>能量卷支付</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			copy() {
				
			}
		}
	}
</script>

<style lang="less">
	.exchangeRecordOrderBox {
		background-color: #F7F7F7;

		.exchangeRecordOrderBoxBack {
			width: 100%;
			height: 10px;
			background: #F7F7F7;
		}

		.exchangeRecordOrderBoxHead {
			padding: 10px;
			background: #FFFFFF;
			display: flex;
			align-items: center;
			height: 80px;

			.exchangeRecordOrderBoxHeadFl {
				margin-right: 12px;

				image {
					width: 26upx;
					vertical-align: middle;
				}
			}

			.exchangeRecordOrderBoxHeadRl {
				.exchangeRecordOrderBoxHeadRlHead {
					text:nth-child(1) {
						font-size: 16px;
						margin-right: 15px;
					}

					text:nth-child(2) {
						font-size: 14px;
						color: #999;
					}
				}

				.exchangeRecordOrderBoxHeadRlFoor {
					font-size: 14px;
				}
			}
		}

		.exchangeRecordOrderBoxMain {
			padding: 10px;
			background: #FFFFFF;
			margin-top: 10px;

			.tabsContentMain {
				display: flex;
				margin-top: 10px;

				.tabsContentMainFl {
					margin-right: 13px;
				}

				.tabsContentMainRl {
					font-size: 12px;

					.tabsContentMainRlName {
						color: #333;
						margin-bottom: 7px;
					}
				}
			}
		}

		.priceInformationBox {
			padding: 15px;
			padding-bottom: 0;
			background: #FFFFFF;
			margin-top: 10px;

			.priceInformation {
				.priceInformationHead {
					border-bottom: 1px solid #EEEEEE;
					height: 45px;
					line-height: 45px;
				}

				.priceInformationFoor {
					.commodityTotal {
						display: flex;
						justify-content: space-between;
						height: 43px;
						line-height: 43px;
						font-size: 14px;

						text:nth-child(1) {
							color: #333333;
						}

						text:nth-child(2) {
							color: #D50606;
						}
					}
				}
			}
		}

		.orderIformationBox {
			padding: 15px;
			padding-bottom: 0;
			background: #FFFFFF;
			margin-top: 10px;

			.orderIformation {
				.orderIformationHead {
					border-bottom: 1px solid #EEEEEE;
					height: 45px;
					line-height: 45px;
				}

				.orderIformationFoor {
					.commodityTotal {
						display: flex;
						height: 43px;
						line-height: 43px;
						font-size: 14px;

						text:nth-child(1) {
							color: #333333;
							margin-right: 30px;
						}

						text:nth-child(2) {
							color: #959595;
						}
					}
				}
			}
		}
	}
</style>
