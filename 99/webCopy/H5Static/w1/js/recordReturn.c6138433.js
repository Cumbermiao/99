(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["recordReturn"],{a4c8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recordRetuturnBox"},[n("div",{staticStyle:{height:".9375rem",background:"#F7F7F7"}}),n("div",{staticClass:"recordRetuturnList"},t._l(t.infoList,(function(e,r){return n("div",{key:r,staticClass:"recordRetuturnListItem"},[n("div",{staticClass:"headReturn"},[n("div",{},[1===e.ReturnType?n("span",{staticStyle:{color:"#333333","font-weight":"500"}},[t._v("原路返回")]):t._e(),2===e.ReturnType?n("span",{staticStyle:{color:"#333333","font-weight":"500"}},[t._v("兑换等价商品")]):t._e(),1===e.ReturnType?n("span",{staticStyle:{color:"#FF4040","font-weight":"500"}},[t._v("+￥"+t._s(e.DrawingInfo.ReturnAmount))]):t._e()]),n("div",{},[1===e.ReturnType?n("div",{},[1===e.ReturnStatus?n("span",{staticStyle:{color:"#FFB017"}},[t._v("返还中")]):t._e(),2===e.ReturnStatus?n("span",{staticStyle:{color:"#BBBBBB"}},[t._v("已返还")]):t._e(),3===e.ReturnStatus?n("span",{staticStyle:{color:"#FF4040"}},[t._v("返还失败")]):t._e()]):n("div",{},[0===e.OrderInfo.Status?n("span",[t._v("待发货")]):t._e(),1===e.OrderInfo.Status?n("span",[t._v("待发货")]):t._e(),2===e.OrderInfo.Status?n("span",[t._v("待收货")]):t._e(),3===e.OrderInfo.Status?n("span",[t._v("待评价")]):t._e(),4===e.OrderInfo.Status?n("span",[t._v("已完成")]):t._e(),5===e.OrderInfo.Status?n("span",[t._v("换货")]):t._e(),6===e.OrderInfo.Status?n("span",[t._v("关闭")]):t._e()])])]),n("div",{},[e.OrderInfo.ProductTitle?n("span",{staticStyle:{"font-size":".875rem",color:"#999999"}},[n("span",[t._v("商品名称:")]),t._v(" "+t._s(e.OrderInfo.ProductTitle))]):t._e()]),n("div",{staticClass:"foorReturn"},[n("div",{staticStyle:{flex:"1"}},[1===e.ReturnType?n("span",[t._v(t._s(e.DrawingInfo.OrgName)+" "),n("br"),t._v(" "+t._s(e.DrawingInfo.CardNum))]):t._e(),2===e.ReturnType?n("span",[e.OrderInfo.OrderNo?n("span",[t._v("订单号:")]):t._e(),t._v(" "+t._s(e.OrderInfo.OrderNo))]):t._e(),n("br"),2===e.ReturnType?n("span",[e.OrderInfo.ExpressNo?n("span",[t._v("快递单号:")]):t._e(),t._v(" "+t._s(e.OrderInfo.ExpressNo))]):t._e()]),n("div",{},[t._v(" "+t._s(e.Time)+" ")])]),n("div",{staticStyle:{"text-align":"right"}},[2===e.OrderInfo.Status?n("span",{staticStyle:{display:"inline-block",width:"3.75rem",height:"1.875rem","line-height":"1.875rem","font-size":".75rem",background:"#007AFF",color:"#FFFFFF","text-align":"center","border-radius":".3125rem"},on:{click:function(n){return t.receivingGoods(e)}}},[t._v("确认收货")]):t._e()])])})),0),n("uni-load-more",{attrs:{status:t.status,"icon-size":14,"content-text":t.contentText}})],1)},a=[],o=n("1da1"),s=(n("96cf"),n("99af"),n("c97a")),i=n("d399"),c=n("2241"),u={data:function(){return{infoList:[],pagesize:10,pageIndex:1,reload:!1,totalCount:0,status:"more",contentText:{contentdown:"上拉加载更多~",contentrefresh:"加载中",contentnomore:"没有更多数据了~"},PriceAreaId:""}},onReachBottom:function(){this.totalCount>this.infoList.length?(this.pageIndex++,this.getList()):this.status="noMore"},created:function(){var t=this.$route.query;this.getList(t.PriceAreaId),this.PriceAreaId=t.PriceAreaId},methods:{getList:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.post("/api/v1/WinBack/Record",{pageIndex:e.pageIndex,pageSize:e.pagesize,priceAreaId:t},{custom:{url:"99",nonce:Object(s["a"])(),timestamp:Object(s["b"])(),loading:"加载"}});case 2:r=n.sent,a=r.data,1===a.code&&(i["a"].clear(),e.totalCount=a.data.totalCount,a.data.totalCount>0?(o=a.data.list,e.infoList=e.reload?o:e.infoList.concat(o),e.reload=!1):e.infoList=[],e.totalCount===e.infoList.length&&(e.reload=!1,e.status="noMore"));case 5:case"end":return n.stop()}}),n)})))()},receivingGoods:function(t){var e=this,n=this;c["a"].confirm({title:"提示",message:"是否确认收货"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$http.post("/api/v1/WinBack/ConfirmReceive",{orderId:t.OrderInfo.OrderId},{custom:{url:"99",nonce:Object(s["a"])(),timestamp:Object(s["b"])(),loading:"加载"}});case 2:a=r.sent,o=a.data,1===o.code&&(Object(i["a"])("收货成功"),e.infoList=[],n.getList(n.PriceAreaId));case 5:case"end":return r.stop()}}),r)}))))}}},d=u,l=(n("c521"),n("2877")),p=Object(l["a"])(d,r,a,!1,null,null,null);e["default"]=p.exports},c521:function(t,e,n){"use strict";n("ef4c")},ef4c:function(t,e,n){}}]);
//# sourceMappingURL=recordReturn.c6138433.js.map