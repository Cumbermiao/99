<template>
  <div class="focas-nine">
    <card :list='list' @toBuy="toBuy"></card>
  </div>
</template>

<script>
  import {
    nonce,
    timestamp
  } from '../../util/random.js'
  import Card from "./components/Card.vue"
  export default {
    components: {
      Card
    },
    data() {
      return {
        pageIndex: 1,
        pageSize: 10,
        list: [],
        reload: false
      }
    },
    created() {
      this.getList()
      this.$store.commit('navTop/setRightUrl',{
        rightUrl: '/focas'
      })
    },
    methods: {
      async getList() {
        let res = await this.$http.post('/api/v1/BlessingCard/GetCardTypeList', {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        let data = res.data;
        if (data.code === 1) {
          if (data.data.length > 0) {
            let dataMap = data.data.map(res => {
              res.growthFundText = `活动期间，购买福卡，系统赠送${res.growthFund}成长金`
              return res
            })
            this.list = this.reload ? dataMap : this.list.concat(dataMap);
            this.reload = false;
          } else {
            this.reload = false;
            this.status = 'noMore'
          }
        }
      },
      toBuy(json) {
        this.$router.push('/focas/buyCard?json=' + JSON.stringify(json))
      }
    }
  }
</script>

<style lang="less" scoped>
  .focas-nine {
    height: calc(100vh - 4.0625rem);
    padding: .625rem .5rem;
    overflow: auto;
    background-color: #F3F4F8;
  }
</style>