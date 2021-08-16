<template>
	<div class="qrCodeBox" :style="{backgroundImage: 'url('+imageURLCode+')'}">
		<div class="cancelBox" @click="cancelBtn">
			<img src="http://static.jiujiupingou.com/Static/images/close_share.png" mode="widthFix"/>
		</div>
		<div class="qrCodeFoor">
			<div class="qrCodeFoorFl">
				<div style="width:7.1875rem ; height: 7.1875rem;"  ref="myQrcode"></div>
			</div>
			<div class="qrCodeFoorRl">
				<div class="qrCodeFoorRlHead">
					<img style="width: 2.8125rem;" src="http://web991-oss.jiujiupingou.com/img/001.png" mode="widthFix"/>
					<div class="qrCodeFoorRlHeadId">
						ID:{{phone}}
					</div>
				</div>
				<div class="qrCodeFoorRlMain">
					邀请您加入九九生活
				</div>
				<div class="qrCodeFoorRlFoor">
					扫码下载APP
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		nonce,
		timestamp
	} from '../../util/random.js'
	import {
		getPhone
	} from '../../util/token.js'
	// import qrCode from '../../util/weapp-qrcode.js'
  import qrCode from 'qrcodejs2'
	// const qrCode = require('../../util/weapp-qrcode.js')
	export default {
		data() {
			return {
				imageURLCode: 'http://web991-oss.jiujiupingou.com/img/share_banner.png.jpg',
				imageURLCodeFoor:'http://static.jiujiupingou.com/Static/images/share_footer.png',
				phone: '',
				userInfo: ''
			}
		},
		created() {
			this.$nextTick(function(){
				this.phone = getPhone().substring(0, 3) + '****' + getPhone().substring(7);
				this.getUserInfo()
			})
		},
		methods: {
			async getUserInfo() {
				let res = await this.$http.post('/api/v1/UserInfo/Get', {
					type: 1
				}, {
					custom: {
						url: '99',
						nonce: nonce(),
						timestamp: timestamp()
					}
				})
				let data = res.data
				if (data.code === 1) {
					this.userInfo = data.data
					this.initQrCode()
				}
			},
			initQrCode() {
				let domain = window.location.protocol + "//" + window.location.host;
				new qrCode(this.$refs.myQrcode, {
					text: domain + '/#/scanCode?invite=' + this.userInfo.InvitorCode,
					width: 115,
					height: 115,
					padding: 12,
          correctLevel: qrCode.CorrectLevel.H
				})
			},
			cancelBtn() {
        this.$router.push({path:'/home/index',replace:true})
			}
		}
	}
</script>

<style lang="less">
	.qrCodeBox {
		position: relative;
		width: 100%;
		height: 100vh;
		background-size: 100% 100%;
		.cancelBox {
			position: absolute;
			top: 1.5625rem;
			right: 1.25rem;
			img {
				width: 1.5625rem;
			}
		}
		.qrCodeFoor {
			width: 100%;
			// height: 8.125rem;
			position: absolute;
			// background-size: 100% 100%;
			bottom: 0;
			display: flex;
			align-items: center;
			background-color: rgba(0,0,0,0.2);
			.qrCodeFoorFl {
				width: 8.125rem;
				height: 8.125rem;
				margin-left: .9375rem;
				// background: #FFFFFF;
				margin-right: .625rem;
				z-index: 100000;
				margin-top: .3125rem;
        div{
          width: 100%;
          height: 100%;
        }
			}
			.qrCodeFoorRl {
				color: #FFFFFF;
				.qrCodeFoorRlHead {
					display: flex;
					align-items: center;
					img {
						width: 2.8125rem;
						margin-right: 0.625rem;
						// vertical-align: middle;
					}
					.qrCodeFoorRlHeadId {
						font-size: 1rem;
					}
				}
				.qrCodeFoorRlMain {
					font-size: .8125rem;
					margin-top: .3125rem;
				}
				.qrCodeFoorRlFoor {
					font-size: 1rem;
					margin-top: .3125rem;
				}
			}
		}
	}
</style>
