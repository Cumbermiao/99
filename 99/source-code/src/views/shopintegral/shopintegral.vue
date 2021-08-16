<template>
  <div class="shopintegralBox">
    <div class="balanceHead" :style="balanceHeadStyle">
      <div class="">
        <div class="title">
          剩余积分
        </div>
        <div class="balanceNumber">
          {{pointBalance}}
        </div>
      </div>
    </div>
    <div v-for="(item,index) in infoList" :key="index" style="border-bottom: .0625rem solid #EEEEEE;"
      class="balanceDetailed">
      <div>
        <div class="balanceDetailedHead">
          <div class="time">
            到账时间
          </div>
          <div class="time">
            {{item.CreateTime}}
          </div>
        </div>
        <div class="balanceDetailedFoorter">
          <div class="item">
            {{item.Remark}}
          </div>
          <div class="jine">
            + {{item.Points}}
          </div>
        </div>
      </div>
    </div>
    <!-- <uni-load-more :status="status" :icon-size="14" :content-text="contentText" /> -->
  </div>
</template>

<script>
    import {
    Toast,
  } from 'vant';
  import {
    imgUrl
  } from '../../api/config.js'
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  // import uniLoadMore from '@/components/uni-load-more/uni-load-more'
  export default {
    data() {
      return {
        pointBalance: 0,
        infoList: [],
        pageIndex: 1,
        pageSize: 10,
        totalCount: 0,
        reload: false,
        status: 'more',
        contentText: {
          contentdown: '上拉加载更多~',
          contentrefresh: '加载中',
          contentnomore: '没有更多数据了~'
        }
      }
    },
    computed: {
      balanceHeadStyle() {
        return {
          backgroundImage: imgUrl ? 'url(' + imgUrl + 'bag_1.png)' : ''
        }
      }
    },
    created() {
      let option = this.$route.query
      this.pointBalance = option.PointBalance
      this.getInfo()
    },
    onReachBottom() { //上拉触底函数
      if (this.totalCount > this.infoList.length) {
        // this.status = 'loading';
        this.pageIndex++
        this.getInfo()
      } else {
        this.status = 'noMore'
      }
    },
    methods: {
      async getInfo() {
        this.status = 'loading';
        let res = await this.$http.post('/api/v1/PointRecord/GetList', {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp(),
            loading: '加载'
          }
        })
        let data = res.data
        // console.log(data)
        if (data.code === 1) {
          // this.list = data.data.list
            Toast.clear()
          this.totalCount = data.data.totalCount

          if (data.data.totalCount > 0) {
            let dataMap = data.data.list
            this.infoList = this.reload ? dataMap : this.infoList.concat(dataMap);
            this.reload = false;
          } else {
            this.infoList = []

          }
          if (this.totalCount === this.infoList.length) {
            this.reload = false;
            this.status = 'noMore'
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .shopintegralBox {
    .balanceHead {
      width: 100%;
      height: 12.5rem;
      background-size: 100% 100%;

      .title {
        font-size: .875rem;
        padding: 1.625rem 0 0 1.625rem;
        color: #FFFFFF;
      }

      .balanceNumber {
        padding-top: 1.5625rem;
        color: #fff;
        text-align: center;
        font-size: 3.125rem;
        vertical-align: middle;
      }
    }

    .balanceDetailed {
      color: #BDBBBB;
      font-size: .875rem;
      padding: .9375rem;

      .balanceDetailedHead {
        display: flex;
        justify-content: space-between;
      }

      .balanceDetailedFoorter {
        margin-top: .9375rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: .9375rem;

        .jine {
          color: rgb(255, 182, 9)
        }
      }
    }
  }
</style>