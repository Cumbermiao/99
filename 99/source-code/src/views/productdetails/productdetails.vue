<template>
	<div class="productdetailsBox">
		<div class="productdetailsHead">
			<img class="returnStyle" @click="shopfanhui" style="width: 1.875rem;" :src="imgSrc('shopfanhui.png')" mode="widthFix"/>
			<swipe class="swiper" :show-indicators="false">
        <swipe-item v-for="(item,index) in productMainImageList" :key="index">
          <img style="width: 100%;height: 23.4375rem;" :src="item.ImageUrl"/>
        </swipe-item>
      </swipe>
      <!-- <swiper class="swiper" style="height: 23.4375rem;" :indicator-dots="indicatorDots" :autoplay="autoplay"
				:interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in productMainImageList" :key="index">
					<img style="width: 100%;height: 23.4375rem;" :src="item.ImageUrl"/>
				</swiper-item>
			</swiper> -->
		</div>
		<div class="price">
			<div class="priceHead">
				<div class="priceFl">
					<span>￥{{detailsInfo.price}}</span>
					<span>￥{{detailsInfo.oldPrice}}</span>
				</div>
				<div class="priceRl">
					已下单{{detailsInfo.saleNumber}}件
				</div>
			</div>
			<div class="priceFoorter">
				【{{detailsInfo.priceArea}}专区】{{detailsInfo.title}}
			</div>
			<div class="priceFoorter" style="color: #BDBDBD;">
				{{detailsInfo.subTitle}}
			</div>
		</div>
		<div class="" style="padding: .625rem;margin: .625rem 0;background: #FFFFFF;">
			<div style="display: flex;justify-content: space-between;font-size: .875rem;" class="">
				<div class="">
					<span style="color: #FF4040;">99</span>
					<span style="color: #333333;">人在拼团，可直接参与</span>
				</div>
				<div class="" style="font-size: .8125rem;color: #999999;">
					仅显示3个可参与的团购
				</div>
			</div>
			<div class="" style="display: flex;justify-content: space-between;border-top: .0625rem solid #e5e5e5;margin-top: .9375rem;padding: .46875rem 0;">
				<div class="" style="display: flex;align-items: center;">
					<img style="width: 2rem;vertical-align: middle;" src="http://web991-oss.jiujiupingou.com/img/001.png" mode="widthFix"/>
					<span style="color: #333333;font-size: .9375rem;margin-left: .78125rem;vertical-align: middle;">九九生活用户</span>
				</div>
				<div class="">
					<div class="" style="display: flex;align-items: center;">
						<span style="color: #333333;font-size: .8125rem;margin-right: .5625rem;">还差<span style="color: #FF4040;">{{getRandomInt(1,4)}}</span>人成团</span>
						<div @click="showPop" class="" style="width: 4.5rem;height: 1.8125rem;text-align: center;line-height: 1.8125rem;background: #FE8052;border-radius: .3125rem;font-size: .8125rem;color: #FFFFFF;">
							去团购
						</div>
					</div>
				</div>
			</div>
			<div class="" style="display: flex;justify-content: space-between;border-top: .0625rem solid #e5e5e5;margin-top: .9375rem;padding: .46875rem 0;">
				<div class="" style="display: flex;align-items: center;">
					<img style="width: 2rem;vertical-align: middle;" src="http://web991-oss.jiujiupingou.com/img/001.png" mode="widthFix"/>
					<span style="color: #333333;font-size: .9375rem;margin-left: .78125rem;vertical-align: middle;">九九生活用户</span>
				</div>
				<div class="">
					<div class="" style="display: flex;align-items: center;">
						<span style="color: #333333;font-size: .8125rem;margin-right: .5625rem;">还差<span style="color: #FF4040;">{{getRandomInt(1,4)}}</span>人成团</span>
						<div @click="showPop" class="" style="width: 4.5rem;height: 1.8125rem;text-align: center;line-height: 1.8125rem;background: #FE8052;border-radius: .3125rem;font-size: .8125rem;color: #FFFFFF;">
							去团购
						</div>
					</div>
				</div>
			</div>
			<div class="" style="display: flex;justify-content: space-between;border-top: .0625rem solid #e5e5e5;margin-top: .9375rem;padding: .46875rem 0;">
				<div class="" style="display: flex;align-items: center;">
					<img style="width: 2rem;vertical-align: middle;" src="http://web991-oss.jiujiupingou.com/img/001.png" mode="widthFix"/>
					<span style="color: #333333;font-size: .9375rem;margin-left:.78125rem;vertical-align: middle;">九九生活用户</span>
				</div>
				<div class="">
					<div class="" style="display: flex;align-items: center;">
						<span style="color: #333333;font-size: .8125rem;margin-right: .5625rem;">还差<span style="color: #FF4040;">{{getRandomInt(1,4)}}</span>人成团</span>
						<div @click="showPop" class="" style="width: 4.5rem;height: 1.8125rem;text-align: center;line-height: 1.8125rem;background: #FE8052;border-radius: .3125rem;font-size: .8125rem;color: #FFFFFF;">
							去团购
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="activity">
			<span>活动积分</span>
			<span>返还积分</span>
			<span>{{$text.groupText.groupBuying}}结束后获得购物积分</span>
		</div>
		<div class="selectedNumber">
			<span>已选</span>
			<span>1件</span>
		</div>
		<div class="freight">
			<span>运费</span>
			<span>包邮</span>
			<span>（若有退换货情况发生，邮费将由用户自理）</span> <br />
			<span class="myText">农副产品请当面签收，如遇损坏可要求退回</span>
		</div>
		<div class="imgBoxProductDetails">
			<div class="" style="width: 100%;" v-for="(item,index) in productDetailImageList" :key="index">
				<img style="width: 100%;" :src="item.ImageUrl" mode="widthFix"/>
			</div>
		</div>
		<div class="foorterBtn">
			<div class="gengduo" @click="returnIndex">
				<img style="width: 8.125rem;" :src="imgSrc('tuijian.png')" mode="widthFix"/>
				<div class="tuijian">
					更多推荐
				</div>
			</div>
			<div class="liji" @click="showPop">
				<img style="width: 8.125rem;" :src="imgSrc('goumai.png')" mode="widthFix"/>
				<div class="goumai">
					立即购买
				</div>
			</div>
		</div>
		<drawer :classname="'active500'" ref="drawer" >
			<div class="propBox">
				<div class="propHead">
					<img class="touxiang" src="https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg"
						mode=""/>
					<div class="propHeadRl">
						<span class="jiage">￥99</span>
						<br>
						<span class="xuanze">已选红色/S</span>
					</div>
					<img @click="hideShow" class="quxiao" style="width: .75rem;" :src="imgSrc('quxiao.png')"
						mode="widthFix"/>
				</div>
				<div class="chima">
					尺码
				</div>
				<div id="myStyle" >
					<div class="myStyleItemChima" v-for="(item,index) in chimaList" :key="index" @click="checkedItem(index)"
					:class="{active:index==isActive}">
						{{item}}
					</div>
				</div>
				<div class="chima">
					颜色
				</div>
				<div id="myStyle" >
					<div class="myStyleItemChima" v-for="(item,index) in colorList" :key="index" @click="checkedItemColor(index)"
					:class="{active:index==isActiveColor}">
						{{item}}
					</div>
				</div>
				<div class="foorterNumber">
					<div class="foorterNumberFl">
						数量
					</div>
					<div class="foorterNumberRl">
						<img style="width: 2.625rem;" :src="imgSrc('jian.png')" mode="widthFix"/>
						<span>1</span>
						<img style="width: 2.625rem;" :src="imgSrc('jia.png')" mode="widthFix"/>
					</div>
				</div>
				<div class="btnFoorBox">
					<div class="btnFoor">
						<img style="width: 21.5625rem;" :src="imgSrc('btnback.png')" mode="widthFix"/>
						<div class="quedind">
							确定
						</div>
					</div>
				</div>
			</div>
		</drawer>
	</div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
	import drawer from "../../components/drawer/drawer.vue"
	import {nonce , timestamp} from '../../util/random.js'
  import { Swipe, SwipeItem, Toast } from 'vant';
	export default {
    components:{Swipe, SwipeItem,drawer},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				chimaList: ['S', 'M','L','XL'],
				isActive: 0,
				isActiveColor:0,
				colorList:['红色','白色'],
				detailsInfo: {},
				productMainImageList: [],
				productDetailImageList: [],
				pid: 0
			}
		},
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
		created() {
			this.getDetails(this.$route.query.pid)
			this.pid = this.$route.query.pid
		},
		onBackPress() {
      this.$router.push({path:'/home/index',replace:true})
			return true
		},
		methods: {
			getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			},
			// 获取数据
			async getDetails(pid) {
				let baseUrl = '/api/v1/product/get'
				let res = await this.$http.post(baseUrl,{pid:pid},{custom: {url: '99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let	data = res.data
				// console.log(data)
				if (data.code === 1) {
          Toast.clear()
					this.detailsInfo = data.data
					this.productMainImageList = data.data.productMainImageList
					this.productDetailImageList = data.data.productDetailImageList
				}
			},
			// 打开事件             
			showPop() {
        this.$router.push('/confirmOrder?pid=' + this.pid)
				// this.$refs.drawer.open();
			},
			hideShow() {
				this.$refs.drawer.hide();
			},
			checkedItem (index) {
				this.isActive = index
			},
			checkedItemColor(index) {
				this.isActiveColor = index
			},
			shopfanhui() {
        this.$router.push({path:'/home/index',replace:true})
			},
			returnIndex() {
        this.$router.push({path:'/home/index',replace:true})
			}
		}
	}
</script>

<style lang="less">

	.productdetailsBox {
		background-color: #F7F7F7;

		.productdetailsHead {
			position: relative;
      .swiper{
        height: 23.4375rem;
      }
			.returnStyle {
				position: fixed;
				left: 0;
				top: 0;
				z-index: 10;
				margin-top: 1.875rem;
				margin-left: .9375rem;
			}
		}

		.price {
			padding: .625rem;
			background: #FFFFFF;

			.priceHead {
				display: flex;
				justify-content: space-between;
				border-bottom: .0625rem solid #EEEEEE;
				align-items: center;
				padding-bottom: .625rem;

				.priceFl {
					span:nth-child(1) {
						font-size: 1.625rem;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #FF4200;
						margin-right: .1875rem;
					}

					span:nth-child(2) {
						font-size: .875rem;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #999999;
						text-decoration: line-through;
					}
				}

				.priceRl {
					font-size: .75rem;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #999999;
				}
			}

			.priceFoorter {
				font-size: .75rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #404040;
				margin: .625rem 0;
			}
		}

		.activity {
			height: 2.8125rem;
			background: #FFFFFF;
			margin-top: .625rem;
			padding: .625rem;

			span:nth-child(1) {
				font-size: .75rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #757575;
				margin-right: .625rem;
			}

			span:nth-child(2) {
				display: inline-block;
				width: 3.125rem;
				height: .875rem;
				font-size: .5rem;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FD5E3D;
				line-height: .875rem;
				text-align: center;
				border-radius: .375rem;
				border: .0625rem solid;
				margin-right: .625rem;
			}

			span:nth-child(3) {
				font-size: .75rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #404040;
			}
		}

		.selectedNumber {
			padding: 1.25rem .625rem 1.25rem .625rem;
			background: #FFFFFF;
			margin-top: .625rem;
			border-bottom: .0625rem solid #EEEEEE;

			span:nth-child(1) {
				font-size: .75rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #757575;
				margin-right: 1.5rem;
			}

			span:nth-child(2) {
				font-size: .75rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #404040;
			}
		}

		.freight {
			padding: .625rem;
			background: #FFFFFF;

			span:nth-child(1) {
				font-size: .75rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #757575;
				margin-right: 1.5rem;
			}

			span:nth-child(2) {
				font-size: .75rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #404040;
			}

			span:nth-child(3) {
				font-size: .625rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #757575;
			}

			.myText {
				font-size: .625rem;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FF8556;
				margin-left: 5.25rem;
			}
		}
		.imgBoxProductDetails {
			padding: .625rem;
			background: #FFFFFF;
			margin-top: .625rem;
			padding-bottom: 3.75rem;
		}
		.foorterBtn {
			position: fixed;
			left: 0rem;
			bottom: 0rem;
			width: 100%;
			height: 3.75rem;
			background-color: #FFFFFF;
			z-index: 9999;
			display: flex;

			// padding-left: 6rem;
			// padding-top: .9375rem;
			.gengduo {
				position: relative;
				height: 2.5rem;
				margin-left: 6rem;
				margin-top: .625rem;

				.tuijian {
					position: absolute;
					left: 50%;
					top: 50%;
					margin-top: -0.625rem;
					margin-left: -1.75rem;
					width: 3.8rem;
					height: 1.25rem;
          text-align: center;
					font-size: .875rem;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}

			.liji {
				position: relative;
				height: 2.5rem;
				margin-top: .625rem;

				.goumai {
					position: absolute;
					left: 50%;
					top: 50%;
					margin-top: -0.625rem;
					margin-left: -1.75rem;
					width: 4rem;
					height: 1.25rem;
					font-size: .875rem;
          text-align: center;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}

		.propBox {
			z-index: 3000;
			padding: 1.25rem .9375rem;
			height: 90%;
			.propHead {
				.touxiang {
					width: 7.1875rem;
					height: 7.1875rem;
					border-radius: .5rem;
					margin-right: .9375rem;
				}

				.propHeadRl {
					display: inline-block;

					.jiage {
						font-size: 1.375rem;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #FF4200;
					}

					.xuanze {
						font-size: .75rem;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #757575;
						margin-top: .625rem;
						display: inline-block;
					}
				}

				.quxiao {
					display: inline-block;
					position: absolute;
					right: .875rem;
					top: .875rem;
				}
			}

			.chima {
				font-size: .75rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #999999;
				margin-top: 1.25rem;
			}
			
			#myStyle {
				display: flex;
				margin-top: .625rem;
				.myStyleItemChima {
					width: 3.125rem;
					height: 1.5rem;
					line-height: 1.5rem;
					text-align: center;
					border: .0625rem solid #EEEEEE;
					border-radius: .625rem;
					font-size: .75rem;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					margin-right: .875rem;
				}
			}
			.active {
				background: #FD6642;
				color: #FFFFFF;
				border: none;
				font-size: .75rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
			}
			.foorterNumber {
				display: flex;
				justify-content: space-between;
				margin-top: 1.875rem;
				.foorterNumberFl {
					font-size: .75rem;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #999999;
				}
				.foorterNumberRl {
					display: flex;
					justify-content: space-between;
					align-items: center;
					span {
						font-size: .875rem;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #404040;
						margin: 0 .875rem;
					}
				}
			}
			.btnFoorBox {
				display: flex;
				justify-content: center;
				margin-top: 4.0625rem;
				.btnFoor {
					position: relative;
					.quedind {
						position: absolute;
						left: 50%;
						top: 50%;
						margin-top: -0.625rem;
						margin-left: -1.8125rem;
						width: 3.625rem;
						height: 1.25rem;
						font-size: .875rem;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>
