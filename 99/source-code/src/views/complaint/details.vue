<template>
	<div class="detailsBox">
		<div class="complaintListItem" >
			<div class="complaintListItemHead" style="border-bottom: 1px solid #CCCCCC;padding: 10px 0;">
				投诉说明
			</div>
			<div class="complaintListItemFoor" style="padding: 10px 0;">
				{{explain}}
			</div>
		</div>
		<div v-if="contentObj.ReplyStatus === 1" class="complaintListItem" >
			<div class="complaintListItemHead" style="border-bottom: 1px solid #CCCCCC;padding: 10px 0;">
				投诉反馈
			</div>
			<div class="" style="margin-top: 10px;">
				关于您的投诉反馈，内容如下：
			</div>
			<div class="complaintListItemFoor" style="padding: 10px 0;">
				{{contentObj.Reply}}
			</div>
			<div class="complaintListItemFoor" style="margin-top: 10px;">
				{{contentObj.ReplyTime}}
			</div>
		</div>
	</div>
</template>

<script>
	import {nonce , timestamp} from '../../util/random.js'
	export default {
		data() {
			return {
				explain: '',
				contentObj: {}
			}
		},
		created() {
      let option = this.$route.query
			this.getInfo(option.id)
		},
		methods:{
			async getInfo(id) {
				let res = await this.$http.post('/api/v1/Complaint/Get', {id:id}, {custom:{url:'99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				// console.log(data)
				if (data.code === 1) {
					this.explain = data.data.Explain
					this.contentObj = data.data
				}
			}
		}
	}
</script>

<style lang="less">
	.detailsBox {
		background: #F7F7F7;
		.complaintListItem {
			padding: 15px;
			background: #FFFFFF;
			margin-bottom: 10px;
		}
	}
</style>
