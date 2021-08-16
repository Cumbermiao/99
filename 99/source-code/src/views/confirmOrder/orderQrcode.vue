<template>
	<div class="">
		<div style="text-align: center;">检测到您当前不在九九生活APP内<br>请截图后用【支付宝】扫码支付</div>
		<div class="" style="margin-top: 20px;text-align: center;display: flex;justify-content: center;">
			<div class="" style="width: 109px;height: 109px;">
        <div ref="myQrcode"></div>
			</div>
		</div>
		<div class="" v-if="OrderNo" style="color: red;text-align: center;margin-top:30px;">
			订单号: {{OrderNo}}
		</div>
		<div class="" v-else style="color: red;text-align: center;margin-top:30px;">
			订单号: {{orderId}}
		</div>
		<div class="" style="color: red;text-align: center;margin-top: 10px;">
			该二维码仅限本订单使用
		</div>
		<div class="" style="text-align: center;font-size: 12px;color: red;margin-top: 20px;">
			支付确认中{{zhifuqurenzhong}}
		</div>
		<div class="" style="text-align: center;margin-top: 70px;" @click="cancelBtn">
			返回首页
		</div>
	</div>
</template>

<script>
	import qrCode from 'qrcodejs2'
	import {nonce , timestamp} from '../../util/random.js'
  import {
    Toast
  } from 'vant';
	export default {
		data() {
			return {
				orderId: null,
				OrderNo: null,
				zhifuqurenzhong: '',
				ishavepay: 0
			}
		},
		created() {
      let optin = this.$route.query
      this.token = optin.token
      Toast.loading({
        duration: 0,
        message: '支付确认中...',
      });

			this.$nextTick(function(){
				if (optin.OrderNo) {
					this.OrderNo = optin.OrderNo
				}
				this.orderId = optin.orderId
				if (optin.url.indexOf('.alipay.com')>0) {
					this.initQrCode(optin.url)
				} else {
          let url = optin.url
          if(this.token){
            url = url+'&token='+this.token
          }
					let  newUrlZhifu = encodeURIComponent(url)
					let feiAliPay = 'alipays://platformapi/startapp?appId=20000067&url='+ newUrlZhifu
					this.initQrCode(feiAliPay)
				}
				
				if (this.ishavepay === 0) {
					this.payload()
				}
			})
		},
		destroyed(){
      this.ishavepay = 1
      Toast.clear()
    },
		methods: {
			payload() {
				switch(this.zhifuqurenzhong) {
					case '':
					this.zhifuqurenzhong = '.';
					break
					case '.':
					this.zhifuqurenzhong = '..';
					break
					case '..':
					this.zhifuqurenzhong = '...'
					break
					case '...':
					this.zhifuqurenzhong = ''
					break
					default:
				}
				this.havepay()
				setTimeout(this.payload,1000)
			},
			async havepay() {
				if (this.ishavepay === 0) {
					let res = await this.$http.post('/api/v1/MyOrder/GetOrderPayStatus', {orderId:this.orderId}, {custom: {url :'99',nonce:nonce(),timestamp:timestamp()}})
					let data = res.data
					if(data.code === 1) {
						if (data.data) {
							this.ishavepay = 1
							Toast.clear()
              this.$router.push('/confirmOrder/wanPayment')
						}
					}
				}
			},
			initQrCode(url) {
        new qrCode(this.$refs.myQrcode, {
					text: url,
					width: 115,
					height: 115,
					padding: 12,
          correctLevel: qrCode.CorrectLevel.H
				})
			},
			cancelBtn() {
        this.$router.push('/hpme/index')
			}
		}
	}
</script>

<style>
</style>
