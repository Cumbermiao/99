(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["manyPGOrderListDetails"],{"057f":function(t,e,r){var i=r("fc6a"),a=r("241c").f,s={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return a(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==s.call(t)?o(t):a(i(t))}},"159b":function(t,e,r){var i=r("da84"),a=r("fdbc"),s=r("17c2"),n=r("9112");for(var o in a){var c=i[o],d=c&&c.prototype;if(d&&d.forEach!==s)try{n(d,"forEach",s)}catch(l){d.forEach=s}}},"17c2":function(t,e,r){"use strict";var i=r("b727").forEach,a=r("a640"),s=a("forEach");t.exports=s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"4de4":function(t,e,r){"use strict";var i=r("23e7"),a=r("b727").filter,s=r("1dde"),n=s("filter");i({target:"Array",proto:!0,forced:!n},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},6356:function(t,e,r){},"746f":function(t,e,r){var i=r("428f"),a=r("5135"),s=r("e538"),n=r("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});a(e,t)||n(e,t,{value:s.f(t)})}},"75a9":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"manyPGOrderListDetailsBox"},[r("div",{staticClass:"manyPGOrderListHead"}),0!==t.orderDetailsObj.AddressId?r("div",{staticStyle:{padding:".9375rem",background:"#FFFFFF","margin-bottom":".625rem"}},[r("div",{},[r("span",{staticStyle:{"margin-right":"1.875rem"}},[t._v(t._s(t.orderDetailsObj.AddressReceiver))]),r("span",[t._v(t._s(t.orderDetailsObj.AddressMobile))])]),r("div",{staticStyle:{"margin-top":".3125rem"}},[t._v(" "+t._s(t.orderDetailsObj.AddressDetail)+" ")])]):t._e(),r("div",{staticClass:"manyPGOrderListItemMainBox"},[r("div",{staticClass:"manyPGOrderListItemMain"},[r("div",{staticClass:"manyPGOrderListItemMainFl"},[r("img",{staticStyle:{width:"5rem",height:"5rem"},attrs:{src:t.orderDetailsObj.ProductMainImage,mode:""}})]),r("div",{staticClass:"manyPGOrderListItemMainRl"},[0===t.orderDetailsObj.AddressId?r("div",{staticClass:"numberPintuan"},[t._v(" "+t._s(t.orderDetailsObj.UnitPrice)+"元/"+t._s(t.priceArea.ManyPGPeopleNumber)+"人成团 ")]):r("div",{staticClass:"numberPintuan"},[t._v(" "+t._s(t.orderDetailsObj.ProductTitle)+" ")]),r("div",{staticClass:"payment"},[t._v(" 先付款,后选品；购物不纠结,让"+t._s(t.$text.groupText.groupBuying)+"更简单 ")]),r("div",{staticClass:"commodityPrice"},[t._v(" ￥"+t._s(t.orderDetailsObj.UnitPrice)+"/件 共"+t._s(t.orderDetailsObj.Number)+"件商品 ")]),r("div",{staticClass:"reward"},["Wait"===t.typeBle?r("span",[t._v(t._s(t.$text.groupText.groupBuying)+"中")]):t._e(),"NotWinning"===t.typeBle?r("span",[t._v("未"+t._s(t.$text.groupText.singleGroupBuying)+"中，预付款已退回")]):t._e(),1===t.orderDetailsObj.ManyPGSelectProduct&&"Winning"===t.typeBle&&0===t.orderDetailsObj.AddressId?r("span",{on:{click:function(e){return t.xuanzeshop(t.item)}}},[t._v("前去选择您心仪的商品")]):t._e()])])])]),r("div",{staticClass:"priceInformationBox"},[r("div",{staticClass:"priceInformation"},[r("div",{staticClass:"priceInformationHead"},[t._v(" 价格信息 ")]),r("div",{staticClass:"priceInformationFoor"},[r("div",{staticClass:"commodityTotal"},[r("span",[t._v("商品总金额")]),r("span",[t._v("￥"+t._s(t.orderDetailsObj.TotalPrice))])]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("运费")]),r("span",[t._v("￥"+t._s(t.orderDetailsObj.ExpressPrice))])]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("数量")]),r("span",[t._v(t._s(t.orderDetailsObj.Number))])]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("应付金额")]),r("span",[t._v("￥"+t._s(t.orderDetailsObj.TotalPrice))])]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("获得奖金")]),r("span",[t._v("￥"+t._s(t.orderDetailsObj.ManyPGBalance))])]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("获得积分")]),r("span",[t._v("￥"+t._s(t.orderDetailsObj.ManyPGPoint))])]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("获得消费金")]),r("span",[t._v("￥"+t._s(t.orderDetailsObj.ManyPGConsume))])])])])]),r("div",{staticClass:"orderIformationBox"},[r("div",{staticClass:"orderIformation"},[r("div",{staticClass:"orderIformationHead"},[t._v(" 订单信息 ")]),r("div",{staticClass:"orderIformationFoor"},[t.orderDetailsObj.ManyPGRanking>0?r("div",{staticClass:"commodityTotal"},[r("span",[t._v("参团编号")]),r("span",[t._v(t._s(t.orderDetailsObj.ManyPGRanking))])]):t._e(),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("订单编号")]),r("span",[t._v(t._s(t.orderDetailsObj.OrderNo))])]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("参团时间")]),r("span",[t._v(t._s(t.orderDetailsObj.PayTime))])]),1===t.orderDetailsObj.ManyPGFullGroup?r("div",{staticClass:"commodityTotal"},[r("span",[t._v("成团时间")]),r("span",[t._v(t._s(t.orderDetailsObj.ManyPGFullGroupTime))])]):t._e(),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("支付方式")]),1===t.orderDetailsObj.PayType?r("span",[t._v("支付宝支付")]):2===t.orderDetailsObj.PayType?r("span",[t._v("微信支付")]):3===t.orderDetailsObj.PayType?r("span",[t._v("余额支付")]):4===t.orderDetailsObj.PayType?r("span",[t._v("消费金支付")]):5===t.orderDetailsObj.PayType?r("span",[t._v("能量券支付")]):6===t.orderDetailsObj.PayType?r("span",[t._v("银联支付")]):7===t.orderDetailsObj.PayType?r("span",[t._v("微信支付(小程序)")]):8===t.orderDetailsObj.PayType?r("span",[t._v("支付宝支付-汇付")]):r("span")]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("支付时间")]),r("span",[t._v(t._s(t.orderDetailsObj.PayTime))])])])])]),t.orderDetailsObj.DeliveryStatus?r("div",{staticClass:"priceInformationBox",staticStyle:{"margin-bottom":"4.0625rem"}},[r("div",{staticClass:"priceInformation"},[r("div",{staticClass:"priceInformationHead"},[t._v(" 快递信息 ")]),r("div",{staticClass:"priceInformationFoor"},[r("div",{staticClass:"commodityTotal"},[r("span",[t._v("发货时间")]),r("span",[t._v(t._s(t.orderDetailsObj.DeliveryTime))])]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("快递公司")]),r("span",[t._v(t._s(t.orderDetailsObj.ExpressName))])]),r("div",{staticClass:"commodityTotal"},[r("span",[t._v("快递单号")]),r("span",[t._v(t._s(t.orderDetailsObj.ExpressNo))])])])])]):t._e(),r("div",{staticClass:"btnFoorOrderBox"},[r("div",{staticClass:"btnFoorOrder",on:{click:t.againOrder}},[t._v(" 再来一单 ")])])])},a=[],s=r("1da1"),n=r("5530"),o=(r("96cf"),r("d399")),c=r("2f62"),d=r("c97a"),l={data:function(){return{typeBle:null,orderDetailsObj:{},priceArea:{},typefanhui:""}},computed:Object(n["a"])({},Object(c["c"])("common",["teamObj"])),created:function(){var t=this.$route.query;if(t.type){this.typeBle=t.type;var e="";e="Wait"===t.type?this.$text.groupText.groupBuying+"中":"Winning"===t.type?this.$text.groupText.groupBuying+"成功":"未"+this.$text.groupText.singleGroupBuying+"中",this.$store.commit("navTop/setTitle",{title:e})}this.typefanhui=t.typefanhui,this.getOrderDetails(t.orderId)},onBackPress:function(){if("ping"===this.typefanhui)return this.$router.push("/ManyPGOrderList?type=Winning"),!0},methods:{getOrderDetails:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.post("/api/v1/MyOrder/Detail",{id:t},{custom:{url:"99",nonce:Object(d["a"])(),timestamp:Object(d["b"])(),loading:"加载"}});case 2:i=r.sent,a=i.data,1===a.code&&(o["a"].clear(),e.orderDetailsObj=a.data,e.priceArea=a.data.priceArea);case 5:case"end":return r.stop()}}),r)})))()},againOrder:function(){this.$router.push("/groupworkdetails?Price="+this.priceArea.Price+"&PriceAreaId="+this.priceArea.PriceAreaId)},xuanzeshop:function(){this.$router.push("/groupworkdetails/xuanzeshop?priceAreaId="+this.priceArea.PriceAreaId+"&pirceTitle="+this.priceArea.Price+"&OrderId="+this.orderDetailsObj.OrderId)}}},u=l,p=(r("d812"),r("2877")),f=Object(p["a"])(u,i,a,!1,null,null,null);e["default"]=f.exports},a4d3:function(t,e,r){"use strict";var i=r("23e7"),a=r("da84"),s=r("d066"),n=r("c430"),o=r("83ab"),c=r("4930"),d=r("fdbf"),l=r("d039"),u=r("5135"),p=r("e8b5"),f=r("861d"),v=r("825a"),b=r("7b0b"),y=r("fc6a"),m=r("c04e"),O=r("5c6c"),g=r("7c73"),_=r("df75"),h=r("241c"),j=r("057f"),P=r("7418"),D=r("06cf"),C=r("9bf2"),w=r("d1e7"),T=r("9112"),x=r("6eeb"),I=r("5692"),S=r("f772"),G=r("d012"),A=r("90e3"),B=r("b622"),M=r("e538"),E=r("746f"),F=r("d44e"),k=r("69f3"),$=r("b727").forEach,N=S("hidden"),L="Symbol",W="prototype",R=B("toPrimitive"),H=k.set,J=k.getterFor(L),z=Object[W],U=a.Symbol,q=s("JSON","stringify"),Q=D.f,K=C.f,V=j.f,X=w.f,Y=I("symbols"),Z=I("op-symbols"),tt=I("string-to-symbol-registry"),et=I("symbol-to-string-registry"),rt=I("wks"),it=a.QObject,at=!it||!it[W]||!it[W].findChild,st=o&&l((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=Q(z,e);i&&delete z[e],K(t,e,r),i&&t!==z&&K(z,e,i)}:K,nt=function(t,e){var r=Y[t]=g(U[W]);return H(r,{type:L,tag:t,description:e}),o||(r.description=e),r},ot=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ct=function(t,e,r){t===z&&ct(Z,e,r),v(t);var i=m(e,!0);return v(r),u(Y,i)?(r.enumerable?(u(t,N)&&t[N][i]&&(t[N][i]=!1),r=g(r,{enumerable:O(0,!1)})):(u(t,N)||K(t,N,O(1,{})),t[N][i]=!0),st(t,i,r)):K(t,i,r)},dt=function(t,e){v(t);var r=y(e),i=_(r).concat(vt(r));return $(i,(function(e){o&&!ut.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?g(t):dt(g(t),e)},ut=function(t){var e=m(t,!0),r=X.call(this,e);return!(this===z&&u(Y,e)&&!u(Z,e))&&(!(r||!u(this,e)||!u(Y,e)||u(this,N)&&this[N][e])||r)},pt=function(t,e){var r=y(t),i=m(e,!0);if(r!==z||!u(Y,i)||u(Z,i)){var a=Q(r,i);return!a||!u(Y,i)||u(r,N)&&r[N][i]||(a.enumerable=!0),a}},ft=function(t){var e=V(y(t)),r=[];return $(e,(function(t){u(Y,t)||u(G,t)||r.push(t)})),r},vt=function(t){var e=t===z,r=V(e?Z:y(t)),i=[];return $(r,(function(t){!u(Y,t)||e&&!u(z,t)||i.push(Y[t])})),i};if(c||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===z&&r.call(Z,t),u(this,N)&&u(this[N],e)&&(this[N][e]=!1),st(this,e,O(1,t))};return o&&at&&st(z,e,{configurable:!0,set:r}),nt(e,t)},x(U[W],"toString",(function(){return J(this).tag})),x(U,"withoutSetter",(function(t){return nt(A(t),t)})),w.f=ut,C.f=ct,D.f=pt,h.f=j.f=ft,P.f=vt,M.f=function(t){return nt(B(t),t)},o&&(K(U[W],"description",{configurable:!0,get:function(){return J(this).description}}),n||x(z,"propertyIsEnumerable",ut,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),$(_(rt),(function(t){E(t)})),i({target:L,stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!o},{create:lt,defineProperty:ct,defineProperties:dt,getOwnPropertyDescriptor:pt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:vt}),i({target:"Object",stat:!0,forced:l((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(b(t))}}),q){var bt=!c||l((function(){var t=U();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));i({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var i,a=[t],s=1;while(arguments.length>s)a.push(arguments[s++]);if(i=e,(f(e)||void 0!==t)&&!ot(t))return p(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),a[1]=e,q.apply(null,a)}})}U[W][R]||T(U[W],R,U[W].valueOf),F(U,L),G[N]=!0},d812:function(t,e,r){"use strict";r("6356")},dbb4:function(t,e,r){var i=r("23e7"),a=r("83ab"),s=r("56ef"),n=r("fc6a"),o=r("06cf"),c=r("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,i=n(t),a=o.f,d=s(i),l={},u=0;while(d.length>u)r=a(i,e=d[u++]),void 0!==r&&c(l,e,r);return l}})},e439:function(t,e,r){var i=r("23e7"),a=r("d039"),s=r("fc6a"),n=r("06cf").f,o=r("83ab"),c=a((function(){n(1)})),d=!o||c;i({target:"Object",stat:!0,forced:d,sham:!o},{getOwnPropertyDescriptor:function(t,e){return n(s(t),e)}})},e538:function(t,e,r){var i=r("b622");e.f=i}}]);
//# sourceMappingURL=manyPGOrderListDetails.edb96b7d.js.map