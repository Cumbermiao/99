<template>
  <div class="game-div" :style="gameDivStyle">
    <div class="game-div-div">
      <div class="yuan-div">
        <div class="yuan">
          <div class="yuan1"></div>
          <div class="jiantou"></div>
          <div class="jiantou2"></div>
        </div>
      </div>
      <div class="game-view" :style="gameViewStyle">
        <div class="game" :style="gameStyle">
          <div class="dian" v-for="i in 18" :key="i" :style="{transform: `rotate(${(i-1)*20}deg)`}">
            <div>
              <div></div>
            </div>
          </div>
          <div class="left" v-for="(item,i) in lists" :key="i+100" :style="leftStyle(i)">
            <div class="left-1" :style="left1(i)" style="background-color: #999;">
              <div class="text" :style="{marginLeft: (i % 2) === 0?'14px':'12px'}">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="action" :style="actionStyle" @click="action">
        {{t !== 0 ? t+'s后开始转转盘' : actionKey?'开始抽奖': showErr ? '谢谢惠顾' : '等待结果'}}</div>
    </div>
    <div class="mubu" v-show="mubuKey && showPhoto">
      <div class="close" @click="close"><img :src="imgSrc('gg_pup_close.png')" mode="aspectFit"></div>
      <div class="div" :style="mubuDivStyle">
        <div class="game_1">
          <img v-show="gameKey" :src="imgSrc('game_1.png')" mode="aspectFit">
          <img v-show="!gameKey" :src="imgSrc('game_2.png')" mode="aspectFit">
        </div>
        <div class="btn">
          <img v-show="gameKey" :src="imgSrc('btn_again.png')" mode="aspectFit" @click="goShopList">
          <img v-show="!gameKey" :src="imgSrc('btn_again_1.png')" mode="aspectFit" @click="close">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import {
  //   Toast
  // } from 'vant'
  import {
    imgUrl
  } from '../../api/config.js'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    data() {
      return {
        gameKey: true,
        gameStyle: {
          transform: 'rotate(0)'
        },
        actionKey: true,
        mubuKey: false,
        mubuDivStyle: {
          transform: "scale(1)"
        },
        showPhoto: false,
        showErr: false,
        goKey: false,
        index: null,
        t: 0,
        i: null,
        list1: [],
        gameViewStyle: {}
      }
    },
    computed: {
      ...mapGetters('newGroup', ['list', 'gameDate', 'taskToken', 'priceAreaId', 'price']),
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      },
      gameDivStyle() {
        return {
          backgroundImage: imgUrl ? 'url(' + imgUrl + 'game_bac.png)' : '',
          overflow: 'hidden'
        }
      },
      left1() {
        return (i) => {
          return {
            backgroundColor: (i % 2) === 0 ? '#ff5959' : '#ff6666',
            transform: 'rotate(-' + (360 / this.lists.length) + 'deg)'
          }
        }
      },
      leftStyle() {
        return (i) => {
          return {
            transform: `rotate(${(i+1)*(360/this.lists.length)}deg)`
          }
        }
      },
      actionStyle() {
        if (this.actionKey) {
          return {
            backgroundImage: "linear-gradient(to right, #fccf5f, #FBB663)"
          }
        } else {
          return {
            backgroundColor: "#ccc"
          }
        }
      },
      lists() {
        let list = []
        list.push(...this.list1.map(res => {
          return res.manyPGBalance + '元红包'
        }))
        list.push(...['谢谢惠顾', '能量券', '任务完成'])
        list.push(...list)
        return list
      }
    },
    created() {
      this.list1 = JSON.parse(localStorage.getItem('list'))
    },
    mounted() {
      this.list2 = this.list1.map(res => {
        return 17 // Change: res.priceAreaId
      })
    },
    destroyed() {
      if (this.i) {
        clearInterval(this.i)
        this.i = null
      }
    },
    methods: {
      ...mapActions('newGroup', ['setGameDate', 'setTaskToken']),
      async getToken() {
        let d1 = new Date()
        this.gameStyle.transform = `rotate(-2160deg)`
        this.gameStyle.transition = '15s'
        setTimeout(async () => {
          let res1 = await this.$http.post('/api/v3/ManyPGTask/FinishAdvTask', {
            data: this.taskToken
          }, {
            custom: {
              url: '99',
              nonce: nonce(),
              timestamp: timestamp()
            }
          })
          let data1 = res1.data
          this.setTaskToken('')
          if (data1.code === 1) {
            let d = new Date()
            let d2 = 15000 - (d.getTime() - d1.getTime())
            if (data1.data.status !== 0) {
              this.setGameDate(d.getTime())
              this.showPhoto = true
              this.gameKey = data1.data.status === 1
              let jiaodu = 0
              let jiaodu2 = 0
              if (this.gameKey) {
                jiaodu = 180 / this.lists.length
                jiaodu2 = jiaodu * -2
              } else {
                let index = this.list1.findIndex(res => res.priceAreaId == this.priceAreaId)
                jiaodu = 180 / this.lists.length
                jiaodu2 = jiaodu * 2 * index
              }
              this.gameViewStyle = {
                transform: `rotate(${-jiaodu - jiaodu2}deg)`,
                transition: '5s'
              }
              setTimeout(() => {
                this.mubuKey = true
              }, d2)
            } else {
              // this.gameKey = data1.data.status === 1
              let jiaodu = 180 / this.lists.length
              this.$nextTick(()=>{
                this.gameViewStyle = {
                  transform: `rotate(${-jiaodu * 7}deg)`,
                  transition: '5s'
                }
              })
              setTimeout(() => {
                // Toast('谢谢惠顾')
                this.showErr = true
              }, d2)
              setTimeout(() => {
                this.close()
              }, d2 + 1000)
            }
          } else {
            let d = new Date()
            let d2 = 15000 - (d.getTime() - d1.getTime())
            this.showErr = true
            setTimeout(() => {
              this.close()
            }, d2 + 1000)
          }
        }, 5000);
      },
      goShopList() {
        this.$router.push('/newTeam/shopList?price=' + this.price + '&priceAreaId=' + this.priceAreaId)
      },
      close() {
        this.$router.go(-1)
        // uni.navigateBack()
        // uni.redirectTo({
        //   url: '../newTeam/myShop?title='+this.title+'&areaId='+this.priceAreaId+'&type='+this.type
        // })
        // uni.navigateBack({
        //   delta: 1
        // })
      },
      async action() {
        if (!this.actionKey) return
        this.actionKey = false
        let d = new Date()
        if (this.gameDate === 0) {
          this.getToken()
        } else if ((d.getTime() - this.gameDate) < 1000 * 45) { // NOTE: 45s 限制
          this.t = parseInt(((1000 * 45 - (d.getTime() - this.gameDate)) / 1000) + 1)
          setTimeout(() => {
            this.getToken()
          }, this.t * 1000)
          this.i = setInterval(() => {
            this.t = this.t - 1
            if (this.t == 0) {
              clearInterval(this.i)
              this.i = null
            }
          }, 1000)
        } else {
          this.getToken()
        }
      }
    }
  }
