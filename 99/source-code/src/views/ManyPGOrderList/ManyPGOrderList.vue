<template>
	<div class="manyPGOrderListBox">
		<div class="manyPGOrderListHead"></div>
		<div class="" style="display: flex;justify-content: center;padding-top: 6.25rem;" v-if="orderList.length === 0">
			<img style="width: 10.125rem;" :src="imgSrc('test.png')" mode="widthFix">
		</div>
		<div class="" v-else>
			<div class="manyPGOrderList" v-for="(item,index) in orderList" :key="index">
				<div class="manyPGOrderListItemHead">
					<div class="manyPGOrderListItemHeadFl">
						<span v-if="typeBle === 'Wait'">{{$text.groupText.groupBuying}}中</span>
						<span v-if="typeBle === 'Winning'">恭喜{{$text.groupText.groupBuying}}成功</span>
						<span v-if="typeBle === 'NotWinning'">未{{$text.groupText.singleGroupBuying}}中,预付款已退回</span>
					</div>
					<div v-if="typeBle !== 'Wait'" class="manyPGOrderListItemHeadRl">
						交易成功
					</div>
				</div>
				<div class="manyPGOrderListItemMain">
					<div class="manyPGOrderListItemMainFl">
						<img style="width: 5rem;height: 5rem;"
							:src="item.ProductMainImage" mode="">
					</div>
					<div class="manyPGOrderListItemMainRl">
						<div class="numberPintuan" style="font-weight: bold;">
							{{item.ProductTitle.replace('拼团','团')}}
						</div>
						<div class="payment">
							先付款,后选品；购物不纠结,让{{$text.groupText.groupBuying}}更简单
						</div>
						<div class="commodityPrice" style="color: #757575;">
							￥{{item.UnitPrice}}/件 共{{item.Number}}件商品
						</div>
						<div class="reward" style="color: #ff0000;">
							<span v-if="typeBle === 'Wait'">成团后预计获得奖金¥{{item.ManyPGBalance}}</span>
							<span v-if="typeBle === 'NotWinning'">{{$text.groupText.groupBuying}}奖励：￥{{item.ManyPGBalance}}  {{item.ManyPGPoint}}积分 {{item.ManyPGConsume}}消费金</span>
							<span v-if="(item.AddressId === 0) && (item.ManyPGSelectProduct === 1) && (typeBle === 'Winning')" @click="xuanzeshop(item)">点击选取您心仪的商品</span>
						</div>
					</div>
				</div>
				<div class="manyPGOrderListItemFoor">
					<div class="manyPGOrderListItemFoorFl">
						订单号：{{item.OrderNo}}
					</div>
					<div class="manyPGOrderListItemFoorRl">
						<span>实付款:</span>
						<span style="color: #FF0000;">￥{{item.TotalPrice}}</span>
						
					</div>
				</div>
				<div class="" style="text-align: right;margin-top: .625rem;">
					<div style="display: inline-block;width: 5.9375rem;height: 1.75rem;line-height: 1.75rem;text-align: center;border-radius: 1.875rem;border: .0625rem solid #FF4200;color: #FF4200;" @click="seeDetails(item)">查看详情</div>
					<div v-if="(item.AddressId === 0) && (item.ManyPGSelectProduct === 1) && (typeBle === 'Winning')" style="display: inline-block;width: 5rem;height: 1.875rem;line-height: 1.875rem;text-align: center;border: .0625rem solid #D50606;border-radius: .625rem;margin-left: .625rem;color: #D50606;" @click="xuanzeshop(item)">选取商品</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import {
    Toast
  } from 'vant';
  import {
    imgUrl
  } from '../../api/config.js'
	import  http  from '../../api/index.js'
	import {nonce , timestamp} from '../../util/random.js'
	export default {
		data() {
			return {
				typeBle: null,
				typeData: null,
				orderList: []
			}
		},
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      }
    },
		created() {
      let option = this.$route.query
			if (option.type) {
				this.typeBle = option.type
				let title = ''
				if (option.type === 'Wait') {
					title =  this.$text.groupText.groupBuying +  '中'
					this.typeData = 0
				} else if (option.type === 'Winning') {
					title = this.$text.groupText.groupBuying +  '成功'
					this.typeData = 1
				} else {
					title = '未' + this.$text.groupText.singleGroupBuying + '中'
					this.typeData = 2
				}
        this.$store.commit('navTop/setTitle',{
          title: title
        })
        this.$store.commit('navTop/setTitle',{
          title
        })
			}
			
		},
		mounted() {
			this.getList()
		},
		methods: {
      onBackPress() {
        this.$router.push('/home/team')
        return true
      },
			async getList() {
				let res = await http.post('/api/v1/myorder/GetManyPGList' ,{type:this.typeData}, {custom: {url: '99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				// console.log(data)
				if (data.code === 1) {
          Toast.clear()
					this.orderList = data.data
				}
			},
			// 查看详情
			seeDetails(item) {
        this.$router.push('/ManyPGOrderList/manyPGOrderListDetails?type=' + this.typeBle + '&orderId=' + item.OrderId)
			},
			xuanzeshop(item) {
        this.$router.push('/groupworkdetails/xuanzeshop/?priceAreaId=' + item.PriceAreaId + '&pirceTitle=' + item.PriceAreaName + '&OrderId=' + item.OrderId)
			}
		}
	}
</script>

<style lang="less">

		.manyPGOrderListBox {
      height: 100vh;
			background: #F7F7F7;

			.manyPGOrderListHead {
				width: 100%;
				height: .625rem;
			}

			.manyPGOrderList {
				background: #FFFFFF;
				padding: .9375rem;
				margin-bottom: .625rem;
				.manyPGOrderListItemHead {
					display: flex;
					margin-bottom: .625rem;
					justify-content: space-between;

					.manyPGOrderListItemHeadFl {
						font-size: .75rem;
						color: #FF4200;
					}

					.manyPGOrderListItemHeadRl {
						font-size: .75rem;
						color: #ff0000;
					}
				}

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
							color: #000;
							margin-bottom: .3125rem;
						}

						.reward {
							font-size: .8125rem;
							color: #D62B1E;
						}
					}
				}

				.manyPGOrderListItemFoor {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.manyPGOrderListItemFoorFl {
						font-size: .75rem;
						color: #000000;
					}

					.manyPGOrderListItemFoorRl {
						display: flex;
						align-items: center;
						text:nth-child(1) {
							font-size: .875rem;
							color: #000000;
						}
						text:nth-child(2) {
							font-size: 1rem;
							color: #000000;
							margin-left: .1875rem;
						}
						text:nth-child(3) {
							margin-left: .625rem;
							border: .0625rem solid #D50606;
							font-size: .875rem;
							color: #D50606;
							width: 5rem;
							height: 1.875rem;
							background: #FFFFFF;
							text-align: center;
							line-height: 1.875rem;
							border-radius: .625rem;
						}
					}
				}
			}
		}
</style>
