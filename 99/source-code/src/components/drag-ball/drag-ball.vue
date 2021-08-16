<template>
	<div class="holdon" >
<!-- 		<image  class="ball" :style="'left:'+(moveX == 0 & x>0? x:moveX)+'px;top:'+(moveY == 0 & y>0? y:moveY)+'px'"	 
				@touchstart="drag_start" @touchmove.prevent="drag_hmove" src="../../static/img/zhibo.png"  mode="aspectFill">
		</image> -->
		<img  class="ball" :style="'left:'+(moveX == 0 & x>0? x:moveX)+'upx;top:'+(moveY == 0 & y>0? y:moveY)+'upx'"
				@touchstart="drag_start" :src="imgSrc('zhibo.png')"  mode="aspectFill">
	</div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
	import {
		getUserId
	} from '../../util/token.js'
	import {
		nonce,
		timestamp
	} from '../../util/random.js'
	export default {
		props: {
			x: {
				type: Number,
				default:0
			},
			y: {
				type: Number,
				default:0
			},
			image:{
				type:String,
				default: ''
			}
		},
		data() {
			return {
				start:[0,0],
				moveY:0,
				moveX:0
			}
		},
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      }
    },
		methods: {
			async drag_start(event){
				this.start[0]= event.touches[0].clientX-event.target.offsetLeft;
				this.start[1]= event.touches[0].clientY-event.target.offsetTop;
				let res = await this.$http.post('/api/v1/Live/LivePush', {UserId: getUserId()}, {custom:{url:'shengyang',nonce:nonce(),timestamp:timestamp()}})
				let data = res.data
				if (data.code === 1) {
					var u = navigator.userAgent;
					var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
					var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
					if(isIOS) {
						window.webkit.messageHandlers.broadcastOpen.postMessage(JSON.stringify(data.data));
					} else if (isAndroid) {
            // eslint-disable-next-line
						nuandouAndroid.broadcastOpen(JSON.stringify(data.data));
					}
				}
			},
			drag_hmove(event){
				let	 tag 	 = event.touches;
				if (tag[0].clientX-this.start[0] <330 && tag[0].clientX-this.start[0] >10 && tag[0].clientY-this.start[1] < 700 && tag[0].clientY-this.start[1] > 150) {
					this.moveX	 = tag[0].clientX-this.start[0];
					this.moveY	 = tag[0].clientY-this.start[1];
				}
			}
		}}
</script>

<style lang="less">
	.holdon{
		width: 100%;
		height: 100%;
	}
	.ball{
		width: 70upx;height: 70upx;
		background:linear-gradient(to bottom, #F8F8FF,#87CEFA);
		border-radius: 50%;
		box-shadow: 0 0 15upx #87CEFA;
		color: #fff;
		font-size: 30upx;
		display: flex;justify-content: center;align-items: center;
		position: fixed !important;
		z-index: 1000000;
	}
</style>
