<template>
  <div class="buy-card">
    <card :list="detail" :imgHeight="132" :titleKey="false"></card>
    <div class="buy-card-1">
      <div class="heart">购买须知</div>
      <div class="knowList" v-for="(item, i) in knowList" :key="i">
        <div class="name">{{item.name}}</div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
    <div class="bottom" @click="toOrder">
      <div>立刻购买</div>
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
      this.detail = [json]
      this.$store.commit('navTop/setTitle',{
        title: json.typeName
      })
    },
    methods:{
      toOrder(){
        this.$router.push(`/confirmOrder?type=card&json=${JSON.stringify(this.detail[0])}`)
      }
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
    .bottom{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      background-color: #FFFFFF;
      div{
       width: auto;
       height: 2.75rem;
       line-height: 2.75rem;
       border-radius: 1.375rem;
       margin: .5rem .75rem .375rem;
       font-size: .9375rem;
       color: #FFFFFF;
       background-color: #FF1738;
      }
    }
  }
</style>
