(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shopList"],{"17d3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACuklEQVR4Xu2a64uNURSHn/mfaFwyLjEkmuSaiEluSZIkSSRJkiQJSSJJLkkzyS1miCG++kt88kmrfJh0zt7rnFlr73XOed+v737X/v2evfY+++y1hxjwZ2jA/dMAaDJgwAk0U2DAE6BnFsEDwNZ/gzUFnLUauF6YAmL2zH+GtwBPLCBEB3AOON3CqJgXCHN+IgM4D5xq4/AmcHDO7iHsGnABOJkwuBz42K8ALgInEubM5r/0EW0KXAKOlzIfDcBl4FhJ85EAXAGOljYfBcBV4EgN8xEAXAMO1zJfG8B14FBN8zUB3MhsZDYBzyx+53MxavwMyi5uf0LYBuBFTrjV+9IAbgN7E+LHgJdW5jRxSgK4A+xJiFoHTGpEW7YpBeAuMJ4QvhZ4ZWlMG6sEgHvAroSg1cAbrWDrdt4A7gM7E6JXAe+sTXUSzxPAA2BHQswK4EMnYj3aegF4CGxPCF4KTHsY6jSmB4BHwLaEkCXA506FerW3BvA4c1a3CPjqZaabuJYA9gG3EiIWAN+6Een5jSUA2cGtbyN2PvDD00i3sS0ByIq+rI2QecDPbkV6fmcJQIoXqYpNSAiWAGSgWlVxZg9gOAjWAHoOggcADYQwi6IXAA2EYeC75wKnie0JQPrPLYwLgRmNUK823gA0mbAY+OJlMBe3BAANhBHgU06sx/tSADQQZBMltz+KPiUBaNaE4mcEpQFoMmEl8L5UGtQAoIEwCrwtAaEWAA2ENcBrbwg1AWjWBPfj8toANJkgZwwTXpkQAYAGglvJLAoADQSXomkkABoIG4HnltMhGgANhM3AUysIEQHkIPwGpJ5o8gcqKoAcBKk8pcpu6gSJDCC1T+j7u8KzR7DVQWtf3xVulb67AdkV/gHkIvUvdY5nGkafAlY+28ZpALgjDt5BkwHBB8hdXpMB7oiDd/AXxZBmQfRuCOMAAAAASUVORK5CYII="},"2bdd":function(t,e,i){"use strict";var n=i("d282"),a=i("02de"),r=i("a8c1"),s=i("5fbe"),o=i("543e"),c=Object(n["a"])("list"),d=c[0],u=c[1],l=c[2];e["a"]=d({mixins:[Object(s["a"])((function(t){this.scroller||(this.scroller=Object(r["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,r=t.offset,s=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var o=e.bottom-e.top;if(!o||Object(a["a"])(i))return!1;var c=!1,d=t.$refs.placeholder.getBoundingClientRect();c="up"===s?e.top-d.top<=r:d.bottom-e.bottom<=r,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:u("loading")},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||l("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:u("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:u("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",key:"placeholder",class:u("placeholder")});return t("div",{class:u(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},"543ea":function(t,e,i){"use strict";i("99e1")},"5dd1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top1"},[n("img",{attrs:{src:i("17d3"),mode:""},on:{click:t.back}}),t._v(" "+t._s(t.heartTitle)+" "),n("div",{staticClass:"top1-1",on:{click:t.toFugouList}},[t._v("满单记录")])]),n("div",{staticClass:"top"},[t._v(" 今日已做任务"+t._s(t.todayAreaTaskCount)+"次；累计已完成订单"+t._s(t.totalAreaOrderWinningCount)+"条 ")]),n("list",{staticClass:"shop-list",on:{load:t.scrollChange}},[t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"shop-item",on:{click:function(i){return t.goGoodsDetail(e)}}},[n("div",{staticClass:"shop-img",style:{backgroundImage:"url("+e.MainImage+"!200r80)"}}),n("div",{staticClass:"shop-content"},[t._v(t._s(e.Title))]),n("div",{staticClass:"shop-num"},[n("div",{staticClass:"left"},[t._v("￥"),n("div",{staticStyle:{display:"inline-block","font-size":"15px"}},[t._v(t._s(t.price1(e.Price)))]),t._v(" ."+t._s(t.price2(e.Price)))]),n("div",{staticClass:"right"},t._l(5,(function(t){return n("image",{key:t+100,attrs:{src:"https://static.jiujiupingou.com/H5Static/images/tg_ic_star.png",mode:""}})})),0)]),n("div",{staticClass:"shop-btn"},[t._v("立即团购")])])})),0===t.list.length?n("div",{staticStyle:{"padding-top":"50%"}},[n("no-data")],1):t._e()],2)],1)},a=[],r=i("1da1"),s=(i("96cf"),i("ac1f"),i("1276"),i("99af"),i("2bdd")),o=i("d399"),c=i("2241"),d=i("df09"),u=i("c97a"),l={components:{NoData:d["a"],List:s["a"]},data:function(){return{priceAreaId:"",pageSize:20,pageIndex:1,list:[],ajaxKey:!0,todayAreaTaskCount:"",totalAreaOrderWinningCount:"",price:"",heartTitle:""}},computed:{price1:function(){return function(t){var e=t+"";return e.split(".")[0]}},price2:function(){return function(t){var e=t+"";return e.split(".")[1]?1===e.split(".")[1].length?e.split(".")[1]+"0":e.split(".")[1]:"00"}}},onBackPress:function(){this.$router.go(-1)},created:function(){var t=this.$route.query;this.heartTitle=t.price+"专区",this.price=t.price,this.priceAreaId=t.priceAreaId,this.showKey=t.showKey||1,1===this.showKey&&this.getManyPGArea()},mounted:function(){this.pageIndex=1,this.getList(!0),this.getToDateTaskNum()},methods:{toFugouList:function(){this.$router.push("/newTeam/orderListFugou?priceAreaId="+this.priceAreaId)},back:function(){this.$router.push({path:"/home/newTeam",replace:!0})},getToDateTaskNum:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/v3/ManyPGProduct/GetToDateTaskNum",{priceAreaId:t.priceAreaId},{custom:{url:"99",nonce:Object(u["a"])(),timestamp:Object(u["b"])(),loading:"加载"}});case 2:i=e.sent,n=i.data,1===n.code&&(o["a"].clear(),t.todayAreaTaskCount=n.data.todayAreaTaskCount,t.totalAreaOrderWinningCount=n.data.totalAreaOrderWinningCount);case 5:case"end":return e.stop()}}),e)})))()},getManyPGArea:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/v1/ManyPG/ManyPGArea",{id:t.priceAreaId},{custom:{url:"99",nonce:Object(u["a"])(),timestamp:Object(u["b"])(),loading:"加载"}});case 2:i=e.sent,n=i.data,1===n.code&&(o["a"].clear(),1===n.data.IsWinningTen&&c["a"].confirm({title:"",message:"该专区中奖满10单，点击确定参与复购（由于复购订单巨大，预计7天内发货）",confirmText:"确认",showCancel:!1,confirmColor:"#FF1738"}).then((function(){t.$router.push("/groupworkdetails/fugouList?priceAreaId="+t.priceAreaId+"&Price="+t)})));case 5:case"end":return e.stop()}}),e)})))()},scrollChange:function(){this.ajaxKey&&(this.pageIndex++,this.getList(!1,1))},goGoodsDetail:function(t){this.$router.push("/newTeam/goodsDetail?mpId="+t.ProductId)},getList:function(){var t=arguments,e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var n,a,r,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=t.length>0&&void 0!==t[0]&&t[0],a=t.length>1?t[1]:void 0,e.ajaxKey){i.next=5;break}return 1==a&&e.pageIndex--,i.abrupt("return");case 5:return e.ajaxKey=!1,o["a"].loading({duration:0,message:"正在加载...",forbidClick:!0}),i.next=9,e.$http.post("/api/v3/ManyPGProduct/GetList",{priceAreaId:e.priceAreaId,pageSize:e.pageSize,pageIndex:e.pageIndex},{custom:{url:"99",nonce:Object(u["a"])(),timestamp:Object(u["b"])(),loading:"加载"}});case 9:if(r=i.sent,o["a"].clear(),s=r.data,1!==s.code){i.next=19;break}if(o["a"].clear(),0!==s.data.list.length){i.next=17;break}return e.ajaxKey=!1,i.abrupt("return");case 17:e.list=n?s.data.list:e.list.concat(s.data.list),e.ajaxKey=!0;case 19:case"end":return i.stop()}}),i)})))()}}},g=l,h=(i("ab4f"),i("2877")),p=Object(h["a"])(g,n,a,!1,null,null,null);e["default"]=p.exports},"99e1":function(t,e,i){},a495:function(t,e,i){},ab4f:function(t,e,i){"use strict";i("a495")},df09:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"no-date"},[i("img",{attrs:{src:t.imgSrc("nodate.png"),mode:""}}),i("div",[t._v("暂无数据哟~")])])},a=[],r=i("da71"),s={computed:{imgSrc:function(){return function(t){return r["d"]+t}}}},o=s,c=(i("543ea"),i("2877")),d=Object(c["a"])(o,n,a,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=shopList.ae8e8ebf.js.map