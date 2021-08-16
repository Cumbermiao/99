<template>
	<div class="noticeListBox">
		<div class="noticeListHead">
			
		</div>
		<div class="noticeList">
			<div class="noticeListItem">
				<div class="noticeListItemHead">
					<div class="title">
						关于升级
					</div>
					<div class="time">
						2011年
					</div>
				</div>
				<navigator url="./noticelistdetails" hover-class="none">
					<div class="noticeListItemCon">
						雏鹰农牧(002477)3月9日晚间公告，公司计划在未来十二个月内，对部分地区的猪舍及附属设施进行分批次…
					</div>
				</navigator>
				<div class="noticeListItemBottom">
					
				</div>
			</div>
			<div class="noticeListItem">
				<div class="noticeListItemHead">
					<div class="title">
						授权升级问题
					</div>
					<div class="time">
						2011年
					</div>
				</div>
				<div @click="toUrl('/noticelistdetails')">
					<div class="noticeListItemCon">
						雏鹰农牧(002477)3月9日晚间公告，公司计划在未来十二个月内，对部分地区的猪舍及附属设施进行分批次…
					</div>
				</div>
				<div class="noticeListItemBottom">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toUrl(url){
        this.$router.push(url)
      }
		}
	}
</script>

<style lang="less">
	.noticeListBox {
		.noticeListHead {
			width: 100%;
			height: 10px;
			background: #F4F8FB;
		}
		.noticeList {
			.noticeListItem {
				padding: 20px 20px 0 20px;
				.noticeListItemHead {
					display: flex;
					justify-content: space-between;
					.title {
						font-size: 16px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #191919;
					}
					.time {
						font-size: 12px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #AFC1CB;
					}
				}
				.noticeListItemCon {
					margin-top: 8px;
					font-size: 13px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #757575;
				}
				.noticeListItemBottom {
					height: 1px;
					background: #C9C9C9;
					margin-top: 10px;
				}
			}
		}
	}
</style>
