<template>
	<div class="searchDetailsBox">
		<div class="searchDetailsHead">
			
		</div>
		<div class="searchDetailsInput" @tap="returnSearch">
			<div class="searchInput">
				<span>小苏打香水洗衣液</span>
				<img :src="imgSrc('serach.png')" mode="widthFix">
			</div>
			<div class="gardenImg">
				取消
			</div>
		</div>
		<div class="searchDetailsList">
			<div class="searchItem">
				<div class="searchItemFl">
					<img style="" :src="imgSrc('advertisement.png')" mode="">
				</div>
				<div class="searchItemRl">
					<div class="searchItemRlHead">
						奇云纸巾64份抑菌不掉渣来···
					</div>
					<div class="deduction">
						<span>￥79</span>
						<span>使用两张能量卷抵扣</span>
					</div>
					<div class="price">
						<span>￥99</span>
						<span>￥199</span>
					</div>
					<div class="sold">
						已售888件
					</div>
				</div>
			</div>
			<div class="searchItem">
				<div class="searchItemFl">
					<img style="" :src="imgSrc('advertisement.png')" mode="">
				</div>
				<div class="searchItemRl">
					<div class="searchItemRlHead">
						奇云纸巾64份抑菌不掉渣来···
					</div>
					<div class="deduction">
						<span>￥79</span>
						<span>使用两张能量卷抵扣</span>
					</div>
					<div class="price">
						<span>￥99</span>
						<span>￥199</span>
					</div>
					<div class="sold">
						已售888件
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
	export default { 
		data() {
			return {}
		},
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
    },
		methods:{
			returnSearch() {
        this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less">
	.searchDetailsBox {
		background: #F2F2F2;
		.searchDetailsHead {
			height: 1.875rem;
			background: #FFFFFF;
		}
		.searchDetailsInput {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: .625rem;
			padding: 0 .9375rem;
			.gardenImg {
				color: #CCCCCC;
				font-size: .875rem;
			}
			.searchInput {
				width: 18.75rem;
				height: 1.875rem;
				line-height: 1.875rem;
				background-color: #FFFFFF;
				border-radius: 1.875rem;
				position: relative;
				text {
					margin-left: .9375rem;
					font-size: .875rem;
					color: #C4C4C4;
				}
				image {
					width: 1.5625rem;
					// height: 50upx;
					position: absolute;
					right: .625rem;
					top: 50%;
					margin-top: -0.78125rem;
				}
			}
		}
		.searchDetailsList {
			margin: .625rem .9375rem 0 .9375rem;
			padding:.9375rem .9375rem .3125rem .9375rem;
			background: #FFFFFF;
			border-radius: .625rem;
			.searchItem {
				display: flex;
				margin-bottom: 1.5625rem;
				.searchItemFl {
					border-radius: .625rem;
					margin-right: .4375rem;
					image {
						width: 5.625rem;
						height: 5.625rem;
						border-radius: .625rem;
					}
				}
				.searchItemRl {
					.searchItemRlHead {
						font-size: 1rem;
						font-family: 'Arial Normal', 'Arial';
						font-weight: 400;
						font-style: normal;
					}
					.deduction {
						margin-top: .3125rem;
						text:nth-child(1) {
							font-size: 1rem;
							color: #FF0000;
							margin-right: .5rem;
						}
						text:nth-child(2) {
							font-size: .75rem;
							color: rgba(0, 0, 0, 0.258823529411765);
						}
					}
					.price {
						margin-top: .3125rem;
						text:nth-child(1) {
							font-size: 1rem;
							margin-right: .5rem;
						}
						text:nth-child(2) {
							font-size: .75rem;
							color: rgba(0, 0, 0, 0.258823529411765);
							text-decoration:line-through;
						}
					}
					.sold {
						margin-top: .3125rem;
						font-size: .625rem;
						color: rgba(0, 0, 0, 0.258823529411765);
					}
				}
			}
		}
	}
</style>
