<template>
	<div class="complaintBox">
		<div class="complaintHead">
			<div class="uni-list">
        <!-- <radio
          v-model="value"
          :options="items">
        </radio> -->
				<radio-group v-model="value">
					<label class="uni-list-cell" v-for="item in items" :key="item.value">
						<div class="uni-list-cell-fl">
							<radio color="#FB6463" :name="item.value" :checked="item.value === value" >{{item.name}}</radio>
						</div>
					</label>
				</radio-group>
			</div>
		</div>
		<div class="complaintCon">
			<div class="complaintConHead">
				<div class="titleCon">
					投诉内容
				</div>
				<div class="numberTitle">
					{{textareaConNumber}}/500
				</div>
			</div>
			<div class="shuru">
        <field placeholder="请填写10字以上的问题描述以方便我们提供更好的帮助" type="textarea" rows="4" v-model="textareaCon"></field>
			</div>
		</div>
		<div class="becareful">
			<span>注:{{value}}</span>
			<span>若遇到订单丢失、充值未到账等订单问题，请将订单号填写进“投诉说明”</span>
		</div>
		<div class="complaintBtn" @click="subBtn">
			确定投诉
		</div>
	</div>
</template>

<script>
	import {nonce , timestamp} from '../../util/random.js'
  import { Toast, RadioGroup, Radio, Field } from 'vant';
	export default {
    components: { Radio, Field, RadioGroup },
		data() {
			return {
				items: [{
						value: '1',
						name: '商品问题'
					},
					{
						value: '2',
						name: '客服、售后、物流投诉',
					},
					{
						value: '3',
						name: '其它投诉'
					},
					{
						value: '4',
						name: '意见与建议'
					}
				],
				value: '3',
				textareaCon: '',
				textareaConNumber: 0
			}
		},
		watch:{
			textareaCon() {
        if(this.textareaCon.length>500){
          this.textareaCon = this.textareaCon.substring(0,500)
        }
				this.textareaConNumber  = this.textareaCon.length
			}
		},
    created(){
      this.$store.commit('navTop/setRightUrl',{
        rightUrl: '/complaint/complaintList'
      })
    },
		mounted() {
			this.textareaCon = ''
		},
		methods: {
			async subBtn() {
				if (this.textareaCon.length < 10) {
					Toast('请输入不少于10字的投诉内容');
					return
				}
				let res = await this.$http.post('/api/v1/Complaint/Add', {
					type:this.value,
					explain: this.textareaCon
				}, {custom:{url:'99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				if (data.code === 1) {
          Toast('成功');
          this.$router.push('/complaint/complaintList')
				}
			}
		}
	}
</script>

<style scoped lang="less">
	uni-page-body {
		height: 100%;
	}
	.complaintBox {
		height: 100vh;
		background: #f4f4f4;
		.complaintHead {
			background: #FFFFFF;
			.uni-list {
				padding: .625rem;
				.uni-list-cell {
					display: flex;
					align-items: center;
					padding: .625rem 0;
					border-bottom: .03125rem solid #C4C4C4;
					.uni-list-cell-fl {
						margin-right: .625rem;
					}
					.title {
						font-size: 1rem;
					}
				}
			}
		}
		.complaintCon {
			width: 100%;
			height: 15.3125rem;
			background: #FFFFFF;
			margin-top: .9375rem;
			.complaintConHead {
				display: flex;
				justify-content: space-between;
				padding: .625rem;
				border-bottom: .0625rem solid #eee;
				.numberTitle {
					color: #959595;
					font-size: .75rem;
				}
			}
			.shuru {
				padding: .625rem;
				textarea {
					width: 100%;
				}
			}
		}
		.becareful {
			padding: .9375rem .625rem;
      color: #d50606;
			text:nth-child(1) {
				margin-right: .3125rem;
			}
			text:nth-child(2) {
				font-size: .875rem;
			}
		}
		.complaintBtn {
      width: 88%;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      font-size: .875rem;
      color: #fff;
      border-radius: 3rem;
      margin: 0 auto;
      margin-top: 2.5rem;
      background-image: linear-gradient(to right,#FBB663,#FB6463);
		}
	}
</style>
