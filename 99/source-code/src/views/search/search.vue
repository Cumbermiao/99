<template>
  <div class="content">
    <div class="search-box">
      <!-- mSearch组件 如果使用原样式，删除组件元素-->
      <!-- 	<mSearch class="mSearch-input-box" :mode="2" button="inside" :placeholder="defaultKeyword"
				@search="doSearch(false)" @input="inputChange" @confirm="doSearch(false)" v-model="keyword"></mSearch> -->
      <!-- 原样式 如果使用原样式，恢复下方注销代码 -->

      <div class="input-box">
        <input type="text" :adjust-position="true" :placeholder="defaultKeyword" @input="inputChange" v-model="keyword"
          @confirm="doSearch(false)" placeholder-class="placeholder-class" confirm-type="search">
      </div>
      <div class="search-btn" @tap="doSearch(false)">搜索</div>

      <!-- 原样式 end -->
    </div>
    <div class="search-keyword">
      <list class="keyword-list-box" v-show="isShowKeywordList" scroll-y>
        <block v-for="(row,index) in keywordList" :key="index">
          <div class="keyword-entry" hover-class="keyword-entry-tap">
            <div class="keyword-text" @tap.stop="doSearch(keywordList[index].keyword)">
              <rich-text :nodes="row.htmlStr"></rich-text>
            </div>
            <div class="keyword-img" @tap.stop="setKeyword(keywordList[index].keyword)">
              <img src="/static/HM-search/back.png">
            </div>
          </div>
        </block>
      </list>
      <list class="keyword-box" v-show="!isShowKeywordList" scroll-y>
        <div class="keyword-block" v-if="oldKeywordList.length>0">
          <div class="keyword-list-header">
            <div>历史搜索</div>
            <div>
              <img @tap="oldDelete" src="/static/HM-search/delete.png">
            </div>
          </div>
          <div class="keyword">
            <div v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword)" @longtap="longtap(keyword,index)"
              :key="index">
              {{keyword}}</div>
          </div>
        </div>
        <div class="keyword-block">
          <div class="keyword-list-header">
            <div>热门搜索</div>
            <div>
              <img @tap="hotToggle" :src="'/static/HM-search/attention'+forbid+'.png'">
            </div>
          </div>
          <div class="keyword" v-if="forbid==''">
            <div v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">
              {{keyword}}</div>
          </div>
          <div class="hide-hot-tis" v-else>
            <div>当前搜热门搜索已隐藏</div>
          </div>
        </div>
      </list>
    </div>
  </div>
</template>

<script>
  // import mSearch from '@/components/mehaotian-search-revision/mehaotian-search-revision.vue';
  import {
    Dialog,
    List
  } from 'vant';
  import axios from 'axios'
  export default {
    data() {
      return {
        defaultKeyword: "",
        keyword: "",
        oldKeywordList: [],
        hotKeywordList: [],
        keywordList: [],
        forbid: '',
        isShowKeywordList: false
      }
    },
    created() {
      this.init();
    },
    components: {
      //引用mSearch组件，如不需要删除即可
      // mSearch,
      List
    },
    methods: {
      init() {
        this.loadDefaultKeyword();
        this.loadOldKeyword();
        this.loadHotKeyword();

      },
      blur() {
        // uni.hideKeyboard()
      },
      // 长按搜索历史
      longtap(keyword, index) {
        Dialog.confirm({
          content: '是否删除该条记录',
          success: (res) => {
            if (res.confirm) {
              this.oldKeywordList.splice(index, 1)
              location.setStorage('OldKeys', JSON.stringify(this.oldKeywordList));
            } else {
              // console.log('用户取消了')
            }
          }
        })
      },
      //加载默认搜索关键字
      loadDefaultKeyword() {
        //定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
        this.defaultKeyword = "默认关键字";
      },
      //加载历史搜索,自动读取本地Storage
      loadOldKeyword() {
        let res = location.getStorage('OldKeys');
        var OldKeys = JSON.parse(res.data);
        this.oldKeywordList = OldKeys;
      },
      //加载热门搜索
      loadHotKeyword() {
        //定义热门搜索关键字，可以自己实现ajax请求数据再赋值
        this.hotKeywordList = ['键盘', '鼠标', '显示器', '电脑主机', '蓝牙音箱', '笔记本电脑', '鼠标垫', 'USB', 'USB3.0'];
      },
      //监听输入
      inputChange(event) {
        //兼容引入组件时传入参数情况
        var keyword = event.detail ? event.detail.value : event;
        if (!keyword) {
          this.keywordList = [];
          this.isShowKeywordList = false;
          return;
        }
        this.isShowKeywordList = true;
        //以下示例截取淘宝的关键字，请替换成你的接口
        axios.get({
          url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + keyword, //仅为示例
          success: (res) => {
            this.keywordList = [];
            this.keywordList = this.drawCorrelativeKeyword(res.data.result, keyword);

          }
        });
      },
      //高亮关键字
      drawCorrelativeKeyword(keywords, keyword) {
        var len = keywords.length,
          keywordArr = [];
        for (var i = 0; i < len; i++) {
          var row = keywords[i];
          //定义高亮#9f9f9f
          var html = row[0].replace(keyword, "<span style='color: #9f9f9f;'>" + keyword + "</span>");
          html = '<div>' + html + '</div>';
          var tmpObj = {
            keyword: row[0],
            htmlStr: html
          };
          keywordArr.push(tmpObj)
        }
        return keywordArr;
      },
      //顶置关键字
      setKeyword(index) {
        this.keyword = this.keywordList[index].keyword;
      },
      //清除历史搜索
      oldDelete() {
        Dialog.confirm({
          content: '确定清除历史搜索记录？',
          success: (res) => {
            if (res.confirm) {
              // console.log('用户点击确定');
              this.oldKeywordList = [];
              location.removeStorage('OldKeys');
            } else if (res.cancel) {
              // console.log('用户点击取消');
            }
          }
        });
      },
      //热门搜索开关
      hotToggle() {
        this.forbid = this.forbid ? '' : '_forbid';
      },
      //执行搜索
      doSearch(keyword) {
        keyword = keyword === false ? this.keyword : keyword;
        this.keyword = keyword;
        this.saveKeyword(keyword); //保存为历史
        this.$router.push('/search/searchdetails')
      },
      //保存关键字到历史记录
      saveKeyword(keyword) {
        let res = location.getStorage('OldKeys');
        if (res) {
          var OldKeys = JSON.parse(res.data);
          var findIndex = OldKeys.indexOf(keyword);
          if (findIndex == -1) {
            OldKeys.unshift(keyword);
          } else {
            OldKeys.splice(findIndex, 1);
            OldKeys.unshift(keyword);
          }
          //最多10个纪录
          OldKeys.length > 10 && OldKeys.pop();
          location.setStorage('OldKeys', JSON.stringify(OldKeys));
          this.oldKeywordList = OldKeys; //更新历史搜索
        } else {
          OldKeys = [keyword];
          location.setStorage('OldKeys', JSON.stringify(OldKeys));
          this.oldKeywordList = OldKeys; //更新历史搜索
        }
      }
    }
  }
