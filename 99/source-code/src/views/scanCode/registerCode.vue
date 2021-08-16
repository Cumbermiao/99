<template>
	<div class="" 
	:style="{backgroundImage: 'url('+imageURL+')'}"
		style="background-size: 100% 100%; width: 100%;height: 100%;">
		<div class="registerCodeHead">
			<img style="width: 7.5rem;" src="https://99pg.oss-cn-hangzhou.aliyuncs.com/img/logo2.png" mode="widthFix">
			<div class="" style="font-size: 1.75rem;color: #F2B834;;">
				Hello!
			</div>
			<div class="" style="font-size: 1.125rem;color: #FFFFFF;">
				在这里，
			</div>
			<div class="" style="font-size: 1.125rem;color: #FFFFFF;">
				团购得多，就能赚的更多!
			</div>
		</div>
		<div class="formBox">
			<div class=""
				style="color: #FFFFFF;text-align: center;font-size: 1.125rem;margin-bottom: .625rem;padding-top: .625rem;">
				新用户注册
			</div>
			<div class="login_input">
				<img src="http://static.jiujiupingou.com/Static/img/02.png" mode="widthFix">
				<span>+86:</span>
				<input
					style="-webkit-appearance: none;border: none;background: transparent; outline: none;width: 8.4375rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;height:100%"
					id="name" maxlength="11" placeholder="输入11位手机号" v-model="phoneNumber" />
			</div>
			<div class="login_input" style="margin-top: .625rem;">
				<img src="http://static.jiujiupingou.com/Static/img/03.png" mode="widthFix">
				<span>验证码:</span>
				<input type="number"
					style="-webkit-appearance: none;border: none;background: transparent; outline: none;width: 6.25rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;height:100%"
					id="password" v-model="codeVerification" placeholder="请输入验证码" />
				<span style="font-size: .875rem !important;color: #4da3f3 !important;"
					@click="getCodeRegister">{{timeCode}}{{textCode}}</span>
			</div>
			<div class="login_input" style="margin-top: .625rem;">
				<img src="http://static.jiujiupingou.com/Static/img/03.png" mode="widthFix">
				<span>密码:</span>
				<input type="password"
					style="-webkit-appearance: none;height:100%;border: none;background: transparent; outline: none;width: 8.4375rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;"
					id="password" v-model="registerpassWord" placeholder="请输入密码" />
			</div>
			<div class="login_input" style="margin-top: .625rem;">
				<img src="http://static.jiujiupingou.com/Static/img/03.png" mode="widthFix">
				<span>重复密码:</span>
				<input type="password"
					style="-webkit-appearance: none;height:100%;border: none;background: transparent; outline: none;width: 8.4375rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;"
					id="password" v-model="newRegisterpassWord" placeholder="请输入再次输入新密码" />
			</div>
			<div class="login_input" style="margin-top: .625rem;">
				<img src="http://static.jiujiupingou.com/Static/img/04.png" mode="widthFix">
				<span>邀请码:</span>
				<input type="text" :disabled="true"
					style="-webkit-appearance: none;border: none;background: transparent; outline: none;width: 8.4375rem;font-size: .9375rem;color: #FFFFFF;display: inline-block;overflow: visible;height:100%"
					id="password" v-model="invite" placeholder="请输入验证码" />
			</div>
		</div>
		<div class="" style="font-size: .875rem;color: #4da3f3;background: #FFC84C;text-align: right;padding: .9375rem 1.25rem;" @click="download">
			<span>已经注册？点击下载</span>
		</div>
		<div class="" style="padding: 1.25rem 0;background:#FFC84C ;padding-bottom: 3.125rem;">
			<div class="" style="text-align: center;">
				<img @click="tabsChoiceNo" v-if="choiceAgreementNo" style="width: 1.125rem;margin-bottom: -0.25rem;"
					src="http://static.jiujiupingou.com/Static/img/nocheck.png" mode="widthFix">
				<img @click="tabsChoice" v-if="choiceAgreement" style="width: 1.125rem;margin-bottom: -0.25rem;"
					src="http://static.jiujiupingou.com/Static/img/check.png" mode="widthFix">
				<span style="color: #FFFFFF;">同意</span>
				<span style="color: #FFFFFF;text-decoration: underline ;" @click="zhucexieyi">《九九生活注册服务协议》</span>
				<span style="color: #FFFFFF;">和</span>
				<br>
				<span style="color: #FFFFFF;text-decoration: underline ;" @click="zhengce">《九九生活隐私政策》</span>
			</div>
			<div class="" style="text-align: center;">
				<span @click="registerBtn"
					style="width: 18.75rem;height: 2.5rem;line-height: 2.5rem;display: inline-block;margin-top: .625rem;color: #F2B834;background: #FFFFFF;border-radius: 3.125rem;;">完成注册</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		nonce,
		timestamp
	} from '../../util/random.js'
	import util from '../../util/util.js'
  import {
    Toast,
    Dialog
  } from 'vant';
	export default {
		data() {
			return {
				imageURL: 'https://99pg.oss-cn-hangzhou.aliyuncs.com/img/bg05.png',
				invite: '',
				timeCode: '',
				disabledCode: false,
				textCode: '获取验证码',
				choiceAgreementNo: false,
				choiceAgreement: true,
				phoneNumber: '',
				registerpassWord: '',
				newRegisterpassWord: '',
				codeVerification: ''
			}
		},
		created() {
      let option = this.$route.query
			if (option.invite) {
				this.invite = option.invite
			} else {
				Toast('邀请码出问题了，注册后可能领取不到您的福利，建议重新扫码')
			}
		},
		methods: {
			tabsChoice() {
				this.choiceAgreement = false
				this.choiceAgreementNo = true
			},
			tabsChoiceNo() {
				this.choiceAgreement = true
				this.choiceAgreementNo = false
			},
      // 新版本跳新页面下载
      download(){
        location.href="https://static.jiujiupingou.com/AppDownLoad.html?"+(Math.random()*100).toFixed(0)
      },
			zhucexieyi() {
        this.$router.push('/aboutjiujiu/zhucexieyi')
			},
			zhengce() {
        this.$router.push('/aboutjiujiu/yinsizhengce')
			},
			// 获取验证码
			async getCodeRegister() {
				if (this.phoneNumber === '') {
					Toast('请输入手机号');
					return
				}
				if (this.disabledCode) {
					Toast('请60秒后重试');
					return
				}
				this.disabledCode = true
				this.setInterValFunc()
				let res = await this.$http.post('/api/v1/Passport/RegisterSendMobileSms', {
					name: this.phoneNumber
				}, {
					custom: {
						url: '99',
						nonce: nonce(),
						timestamp: timestamp(),
						loading: '加载'
					}
				})
				let data = res.data
				if (data.code === 1) {
					Toast(data.msg);
				} else {
					Toast(data.msg);
				}

			},
			setInterValFunc() {
				this.timeCode = 60;
				this.textCode = '秒';
				this.setTime = setInterval(() => {
					if (this.timeCode - 1 == 0) {
						this.timeCode = '';
						this.textCode = '重新获取';
						this.disabledCode = false;
						clearInterval(this.setTime);
					} else {
						this.timeCode--;
					}
				}, 1000);
			},
			registerBtn: util.throttle(async function() {
				let that = this
				if (that.phoneNumber === '') {
					Toast('请输入手机号');
					return
				}
				if (that.codeVerification === '') {
					Toast('请输入验证码');
					return
				}
				if (that.registerpassWord === '') {
					Toast('请输入密码');
					return
				}
				if (that.newRegisterpassWord === '') {
					Toast('请再次输入密码');
					return
				}
				if (that.newRegisterpassWord !== that.registerpassWord) {
					Toast('两次密码不一致');
					return
				}
				if (that.choiceAgreement) {
					let res = await that.$http.post('/api/v1/Passport/RegisterSubmit', {
						name: that.phoneNumber,
						smsCode: that.codeVerification,
						beInvitorCode: that.invite,
						password: that.registerpassWord,
						rpassword: that.newRegisterpassWord,
					}, {
						custom: {
							url: '99',
							nonce: nonce(),
							timestamp: timestamp(),
							loading: '加载'
						}
					})
					let data = res.data
					// console.log(data)
					if (data.code === 1) {
            Toast.clear()
						Dialog.confirm({
							title: '注册成功',
							content: '是否下载安装',
							success: (modal) => {
								if (modal.confirm) {
									that.download()
								} else {
									console.log('取消')
								}
							}
						})
						// uni.showToast({title: '注册成功',icon:'none'})
						// setTimeout(function(){
						// 	uni.navigateTo({
						// 		url:'../login/login?phone=' + that.phoneRegister
						// 	})
						// },1000)
					} else {
						Toast(data.msg)
					}

				} else {
					Toast('请先同意《用户隐私政策和协议条款》');
				}
			}, 5000)
		}
	}
</script>

<style scoped lang="less">

	.registerCodeHead {
		padding-top: 1.875rem;
		padding-left: 1.875rem;
	}

	.formBox {
		margin-top: 2.8125rem;
		width: 100%;
		background: #FFC84C;
		border-top-left-radius: 3.125rem;
		border-top-right-radius: 3.125rem;

	}

	.login_input {
		border: .0625rem solid #fff;
		border-radius: 3.125rem;
		padding: .5625rem 0;
		margin: auto;
		width: 18.75rem;
		display: flex;
		align-items: center;

		img {
			width: 1.25rem;
			margin-left: 1.125rem;
			margin-right: .3125rem;
		}

		span {
			font-size: .9375rem;
			color: #FFFFFF;
			margin-right: .1875rem;
		}

		.uni-input-placeholder {
			color: #FFFFFF;
		}
	}
</style>
