<template>
  <div class="userBox">
    <div class="userHead">
      <img :src="imgSrc('userback.png')" mode="widthFix" />
    </div>
    <div class="nameBox">
      <div class="nameFl" @click="toDetails">
        <img src="http://web991-oss.jiujiupingou.com/img/001.png" mode="widthFix" />
        <div class="nameFlRl">
          <!-- 	<div class="name">
						兑换i啊好滴水滴
					</div> -->
          <div class="heart-right">
            <div class="idNumber" :style="{marginBottom:userInfo.ParentUserMobile?'.3125rem':'1.25rem'}">
              ID：
              <span>{{phone}}</span>
            </div>
            <div class="referrer" v-if="userInfo.ParentUserMobile">
              我的推荐人：
              <span>{{userInfo.ParentUserMobile}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="nameRl">
        <div @click="toUrl('/QRcode')" hover-class="none">
          <img class="codeImg" :src="imgSrc('code.png')" mode="widthFix" />
        </div>
        <!-- <div @click="toUrl('/signin')" hover-class="none">
          <img class="signinImg":src="imgSrc('signin.png" mode="widthFix" />
        </div> -->
      </div>
    </div>
    <div class="orderBox">
      <div class="order">
        <div class="orderHead">
          <div class="myOrder">
            我的订单
          </div>
          <div @click="toUrl('/orderList?orderType=All')" hover-class="none">
            <div class="allOrder">
              查看全部订单<img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div class="borderStyleMy">

        </div>
        <div class="orderFoorter">
          <div @click="toUrl('/orderList?orderType=WaitPay')" hover-class="none">
            <div class="">
              <img :src="imgSrc('tobepaid.png')" mode="widthFix" />
              <div class="" style="margin-top: .3125rem;">
                待付款
              </div>
            </div>
          </div>
          <div @click="toUrl('/orderList?orderType=WaitSend')" hover-class="none">
            <div class="">
              <img :src="imgSrc('tobedelivered.png')" mode="widthFix" />
              <div class="" style="margin-top: .4375rem;">
                待发货
              </div>
            </div>
          </div>
          <div @click="toUrl('/orderList?orderType=WaitReceive')" hover-class="none">
            <div class="">
              <img style="width: 1.5rem;" :src="imgSrc('received.png')" mode="widthFix" />
              <div class="" style="margin-top: .4375rem;">
                待收货
              </div>
            </div>
          </div>
          <div @click="toUrl('/orderList?orderType=Complete')" hover-class="none">
            <div class="">
              <img style="width: 1.375rem;" :src="imgSrc('transaction.png')" mode="widthFix" />
              <div class="" style="margin-top: .25rem;">
                交易成功
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="listBox">
      <div class="list">
        <div class="litItem">
          <div class="listFl" @click="customerService">
            <img :src="imgSrc('customerservice.png')" mode="widthFix" />
            <span>客服中心</span>
          </div>
          <!-- 	<div class="listRl" v-if="jiazaizhong">
						正在加载中
					</div> -->
          <div class="listRl" @click="customerService">
            竭诚为您服务 <img :src="imgSrc('jiantou.png')" mode="widthFix" />
          </div>
        </div>
        <div class="litItem" @click="customerSpeak">
          <div class="listFl">
            <img :src="imgSrc('me_ic_voice.png')" mode="widthFix">
            <span>语音中心</span>
          </div>
          <div class="listRl">
            竭诚为您服务 <img :src="imgSrc('jiantou.png')" mode="widthFix">
          </div>
        </div>
        <div @click="toUrl('/operation')" hover-class="none">
          <div class="litItem">
            <div class="listFl">
              <img :src="imgSrc('me_ic_yyzx.png')" mode="widthFix" />
              <span>运营中心</span>
            </div>
            <div class="listRl">
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div @click="toUrl('/complaint')" hover-class="none">
          <div class="litItem">
            <div class="listFl">
              <img :src="imgSrc('complaint.png')" mode="widthFix" />
              <span>投诉中心</span>
            </div>
            <div class="listRl">
              问题与反馈 <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div @click="toUrl('/addressmanagement')" hover-class="none">
          <div class="litItem">
            <div class="listFl">
              <img :src="imgSrc('address.png')" mode="widthFix" />
              <span>地址管理</span>
            </div>
            <div class="listRl">
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <!-- <div @click="toUrl(../myfightforfriends/myfightforfriends"  hover-class="none"> -->
        <div class="litItem" @click="myFightFriends">
          <div class="listFl">
            <img :src="imgSrc('mypin.png')" mode="widthFix" />
            <span>我的{{$text.groupText.singleGroupBuying}}友</span>
          </div>
          <div class="listRl">
            <img :src="imgSrc('jiantou.png')" mode="widthFix" />
          </div>
        </div>
        <!-- </div> -->
        <div @click="toUrl('/focas/focasNine')" hover-class="none">
          <div class="litItem">
            <div class="listFl">
              <img :src="imgSrc('me_ic_fu.png')" mode="widthFix" />
              <span>九九福卡</span>
            </div>
            <div class="listRl">
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div @click="toUrl('/balance?Balance=' + userInfo.Balance)" hover-class="none">
          <div class="litItem">
            <div class="listFl">
              <img :src="imgSrc('zhanghu.png')" mode="widthFix" />
              <span>账户余额</span>
            </div>
            <div class="listRl">
              ￥{{userInfo.Balance}}
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div class="litItem">
          <div class="listFl">
            <img :src="imgSrc('nengliang.png')" mode="widthFix" />
            <span>能量劵</span>
          </div>
          <div class="listRl">
            {{userInfo.EnergyTicket}}张
            <img :src="imgSrc('jiantou.png')" mode="widthFix" />
          </div>
        </div>
        <div @click="toUrl('/shopintegral?PointBalance=' + userInfo.PointBalance)" hover-class="none">
          <div class="litItem">
            <div class="listFl">
              <img :src="imgSrc('shopjifen.png')" mode="widthFix" />
              <span>购物积分</span>
            </div>
            <div class="listRl">
              {{userInfo.PointBalance}}
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div @click="toUrl('/consumptionJIn?consumeBalance=' + userInfo.ConsumeBalance)" hover-class="none">
          <div class="litItem">
            <div class="listFl">
              <img :src="imgSrc('xiaofeijin.png')" mode="widthFix" />
              <span>消费金</span>
            </div>
            <div class="listRl">
              {{userInfo.ConsumeBalance}}
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div @click="toUrl('/realname')" hover-class="none">
          <div class="litItem" style="border: none;">
            <div class="listFl">
              <img :src="imgSrc('shiming.png')" mode="widthFix" />
              <span>实名认证</span>
            </div>
            <div class="listRl">
              <span v-if="userInfo.IsCertID">已实名</span>
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footerGuanyuBox">
      <div class="footerGuanyu">
        <div @click="toUrl('/aboutjiujiu')" hover-class="none">
          <div class="footerGuanyuItem">
            <div class="footerGuanyuFl">
              关于九九生活
            </div>
            <div class="footerGuanyuRl">
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div @click="toUrl('/editpassword')" hover-class="none">
          <div class="footerGuanyuItem">
            <div class="footerGuanyuFl">
              修改登录密码
            </div>
            <div class="footerGuanyuRl">
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div @click="toBuy">
          <div class="footerGuanyuItem">
            <div class="footerGuanyuFl">
              修改支付密码
            </div>
            <div class="footerGuanyuRl">
              <img :src="imgSrc('jiantou.png')" mode="widthFix" />
            </div>
          </div>
        </div>
        <div class="footerGuanyuItem" style="border: none;" @click="logOut">
          <div class="footerGuanyuFl">
            退出登录
          </div>
          <div class="footerGuanyuRl">
            <img :src="imgSrc('jiantou.png')" mode="widthFix" />
          </div>
        </div>
      </div>
    </div>
    <div class="" v-if="broadcastState">
      <dragball v-if="is_anchor == 1" :x=500 :y=1000 img=""></dragball>
    </div>
    <popup v-model="show" position="bottom" :style="{ height: '45%',backgroundColor:'rgba(0,0,0,0)' }" >
      <div class="popup">
          <div class="bottom">
            <div class="heart">联系客服 <img @click="close" :src="imgSrc('close_hui.png')" mode=""></div>
            <div class="item" @click="toService" style="border-bottom: 1px solid #ddd;">
              <div class="img"><img :src="imgSrc('ic_kf.png')" mode=""></div>
              <div class="right">
                <div>在线客服</div>
                <div>智能高效</div>
              </div>
            </div>
            <div class="item" @click="toPhone">
              <div class="img"><img :src="imgSrc('ic_phone.png')" mode=""></div>
              <div class="right">
                <div>客服电话：400 099 0023</div>
                <div>周一到周五：9:30-11:30 14:00-17:30</div>
              </div>
            </div>
          </div>
        </div>
    </popup>
  </div>
</template>

<script>
  import {
    imgUrl
  } from '../../api/config.js'
  import {
    removeUserId,
    removeToken,
    removeUserCode,
    removePhone,
    removeUser_string,
    removeis_anchor,
    getPhone,
    getis_anchor,
    getUserId,
    getUserCode
  } from '../../util/token.js'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import dragball from "../../components/drag-ball/drag-ball.vue";
  import {
    mapActions
  } from 'vuex';
  import {
    Dialog,
    Popup,
    Toast
  } from 'vant';
  export default {

    data() {
      return {
        userInfo: {},
        phone: '',
        jiazaizhong: true,
        is_anchor: null,
        // 是否展示开播按钮 false 不展示  true 展示
        broadcastState: false,
        haveBuy: false,
        show: false,
        u:'',
      };
    },
    components: {
      dragball,
      Popup
    },
    computed:{
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      }
    },
    mounted() {
      this.u = navigator.userAgent;
      this.$store.commit('common/setToken', true)
      if (getUserCode() === '') {
        this.$router.push("/login")
        removeUserId()
        removeToken()
        removeUserCode()
        removePhone()
        return
      }
      this.getUserInfo()
      this.phone = getPhone()
      this.is_anchor = getis_anchor()
      this.customerServiceInit()
      this.getBuyKey()
    },

    methods: {
      toDetails(){
        this.$router.push('/user/details')
      },
      toService(){
        this.$router.push('/user/service')
      },
      toPhone(){
        window.location.href = 'tel:4000990023'
      },
      close(){
        this.show = false;
      },
      customerSpeak(){
        // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
        // this.$refs.popup.open('bottom')
        this.show = true;
      },
      toUrl(url) {
        this.$router.push(url)
      },
      ...mapActions('address', ['setAddressIs', 'setAddressXuanze']),
      herfNengliang() {
        this.$router.push("/shop")
      },
      async getBuyKey() {
        let res = await this.$http.post('/api/v1/UserInfo/GetTradeInfo', {}, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if (res.data.code === 1) {
          this.haveBuy = res.data.data
        }
      },
      toBuy() {
        if (this.haveBuy) {
          this.$router.push("/editBuyPassword")
        } else {
          this.$router.push("/editBuyPassword/noteVerify")
        }
      },
      customerServiceInit() {

        (function (w, d, n, a, j) {
          w[n] = w[n] || function () {
            (w[n].a = w[n].a || []).push(arguments);
          };
          j = d.createElement('script');
          j.async = true;
          j.src = 'https://qiyukf.com/script/64c99997a8a66f65b0753f56035bb7c0.js';
          d.body.appendChild(j);
        })(window, document, 'ysf')

      },
      operationService() {

      },
      customerService() {
        var options = {};
        options.name = getPhone();
        // eslint-disable-next-line
        ysf('open', options);
      },
      async getUserInfo() {
        let res = await this.$http.post('/api/v1/UserInfo/Get', {
          type: 1
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            loading: '加载'
          }
        })
        // console.log(res)
        let data = res.data
        // console.log(data)
        if (data.code === 1) {
          Toast.clear()
          this.userInfo = data.data
        }
      },
      myFightFriends() {
        this.$router.push("/myfightforfriends")
      },
      logOut() {
        Dialog.confirm({
          title: '信息',
          message: '是否退出登录?',
          confirmButtonText: '退出'
        }).then(() => {
          removeUserId()
          removeToken()
          removeUserCode()
          removePhone()
          removeUser_string()
          removeis_anchor()
          this.setAddressIs({})
          this.setAddressXuanze(false)
          this.$router.push("/login")
        })
      },
      // 直播
      async broadcastClick() {
        await this.$http.post('/api/v1/Live/LivePush', {
          UserId: getUserId()
        }, {
          custom: {
            url: 'shengyang',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
      }
    }
  };
</script>

<style lang="less">
  .userBox {
    height: 100%;
    background-color: #F7F7F7;
    overflow: auto;

    .userHead {
      img {
        width: 100%;
      }
    }

    .nameBox {
      position: relative;
      z-index: 100;
      margin-top: -6.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .625rem;

      .nameFl {
        position: relative;
        display: flex;
        align-items: center;

        img {
          width: 3.75rem;
          border-radius: .5rem;
          margin-right: .9375rem;
        }

        .name {
          font-size: .8125rem;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          margin-bottom: .5rem;
        }

        .heart-right {
          position: absolute;
          bottom: .0625rem;
        }

        .idNumber {
          width: 7.5rem;
          margin-bottom: .3125rem;
          font-size: .8125rem;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
        }

        .referrer {
          width: 11.25rem;
          font-size: .8125rem;
          color: #fff;
        }
      }

      .nameRl {
        display: flex;

        .codeImg {
          width: 1.875rem;
          margin-right: .875rem;
        }

        .signinImg {
          width: 1.875rem;
          margin-right: 1.25rem;
        }
      }
    }

    .orderBox {
      position: relative;
      display: flex;
      justify-content: center;

      .order {
        width: 22.3125rem;
        height: 7.3125rem;
        background: #FFFFFF;
        border-radius: .3125rem;

        .orderHead {
          padding: 0 1.25rem;
          display: flex;
          justify-content: space-between;
          margin-top: .625rem;

          .myOrder {
            color: #494949;
          }

          .allOrder {
            position: relative;
            color: #747474;
            font-size: .75rem;
            margin-right: 1rem;
            margin-top: .125rem;

            span {
              margin-left: .3125rem;
            }

            img {
              position: absolute;
              top: .34375rem;
              right: -1.125rem;
              width: .3125rem;
            }
          }
        }

        .borderStyleMy {
          border: .0625rem solid #eee;
          margin: .625rem 0;
        }

        .orderFoorter {
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: center;
          font-size: .875rem;
          color: #747474;
          margin-top: .3125rem;

          img {
            vertical-align: bottom;
            // margin-bottom: 6upx;
            width: 1.375rem;
          }
        }
      }
    }

    .listBox {
      display: flex;
      justify-content: center;
      margin-top: .5rem;

      .list {
        width: 22.3125rem;
        background: #FFFFFF;
        border-radius: .3125rem;

        img {
          width: 1.625rem;
          vertical-align: middle;
          margin-right: .5rem;
        }

        .litItem {
          margin: 0 1rem;
          padding: .5rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: .0625rem solid #D8D8D8;

          .listFl {
            span {
              font-size: .75rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #494949;
            }
          }

          .listRl {
            font-size: .6875rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #747474;

            img {
              width: .3125rem;
              margin: 0 .3125rem;
              margin-left: .8125rem;
            }
          }
        }
      }
    }

    .footerGuanyuBox {
      display: flex;
      justify-content: center;
      margin-top: .5rem;

      .footerGuanyu {
        width: 22.3125rem;
        background: #FFFFFF;
        border-radius: .3125rem;

        .footerGuanyuItem {
          margin: 0 1rem;
          padding: .5rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: .0625rem solid #D8D8D8;

          .footerGuanyuFl {
            font-size: .75rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #494949;
          }
        }

        .footerGuanyuRl {
          img {
            width: .3125rem;
            margin: 0 .3125rem;
          }
        }
      }
    }

    .touch {
      width: 2.25rem;
      position: fixed;
      right: 1.25rem;
      bottom: 3.125rem;
      -webkit-tap-highlight-color: transparent;
    }
  }
  .popup{
    .bottom{
      position: fixed;
      bottom: 0;
      width: 100vw;
      height: 40vh;
      border-radius: 15px 15px 0 0;
      background-color: #fff;
      overflow: auto;
      .heart{
        position: relative;
        height: 1.5rem;
        padding: 20px;
        border-bottom: 1px solid #ddd;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        img{
          position: absolute;
          top: 25px;
          right: 20px;
          width: 14px;
          height: 14px;
        }
      }
      .item{
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        .img{
          width: 30px;
          height: 30px;
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }
        .right{
          width: calc(100% - 50px);
          padding-left: 10px;
          font-size: 16px;
          >view:last-child{
            margin-top: 5px;
            color: #999;
          }
        }
      }
    }
  }
</style>