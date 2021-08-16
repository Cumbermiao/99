<template>
  <div>
    <div class="operation-top">
      <icon name="arrow-left icons" @click="back" />
      <span>运营中心</span>
      <div class="right" @click="showPicker">筛选</div>
    </div>
    <div class="operation">
      <!-- <div class="search">
      <search v-show="searchKey" searchColor="rgba(255,255,255,0.2)"></search>
    </div> -->
      <div class="ranking" :style="rankingStyle">
        <div v-show="!searchKey" class="address">
          {{name}}{{name1}}
        </div>
        <div class="content" :style="contentStyle">
          <div class="heart">
            <div>排名</div>
            <div>省份</div>
            <div>签约</div>
          </div>
          <div @click="clickSearch(item.id,item.name)" class="list" v-for="(item,index) in list" :key="index">
            <div>
              <div v-if="index===0">
                <img :src="imgSrc('one.png')" mode="">
              </div>
              <div v-if="index===1">
                <img :src="imgSrc('two.png')" mode="">
              </div>
              <div v-if="index===2">
                <img :src="imgSrc('three.png')" mode="">
              </div>
              <div v-if="[0,1,2].indexOf(index) === -1">{{index+1}}</div>
            </div>
            <div>{{item.name}}</div>
            <div :class="item.status == 0 ? 'active-one' : item.status == 1 ? 'active-two' : ''">
              {{item.amount}}{{item.status == 0 ? '未签约' : item.status == 1 ? '已签约' : ''}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- #ifndef MP-ALIPAY -->
    <div v-show="mubuKey" class="mubu">
      <div class="picker">
        <picker show-toolbar :columns='multiArray' @change="changePicker" @confirm="confirm" @cancel="onCancel">
        </picker>
      </div>
    </div>
    <!-- #endif -->
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
  import {
    counties
  } from '../../util/counties.js'
  // import Search from '@/components/public/search.vue'
  import {
    Picker,
    Icon
  } from 'vant';
  export default {
    components: {
      // Search,
      Picker,
      Icon
    },
    data() {
      return {
        mubuKey: false,
        searchKey: true,
        multiIndex: ['全部', '全部'],
        multiArray: [{
          values: ['全部'],
          defaultIndex: 0
        }, {
          values: ['全部'],
          defaultIndex: 0
        }],
        list: [],
        provinceId: 0,
        cityId: 0,
        name1: ''
      }
    },
    computed: {
      imgSrc(){
        return (name)=>{
          return imgUrl+name
        }
      },
      name() {
        let name = ""
        if (this.multiIndex[0] !== '全部') {
          name = this.multiIndex[0]
          if (this.multiIndex[1] !== '全部') {
            name += this.multiIndex[1]
          }
        }
        return name
      },
      rankingStyle() {
        if (this.searchKey) {
          return {
            paddingTop: "49px"
          }
        } else {
          return {
            paddingTop: "0px"
          }
        }
      },
      contentStyle() {
        if (this.searchKey) {
          return {
            height: 'calc(100vh - 105px)'
          }
        } else {
          return {
            height: 'calc(100vh - 113px)'
          }
        }
      }
    },
    onNavigationBarButtonTap() {
      this.$refs.picker.$el.click();
    },
    created() {
      this.multiArray[0].values = ['全部', ...counties.map(res => res.Name)]
    },
    mounted() {
      this.getList()
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      showPicker() {
        this.mubuKey = true
      },
      clickSearch(id, name) {
        this.searchKey = false
        if (this.provinceId && !this.cityId) {
          this.name1 = this.name1 + name
          this.cityId = id
          this.getList(this.provinceId, id)
        } else if (!this.provinceId && !this.cityId) {
          this.name1 = this.name1 + name
          this.provinceId = id
          this.getList(id, 0)
        }
      },
      async getList(provinceId = 0, cityId = 0) {
        let res = await this.$http.post('/api/v1/OperatingCenter/GetList', {
          provinceId: provinceId,
          cityId: cityId
        }, {
          custom: {
            url: '99',
            nonce: nonce(),
            timestamp: timestamp()
          }
        })
        if (res.data.code === 1) {
          this.list = res.data.data
        }
      },
      toSearch() {
        // uni.navigateTo({
        //   url: './operation_search'
        // })
      },
      onCancel(){
        this.mubuKey = false
      },
      confirm(value, index) {
        this.multiIndex = value
        this.name1 = ''
        if (this.multiIndex[0] !== '全部') {
          let one = index[0] - 1;
          if (index[1]) {
            let two = index[1] - 1;
            this.provinceId = counties[one].Id;
            this.cityId = counties[one].Child[two].Id;
            this.getList(counties[one].Id, counties[one].Child[two].Id)
          } else {
            this.provinceId = counties[one].Id;
            this.cityId = 0;
            this.getList(counties[one].Id)
          }
          this.searchKey = false
        } else {
          this.provinceId = 0;
          this.cityId = 0;
          this.getList()
          this.searchKey = true
        }
        this.onCancel()
      },
      changePicker: function (data, value, index) {
        this.multiIndex[index] = value[index]
        switch (index) {
          case 0: //拖动第1列
            if (this.multiIndex[0] != '全部') {
              this.multiArray.splice(1,1,{
                values:['全部', ...counties.find(res=>res.Name === this.multiIndex[0]).Child.map(res => res.Name)],
                defaultIndex:0
              })
            } else {
              this.multiArray.splice(1,1,{
                values:['全部'],
                defaultIndex:0
              })
            }
            break
        }
        // this.$forceUpdate()
      },
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
        border-radius: 15px 15px 0 0;
        background-color: #FFFFFF;
        overflow: auto;

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
  .mubu{
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