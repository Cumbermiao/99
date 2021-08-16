<template>
	<div class="groupWorkDetailsBox">
		<div class="groupWorkNunberBox">
			<div class="groupWorkNunber">
				<div class="title">
					当前有{{priceArea.JoinPeopleNumber}}人正在{{$text.groupText.groupBuying}}
				</div>
				<div class="imgBox">
					<img v-for="(item,index) in priceArea.JoinPeopleNumber" :key="index" src="http://web991-oss.jiujiupingou.com/img/001.png" mode="widthFix">
				</div>
				<div class="foorterTitle">
					差 <span>{{subtractionNumber}}</span>人成团
				</div>
			</div>
		</div>
		<div class="orderNumberBox">
			<div class="orderNumber">
				<span>今日已{{$text.groupText.singleGroupBuying}}<div style="display: inline-block;color: #FB6E63;">{{todayAreaOrderCount}}</div>单</span>
			</div>
		</div>
		<div class="orderNumberBox" style="margin-top: 10px;">
			<div class="orderNumber">
				<span>当前专区等待广告红利有<div style="display: inline-block;color: #FB6E63;">{{todayAreaOrderWinningCount}}</div>单</span>
			</div>
		</div>
		<div class="huodongBox" style="margin-top: 10px;padding-bottom: 100px;">
			<div class="huodong">
				<div style="margin-left: 2%;padding-top: 10px;margin-bottom: 10px;">活动规则</div>
				<div class="" style="display: flex;justify-content: center;">
					<img style="width: 340px;" :src="ManyPGRuleImage" mode="widthFix">
				</div>
			</div>
		</div>
		<div class="newPeopleBox" v-if="bulletFrame" @click="bulletFrame = false">
			<img style="width: 100%;" src="http://static.jiujiupingou.com/Static/img/ManyPGPurchase1.png" @click="getIntoPeople"  mode="widthFix">
		</div>
		<div class="btnPintuan" @click="immediatelyPintuan">
			立即{{$text.groupText.groupBuying}}
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import {nonce , timestamp} from '../../util/random.js'
	export default {
		data() {
			return {
				pirceTitle: null,
				priceArea: {},
				bulletFrame:false,
				ManyPGRuleImage: '',
				todayAreaOrderCount: 0,
				todayAreaOrderWinningCount: 0,
				priceAreaId: null,
				subtractionNumber:0
			}
		},
		created(){
      let option = this.$route.query
			this.pirceTitle = option.Price
      this.$store.commit('navTop/setTitle',{
        title: option.Price + '专区'
      })
      this.$store.commit('navTop/setRightUrl',{
        rightUrl: '/groupworkdetails/recordReturn?PriceAreaId=' + option.PriceAreaId
      })
			this.getList(option.PriceAreaId)
			this.priceAreaId = option.PriceAreaId
		},
		onBackPress() {
      this.$router.push('/home/team')
			return true
		},
		onNavigationBarButtonTap() {
      this.$router.push('/recordReturn?PriceAreaId=' + this.priceAreaId)
		},
		computed:{
			...mapGetters('common', ['teamObj'])
		},
		methods: {
			
			returnTeam() {
        this.$router.push('/home/team')
			},
			// 点击复购弹框
			getIntoPeople() {
				// 
        this.$router.push('/groupworkdetails/fugouList?priceAreaId=' +  this.priceAreaId + '&Price=' +this.pirceTitle)
			},
			immediatelyPintuan() {
        this.$router.push('/groupworkdetails/confirm?Price=' + this.pirceTitle + '&PriceAreaId=' + this.priceAreaId)
			},
			async getList(priceAreaId) {
				let res = await this.$http.post('/api/v1/ManyPG/ManyPGArea',{id:priceAreaId},{custom:{url:'99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				if (data.code === 1) {
					this.ManyPGRuleImage = data.data.PriceArea.ManyPGRuleImage
					this.todayAreaOrderCount = data.data.TodayAreaOrderCount
					this.todayAreaOrderWinningCount = data.data.TodayAreaOrderWinningCount
					this.priceArea = data.data.PriceArea
					this.subtractionNumber = Number(this.priceArea.ManyPGPeopleNumber) - Number(this.priceArea.JoinPeopleNumber)
					if (data.data.IsWinningTen === 1) {
						this.bulletFrame = true
					}
				}
			}
		}
	}
</script>

<style lang="less">
	.groupWorkDetailsBox {
    color: #555555;
		background: #F7F7F7;
		.newPeopleBox {
			z-index: 12000;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			transition: background-color .15s linear;
			background: rgba(38, 38, 38, 0.6);
			img {
        position: absolute;
				top: 50%;
				margin-top: -50%;
				z-index: 13000;
			}

		}
		.groupWorkNunberBox {
			.groupWorkNunber {
        padding: 16px 22px;
				min-height: 110px;
        background-image: linear-gradient(to right,#FBB663,#FB6463 );

				.title {
					color: #ffffff;
					font-size: 14px;
				}

				.imgBox {
					margin-top: 16px;
					// display: flex;
					// justify-content: space-around;
					img {
            display: inline-table;
						width: 36px;
						margin-right: 10px;
					}
				}

				.foorterTitle {
					margin-top: 16px;
					font-size: 14px;
					padding-bottom: 10px;
          color: #ffffff;
				}
			}
		}

		.orderNumberBox {

			.orderNumber {
        padding: 0 10px;
				height: 44px;
				line-height: 44px;
				background: #FFFFFF;
        font-size: 16px;
				text {
					margin-left: 5px;
				}
			}
		}

		.huodongBox {
			display: block;
			.huodong {
        padding: 0 10px;
				background: #FFFFFF;
				padding-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
				text {
					margin-left: 5px;
				}
			}
		}

		.btnPintuan {
			position: fixed;
			bottom: 20px;
			width: 90%;
			height: 48px;
			left: 5%;
			text-align: center;
			line-height: 48px;
			background: white;
			border-radius: 48px;
			color: #ffffff;
			font-size: 14px;
      background-image: linear-gradient(to left,#FB6463,#FBB663);
		}
	}
</style>