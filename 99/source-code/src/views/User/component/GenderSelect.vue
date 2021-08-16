<template>
  <div class="gender" v-show="showKey" @click.stop="close">
    <div class="foot" :style="footStyle">
      <div class="content">
        <div @click.stop="sex('男','Male')">男</div>
        <div @click.stop="sex('女','Female')">女</div>
        <div @click.stop="sex('保密','Confidentiality')">保密</div>
      </div>
      <div class="close" @click.stop="close">取消</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        footStyle: {},
        showKey: false
      }
    },
    watch:{
      showKey(value){
        if(value){
          this.footStyle = {
            transition: '0.3s',
            bottom: '-20rem'
          }
          setTimeout(()=>{
            this.footStyle = {
              transition: '0.3s',
              bottom: '0rem'
            }
          },10)
        } else {
          this.footStyle = {
            transition: '0s',
            bottom: '0rem'
          }
        }
      }
    },
    methods:{
      close(){
        this.showKey = false
      },
      sex(sex,data){
        this.$emit('change',sex,data)
        this.showKey = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .gender{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0,0,0,0.5);
    .foot{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 20rem;
      text-align: center;
      .content,
      .close{
        border-radius: 1.3125rem;
        margin: 0 .625rem;
        line-height: 3.5rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: #007AFF;
        background-color: #fff;
      }
      .content{
        >div{
          border-bottom: .0625rem solid rgba(216,218,219,0.6);
        }
        >div:last-child{
          border-bottom: unset
        }
      }
      .close{
        margin-top: .5rem;
      }
    }
  }
</style>