</script>

<style lang="less">
  .mubu {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999999;

    .div {
      transition: 0.6s;
    }

    .close {
      position: absolute;
      top: 10%;
      right: 5%;

      img {
        width: 2rem;
        height: 2rem;
      }

      z-index: 9999999;
    }

    .game_1,
    .btn {
      img {
        width: 16.875rem;
        height: unset;
      }
    }

    .game_1 {
      padding-top: 40%;

      img {
        height: 20.375rem;
      }
    }

    @media screen and (max-height: 680px) {
      .close {
        top: 5%;
      }

      .game_1 {
        padding-top: 20%;
      }
    }

    .btn {
      margin-top: 2rem;

      img {
        height: 3.375rem;
      }
    }
  }

  .game-div {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    transition-timing-function: linear
  }

  @media screen and (max-height: 680px) {
    .game-div {
      height: calc(100vh - 45px);
    }
  }

  @media screen and (max-height: 580px) {
    .game-div {
      height: calc(100vh - 55px);
    }
  }

  .yuan-div {
    position: absolute;
    top: 41%;
    width: 100%;
    z-index: 999;

    .yuan {
      position: relative;
      width: 45px;
      height: 38px;
      padding-top: 7px;
      margin: 0 auto;
      border-radius: 50%;
      background-image: linear-gradient(#fffb95, #ff9c36);

      .jiantou,
      .jiantou2 {
        position: absolute;
        top: -18px;
        width: 0;
        height: 0;
      }

      .jiantou {
        left: 13px;
        border-left: 10px solid transparent;
        border-right: 0 solid transparent;
        border-bottom: 20px solid #ffff99;
      }

      .jiantou2 {
        left: 22px;
        border-left: 0 solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid #ffdd55;
      }

      .yuan1 {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        border-radius: 50%;
        background-color: #ffcc66;
      }
    }
  }

  .game-div-div {
    position: absolute;
    top: 25%;
    left: calc(50% - 120px);
    width: 240px;
    height: 240px;
    border-radius: 50%;
  }

  .game {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: 0 0 40px 14px #fccf5f;
    transition-timing-function: ease-in-out;

    &::after {
      position: absolute;
      top: -14px;
      left: -14px;
      content: "";
      width: calc(100% - 3px);
      height: calc(100% - 3px);
      border: 15px solid #ff6666;
      border-radius: 50%;
    }

    .dian {
      position: absolute;
      top: -10px;
      width: 100%;
      height: calc(100% + 20px);
      z-index: 9999;

      >div {
        width: 10px;
        height: 100%;
        margin: 0 auto;

        >div {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #fff;
        }
      }
    }

    .left {
      position: absolute;
      top: 0;
      left: 0;
      width: 120px;
      height: 240px;
      border-radius: 120px 0 0 120px;
      transform-origin: 100% 50%;
      overflow: hidden;

      >.left-1 {
        position: absolute;
        top: -20px;
        right: -80px;
        width: 80px;
        height: 280px;
        transform-origin: 0 50%;

        .text {
          position: absolute;
          top: 0;
          left: 0;
          width: 1rem;
          margin-top: 25px;
          color: #fff;
          text-align: center;
          transform: rotate(17deg);
        }
      }
    }
  }

  .action {
    position: absolute;
    bottom: -40%;
    left: calc(50% - 100px);
    width: 200px;
    height: 44px;
    border-radius: 44px;
    margin: 0 auto;
    line-height: 44px;
    text-align: center;
    color: #fff;
  }
</style>