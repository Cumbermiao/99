(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["consumptionJIn"],{"587b":function(t,e,a){},7143:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"consumptionJinBox"},[a("div",{staticClass:"balanceHead",style:t.balanceHeadStyle},[a("div",{},[a("div",{staticClass:"title"},[t._v(" 剩余消费金 ")]),a("div",{staticClass:"balanceNumber"},[t._v(" "+t._s(t.consumeBalance)+" ")]),a("div",{staticStyle:{"font-size":".75rem",padding:"1.625rem 0rem 0rem 1.625rem",color:"rgb(255,255,255)"}},[t._v(" 注：消费使用时，不足1个消费金将按1个消费金计算 ")])])]),t._l(t.infoList,(function(e,n){return a("div",{key:n,staticClass:"balanceDetailed",staticStyle:{"border-bottom":".0625rem solid #EEEEEE"}},[a("div",[a("div",{staticClass:"balanceDetailedHead"},[a("div",{staticClass:"time"},[t._v(" 到账时间 ")]),a("div",{staticClass:"time"},[t._v(" "+t._s(e.CreateTime)+" ")])]),a("div",{staticClass:"balanceDetailedFoorter"},[a("div",{staticClass:"item"},[t._v(" "+t._s(e.Remark)+" ")]),a("div",{staticClass:"jine"},[t._v(" + "+t._s(e.ConsumeMoney)+" ")])])])])}))],2)},s=[],i=a("1da1"),o=(a("96cf"),a("99af"),a("d399")),c=a("da71"),r=a("c97a"),l={data:function(){return{infoList:[],consumeBalance:0,pageIndex:1,pageSize:10,totalCount:0,reload:!1,status:"more",contentText:{contentdown:"上拉加载更多~",contentrefresh:"加载中",contentnomore:"没有更多数据了~"}}},computed:{balanceHeadStyle:function(){return{backgroundImage:c["d"]?"url("+c["d"]+"bag_1.png)":""}}},created:function(){var t=this.$route.query;this.consumeBalance=t.consumeBalance,this.getInfo()},methods:{getInfo:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.status="loading",e.next=3,t.$http.post("/api/v1/ConsumeRecord/GetList",{pageIndex:t.pageIndex,pageSize:t.pageSize},{custom:{url:"99",nonce:Object(r["a"])(),timestamp:Object(r["b"])(),loading:"加载"}});case 3:a=e.sent,n=a.data,1===n.code&&(o["a"].clear(),t.totalCount=n.data.totalCount,n.data.totalCount>0?(s=n.data.list,t.infoList=t.reload?s:t.infoList.concat(s),t.reload=!1):t.infoList=[],t.totalCount===t.infoList.length&&(t.reload=!1,t.status="noMore"));case 6:case"end":return e.stop()}}),e)})))()}}},d=l,u=(a("7979"),a("2877")),m=Object(u["a"])(d,n,s,!1,null,null,null);e["default"]=m.exports},7979:function(t,e,a){"use strict";a("587b")}}]);
//# sourceMappingURL=consumptionJIn.3cd16aee.js.map