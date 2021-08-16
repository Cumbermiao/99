<template>
  <div>
    <div class="operation-top">
      <icon name="arrow-left icons" @click="back" />
      <span>满单记录</span>
    </div>
    <div class="operation">
      <!-- <div class="search">
      <search v-show="searchKey" searchColor="rgba(255,255,255,0.2)"></search>
    </div> -->
      <div class="ranking">
        <div class="content">
          <div class="heart">
            <div>满单时间</div>
            <div>单数</div>
            <div>是否复购</div>
          </div>
          <list @load="loadMore()" offset='50'>
            <div class="list" v-for="(item,index) in list" :key="index">
              <div>{{item.ReturnTime}}</div>
              <div>{{item.WinningCount}}</div>
              <div :style="{color:item.Status === 1?'':'red'}">{{item.Status === 1 ? '是' : '否'}}</div>
            </div>
            <div style="padding-top: 4.6875rem;" class="commodityBox" v-if="list.length === 0">
              <no-data></no-data>
            </div>
          </list>
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
    nonce,
    timestamp
  } from '../../util/random.js'
  // import Search from '@/components/public/search.vue'
  import {
    Icon,
    List
  } from 'vant';
  import NoData from '../../components/noData/NoDate.vue'
  export default {
    components: {
      // Search,
      Icon,
      List,
      NoData
    },
    data() {
      return {
        list: [],
        priceAreaId: '',
        pageIndex: 0,
        ajaxKey: false
      }
    },
    computed: {
      imgSrc() {
        return (name) => {
          return imgUrl + name
        }
      }
    },
    created() {
      let option = this.$route.query
      this.priceAreaId = option.priceAreaId
    },
    mounted() {},
    methods: {
      loadMore(){
        this.getList()
      },
      back() {
        this.$router.go(-1)
      },
      async getList() {
        if(this.ajaxKey){
          return false
        }
        this.pageIndex++
        this.ajaxKey = true
        let res = await this.$http.post('/api/v3/ManyPGProduct/GetEverydayWinningTenList', {
          PriceAreaId: this.priceAreaId,
          PageSize: 20,
          PageIndex: this.pageIndex
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        this.ajaxKey = false
        if (res.data.code === 1) {
          this.ajaxKey = !(res.data.data.list.length === 20)
          let p = Number(this.priceAreaId)
          this.list = this.list.concat(res.data.data.list.map(r=>{
            if(p === 2 || p === 10){
              if(r.WinningCount > 10){
                r.WinningCount = 10
              }
            }else{
              if(r.WinningCount > 15){
                r.WinningCount = 15
              }
            }
            return r
          })) 
          console.log(this.list);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .operation-top {
    color: white;
    background-color: #FF1738;

    .right {
      color: white;
    }
  }

  .operation {
    width: auto;
    height: 100%;
    padding: 12px 12px 0;
    color: #333333;
    background-image: linear-gradient(#FF1738, #FF3A56);

    .ranking {

      .address {
        margin-bottom: 29.5px;
        font-size: 20px;
        color: #ffffff;
      }

      >.content {
        height: calc(100vh - 56px);
        border-radius: 15px 15px 0 0;
        background-color: #FFFFFF;
        overflow: auto;
        .list{
          font-size: 14px;
        }
        .list,
        .heart {
          display: flex;
          text-align: center;

          >div {
            flex: 1
          }
        }

        .heart {
          padding-top: 25.5px;
          margin-bottom: 33.5px;
        }

        .list {
          height: 44px;
          display: flex;
          align-items: center;
          text-align: center;

          >div {
            img {
              width: 26.5px;
              height: 26px;
              margin-top: 9px;
              line-height: 44px;
            }
          }

          .active-one {
            color: #999999;
          }

          .active-two {
            color: #FF1738;
          }
        }

        .list:nth-child(2n+1) {
          background-color: #F8F8F8;
        }
      }
    }
  }

  .mubu {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    .picker {
      position: absolute;
      bottom: 0;
      width: 100vw;
    }
  }

  .operation-top {
    position: relative;
    height: 30px;
    padding: 7px 0;
    line-height: 30px;
    text-align: center;
  }

  .operation-top .icons {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 23px;
  }

  .operation-top span {
    font-weight: bold;
    font-size: 17px;
  }

  .operation-top .right {
    position: absolute;
    top: 6px;
    right: 10px;
    font-size: 12px;
    color: #fff;
  }
</style>