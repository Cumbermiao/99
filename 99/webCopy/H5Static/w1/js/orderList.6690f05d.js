(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderList"],{"62e5":function(t,e,r){},"8c1a":function(t,e,r){"use strict";r("62e5")},f104:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orderListBox"},[0===t.commodityList.length?r("div",{staticStyle:{display:"flex","justify-content":"center","padding-top":"6.25rem"}},[r("img",{staticStyle:{width:"10.125rem"},attrs:{src:t.imgSrc("test.png"),mode:"widthFix"}})]):r("div",{},t._l(t.commodityList,(function(e,i){return r("div",{key:i,staticClass:"orderListItem"},[r("div",{staticClass:"orderListItemHead",on:{click:function(r){return t.daizhifu(e)}}},[4===e.OrderStatus?r("div",{staticClass:"orderListItemHeadFl",staticStyle:{"font-size":".875rem",height:"1.3125rem"}},[r("span",[t._v("付款时间："+t._s(e.PayTime))])]):r("div",{staticClass:"orderListItemHeadRl"},[0===e.OrderStatus?r("span",{staticStyle:{"font-size":".875rem"}},[t._v("等待买家付款")]):1===e.OrderStatus?r("span",{staticStyle:{"font-size":".875rem"}},[t._v("待发货")]):2===e.OrderStatus?r("span",{staticStyle:{"font-size":".875rem"}},[t._v("待收货")]):t._e()])]),r("div",{staticClass:"orderListItemMain",on:{click:function(r){return t.daizhifu(e)}}},[r("div",{staticClass:"orderListItemMainFl"},[r("img",{staticStyle:{width:"6.71875rem",height:"6.71875rem"},attrs:{src:e.ProductMainImage,mode:""}})]),r("div",{staticClass:"orderListItemMainRl"},[r("div",{staticClass:"orderListItemMainRlName"},[t._v(" "+t._s(e.ProductTitle)+" ")]),r("div",{staticClass:"orderListItemPalyFl"},[r("div",{staticClass:"title"},[r("span",[t._v("商品单价:")]),t._v(" ￥"+t._s(e.UnitPrice))]),r("div",{staticClass:"num"},[t._v("购买数量×"+t._s(e.Number))])]),r("div",{staticClass:"orderListItemMainRlBao"},[r("div",{staticClass:"title"},[r("span",[t._v("订单号:"+t._s(e.OrderNo))])]),r("div",{staticClass:"orderListItemPalyRl"},[r("span",[t._v("实付款:")]),r("span",{staticStyle:{color:"#FF4200"}},[t._v("￥"+t._s(e.PayPrice))])])])])]),r("div",{staticClass:"orderListItemPaly",on:{click:function(r){return t.daizhifu(e)}}},[r("div",{staticClass:"img"},t._l(5,(function(t,e){return r("img",{key:e,staticStyle:{width:"1.3125rem"},attrs:{src:"http://web991-oss.jiujiupingou.com/img/001.png",mode:"widthFix"}})})),0),r("div",{staticClass:"title"},[t._v("大陆地区包邮")])]),r("div",{staticClass:"orderListItemFoorBtn"},[0===e.OrderStatus?r("span",{staticClass:"orderBtnRrey close",on:{click:function(r){return t.cancelOrder(e)}}},[t._v("取消订单")]):t._e(),0!==e.OrderStatus?r("span",{staticClass:"orderBtnRrey",on:{click:function(r){return t.orderListDetails(e.OrderId,e)}}},[t._v("订单详情")]):t._e(),0===e.OrderStatus?r("span",{staticClass:"orderBtnRed",on:{click:function(r){return t.payment(e)}}},[t._v("付款")]):t._e(),0!==e.OrderStatus&&4!==e.OrderStatus&&1!==e.OrderStatus?r("span",{staticClass:"orderBtnRed save",on:{click:function(r){return t.confirmReceipt(e.OrderId)}}},[t._v("确定收货")]):t._e()])])})),0)])},s=[],a=r("1da1"),n=(r("96cf"),r("da71")),o=r("c97a"),d=r("d399"),c=r("2241"),u={data:function(){return{orderTypeStr:null,orderType:null,pageSize:9999,pageIndex:1,commodityList:[],reload:!1,status:"more",contentText:{contentdown:"上拉加载更多~",contentrefresh:"加载中",contentnomore:"我是有底线的~"}}},computed:{imgSrc:function(){return function(t){return n["d"]+t}}},created:function(){var t=this.$route.query;this.navtitle(t)},onBackPress:function(){return this.$router.push({path:"/home/user",replace:!0}),!0},mounted:function(){this.getOrderList()},methods:{daizhifu:function(t){0===t.OrderStatus&&this.$router.push("/orderListDetails?orderType="+this.orderType+"&id="+t.OrderId+"&OrderStatus="+t.OrderStatus+"&CreateTime="+t.CreateTime)},navtitle:function(t){this.orderType=t.orderType,"All"===t.orderType?this.orderTypeStr="全部订单":"WaitPay"===t.orderType?this.orderTypeStr="待支付":"WaitSend"===t.orderType?this.orderTypeStr="待发货":"WaitReceive"===t.orderType?this.orderTypeStr="待收货":"Complete"===t.orderType&&(this.orderTypeStr="完成订单"),this.$store.commit("navTop/setTitle",{title:this.orderTypeStr})},getOrderList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/v1/MyOrder/GetOrderList",{pageIndex:t.pageIndex,pageSize:t.pageSize,orderType:t.orderType},{custom:{url:"99",nonce:Object(o["a"])(),timestamp:Object(o["b"])(),loading:"加载"}});case 2:r=e.sent,i=r.data,1===i.code&&(d["a"].clear(),t.commodityList=i.data);case 5:case"end":return e.stop()}}),e)})))()},orderListDetails:function(t,e){this.$router.push("/orderList/orderListDetails?orderType="+this.orderType+"&id="+t+"&OrderStatus="+e.OrderStatus)},confirmReceipt:function(t){var e=this,r=this;c["a"].confirm({title:"提示",message:"是否确认收货",showCancelButton:!0}).then(Object(a["a"])(regeneratorRuntime.mark((function i(){var s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,r.$http.post("/api/v1/MyOrder/ConfirmReceive",{orderid:t},{custom:{url:"99",nonce:Object(o["a"])(),timestamp:Object(o["b"])(),loading:"加载"}});case 2:s=i.sent,s&&1==s.data.code&&(Object(d["a"])("收货成功"),e.getOrderList());case 4:case"end":return i.stop()}}),i)}))))},payment:function(t){1===t.IsManyPGPurchase?this.$router.push("/groupworkdetails/fugoupay?orderId="+t.OrderId+"&shifu="+t.PayPrice+"&createTime="+t.CreateTime):this.$router.push("/confirmOrder/GoPay?orderId="+t.OrderId+"&shifukuan="+t.PayPrice+"&createTime="+t.CreateTime)},cancelOrder:function(t){var e=this;c["a"].confirm({title:"提示",message:"是否取消订单"}).then(Object(a["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.post("/api/v1/MyOrder/CancelOrder",{orderId:t.OrderId},{custom:{url:"99",nonce:Object(o["a"])(),timestamp:Object(o["b"])(),loading:"加载"}});case 2:i=r.sent,i&&1==i.data.code&&(Object(d["a"])("取消成功"),e.getOrderList());case 4:case"end":return r.stop()}}),r)}))))}}},l=u,m=(r("8c1a"),r("2877")),p=Object(m["a"])(l,i,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=orderList.6690f05d.js.map