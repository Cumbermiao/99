<template>
	<div class="container999">
		<div class='line'>
			<div class='lineLeft'>收件人</div>
			<div class="lineRight">
				<!-- data-name为自定义参数名称,同时也会以此为参数名存入data的form中-->
				<input class="input" v-model="name" placeholder-class="plaClass" placeholder='请输入姓名'>
			</div>
		</div>
		<div class='line'>
			<div class='lineLeft'>手机号码</div>
			<div class="lineRight">
				<input class="input" v-model="phone" type="number" placeholder-class="plaClass"
					placeholder='请输入手机号'>
			</div>
		</div>
		<div class='line'>
			<div class='lineLeft'>地址</div>
			<div class="lineRight">
				<div v-if="lotusAddressData.provinceName === ''" class="" style="color: #dbdbdb;width: 100%;"
					@click="openPicker">
					请选择地址
				</div>
				<div v-else class="" @click="openPicker">
					{{lotusAddressData.provinceName}}, {{lotusAddressData.cityName}}, {{lotusAddressData.townName}}
				</div>
				<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
				<div class="tips tri" @click="openPicker"></div>
			</div>
		</div>
		<div class='line'>
			<div class='lineLeft'>详细地址</div>
			<div class="lineRight">
				<input class="input" @input="change" v-model="detailsAddress" maxlength="64" data-name="remarks"
					placeholder-class="plaClass" placeholder='请输入详细地址'>
			</div>
			<div style="color: #EEEEEE;" class="lineLeft">
				{{inputNumberAddasd}}/64
			</div>
		</div>
		<div class='line'>
			<div class='lineLeft'>标签</div>
			<div class="lineRight" v-for="(item,index) in defaultAddress" :key="index"
				@click="checkedItem(index,item)">
				<div id="myStyle" :class="{active:index==isActive}">
					{{item}}
				</div>
			</div>
		</div>
		<div class='line'>
			<div class='lineLeft' style="width: 30%;">设置为默认地址</div>
			<div class="lineRight" @click="defaultAddressRadioClick"
				:class="defaultAddressRadio ? 'activeAddress' : ''">

			</div>
		</div>
		<div class="buttonBox" @click="submit">
			保存地址
		</div>
	</div>
</template>

