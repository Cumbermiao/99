(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["accountAdmin"],{1683:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accountAdminBox"},t._l(t.numberList,(function(e,i){return n("div",{key:i,staticClass:"accountAdminItem"},[n("div",{staticClass:"accountAdminItemFl"},[n("div",{staticClass:"accountAdminItemFlImg"},[n("img",{staticStyle:{width:"35px",height:"35px","vertical-align":"middle"},attrs:{src:e.Logo,mode:""}}),n("div",{staticStyle:{"margin-left":"10px"}},[n("div",{staticStyle:{"font-size":"14px"}},[t._v(" 姓名："+t._s(e.Name)+" ")]),n("div",{staticStyle:{"font-size":"14px"}},[t._v(" 账户："+t._s(e.Account)+" ")])])])]),n("div",{staticClass:"accountAdminItemRl",on:{click:function(n){return t.del(e.Id)}}},[n("div",{},[t._v(" 删除 ")])])])})),0)},a=[],c=n("1da1"),r=(n("96cf"),n("c97a")),s=n("d399"),u={data:function(){return{numberList:[]}},mounted:function(){this.getListNumber(),this.$store.commit("navTop/setRightUrl",{rightUrl:"/balance/newAccount"})},methods:{getListNumber:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/v1/Drawing/GetCardList",{},{custom:{url:"99",nonce:Object(r["a"])(),timestamp:Object(r["b"])(),loading:"加载"}});case 2:n=e.sent,i=n.data,1===i.code&&(s["a"].clear(),t.numberList=i.data);case 5:case"end":return e.stop()}}),e)})))()},del:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.post("/api/v1/Drawing/DeleteCard",{id:t},{custom:{url:"99",nonce:Object(r["a"])(),timestamp:Object(r["b"])()}});case 2:i=n.sent,a=i.data,1===a.code&&(Object(s["a"])("删除成功"),e.getListNumber());case 5:case"end":return n.stop()}}),n)})))()}}},o=u,d=(n("771f"),n("2877")),l=Object(d["a"])(o,i,a,!1,null,null,null);e["default"]=l.exports},"771f":function(t,e,n){"use strict";n("9bf6")},"9bf6":function(t,e,n){}}]);
//# sourceMappingURL=accountAdmin.1ab60576.js.map