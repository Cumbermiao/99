<template>
	<view class="volet_closBox" style="z-index: 10000;">
		<view class="volet_clos" :class="[show?classname:'']">
			<view :style="{height: halfHeight + '%'}" style="overflow: auto;">
				<slot />
			</view>
		</view>
		<view @click="hide" :class="[show?'volet_closBoxBack':'']">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				halfHeight: 100
			};
		},
		methods: {
			open() {
				this.show = true;
			},
			hide(){
				this.show=!this.show
			}
		},
		props: ["classname"],
	}
</script>
<style>
	.volet_closBoxBack {
		height: 812px;
		transition: height 1s ease-out, visibility 0.2s ease-in;
		position: fixed;
		top: 0;
		width: 100%;
		background: #000000;
		opacity: 0.5;
		z-index: 15;
	}
	.volet_clos {
		transition: height 0.2s ease-out, opacity 0.6s ease-in, visibility 0.2s ease-in;
		bottom: 0;
		position: fixed;
		height: 0;
		width: 100%;
		background-color: white;
		z-index: 99;
	}
	.active300 {
		opacity: 1;
		visibility: 1;
		height: 30%;
		z-index: 9999;
	}
	.active500 {
		opacity: 1;
		visibility: 1;
		height: 60%;
		z-index: 9999;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}
	.active {
		opacity: 1;
		visibility: 1;
		height: 100%;
		z-index: 9999;
	}
</style>

