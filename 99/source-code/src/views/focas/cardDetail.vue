<template>
  <div class="buy-card">
    <card :list="detail"></card>
    <div class="buy-card-1">
      <div class="knowList" v-for="(item, i) in knowList" :key="i">
        <div class="name">{{item.name}}</div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "./components/Card.vue"
  export default {
    components: { Card },
    data(){
      return {
        knowList:[{
          name:'购买时间',
          title: '2021-06-26 17:14'
        },{
          name:'有效期',
          title: '永久有效'
        },{
          name:'使用须知',
          title: '此卡作为九九纪念卡'
        },{
          name:'温馨提示',
          title: '感谢您与九九生活共同成长。此卡作为纪念收藏。'
        }],
        detail:[]
      }
    },
    created() {
      let option = this.$route.query
      let json = JSON.parse(option.json)
      console.log(json);
      json.typeName = json.CardTypeName
      json.sellPrice = json.PayPrice
      json.logo = json.Logo
      json.growthFundText = 'NO. '+json.CardNo
      this.knowList[0].title = json.CreateTime
      this.detail = [json];
      this.$store.commit('navTop/setTitle',{
        title: json.CardTypeName
      })
    }
  }
</script>

<style lang="less" scoped>
  .buy-card{
    position: relative;
    height: calc(100vh - 4.0625rem);
    padding: .625rem .5rem;
    color: #333333;
    background-color: #F3F4F8;
    overflow: auto;
    .buy-card-1{
      margin-top: .625rem;
      padding: 1rem .78125rem;
      border-radius: .625rem;
      background-color: #fff;
      .heart{
       margin-bottom: 1.59375rem;
       font-weight: bold;
      }
      .knowList{
       margin-bottom: 1.46875rem;
       font-size: .8125rem;
       .name{
         margin-bottom: .71875rem;
         font-weight: bold;
       }
       .title{
         color: #666666;
       }
      }
      .knowList:last-child{
       margin-bottom: 0;
      }
    }
  }
</style>
