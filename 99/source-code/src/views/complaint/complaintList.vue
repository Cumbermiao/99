<template>
	<div class="complaintListBox">
		<div class="complaintListItem" v-for="(item,index) in complaintList" :key="index" @click="detais(item.ComplaintId)">
			<div class="complaintListItemHead" style="border-bottom: .0625rem solid #CCCCCC;padding: .625rem 0;">
				<span>
					<span v-if="item.Type === 1">商品问题</span>
					<span v-else-if="item.Type === 2">客服、售后、物流投诉</span>
					<span v-else-if="item.Type === 3">其它投诉</span>
					<span v-else>意见与建议</span>
				</span>
				<span style="color: red;margin-right: .625rem;" v-if="item.ReplyStatus !== 0">【已回复】</span>
			</div>
			<div class="complaintListItemFoor" style="padding: .625rem 0;">
				投诉说明:
        <div style="color: #999999;font-size: .875rem;">{{item.Explain}}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant'
	import {nonce , timestamp} from '../../util/random.js'
	export default {
		data(){
			return {
				complaintList: []
			}
		},
		created() {
			this.getList()
		},
		methods:{
			async getList() {
				let res = await this.$http.post('/api/v1/Complaint/GetList', {}, {custom: {url: '99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				if (data.code === 1) {
          Toast.clear()
					this.complaintList = data.data
				}
			},
			detais(id) {
        this.$router.push('/complaint/details?id=' + id)
			}
		}
	}
</script>

<style lang="less">
	.complaintListBox {
		background: #F7F7F7;
		.complaintListItem {
			padding: .9375rem;
			background: #FFFFFF;
			margin-bottom: .625rem;
		}
	}
  .complaintListItemFoor{
    word-wrap: break-word;
  }
</style>