</script>
<style>
  view {
    display: block;
  }

  .search-box {
    width: 95%;
    background-color: rgb(242, 242, 242);
    padding: .46875rem 2.5%;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
  }

  .search-box .mSearch-input-box {
    width: 100%;
  }

  .search-box .input-box {
    width: 85%;
    flex-shrink: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-box .search-btn {
    width: 15%;
    margin: 0 0 0 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    font-size: .875rem;
    color: #fff;
    background: linear-gradient(to right, #ff9801, #ff570a);
    border-radius: 1.875rem;
  }

  .search-box .input-box>input {
    width: 100%;
    height: 1.875rem;
    font-size: 1rem;
    border: 0;
    border-radius: 1.875rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0 3%;
    margin: 0;
    background-color: #ffffff;
  }

  .placeholder-class {
    color: #9e9e9e;
  }

  .search-keyword {
    width: 100%;
    background-color: rgb(242, 242, 242);
  }

  .keyword-list-box {
    height: calc(100vh - 3.4375rem);
    padding-top: .3125rem;
    border-radius: .625rem .625rem 0 0;
    background-color: #fff;
  }

  .keyword-entry-tap {
    background-color: #eee;
  }

  .keyword-entry {
    width: 94%;
    height: 2.5rem;
    margin: 0 3%;
    font-size: .9375rem;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid .03125rem #e7e7e7;
  }

  .keyword-entry image {
    width: 1.875rem;
    height: 1.875rem;
  }

  .keyword-entry .keyword-text,
  .keyword-entry .keyword-img {
    height: 2.5rem;
    display: flex;
    align-items: center;
  }

  .keyword-entry .keyword-text {
    width: 90%;
  }

  .keyword-entry .keyword-img {
    width: 10%;
    justify-content: center;
  }

  .keyword-box {
    height: calc(100vh - 3.4375rem);
    border-radius: .625rem .625rem 0 0;
    background-color: #fff;
  }

  .keyword-box .keyword-block {
    padding: .3125rem 0;
  }

  .keyword-box .keyword-block .keyword-list-header {
    width: 94%;
    padding: .3125rem 3%;
    font-size: .84375rem;
    color: #333;
    display: flex;
    justify-content: space-between;
  }

  .keyword-box .keyword-block .keyword-list-header image {
    width: 1.25rem;
    height: 1.25rem;
  }

  .keyword-box .keyword-block .keyword {
    width: 94%;
    padding: .1875rem 3%;
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
  }

  .keyword-box .keyword-block .hide-hot-tis {
    display: flex;
    justify-content: center;
    font-size: .875rem;
    color: #6b6b6b;
  }

  .keyword-box .keyword-block .keyword>view {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.875rem;
    padding: 0 .625rem;
    margin: .3125rem .625rem .3125rem 0;
    height: 1.875rem;
    font-size: .875rem;
    background-color: rgb(242, 242, 242);
    color: #6b6b6b;
  }
</style>