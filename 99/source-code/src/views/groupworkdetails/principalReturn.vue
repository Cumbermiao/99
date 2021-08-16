<template>
	<div class="principalReturnBox">
		<div class="" style="display: flex;justify-content: center;padding-top: 6.25rem;">
			<img style="width: 9.3125rem;" src="https://99pg.oss-cn-hangzhou.aliyuncs.com/img/zhanweifu.png" mode="widthFix">
		</div>
		<div class="" style="text-align: center;font-size: 1rem;font-weight: 500;color: #333333;margin-top: 1.25rem;">
			您与{{winDate}}，已满足满返条件！
		</div>
		<div class="" style="color: #FF4040;text-align: center;font-size: 1rem;margin-top: .6875rem;">
			本金合计：{{totalReturnAmount}}元
		</div>
		<div class="" style="position: fixed;bottom: 1.5625rem;left: 50%;width: 24.25rem;margin-left: -10.5625rem;">
			<div class="" style="display: flex;justify-content: center;margin-top: .625rem;">
				<div @click="originalRoad" class="" style="width: 24.25rem;height: 3rem;line-height: 3rem;color: #FF4040;font-weight: 500;background: #FFFFFF;border-radius: .625rem;text-align: center;">
					原路返还
				</div>
			</div>
			<div class="" style="display: flex;justify-content: center;margin-top: .625rem;">
				<div @click="equivalence" class="" style="width: 24.25rem;height: 3rem;line-height: 3rem;color: #FF4040;font-weight: 500;background: #FFFFFF;border-radius: .625rem;text-align: center;">
					等价商品兑换
				</div>
			</div>
			<div class="" style="display: flex;justify-content: center;margin-top: .625rem;">
				<div @click="continueGroupBuying" class="" style="width: 24.25rem;height: 3rem;line-height: 3rem;color: #FFFFFF;font-weight: 500;background-image: linear-gradient(to right,#FBB663,#FB6463);border-radius: .625rem;text-align: center;">
					继续团购
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {nonce , timestamp} from '../../util/random.js'
  import { Toast } from 'vant';

	export default {
		data() {
			return {
				PriceAreaId: null,
				Price: null,
				winDate: null,
				totalReturnAmount: null,
				canReturn: ''
			}
		},
		created() {
      let option = this.$route.query
			this.PriceAreaId = option.PriceAreaId
			this.Price = option.Price
			this.getInfo(option.PriceAreaId)
		},
		onBackPress() {
      this.$router.push('/groupworkdetails?Price=' + this.Price + '&PriceAreaId=' + this.PriceAreaId)
			return true
		},
		methods: {
			async getInfo(priceAreaId) {
				let res = await this.$http.post('/api/v1/ManyPG/ManyPGArea',{id:priceAreaId},{custom:{url:'99',nonce:nonce(),timestamp:timestamp(),loading:'加载'}})
				let data = res.data
				console.log(data)
				if (data.code === 1) {
					this.winDate = data.data.winDate.split(' ')[0]
					this.canReturn = data.data.canReturn
					this.totalReturnAmount = data.data.totalReturnAmount
				}
			},
			originalRoad() {
				if (this.canReturn === 0) {
					Toast('当前不允许操作，请等待系统自动结算。');
					return
				}
        this.$router.push('/groupworkdetails/newWithdrawal?Price=' + this.Price + '&PriceAreaId=' + this.PriceAreaId)
			},
			continueGroupBuying() {
        this.$router.push('/groupworkdetails?Price=' + this.Price + '&PriceAreaId=' + this.PriceAreaId)
			},
			equivalence() {
				if (this.canReturn === 0) {
					Toast('当前不允许操作，请等待系统自动结算。');
					return
				}
        this.$router.push('/groupworkdetails/commoditypreviewNew?PriceAreaId=' + this.PriceAreaId + '&Price=' + this.Price)
			}
		}
	}
</script>

<style lang="less">
	.principalReturnBox {
		height: 100%;
		background: #F7F7F7;
	}
</style>
