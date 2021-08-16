<template>
	<div style="height: 100%;">
		<div class="" style="width: 100%;height: 100%;">
			<img style="width: 100%;height: 100%;" src="https://99pg.oss-cn-hangzhou.aliyuncs.com/img/bg01.png"
				mode="">
			<span class="btnTextGengduo" style="" @click="seeMore">查看更多</span>
		</div>
		<div class=""
			v-if="is_weixin()"
			style="position: fixed;z-index: 10;left: 0;top: 0;bottom: 0;width: 100%;height: 100%; background: rgba(0, 0, 0, 0.8);text-align: center;">
			<img style="margin-top: 10%;" src="https://99pg.oss-cn-hangzhou.aliyuncs.com/img/tip.png" mode="widthFix">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				invite: null
			}
		},
		created() {
      let option = this.$route.query
			if (option.invite){
				this.invite = option.invite
			}
		},
		methods: {
			is_weixin() {
				var ua = navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger/i) == "micromessenger") {
					return true;
				} else {
					return false;
				}
			},
			seeMore() {
        this.$router.push('/scanCode/registerCode?invite=' + this.invite)
			}
		}
	}
</script>

<style scoped>
	.btnTextGengduo {
		display: inline-block;
		position: absolute;
		z-index: 2;
		bottom: 66px;
		left: 50%;
		width: 200px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #FFFFFF;
		background: #f4bd36;
		border-radius: 70px;
		margin-left: -100px;
		font-size: 20px;
	}
</style>
