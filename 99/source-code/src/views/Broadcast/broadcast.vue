<template>
	<div class="broadcastBox">
		<div class="" v-if="broadcastState" style="height: 100%;">
			<img style="width: 100%;height: 100%;" :src="imgSrc('qidai.png')" mode="">
			<div class="shopBoxTitle">
				敬请期待
			</div>
		</div>
		<div class="" v-else>
			<div class="broadcastHead">

			</div>
			<div class="broadcastTabs">
				<div class="broadcastTabsItem" :class="activeTabs === index? 'active' : ''"
					@click="broadcastTabsItem(index)" v-for="(item,index) in broadcastTabs" :key="index">{{item}}</div>
			</div>
			<div class="broadcastList">
				<div class="broadcastListItem" v-for="(item,index) in list" :key="index" @click="broadcastRoom(item)">
					<div class="broadcastListItemHead">
						<img :src="item.screenshot" mode="">
						<!-- <div class="number" :style="{backgroundImage:`url(${indexBackgroundImage})`,backgroundSize: 'cover'}" >
							<text>2123人观看</text>
						</div> -->
					</div>
					<div class="" style="font-size: 28upx;margin-left: 18upx;color: #222222;font-weight: 500;">
						{{item.live_title}}
					</div>
					<div class="" style="display: flex;align-items: center;margin-left: 18upx;margin-top: 10px;">
						<img
							style="width: 48upx; border-radius: 50%; vertical-align: middle;margin-right: 14upx;height: 48upx;"
							:src="item.avatar" mode="">
						<text style="font-size: 24upx;font-weight: 400;color: #404040;">{{item.nick_name}}</text>
					</div>
				</div>
			</div>
		</div>
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
		data() {
			return {
				// broadcastTabs: ['全部','供应商带货','线上讲课','直播带货'],
				broadcastTabs: ['全部'],
				activeTabs: 0,
				pageIndex: 1,
				pageSize: 10,
				list: [],
				// 是否展示直播列表 true 不展示  false  展示
				broadcastState: true
			}
		},
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
		mounted() {
			this.$store.commit('common/setToken',true)
			if (this.broadcastState) {
				// this.getList()
			}
		},
		methods: {
			broadcastTabsItem(index) {
				this.activeTabs = index
			},
			async getList() {
				let res = await this.$http.post('/api/v1/Live/RoomList', {
					page: this.pageIndex,
					pagenum: this.pageSize,
					UserId: getUserId()
				}, {
					custom: {
						url: 'shengyang',
						nonce: nonce(),
						timestamp: timestamp()
					}
				})
				let data = res.data
				if (data.code === 1) {
					this.list = data.data
				}
			},
			async broadcastRoom(item) {
				let res = await this.$http.post('/api/v1/Live/RoomInfo', {
					UserId: getUserId(),
					id: item.id,
					live_type: item.live_type
				}, {
					custom: {
						url: 'shengyang',
						nonce: nonce(),
						timestamp: timestamp()
					}
				})
				let data = res.data
				if (data.code === 1) {
					var u = navigator.userAgent;
					var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
					var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
					if (isIOS) {
						window.webkit.messageHandlers.broadcastRoomItem.postMessage(JSON.stringify(data.data));
					} else if (isAndroid) {
            // eslint-disable-next-line
						nuandouAndroid.broadcastRoomItem(JSON.stringify(data.data));
					}
				}

			}
		}
	}
</script>

<style lang="less">
	.broadcastBox {
		width: 100%;
		height: 100%;

		.shopBoxTitle {
			position: absolute;
			height: 64px;
			font-size: 50px;
			font-family: HelloFont-WenYiHei, HelloFont;
			font-weight: normal;
			color: #FFFFFF;
			line-height: 63px;
			top: 171px;
			left: 50%;
			margin-left: -100px;

		}

		.broadcastHead {
			height: 10px;
			background: #F7F7F7;
		}

		.broadcastTabs {
			padding: 15px;
			display: flex;

			.broadcastTabsItem {
				margin-right: 20px;
				font-size: 14px;
				color: #808080;
			}

			.active {
				color: #FE6843;
			}
		}

		.broadcastList {
			padding: 25upx;

			.broadcastListItem {
				width: 330upx;
				float: left;
				margin-right: 18upx;
				box-shadow: 0px 1px 2px 0px rgba(189, 189, 189, 0.5);
				border-radius: 0px 0px 4px 4px;
				padding-bottom: 10px;

				.broadcastListItemHead {
					position: relative;

					img {
						width: 100%;
						height: 212px;
					}

					.number {
						position: absolute;
						width: 184upx;
						height: 36upx;
						top: 20upx;
						left: 12upx;
						line-height: 36upx;
						text-align: center;

						text {
							margin-left: 20upx;
							font-size: 22upx;
							color: #FFFFFF;
						}
					}
				}
			}
		}
	}
</style>