<script>
	import util from '../../util/util.js'
	import lotusAddress from "../../components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
	import {
		nonce,
		timestamp
	} from '../../util/random.js'
	var graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js");
  import {
    Toast
  } from 'vant';
	export default {
		components: {
			"lotus-address": lotusAddress
		},
		data() {
			return {
				defaultAddress: ['家', '公司', '学校', '其他'],
				defaultAddressTitle: '',
				isActive: null,
				lotusAddressData: {
					visible: false,
					provinceName: '',
					cityName: '',
					townName: '',
				},
				inputNumberAddasd: 0,
				// 详细地址
				detailsAddress: '',
				// 收件人
				name: '',
				phone: '',
				defaultAddressRadio: false,
				addressDio: false,
				addressId: undefined,
				pid: '',
				OrderId:'',
				ProductId:'',
				pirceTitle: '',
				priceAreaId: ''
			};
		},
		created() {
      let optin = this.$route.query
			this.OrderId = optin.OrderId
			this.pid = optin.pid
			this.pirceTitle = optin.pirceTitle
			this.priceAreaId = optin.priceAreaId
			if (optin.id) {
				this.addressDio = true
				this.addressId = optin.id
				this.getAddressEdit(optin.id)
			}
		},
		watch: {
			detailsAddress(newValue) {
				this.inputNumberAddasd = newValue.length
			}
		},
		methods: {
			defaultAddressRadioClick() {
				if (this.defaultAddressRadio) {
					this.defaultAddressRadio = false
				} else {
					this.defaultAddressRadio = true
				}
			},
			checkedItem(index, item) {
				this.isActive = index;
				this.defaultAddressTitle = item
			},
			change() {
				this.inputNumberAddasd = this.detailsAddress.length
			},
			// 编辑地址回显
			async getAddressEdit(id) {
				let baseUrl = '/api/v1/Address/Get'
				let res = await this.$http.post(baseUrl, {
					id: id
				}, {
					custom: {
						url: '99',
						nonce: nonce(),
						timestamp: timestamp(),
						loading:'加载'
					}
				})
				let data = res.data
				if (data.code === 1) {
          Toast.clear()
					this.name = data.data.Receiver
					this.phone = data.data.Mobile
					this.lotusAddressData.provinceName = data.data.Province;
					this.lotusAddressData.cityName = data.data.City;
					this.lotusAddressData.townName = data.data.County;
					this.detailsAddress = data.data.Detail
					this.defaultAddressRadio = data.data.IsDefault
					this.defaultAddressTitle = data.data.Tag
					for (let i = 0; i < this.defaultAddress.length; i++) {
						if (data.data.Tag === this.defaultAddress[i]) {
							this.isActive = i
						}
					}
				}
			},
			//打开picker
			openPicker() {
				this.lotusAddressData.visible = true;
				if (!this.addressDio) {
					this.lotusAddressData.provinceName = '';
					this.lotusAddressData.cityName = '';
					this.lotusAddressData.townName = '';
				}
			},
			//回传已选的省市区的值
			choseValue(res) {
				//res数据源包括已选省市区与省市区code
				// console.log(res);
				this.lotusAddressData.visible = res.visible; //visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if (res.isChose) {
					this.lotusAddressData.provinceName = res.province; //省
					this.lotusAddressData.cityName = res.city; //市
					this.lotusAddressData.townName = res.town; //区
					this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
			},
			submit: util.throttle(async function() {
				let that = this
				var rule = [{
					name: "phone",
					checkType: "phone",
					checkRule: "",
					errorMsg: "请输入正确的手机号"
				}];
				let checkRes = graceChecker.check({
					phone: that.phone
				}, rule)
				if (that.name === '') {
					Toast('请输入收件人姓名');
					return
				}
				if (!checkRes) {
					Toast('请输入手机号');
					return
				}
				if (that.lotusAddressData.provinceName === '') {
					Toast('请选择地址');
					return
				}
				if (that.detailsAddress === '') {
					Toast('请选择详细地址');
					return
				}
				let obj = {}
				let baserUrl = ''
				if (this.addressDio) {
					baserUrl = '/api/v1/Address/Edit'
					obj = {
						AddressId: this.addressId,
						Receiver: that.name,
						Mobile: that.phone,
						Province: that.lotusAddressData.provinceName,
						City: that.lotusAddressData.cityName,
						County: that.lotusAddressData.townName,
						Detail: that.detailsAddress,
						Tag: that.defaultAddressTitle,
						IsDefault: that.defaultAddressRadio
					}
				} else {
					baserUrl = '/api/v1/Address/Add'
					obj = {
						Receiver: that.name,
						Mobile: that.phone,
						Province: that.lotusAddressData.provinceName,
						City: that.lotusAddressData.cityName,
						County: that.lotusAddressData.townName,
						Detail: that.detailsAddress,
						Tag: that.defaultAddressTitle,
						IsDefault: that.defaultAddressRadio
					}
				}
				let res = await that.$http.post(baserUrl, obj, {
					custom: {
						url: '99',
						nonce: nonce(),
						timestamp: timestamp(),
						loading:'加载'
					}
				})
				let data = res.data
				// console.log(data)
				if (data.code === 1) {
					Toast('添加成功');
          this.$router.push('/groupworkdetails/returnXuanzedizhi?pid=' + this.pid)
				}
			}, 1000)
		}
	}
</script>

