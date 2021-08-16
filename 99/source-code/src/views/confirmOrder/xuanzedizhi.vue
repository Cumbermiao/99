<template>
  <div class="container">
    <div class="address-list">
      <div class="a-address" :class="(addressId == item.AddressId || (!addressId && item.IsDefault)) ? 'active1' : ''"
        v-for="(item,index) in addressList" :key="index">
        <div class="name">
          <div>{{item.Receiver}}</div>
          <div class="defa" v-if="item.IsDefault">默认</div>
        </div>
        <div class="left-text" :class="item.IsDefault ? 'active' : ''" @click="xuanze(item)">
          <div class="name-tel">
            {{item.Mobile}}
          </div>
          <div v-if="item.Tag && item.Tag!='null'" class="tagBox">
            {{item.Tag}}
          </div>
          <div class="address-box">
            <span v-if="item.Province  !== 'null'">{{item.Province}}</span>
            <span v-if="item.City !== 'null'">{{item.City}}</span>
            <span v-if="item.County !== 'null'">{{item.County}}</span>
            <span v-if="item.Detail  !== 'null'">{{item.Detail}}</span>
          </div>
        </div>
        <div class="right-del" @click="delAddess(item.AddressId)"></div><strong></strong>
        <div class="right-edit" @click="editAddess(item.AddressId)"></div>
      </div>
    </div>
    <!-- 	<div class="bottom-box">
			<div class="add-btn" @click="addAddess">新增收货地址</div>
		</div> -->

  </div>
</template>

<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    mapActions
  } from 'vuex';
  import {
    Toast,
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        activeIndex: 0,
        addressList: [],
        pid: null
      }
    },
    onNavigationBarButtonTap() {
      this.$route.push('/confirmOrder/address?pid=' + this.pid)
    },
    created() {
      let option = this.$route.query
      this.pid = option.pid
      this.addressId = option.addressId
      this.$store.commit('navTop/setRightUrl',{
        rightUrl: '/confirmOrder/address?pid=' + option.pid
      })
    },
    mounted() {
      this.getAddress()
    },
    methods: {
      ...mapActions('address', ['setAddressIs', 'setAddressXuanze']),
      xuanze(item) {
        this.setAddressIs(item)
        this.setAddressXuanze(true)
        // uni.navigateTo({
        // 	url:'./confirmOrder?pid=' + this.pid
        // })
        this.$router.go(-1)
      },
      async getAddress() {
        let res = await this.$http.post('/api/v1/address/getlist', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            loading: '加载'
          }
        })
        let data = res.data
        if (data.code === 1) {
          Toast.clear()
          this.addressList = data.data
        }
      },
      selectTap() {
        // this.activeIndex = index
        // for (let i= 0; i < this.addressList.length; i++) {
        // 	if (this.addressList[i].AddressId === AddressId) {
        // 		this.addressList[i].IsDefault = true
        // 	} else {
        // 		this.addressList[i].IsDefault = false
        // 	}
        // }
      },
      editAddess(id) {
        this.$router.push('/confirmOrder/address?id=' + id + '&pid=' + this.pid)
      },
      // 删除地址
      delAddess(id) {
        Dialog.confirm({
          title: '提示',
          message: '是否删除该地址',
          confirmButtonText: '确定删除'
        }).then(async () => {
          let baseUrl = '/api/v1/Address/Delete'
          let res = await this.$http.post(baseUrl, {
            id: id
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp()
            }
          })
          let data = res.data
          // console.log(data)
          if (data.code === 1) {
            if(this.addressId == id){
              this.setAddressIs({})
              this.setAddressXuanze(true)
            }
            Toast('删除成功');
            this.getAddress()
          }
        })
      }
    }
  }
</script>

