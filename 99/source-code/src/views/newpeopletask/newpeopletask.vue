<template>
	<div class="newPeopleTaskBox">
		<!-- 头部 -->
		<div class="newPeopleHead">
			<img @click="gobackIndex" :src="imgSrc('return.png')" mode="widthFix">
			<div class="title">新人任务</div>
		</div>
		<!-- 切换 -->
		<div class="gameAndAdvertisement">
			<div class="advertisement" @click="changeTab(1)">
				<img :src="imgSrc('advertisement.png')" mode="widthFix">
				<div class="title">
					广告任务
				</div>
			</div>
			<div class="game" @click="changeTab(2)">
				<img :src="imgSrc('game.png')" mode="widthFix">
				<div class="title">
					游戏任务
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
	// import {
	// 	getUserId
	// } from '../../util/token.js'
	export default {
		data() {
			return {
				btnnum: 1
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
			gobackIndex() {
        this.$router.push({path:'/home/index',replace:true})
			},
			changeTab() {
				// // this.btnnum = e
				// var jy_flsPlugin = uni.requireNativePlugin("JY-FLSPlugin");
				// jy_flsPlugin.initSDK({
				// 	ch: "5b6710",
				// 	uid: getUserId()
				// }, res => {
				// 	// console.log(JSON.stringify(res));
				// });
			}
		}
	}
</script>

<style lang="less">

	.newPeopleTaskBox {
		.newPeopleHead {
			width: 100%;
			height: 5.3125rem;
			background: linear-gradient(180deg, #FD5B3B 0%, #FF945F 100%);
			box-shadow: 0rem .125rem .375rem 0rem #E3E3E3;
			position: relative;

			image {
				position: absolute;
				width: .75rem;
				left: 1rem;
				top: 2.125rem;
				vertical-align: middle;
			}

			.title {
				text-align: center;
				width: 12.1875rem;
				height: 1.5625rem;
				font-size: 1.125rem;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 1.5625rem;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-top: -0.78125rem;
				margin-left: -6.09375rem;
			}
		}

		.gameAndAdvertisement {
			display: flex;
			justify-content: space-around;
			margin-top: 1.25rem;

			.advertisement {
				position: relative;

				image {
					width: 10.375rem;
				}

				.title {
					position: absolute;
					top: .9375rem;
					left: .625rem;
					font-size: .9375rem;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: #FFFFFF;
					line-height: 1.3125rem;
				}
			}

			.game {
				position: relative;

				image {
					width: 10.375rem;
				}

				.title {
					position: absolute;
					top: .9375rem;
					left: .625rem;
					font-size: .9375rem;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: #FFFFFF;
					line-height: 1.3125rem;
				}
			}
		}

		.advertisementCon {
			display: flex;
			justify-content: center;
			margin-top: 2.25rem;

			.advertisementConBox {
				width: 20.125rem;
				background: #FFFFFF;
				border-radius: .625rem;
				padding: .75rem;

				.titleCon {
					text:nth-child(1) {
						font-size: .875rem;
						font-family: PingFangSC-Semibold, PingFang SC;
						font-weight: 600;
						color: #333333;

						text {
							font-size: .875rem;
							font-family: PingFangSC-Semibold, PingFang SC;
							color: #ef0202;
						}
					}
				}

				.listCon {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: .875rem;
					margin-bottom: .625rem;

					.flCon {
						display: flex;
						justify-content: center;

						image {
							width: 2.625rem;
							vertical-align: middle;
							margin-right: .75rem;
						}

						.titleBox {
							.headTitle {
								font-size: .875rem;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #333333;
							}

							.footerTitle {
								display: block;
								font-size: .6875rem;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #FE784E;
								margin-top: .1875rem;
							}
						}
					}

					.frCon {
						.btn {
							width: 4.375rem;
							height: 1.6875rem;
							background: linear-gradient(180deg, #FD5B3B 0%, #FF8858 100%);
							border-radius: .9375rem;
							line-height: 1.6875rem;
							text-align: center;
							font-size: .75rem;
							color: #FFFFFF;
						}

						.btnUnchecked {
							width: 4.375rem;
							height: 1.6875rem;
							background: #EBEBEB;
							border-radius: .9375rem;
							line-height: 1.6875rem;
							text-align: center;
							font-size: .75rem;
							color: #FFFFFF;
						}
					}
				}
			}
		}

		.gameCon {
			display: flex;
			justify-content: center;

			.titleCon {
				margin-top: .625rem;

				text:nth-child(1) {
					font-size: .875rem;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: #333333;

					text {
						font-size: .875rem;
						font-family: PingFangSC-Semibold, PingFang SC;
						color: #ef0202;
					}
				}
			}

			.gameConBox {
				.gameList {
					width: 20.125rem;
					background: #FFFFFF;
					border-radius: .625rem;
					padding: .75rem;
					margin-top: .9375rem;

					.gameHead {
						display: flex;
						justify-content: space-between;
						align-items: center;
						border-bottom: .0625rem solid #F0F0F0;
						padding: .625rem 0;

						.gameFl {
							display: flex;
							justify-content: center;

							image {
								width: 2.625rem;
								vertical-align: middle;
								margin-right: .75rem;
							}

							.titleBox {
								.headTitle {
									font-size: .875rem;
									font-family: PingFangSC-Regular, PingFang SC;
									font-weight: 400;
									color: #333333;
								}

								.footerTitle {
									display: block;
									font-size: .6875rem;
									font-family: PingFangSC-Regular, PingFang SC;
									font-weight: 400;
									color: #336DFC;
								}
							}
						}

						.gameFr {
							.btn {
								width: 4.375rem;
								height: 1.6875rem;
								line-height: 1.6875rem;
								background: linear-gradient(180deg, #FD5B3B 0%, #FF8858 100%);
								border-radius: .9375rem;
								text-align: center;
								color: #FFFFFF;
								font-size: .75rem;
							}

							.btnWancheng {
								width: 4.375rem;
								height: 1.6875rem;
								line-height: 1.6875rem;
								background: #EBEBEB;
								border-radius: .9375rem;
								text-align: center;
								color: #FFFFFF;
								font-size: .75rem;
							}
						}
					}

					.footerGame {
						margin-top: .625rem;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.gamePlay {
							font-size: .75rem;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
						}

						.xiazai {
							margin: .625rem 0;
							font-size: .625rem;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #888888;
						}

						.footerfr {
							font-size: 1rem;
							font-family: PingFangSC-Semibold, PingFang SC;
							font-weight: 600;
							color: #FF4200;
						}
					}
				}
			}
		}
	}
</style>
