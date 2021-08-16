<template>
  <div class="redio" :class="{'active': checked}" :style="divStyle">
    <i class="iconfont icondui"></i>
  </div>
</template>

<script>
export default {
  props:{
    color:{
      type: String,
      default: '#000'
    },
    checked:{
      type: Boolean,
      default: false
    }
  },
  computed:{
    divStyle(){
      return {
        color: this.color,
        border: `1px solid ${this.checked ? this.color : '#d1d1d1'}`,
        backgroundColor: this.checked ? this.color : '#fff'
      }
    }
  }
}
</script>

<style lang="less">
.redio{
  width: 22px;
  height: 22px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  i{
    font-size: 13px;
    color: #fff;
  }
}
</style>