<style lang="less">
  .container {
    background-color: #F2f2f2;
  }

  .address-list {
    width: 100%;
    background-color: #fff;
    /* margin-top: 20upx; */
    padding-bottom: 3.125rem;
  }

  .address-list .a-address {
    position: relative;
    width: 100%;
    padding-left: .9375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .9375rem 0;
    border-bottom: .03125rem solid #eee;
  }

  .a-address .name {
    padding: 0 .625rem;
    width: 6.25rem;
    text-align: center;
    font-size: .875rem;

    .defa {
      display: inline-block;
      font-size: .75rem;
      padding: 0 .3125rem;
      border-radius: .3125rem;
      border: .0625rem solid #FB7363;
      margin-top: .3125rem;
      color: #FB7363;
    }
  }

  .a-address .left-text {
    width: 17.1875rem;
    box-sizing: border-box;
    padding-left: .875rem;
  }

  .a-address.active1 {
    background-color: #FCF5F5;
  }

  .a-address.active::before {
    position: absolute;
    left: 0;
    content: '';
    width: .1875rem;
    height: 100%;
    background-image: linear-gradient(#FB6463, #FBB663);
  }

  .a-address .left-text .name-tel {
    margin-bottom: .4375rem;
  }

  .a-address .left-text .address-box {
    display: inline-block;
    width: 9.375rem;
    font-size: .75rem;
    color: #888888;
    line-height: .75rem;
    white-space: nowrap;
    /* 规定文本是否折行 */
    overflow: hidden;
    /* 规定超出内容宽度的元素隐藏 */
    text-overflow: ellipsis;
  }

  .tagBox {
    display: inline-block;
    padding: .125rem .25rem;
    border-radius: .3125rem;
    margin-right: .5rem;
    text-align: center;
    background-image: linear-gradient(to right, #63D5FB, #63B0FB);
    color: #FFFFFF;
    font-size: .625rem;
  }

  .a-address .right-edit {
    width: 1.125rem;
    height: 1.125rem;
    margin-top: .125rem;
    margin-right: 1.875rem;
    box-sizing: border-box;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAABPhJREFUeAHtnE1oE0EUx80HQW39SCvYgBVBqhUU+l1FD1ZFPIgnQdDiRfGmh168eBDR4k1B8OLHSVTQg6gnUQ+CaNLWQGu8lSqtrZQKgk1jkzb1/zSzvKyTIO0mM7uZgc28eftm571fZnaTzGR8y4qkRCJRPTMzswsmG3HULiwsBIqYO3bK5/PNoa1oR0fHG8cuWuBCIyMjyycnJy+hzW6YIPPdr6uru1BfX5+iKj57PTjm6+vrOwz9WchdyIN2mzKWL3R2dl4pVXujo6MrJiYmniHO/bwNQLqFN+cM6fIA9ff3b85ms7dRYS+voFCehqNr4HDWaR8KwaF20F4mHA6vamhomLV6RzQabZufn3+B82GnnVnC9RaWULdg1WJwcpWCYBGC/BcQ4GxB4RWO1TkDLTK8k71O957/gEOxv25sbPxJQhDDyR+Lxe5ALgRnEE4OwG7Y7/enqVIZ0hzaiLW3t791si2CMz4+/hzX3FfkumPBYPCUOB/EDfkgCnuEQuSAMoSjB06+FDo356LnIIaicAKBwN6WlpYvIlbqQSdFQeQAk4C+CzfI70Ln5lzAQUx5TytbTGMEp62tbZjrg4DRiopctwxD6RQMKx4OQfEDDn0ItBKAzba2tsYshYuFpfQcEbYfwnJRyOUpQMrvUjYDNxSdgENxEiDPJafgEBjPAXISjucAOQ3HU4BKAcczgEoFxxOASgnH9YBKDcfVgMoBx7WAygWHAFk/mFHBDYng/M9PFrIvnouJz1UfFMsNh4C6BpAKOK4BpAqOKwCphKM9INVwtAakAxxtAekCR0tAOsHRDpBucLQCpCMcbQDpCocAKf8upgOcoaGh9VgHdRrzgTSRehcTpqMEh5LSrxq0eKmcXzz/hpz/Go/H1wJOP7SXsfTnIvI41irUCSulgKampsihfcIZSS6dDpbYLVqVyWRosdgGcQH0oFrMCx4VZaWA4Mxx4YgkLzmcXJu19rbRk9YJnVJAcKLQDG654AgOBXOlgNCD7kk80wYO+aYUUE1NzSU8OW7Aj18Y97QO8QV+CdxtX4JCjqpKSh/ztEgSgZ9DT+oZGBgIAcyMKhCF2lUKSDiF3kNL7ujQLikdYtrRkDhkAEmgcJUBxGlIZANIAoWrDCBOQyIbQBIoXGUAcRoS2QCSQOEqA4jTkMgGkAQKVxlAnIZENoAkULjKAOI0JLIBJIHCVQYQpyGRDSAJFK4ygDgNiWwASaBwlQHEaUhkA0gChav8uekWS4cZhoqChngDVvA5gTMhGN9sBqsHBwd12p7C5p6zRcDI+1Nz7uo/RCv0r+e8/4nTiVQq1S0MKiDfbo8RTCaEjobYU1FgeW9uPw+m8p6IXSe2IiraAigvgcl7ofCHQqEHUNAMJ0/VKDzBdjmNXOklGZtHhdBTruOw33M/5S2gampq+orAr0mC34YtYj6gJ53nC4okdq5T0eiYnp6mjZUO2Z3HWoGbXPdngyXaiiuZTL5DhX/GozBGL0tCzoiyi3PqOStl/iPG4UgkskNsz0U21g5UWIq2KZ1O09hbL6vsdR3g0Jt/AMPrDY/VGn/Nzc2fcT/aCcOP3KBC5Hn0qhN2OBS7BYgKBKmqqmoXIF1F8c8ucKT3cqJhhWM/NpN7JIvTGmL2k3iCRUD1GNbrHcG5BhwRHP986rTX070MGBnENQ4/E7ghP8SWgI/5Pcfu/2//c4lF4CDN7wAAAABJRU5ErkJggg==);
    background-size: 100% 100%;
  }

  .a-address .right-del {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: .9375rem;
    box-sizing: border-box;
    background: url(data:image/png;base64,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);
    background-size: 100% 100%;
  }

  .bottom-box {
    position: fixed;
    width: 100%;
    bottom: 0;
    font-size: .875rem;
    color: #000000;
    border-top: .03125rem solid #eee;
    height: 3.125rem;
    line-height: 3.125rem;
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAAAXNSR0IArs4c6QAAAj1JREFUOBGVVE1LHEEQ7e4EkRBjiBL9AQqCQmB32d3xEMgxp6CCssEFFUMiBA+e9pKTgeBBBRGChEBCPAghISgiiEhu87Gzq/4Df4Yf292+Wulx2llXbRiq+1W9N9VVNcMYltaau2741fOqU3S+zxIUDOIKzAdIfXPdygRhd10ChCUQPxIBmQjO2XcIFu8sANox51wbAokA++H74VuDNbOcnAieRhnWLslRuORcjOfzqY0IabCpCxBOb1SK/cT2YSxOCsEKuVzmdwyztpEAob5fGdKabSCTllhUjTE+5jjpvzEs2loChLpu9TVjioJbTRQKe45nFJn8M5ixCQFyeF74CjXZRDEfR4EQEYKPZLPpLYORbShADt+vOlqrHVypnc600K0zNGwYmWxfIk0EKCAMw1StxnYh0mEIoJziGXKc1A5hN2ZgCEFw2C+l3Md1nhsM9gQ1eZPPZ3broxxzJLZayy6Qn1xzoNWijbCmAkFQfYmWUtGijmBPA1bEgP0hgfjQ0DlaQXAwKKWiYj0yIIqocOvJ+HQ2zKBcPswqJVGkeBvpe+HvQP5lBMkmiuh5lTTwPaT+1ATSx4aizeRy6TWDGWtlgN6/ABFtuyJTIMizjcjkiwTK5aMBDM4esGfkMAvTNwfyqjlft3UBDEyflOdIm3XaAaIE8rKN2acHnnfQq5T+D3K37RKfMG1fbCx5ErhvD2DrzbjzPMifk+FJpN4FFK8AoXU8Aj+QBXwspWToLQh+Ju/xV1q8JSzhvgCBx9kzUoIj2gAAAABJRU5ErkJggg==) no-repeat 22.03125rem center;
    background-size: .46875rem auto;
  }

  .bottom-box .add-btn {
    margin-left: .9375rem;
    padding-left: 2.1875rem;
    background: url(data:image/png;base64,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) no-repeat left center;
    background-size: 1.25rem auto;
  }
</style>