<template>
	<div class="poster">
		<div class="" style="height: 100%;">
			<img style="width: 100%;height: 100%;" :src="imgSrc('poster.jpg')" mode="" @click="posterClick"/>
		</div>
	</div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
	import http from '../../api/index.js'
	import {nonce , timestamp} from '../../util/random.js'
	import {getUserCode, removeUserId,removeToken, removeUserCode, removePhone, getToken} from '../../util/token.js'
	import {
		getUserId
	} from '../../util/token.js'
  import { Dialog, Toast } from 'vant';
	export default {
		data() {
			return {
				siginDateList: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				bannerList: [],
				point: 0,
				today_point: 0,
				continuity_count: 0,
				is_signin: null,
				tomorrow_point: null,
				userInfo:{},
				token:'',
				isClick: true,
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
			if (getUserCode() === '') {
          this.$router.push("/login")
					removeUserId()
					removeToken()
					removeUserCode()
					removePhone()
					return
			}
		},
		mounted() {
			if (getUserCode() === '') {
          this.$router.push("/login")
					removeUserId()
					removeToken()
					removeUserCode()
					removePhone()
					return
			}
			if(this.$store.state.common.getToken){
				this.geth5verify()
				this.$store.commit('common/setToken',false)
			}
			// this.getUserInfo()
			// this.getSigin()
		},
		methods: {
			async geth5verify() {
				let res = await this.$http.post('/api/v1/usercenter/geth5verify', {
					appId:"mallandroidapp",
					// appKey:"MALL99PG",
					usercode:getUserCode(),
					usertoken:getToken()
				},{
					custom: {
						url: '99',
						nonce: nonce(),
						timestamp: timestamp()
					}
				})
				this.isClick = true
				let data = res.data
				if (data.code === 1) {
					this.token = data.token;
					this.jumpTo();
				}
			},
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
				// console.log(res)
				let data = res.data
				if (data.code === 1) {
					this.userInfo = data.data
				}
			},
			async getSigin() {
				let res = await http.post('/api/v1/Sign/ShowSignView', {
					UserId: getUserId()
				},{custom:{url:'shengyang',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				// console.log(data)
				if (data.code === 1) {
					this.bannerList = data.data.banner
					this.point = data.data.point
					this.today_point = data.data.today_point
					this.tomorrow_point = data.data.tomorrow_point
					this.continuity_count = data.data.continuity_count
					this.is_signin = data.data.is_signin
					let siginDateListNew = []
					for (let key in data.data.sign_date) {
						let obj = {}
						obj.date = this.shijiantime(key)
						obj.che = data.data.sign_date[key]
						siginDateListNew.push(obj)
					}
					this.siginDateList = siginDateListNew
				}
			},
			shijiantime(times) {
				var timearr = times.replace(" ", ":").replace(/:/g, "-").split("-");
				var timestr = timearr[1] + "-" + timearr[2]
				return timestr
			},
			async clickSigin() {
				let res = await http.post('/api/v1/Sign/SignIn', {UserId: getUserId()},{custom:{url:'shengyang',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				if (data.code === 1) {
          Toast(data.msg);
					this.getSigin()
					this.getUserInfo()
				} else {
					Toast(data.msg);
				}
			},
			changeTab() {
				const u = navigator.userAgent;
				const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
				if (isiOS) {
					//vue调用iOS方法，且传值给iOS （iOS 方法名为 onItemClick）
					window.webkit.messageHandlers.taskClick.postMessage(getUserId());
				} else {
					//vue调用Android方法，且传值给Android （Android方法名为 onItemClick）
          // eslint-disable-next-line
					nuandouAndroid.taskClick(getUserId());
				}
			},
			posterClick() {
				if(this.isClick){
					this.isClick = false
					this.geth5verify();
				}
			},
			jumpTo() {
				var token = this.token;
				var result = {
					"appId":"mallandroidapp", 
					// "appKey":"PG99PG", 
					"usercode":getUserCode(),
					"usertoken":getToken(),
					"token":token
				}
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				if(isIOS) {
					window.webkit.messageHandlers.posterClick.postMessage(JSON.stringify(result));
				} else if (isAndroid) {
          // eslint-disable-next-line
					nuandouAndroid.posterClick(JSON.stringify(result));
				} else {
					Dialog.confirm({
						title: '提示',
						message: `请下载APP！`,
						confirmButtonText: '确认',
						showCancelButton: false
					});
				}
			}
		}
	}
</script>

<style lang="less" >
	.poster {
		width: 100%;
		height: 100%;
	}
</style>
