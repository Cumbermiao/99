(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderQrcode"],{d9be:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[e._m(0),r("div",{staticStyle:{"margin-top":"20px","text-align":"center",display:"flex","justify-content":"center"}},[r("div",{staticStyle:{width:"109px",height:"109px"}},[r("div",{ref:"myQrcode"})])]),e.OrderNo?r("div",{staticStyle:{color:"red","text-align":"center","margin-top":"30px"}},[e._v(" 订单号: "+e._s(e.OrderNo)+" ")]):r("div",{staticStyle:{color:"red","text-align":"center","margin-top":"30px"}},[e._v(" 订单号: "+e._s(e.orderId)+" ")]),r("div",{staticStyle:{color:"red","text-align":"center","margin-top":"10px"}},[e._v(" 该二维码仅限本订单使用 ")]),r("div",{staticStyle:{"text-align":"center","font-size":"12px",color:"red","margin-top":"20px"}},[e._v(" 支付确认中"+e._s(e.zhifuqurenzhong)+" ")]),r("div",{staticStyle:{"text-align":"center","margin-top":"70px"},on:{click:e.cancelBtn}},[e._v(" 返回首页 ")])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"text-align":"center"}},[e._v("检测到您当前不在九九生活APP内"),r("br"),e._v("请截图后用【支付宝】扫码支付")])}],a=r("1da1"),o=(r("96cf"),r("d044")),c=r.n(o),s=r("c97a"),d=r("d399"),u={data:function(){return{orderId:null,OrderNo:null,zhifuqurenzhong:"",ishavepay:0}},created:function(){var e=this.$route.query;this.token=e.token,d["a"].loading({duration:0,message:"支付确认中..."}),this.$nextTick((function(){if(e.OrderNo&&(this.OrderNo=e.OrderNo),this.orderId=e.orderId,e.url.indexOf(".alipay.com")>0)this.initQrCode(e.url);else{var t=e.url;this.token&&(t=t+"&token="+this.token);var r=encodeURIComponent(t),n="alipays://platformapi/startapp?appId=20000067&url="+r;this.initQrCode(n)}0===this.ishavepay&&this.payload()}))},destroyed:function(){this.ishavepay=1,d["a"].clear()},methods:{payload:function(){switch(this.zhifuqurenzhong){case"":this.zhifuqurenzhong=".";break;case".":this.zhifuqurenzhong="..";break;case"..":this.zhifuqurenzhong="...";break;case"...":this.zhifuqurenzhong="";break;default:}this.havepay(),setTimeout(this.payload,1e3)},havepay:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.ishavepay){t.next=6;break}return t.next=3,e.$http.post("/api/v1/MyOrder/GetOrderPayStatus",{orderId:e.orderId},{custom:{url:"99",nonce:Object(s["a"])(),timestamp:Object(s["b"])()}});case 3:r=t.sent,n=r.data,1===n.code&&n.data&&(e.ishavepay=1,d["a"].clear(),e.$router.push("/confirmOrder/wanPayment"));case 6:case"end":return t.stop()}}),t)})))()},initQrCode:function(e){new c.a(this.$refs.myQrcode,{text:e,width:115,height:115,padding:12,correctLevel:c.a.CorrectLevel.H})},cancelBtn:function(){this.$router.push("/hpme/index")}}},h=u,l=r("2877"),p=Object(l["a"])(h,n,i,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=orderQrcode.ba90e72c.js.map