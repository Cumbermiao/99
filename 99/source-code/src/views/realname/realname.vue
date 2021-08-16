<template>
	<div class="container999">
		<div  class="" v-if="cardidObj.Status === 1">
			<div class="img">
				<img :src="imgSrc('shiming_logo.png')" mode="widthFix">
			</div>
			<div class="" style="text-align: center;margin: 2.625rem 1.5625rem 0;color: #00A45E;font-size: 1rem;">
				恭喜 {{cardidObj.TrueName}},您的身份证号：{{cardidObj.IdNumber.replace(/^(.{4})(?:\d+)(.{4})$/,"$1******$2")}}认证已通过
			</div>
		</div>
		<div  class="" v-else-if="cardidObj.Status === 0">
			<div class="img">
				<img :src="imgSrc('shiming_logo.png')" mode="widthFix">
			</div>
			<div class="" style="text-align: center;margin-top: 2.625rem;color: #FF1400;font-size: 1rem;">
				<span>审核中……</span>
			</div>
		</div>
		<div  class="" v-else-if="cardidObj.Status === 2">
			<div class="img">
				<img :src="imgSrc('shiming_logo.png')" mode="widthFix">
			</div>
			<div class="" style="text-align: center;font-size: 1rem;margin-top: 2.625rem;color: #FF1400">
				<span>认证失败，请确认信息后重新填写</span>
			</div>
			<div class="" style="position: absolute;bottom: 6.25rem;width: 100%;">
				<div class="" @click="gotoAuthentication" style="margin: 0 auto;width: 21.5625rem;text-align: center;height: 3.125rem;line-height: 3.125rem;background-image: linear-gradient(to right,#FBB663,#FB6463);border-radius: 3.125rem;color: #FFFFFF;margin-top: 3.125rem;">
					前往认证
				</div>
			</div>
		</div>
		<div class="" v-else>
			<div class='line'>
				<div class='lineLeft'>姓名</div>
				<div class="lineRight">
					<!-- data-name为自定义参数名称,同时也会以此为参数名存入data的form中-->
            <field class="input" @input="change" placeholder-class="plaClass" placeholder="请输入真实姓名" :value="form.name"></field>
				</div>
			</div>
			<div class='line'>
				<div class='lineLeft'>身份证号码</div>
				<div class="lineRight">
            <field class="input" @input="change2" placeholder-class="plaClass" placeholder="请输入18位身份证" :value="form.id"></field>
				</div>
			</div>
			<div class="" style="padding: 0.6rem 0.3rem 0.2rem;color: #FB6463; font-size:.875rem; text-align: center;">
				1.请确保信息准确性，认证失败将无法提现
			</div>
			<div class="buttonBox" @click="submit">
				我已核对无误，确认提交
			</div>
		</div>
	</div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
	import util from '../../util/util.js'
	import valid from '../../util/valid.js'
	import {nonce , timestamp} from '../../util/random.js'
  import {
    Field,
    Toast
  } from 'vant';
	export default {
    components:{Field},
		data() {
			return {
				form: {
					name: '',
					id:''
				},
				userInfo: {},
				cardidObj: {
					Status: -1
				}
			};
		},
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
		mounted() {
			this.getUserInfo()
			this.getCard()
		},
		methods: {
			async getUserInfo() {
				let res = await this.$http.post('/api/v1/UserInfo/Get',{type: 1},{custom: {url: '99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				if (data.code === 1){
          Toast.clear()
					this.userInfo = data.data
				}
			},
			async getCard() {
				let res = await this.$http.post('/api/v1//UserInfo/GetIdCert', {}, {custom: {url: '99',nonce:nonce(),timestamp:timestamp()}})
				let data = res.data
				if (data.code === 1) {
					if (data.data) {
						this.cardidObj = data.data
					}
				}
				// console.log(this.cardidObj)
			},
			gotoAuthentication() {
				this.cardidObj.Status = -1
			},
			// 输入框或者picker事件方法
			change(e) {
        this.form.name =e
			},
      change2(e){
        this.form.id=e
      },
			// 验证方法
			toVaild(tempList) {
				// valid(value,type)为引入的校验方法,49行可见
				return tempList.every((item) => {
					let isVal = this.form[item.paramName]
					if (!isVal || !valid(isVal, item.rules)) {
						Toast(item.failPass);
						return false;
					}
					return true;
				})
			},
			checkedItem(index) {
				this.isActive = index;
			},
			// 提交
			submit: util.throttle(async function() {
				// console.log('提交')
				let that = this
				let tempList = [{
					paramName: 'name', //data-name和form中的参数名
					failPass: '请输入正确的姓名', //失败的提示
					rules: 'name', //校验的规则名称
				}, {
					paramName: 'id', //data-name和form中的参数名
					failPass: '请输入正确的身份证', //失败的提示
					rules: 'cardid', //valid中的规则名称
				}]
				if (this.toVaild(tempList)) {
					let res = await that.$http.post('/api/v1/User/SetUserRealNameAuthentication', {
						trueName: this.form.name,
						idNumber: this.form.id
					}, {custom: {url: '99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
					let data = res.data
					// console.log(data)
					if (data.code === 1) {
						Toast('成功');
            this.$router.push({path:'/home/user',replace:true})
					} else {
						Toast(data.msg);
					}
				}
			}, 1000), //防重点击,1s内只可点击一次
		}
	}
</script>

<style lang="less" scoped>
  .img{
    
    margin-top: 2.9375rem;
    text-align: center;
    img{
      width: 12rem;
      height: 9.75rem;
    }
  }
	.plaClass {
		color: #dbdbdb;
	}

	.container999 {
		.title {
			height: 2.5rem;
			line-height: 2.5rem;
			padding-left: 4%;
			border-bottom: .0625rem solid #f5f5f5;
		}

		.buttonBox {
			width: 91%;
			margin: 0 auto;
			height: 2.625rem;
			border-radius: 2.625rem;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			bottom: 3.125rem;
			left: 0;
			right: 0;
			background-image: linear-gradient(to right,#FBB663,#FB6463);
		}

		.tri {
			width: 0;
			height: 0;
			border-left: .25rem solid transparent;
			border-right: .25rem solid transparent;
			right: .9375rem !important;
			border-top: .5rem solid #545151;
		}

		.line {
			margin-top: .9375rem;
			height: 3.125rem;
			width: 92%;
			margin: 0 auto;
			border-bottom: .0625rem solid #f5f5f5;
			display: flex;

			#myStyle {
				width: 2.8125rem;
				height: 1.25rem;
				line-height: 1.25rem;
				text-align: center;
				border: .0625rem solid #EEEEEE;
				border-radius: .625rem;
			}

			.active {
				background: #ffb609;
				color: #fff;
				border: none;
			}

			.lineRight {
				.tips {
					color: #9a9a9c;
					font-weight: bold;
				}

				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				position: relative;

			}

			.lineLeft {
				display: flex;
				width: 25%;
				align-items: center;
				height: 100%;
				font-weight: bold;
				color: #000000;
			}

			.input {
				padding-right: .625rem;
				height: 100%;
				width: 70%;
				text-align: left;
				font-size: .875rem;
				color: #545151;
			}

			.picker {
				height: 100%;
				justify-content: flex-start;
				display: flex;
				align-content: center;
				width: 15.625rem;
			}

			picker {
				height: 2.625rem;
				line-height: 2.625rem;
			}
		}

		width: 100vw;
		font-size: .875rem;
		min-height: 100vh;
		overflow: hidden;
		color: #6b8082;
		position: relative;
	}
</style>
