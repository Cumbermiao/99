(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["xuanzeshop"],{"20b9":function(e,t,i){"use strict";i("7b50")},"7b50":function(e,t,i){},ead1:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"commoditypreview"},[e._l(e.commodityList,(function(t,r){return i("div",{key:r,staticClass:"mainFooterBox"},[i("div",{on:{click:function(i){return e.toUrl("/groupworkdetails/commodittypepreviewDeatils?pid="+t.ProductId+"&type=xuan&OrderId="+e.OrderId+"&pirceTitle="+e.pirceTitle+"&priceAreaId="+e.priceAreaId)}}},[i("div",{staticClass:"shopImg"},[i("img",{attrs:{src:t.MainImage,mode:""}})])]),i("div",{staticStyle:{height:"36px","line-height":"36px","text-align":"center","background-color":"#D50606",color:"#FFFFFF","border-radius":"0px 0px 10px 10px"},on:{click:function(i){return e.selectNow(t)}}},[e._v(" 立即选取 ")])])})),0===e.commodityList.length?i("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoadMore,expression:"isLoadMore"}]}):e._e()],2)},o=[],a=i("1da1"),n=(i("96cf"),i("d399")),s=i("c97a"),c={data:function(){return{commodityList:[],priceAreaId:null,pageIndex:1,pageSize:10,loadStatus:"loading",isLoadMore:!1,OrderId:"",pirceTitle:""}},components:{},created:function(){var e=this.$route.query;this.$store.commit("navTop/setTitle",{title:e.pirceTitle+"-商品列表"}),this.pirceTitle=e.pirceTitle,this.priceAreaId=e.priceAreaId,this.OrderId=e.OrderId,this.getList()},onBackPress:function(){return this.$router.push("/ManyPGOrderList/ManyPGOrderList?type=Winning"),!0},onReachBottom:function(){this.isLoadMore||this.commodityList.length>=10&&(this.isLoadMore=!0,this.pageIndex+=1,this.getList())},methods:{getList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("/api/v1/product/getlist",{priceareaid:e.priceAreaId,pageIndex:e.pageIndex,pageSize:e.pageSize},{custom:{url:"99",nonce:Object(s["a"])(),timestamp:Object(s["b"])(),loading:"加载"}});case 2:if(i=t.sent,r=i.data,1===r.code){for(n["a"].clear(),o=0;o<r.data.list.length;o++)e.commodityList.push(r.data.list[o]);e.totalCount=r.data.totalCount,e.commodityList.length===e.totalCount&&(e.isLoadMore=!1)}case 5:case"end":return t.stop()}}),t)})))()},selectNow:function(e){this.$router.push("/groupworkdetails/selectNow?ProductId="+e.ProductId+"&OrderId="+this.OrderId+"&pirceTitle="+this.pirceTitle+"&priceAreaId="+this.priceAreaId)}}},d=c,p=(i("20b9"),i("2877")),u=Object(p["a"])(d,r,o,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=xuanzeshop.7325f90c.js.map