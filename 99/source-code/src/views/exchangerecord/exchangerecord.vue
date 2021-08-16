<template>
	<div>
		<div class="long-tabs">
			<div class="tabs-item" v-for="(item, index) in list" :key="index" :class="{ 'active': index === active }"
				@click="tabClick(index)">
				<div class="item-label" :style="{  'border-color': activeColor,  'color': (index == active && activeTextColor != '') ? activeTextColor : ''
					}">
					<div>{{ item.label }}</div>
				</div>
			</div>
		</div>
		<div class="tabsContentBox" style="padding: 20px" v-if="active === 0">
			<div class="tabsContent">
				<div class="tabsContentHead">
					<span>等待商家发货</span>
				</div>
				<div class="tabsContentMain">
					<div class="tabsContentMainFl">
						<image style="width: 160upx;" src="https://static1.jiujiupingou.com/Product/Main/2020/12/29/89654286ee7480w-626h-627.jpg!100r70" mode="widthFix"></image>
					</div>
					<div class="tabsContentMainRl">
						<div class="tabsContentMainRlName">
							小蜜丰益生元饮品半乳糖果糖肠道健康守护香港品牌10ml×20袋
						</div>
						<div class="tabsContentMainRlNumber">
							数量：×1
						</div>
					</div>
				</div>
				<div class="tabsContentActualPayment">
					<span>实付款:</span>
					<span>能量卷×1</span>
				</div>
				<div class="tabsContentBtn">
					<span>催促发货</span>
					<span @click="orderDetails">订单详情</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				active: 0,
				activeColor: '#F88F1A',
				activeTextColor: ''
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.list = [{
						label: '全部订单'
					},
					{
						label: '待发货'
					},
					{
						label: '待收货'
					},
					{
						label: '兑换完成'
					}
				]
			},
			tabClick(index) {
				this.active = index
			},
			orderDetails() {
        this.$router.push('/exchangerecord/exchangerecordOrder')
			}
		}
	}
</script>
<style lang="less">
	.long-tabs {
		display: flex;
		justify-content: space-between;
		margin: 0 40upx;
		user-select: none;
		background-color: #fff;
		border-bottom: 2upx solid #E1E1E1;
		color: #1C1C1C;
		line-height: 100upx;
		font-weight: 400;

		.tabs-item {
			cursor: pointer;
			font-size: 28upx;
			position: relative;
			color: #000;
			text-align: left;
			box-sizing: border-box;
			background-color: #fff;

			.item-label {
				display: flex;
				justify-content: space-between;
				justify-items: center;
				position: relative;
				padding: 0 20upx;

				.badge {
					display: inline-block;
					margin: 30upx 0 0 20upx;
					width: 28upx;
					height: 28upx;
					padding: 6upx;
					line-height: 28upx;
					border-radius: 50%;
					background: #F53B26;
					color: #FFFFFF;
					font-size: 16upx;
				}
			}
		}

		.active {
			.item-label {
				border-bottom: 4upx solid transparent;
			}
		}
	}
	.tabsContentBox {
		.tabsContent {
			.tabsContentHead {
				text-align: right;
				font-size: 12px;
				color: #999;
			}
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
					.tabsContentMainRlNumber {
						color: #d62b1e;
					}
				}
			}
			.tabsContentActualPayment {
				text-align: right;
				text:nth-child(1) {
					font-size: 12px;
					margin-right: 6px;
				}
			}
			.tabsContentBtn {
				text-align: right;
				font-size: 14px;
				margin-top: 10px;
				text {
					display: inline-block;
					width: 160upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					border-radius: 5px;
				}
				text:nth-child(1) {
					border: 1px solid #999999;
					color: #999999;
					margin-right: 10px;
				}
				text:nth-child(2) {
					border: 1px solid #d50606;
					color: #d50606;
				}
			}
		}
	}
</style>
