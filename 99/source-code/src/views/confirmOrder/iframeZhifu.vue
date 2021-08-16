<template>
	<div class="">
		<div class="" style="text-align: center;font-size: 16px;color: red;margin-top: 20px;">
			支付确认中{{zhifuqurenzhong}}
		</div>
		<div class="" style="margin-top: 20px;text-align: center;display: flex;justify-content: center;">
			<div class="" style="width: 215px;height: 215px;">
				<div  ref="myQrcode" ></div>
			</div>
		</div>
		<div class="" style="color: red;text-align: center;margin-top: 10px;">
			该二维码仅限本订单使用
		</div>
		<iframe v-show="false" :src="urlZhifu">
		</iframe>
		<div class="" style="text-align: center;margin-top: 70px;" @click="cancelBtn">
			返回首页
		</div>
    <iframe v-show="false" :src="iframeUrl" frameborder="0"></iframe>
	</div>
</template>

<script>
	import {nonce , timestamp} from '../../util/random.js'
	import qrCode from 'qrcodejs2'
  import {
    Toast
  } from 'vant';
	export default {
		data() {
			return {
				orderId: null,
				zhifuqurenzhong: '',
				ishavepay: 0,
				urlZhifu: '',
				typePintuan: '',
				AdvertiseId: '',
        advId: '',
        mchId: '',
        showKey:[],
        data1:'',
        token:'',
        iframeUrl:''
			}
		},
		created() {
      let option = this.$route.params
			this.typePintuan = option.type||''
      this.token = option.token
			this.orderId = option.orderId

			let that = this
			setTimeout(function() {
				that.ishavepay = 1
        Toast.clear()
			},300000)
			this.$nextTick(function(){
				if(option.urlZhifu && (option.urlZhifu.indexOf('.alipay.com')>0 || option.urlZhifu.indexOf('.sandgate.cn')>0 || option.urlZhifu.indexOf('.gdpanshi.com')>0)) {
					this.urlZhifu = option.urlZhifu
					this.initQrCode(option.urlZhifu)
					this.iframeUrl = option.urlZhifu
				} else {
          let url = option.urlZhifu
          if(this.token){
            url = url+'&token='+this.token
          }
					let newUrlZhifu = encodeURIComponent(url)
					let feiAliPay = 'alipays://platformapi/startapp?appId=20000067&url='+ newUrlZhifu
					window.location.href = feiAliPay
					this.initQrCode(feiAliPay)
				}
				if (this.ishavepay === 0) {
					this.payload()
				}
				const u = navigator.userAgent;
				const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
				if (isiOS) {
					//vue调用iOS方法，且传值给iOS （iOS 方法名为 onItemClick）
					window.webkit.messageHandlers.paymentAlipay.postMessage(option.urlZhifu);
				} else {
					//vue调用Android方法，且传值给Android （Android方法名为 onItemClick）
          // eslint-disable-next-line
					nuandouAndroid.paymentAlipay(option.urlZhifu);
				}
				
			})
		},
		mounted() {
			window.closeVideo = this.closeVideo
      Toast.loading({
        duration: 0,
        message: '支付确认中...',
      });
		},
		// onUnload() {
		// 	this.ishavepay = 1
		// },
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
				setTimeout(this.payload,3000)
			},
			async closeVideo() {
        this.$store.commit('navTop/setBackKey',{
          setBackKey: false
        })
        Toast.loading({
          duration: 0,
          message: '正在处理观看记录',
          forbidClick: true,
        });
				// this.textAn = '安卓调用了该方法'
				let res = await this.$http.post('/api/v1/AD/QueryShowAdvertise', {
					advId: this.advId,
          mchId: this.mchId
				}, {
					custom: {
						url: '99',
						nonce: nonce(),
						timestamp: timestamp()
					}
				})
        this.$store.commit('navTop/setBackKey',{
          setBackKey: true
        })
        Toast.clear();
				let data = res.data
				if (data.code === 1) {
          this.$router.push("/paysuccess")
				}
			},
			initQrCode(url) {
        new qrCode(this.$refs.myQrcode, {
					text: url,
					width: 215,
					height: 215,
          correctLevel: 1
				})
			},
			async havepay() {
				if (this.ishavepay === 0) {
					let res = await this.$http.post('/api/v1/MyOrder/GetOrderPayStatus', {orderId:this.orderId}, {custom: {url :'99',nonce:nonce(),timestamp:timestamp()}})
          let data = res.data
					if(data.code === 1) {
            this.showKey.push(data.data)
						if (data.data) {
							this.ishavepay = 1
							setInterval(()=>{
                Toast.clear()
              },500)
							if (this.typePintuan === 'pintuan') {
								let res1 = await this.$http.post('/api/v1/AD/Get', {}, {
									custom: {
										url: '99',
										nonce: nonce(),
										timestamp: timestamp()
									}
								})
								let data1 = res1.data
               
								if (data1.code === 1) {
									// this.AdvertiseId = data1.data.Advertise.AdvertiseId
                  this.mchId = data1.data.mchId
                  this.advId = data1.data.advId
								}
								const u = navigator.userAgent;
								const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                this.data1 = JSON.stringify(data1.data)
								if (isiOS) {
									//vue调用iOS方法，且传值给iOS （iOS 方法名为 onItemClick）
									window.webkit.messageHandlers.onItemClick.postMessage(JSON.stringify(data1.data));
								} else {
									//vue调用Android方法，且传值给Android （Android方法名为 onItemClick）
                  // eslint-disable-next-line
									nuandouAndroid.onItemClick(JSON.stringify(data1.data));
								}
							} else {
                this.$router.push('/confirmOrder/wanPayment')
							}
						}
					}
				}
			},
			
			cancelBtn() {
        this.$router.push({path:'/home/index',replace:true})
			}
		}
	}
</script>

<style>
</style>