<style lang="less" scoped>
	.plaClass {
		color: #dbdbdb;
	}

	.container999 {
		.title {
			height: 2.5rem;
			line-height: 2.5rem;
			padding-left: 4%;
			border-bottom: .0625rem solid #f5f5f5;
		}

		.buttonBox {
			width: 91%;
			margin: 0 auto;
			height: 2.625rem;
			border-radius: 2.625rem;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			bottom: 3.125rem;
			left: 0;
			right: 0;
			background-color: #4a8be9;
		}

		.tri {
			width: 0;
			height: 0;
			border-left: .25rem solid transparent;
			border-right: .25rem solid transparent;
			right: .9375rem !important;
			border-top: .5rem solid #545151;
		}

		.line {
			margin-top: .9375rem;
			height: 3.125rem;
			width: 92%;
			margin: 0 auto;
			border-bottom: .0625rem solid #f5f5f5;
			display: flex;

			#myStyle {
				width: 2.8125rem;
				height: 1.25rem;
				line-height: 1.25rem;
				text-align: center;
				border: .0625rem solid #EEEEEE;
				border-radius: .625rem;
			}

			.active {
				background: #ffb609;
				color: #fff;
				border: none;
			}

			.lineRight {
				.tips {
					color: #9a9a9c;
					font-weight: bold;
				}

				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				position: relative;

			}

			.activeAddress {
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAYAAACrUDmFAAAAAXNSR0IArs4c6QAABTFJREFUaAXtmW9MHEUUwN8b7oAColQId2ia2qb9YEwa0g/6ocT7ywXi1Q8CFdMEohaDaKNo1CYmEhP/pzFREmttLEbTpsG2SKVnODjQEGNSrYlJrY2mxkS55U/BPz0L3O2ObzCL273d7V054a7pfZmZ92bevt/M2zdvAeEa+v0RCKyNyQvdyHmQI56zlZW78Frhmwi4tygyHOOcb1CZbMxezdRBLreS39Msy/ClFg4Az1XYbGdtuQzGGxvzpJkLrymK8pSWAxF+5vkYwJOh+ZwN0T+DwfLY3xePcOAeHdxP+fY17ptDoV+FPCcBx2vdW0GBY8D5Oi2cCEs7s3kqwuFxVZ5z72DU62oBmY/p4RDw+7xidrcWLqdOkLe12aXzP+6lRPK4ejpqS3DfQX6hzxkKTakytc2JEJ3Y7q2UY3IvOV2jOr7UInxbwvP8pcPDF5Zkmk7Wh6hU675TjinfkM9JcJQtTxUVFHvN4ARnVgPS/fawosAXAPwWzaEsdgnuqwKw+W8aGJjV67TjrAxRut/yo7PT3ZRIdmmdXeojjNmLSusr+vv/WpKZdLIOcMrvr0rw+FHO4S4jn+nkRpHl3+MYHIwZ6fWyrArRSZ9vW0JJnDaDo1t7yFFWUZ8qnIDNGsCo39Uh80SEKpNK/SmIMZ3cZ85b1wext/eSkd5MtuohyltbC6XfftnHFd5i6iTCpw77mgYMhebN5pjJVxVwxudbNweyKLm2mjlI8uPOjZt34P79cYs5pqpVC9FowOueh8TXVnCI2OuscTVdLZygXgQUZdBEnWcj7+paEeBxr7sTZCVMyaTCdOsRDznKypuxqythOicFBVLmqpYhMUAPc9KOnWeI7ZXhyGAKa9OewoPBouiliwfo1JqtFtN70+OocT1EcIrVvFR0OO5znQYO1drJBHqwsOTGzrK+vt+18uX0pdra2xQ5fpyqki1XsHOAwvKRTMCJ5xCgO0Y7WqR/KKXlKFXp7Y6hkU/0unTHEz53QAY4RM9Za7WWNvYdRzjSQS23mpeOjlE4HDFaIEJW4byPvr8OR+vqzN8Vo8UameTzPEdxdvJKcMDwLefQyKOZhBNuIK+rK5Dic+KvUfUav/TdacbYbtrdw3qF2XiysbFEnp3uIbv3mc1R5Qhsr3M48rQ6zmS7eA+K4laane4lZ7ZbGafd7behrV3/1axfM+n3b5KVRB9VJbfrdUljhFerhkb3JMkzJFi8Fqj8WXBs2NRAAEet7IoNiCvxM5LP/aDZvGitt4FKrlOpwNE7/uL/CSd8vKySoXvQJo19/hGB7DADUOXk3Blk/D3k+IOCMEfZ8Q56b++njLxNnWPZIjxPcC9ZzsmA8jJAYU/8rXFiZqqHEsPODNg3NIEMn3WGR143VGZYmFS5ULjKlTWuFgrXgxl+1r/mEDtXCk48MOkEVSgKU4z6PfsovbepsuW09CAOyHY7hyLdy7GT7lpTQGFIQNI99jYljI50DWvnCzjOoL0qPPquVr4SfUtA1QEq596k/X9CHafTUqhTDoJdVBG9n866TM1NegeNDFO2e5IcfcNIZyWjNTL9n651teCEbykBiolURj3DkKWc1unUEsjYzqpw5EOxfrV+KYWo1rmoz/UC3XddWpm+T0bjkJf3gHNw+GO9bqXHaQMKByWve48C/GVDZxEXKCyaMvEVYmg/TWHKIaq16xgeeQUZPEYyqmD++9En1hRwdm+2wAnPruoEVaQpr3dzHHkTXQLrqWw7W1x4wwelJ05Mq/rr7fUdWP4O/AP2Ss0GlCgUhgAAAABJRU5ErkJggg==) no-repeat right center;
				background-size: .875rem auto;
			}

			.lineLeft {
				display: flex;
				width: 20%;
				align-items: center;
				height: 100%;
				font-weight: bold;
				color: #000000;
			}

			.input {
				padding-right: .625rem;
				height: 100%;
				width: 70%;
				text-align: left;
				font-size: .875rem;
				color: #545151;
			}

			.picker {
				height: 100%;
				justify-content: flex-start;
				display: flex;
				align-content: center;
				width: 15.625rem;
			}

			picker {
				height: 2.625rem;
				line-height: 2.625rem;
			}
		}

		width: 100vw;
		font-size: .875rem;
		// min-height: 100vh;
		overflow: hidden;
		color: #6b8082;
		position: relative;
	}
</style>
