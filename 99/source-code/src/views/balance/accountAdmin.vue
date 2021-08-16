<template>
	<div class="accountAdminBox">
		<div class="accountAdminItem" v-for="(item,index) in numberList" :key="index">
			<div class="accountAdminItemFl">
				<div class="accountAdminItemFlImg">
					<img style="width: 35px;height: 35px;vertical-align: middle;" :src="item.Logo" mode="">
					<div class="" style="margin-left: 10px;">
						<div class="" style="font-size: 14px;">
							姓名：{{item.Name}}
						</div>
						<div class="" style="font-size: 14px;">
							账户：{{item.Account}}
						</div>
					</div>
				</div>
			</div>
			<div class="accountAdminItemRl" @click="del(item.Id)">
				<div class="">
					删除
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {nonce , timestamp} from '../../util/random.js'
  import {
    Toast
  } from 'vant';
	export default {
		data() {
			return {
				numberList: []
			}
		},
		mounted() {
			this.getListNumber()
      this.$store.commit('navTop/setRightUrl',{
        rightUrl: '/balance/newAccount'
      })
		},
		methods: {
			async getListNumber() {
				let res = await this.$http.post('/api/v1/Drawing/GetCardList', {},{custom: {url: '99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				// console.log(data)
				if (data.code === 1) {
          Toast.clear()
					this.numberList = data.data
				}
			},
			async del(id) {
				let res = await this.$http.post('/api/v1/Drawing/DeleteCard', {id:id}, {custom: {url: '99',nonce:nonce(),timestamp:timestamp()}})
				let data = res.data
				if (data.code === 1) {
					Toast('删除成功');
					this.getListNumber()
				}
			}
		}
	}
</script>

<style lang="less">
	.accountAdminBox {
    height: calc(100vh - 45px);
    padding-top: 10px;
		background-color: #F7F7F7;
    .accountAdminItem {
			margin-bottom: 10px;
			padding: 20px;
			display: flex;
			justify-content: space-between;
			background: #fff;
			align-items: center;
			.accountAdminItemFlImg {
				display: flex;
			}
			.accountAdminItemRl{
				width: 50px;
				height: 24px;
				line-height: 24px;
				text-align: center;
				background-image: linear-gradient(to right, #FB6463,#FBa663);
				border-radius: 12px;
        font-size: 12px;
				color: #FFFFFF;
			}
		}
	}
</style>
