(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["returnSelectNow"],{"057f":function(t,e,r){var i=r("fc6a"),n=r("241c").f,s={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return n(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==s.call(t)?c(t):n(i(t))}},"0e0b":function(t,e){function r(t,e){null!=e&&void 0!=e||(e=1500);var r=null;return function(){var i=+new Date;(i-r>e||!r)&&(t.apply(this,arguments),r=i)}}t.exports={throttle:r}},"159b":function(t,e,r){var i=r("da84"),n=r("fdbc"),s=r("17c2"),a=r("9112");for(var c in n){var o=i[c],u=o&&o.prototype;if(u&&u.forEach!==s)try{a(u,"forEach",s)}catch(d){u.forEach=s}}},"17c2":function(t,e,r){"use strict";var i=r("b727").forEach,n=r("a640"),s=n("forEach");t.exports=s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"4de4":function(t,e,r){"use strict";var i=r("23e7"),n=r("b727").filter,s=r("1dde"),a=s("filter");i({target:"Array",proto:!0,forced:!a},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"60e3":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"selectNowBox"},[r("div",{staticClass:"confirmOrderAddress"},[t.IsDefaultMy?r("div",{staticClass:"confirmOrderAddressFl",staticStyle:{width:"100%"},on:{click:t.urlHrefDizhi}},[t._v(" 选择地址 ")]):r("div",{staticClass:"confirmOrderAddressFl",on:{click:t.urlHrefDizhi}},[r("div",{},[r("div",{staticStyle:{"margin-bottom":".9375rem"}},[r("text",{staticStyle:{"margin-right":"2.5rem"}},[t._v(t._s(t.addressIs.Receiver))]),r("text",[t._v(t._s(t.addressIs.Mobile))])]),r("div",{staticStyle:{"font-size":".875rem"}},["null"!==t.addressIs.Province?r("text",[t._v(t._s(t.addressIs.Province))]):t._e(),"null"!==t.addressIs.City?r("text",[t._v(t._s(t.addressIs.City))]):t._e(),"null"!==t.addressIs.County?r("text",[t._v(t._s(t.addressIs.County))]):t._e(),"null"!==t.addressIs.Detail?r("text",[t._v(t._s(t.addressIs.Detail))]):t._e()])])]),r("div",{staticClass:"confirmOrderAddressRl",on:{click:t.urlHrefDizhi}},[r("img",{staticStyle:{width:".8125rem"},attrs:{src:"http://static.jiujiupingou.com/Static/img/bg16.png",mode:"widthFix"}})])]),r("div",{staticStyle:{padding:".9375rem",background:"#FFFFFF","margin-top":".625rem",display:"flex"}},[r("img",{staticStyle:{width:"5rem",height:"5rem","margin-right":".625rem"},attrs:{src:t.detailsInfo.mainImage,mode:""}}),r("div",{staticStyle:{flex:"1"}},[r("div",{staticStyle:{"font-size":".75rem"}},[t._v(" "+t._s(t.detailsInfo.title)+" ")])])]),t._m(0),t._m(1),r("div",{staticClass:"confirm-order",on:{click:t.confirmOrderBtn}},[t._v(" 确定订单 ")])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:".9375rem",display:"flex","justify-content":"space-between",background:"#FFFFFF","margin-top":".625rem"}},[r("div",{},[t._v(" 邮费 ")]),r("div",{},[t._v(" 包邮 ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:".9375rem",display:"flex","justify-content":"space-between",background:"#FFFFFF","margin-top":".625rem"}},[r("div",{},[t._v(" 配送方式 ")]),r("div",{},[t._v(" 快递 ")])])}],s=r("1da1"),a=r("5530"),c=(r("96cf"),r("c97a")),o=r("2f62"),u=r("0e0b"),d=r.n(u),f=r("d399"),l={data:function(){return{IsDefaultMy:!0,ProductId:"",OrderId:"",detailsInfo:{},PriceAreaId:"",Price:"",pid:null}},created:function(){var t=this.$route.query;this.pid=t.pid,this.PriceAreaId=t.PriceAreaId,this.Price=t.Price,this.getDetails(this.pid),this.addressXuanze?this.IsDefaultMy=!1:this.getAddress()},onBackPress:function(){return this.$router.push("/groupworkdetails/commodittypepreviewDeatilsNew?pid="+this.pid+"&PriceAreaId="+this.PriceAreaId+"&Price="+this.Price),!0},computed:Object(a["a"])({},Object(o["c"])("address",["addressIs","addressXuanze"])),methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])("address",["setAddressIs"])),{},{getDetails:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var i,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i="/api/v1/product/get",r.next=3,e.$http.post(i,{pid:t},{custom:{url:"99",nonce:Object(c["a"])(),timestamp:Object(c["b"])(),loading:"加载"}});case 3:n=r.sent,s=n.data,1===s.code&&(f["a"].clear(),e.detailsInfo=s.data,e.productMainImageList=s.data.productMainImageList,e.productDetailImageList=s.data.productDetailImageList);case 6:case"end":return r.stop()}}),r)})))()},getAddress:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/v1/address/getlist",{},{custom:{url:"99",nonce:Object(c["a"])(),timestamp:Object(c["b"])()}});case 2:if(r=e.sent,i=r.data,1===i.code){for(t.addressList=i.data,n=0;n<t.addressList.length;n++)t.addressList[n].IsDefault&&(t.IsDefaultObj=t.addressList[n],t.IsDefaultMy=!1);t.setAddressIs(t.IsDefaultObj)}case 5:case"end":return e.stop()}}),e)})))()},urlHrefDizhi:function(){this.$router.push("/groupworkdetails/returnXuanzedizhi?pid="+this.pid+"&PriceAreaId="+this.PriceAreaId+"&Price="+this.Price)},confirmOrderBtn:d.a.throttle(Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,!this.IsDefaultMy){t.next=4;break}return Object(f["a"])("请选择收货地址"),t.abrupt("return");case 4:return t.next=6,this.$http.post("/api/v1/WinBack/ChooseProductSubmit",{productId:this.pid,addressId:this.addressIs.AddressId},{custom:{url:"99",nonce:Object(c["a"])(),timestamp:Object(c["b"])(),loading:"加载"}});case 6:r=t.sent,i=r.data,1===i.code&&(Object(f["a"])("兑换成功"),setTimeout((function(){this.$router.push("/groupworkdetails/groupworkdetails?PriceAreaId="+e.PriceAreaId+"&Price="+e.Price)}),1e3));case 9:case"end":return t.stop()}}),t,this)}))),5e3)})},p=l,b=(r("fb82"),r("2877")),h=Object(b["a"])(p,i,n,!1,null,null,null);e["default"]=h.exports},"746f":function(t,e,r){var i=r("428f"),n=r("5135"),s=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||a(e,t,{value:s.f(t)})}},9700:function(t,e,r){},a4d3:function(t,e,r){"use strict";var i=r("23e7"),n=r("da84"),s=r("d066"),a=r("c430"),c=r("83ab"),o=r("4930"),u=r("fdbf"),d=r("d039"),f=r("5135"),l=r("e8b5"),p=r("861d"),b=r("825a"),h=r("7b0b"),m=r("fc6a"),v=r("c04e"),g=r("5c6c"),y=r("7c73"),O=r("df75"),w=r("241c"),j=r("057f"),I=r("7418"),P=r("06cf"),S=r("9bf2"),_=r("d1e7"),D=r("9112"),x=r("6eeb"),F=r("5692"),k=r("f772"),A=r("d012"),E=r("90e3"),C=r("b622"),z=r("e538"),$=r("746f"),L=r("d44e"),M=r("69f3"),N=r("b727").forEach,R=k("hidden"),B="Symbol",H="prototype",J=C("toPrimitive"),T=M.set,X=M.getterFor(B),W=Object[H],q=n.Symbol,Q=s("JSON","stringify"),G=P.f,K=S.f,U=j.f,V=_.f,Y=F("symbols"),Z=F("op-symbols"),tt=F("string-to-symbol-registry"),et=F("symbol-to-string-registry"),rt=F("wks"),it=n.QObject,nt=!it||!it[H]||!it[H].findChild,st=c&&d((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=G(W,e);i&&delete W[e],K(t,e,r),i&&t!==W&&K(W,e,i)}:K,at=function(t,e){var r=Y[t]=y(q[H]);return T(r,{type:B,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ot=function(t,e,r){t===W&&ot(Z,e,r),b(t);var i=v(e,!0);return b(r),f(Y,i)?(r.enumerable?(f(t,R)&&t[R][i]&&(t[R][i]=!1),r=y(r,{enumerable:g(0,!1)})):(f(t,R)||K(t,R,g(1,{})),t[R][i]=!0),st(t,i,r)):K(t,i,r)},ut=function(t,e){b(t);var r=m(e),i=O(r).concat(bt(r));return N(i,(function(e){c&&!ft.call(r,e)||ot(t,e,r[e])})),t},dt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=v(t,!0),r=V.call(this,e);return!(this===W&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,R)&&this[R][e])||r)},lt=function(t,e){var r=m(t),i=v(e,!0);if(r!==W||!f(Y,i)||f(Z,i)){var n=G(r,i);return!n||!f(Y,i)||f(r,R)&&r[R][i]||(n.enumerable=!0),n}},pt=function(t){var e=U(m(t)),r=[];return N(e,(function(t){f(Y,t)||f(A,t)||r.push(t)})),r},bt=function(t){var e=t===W,r=U(e?Z:m(t)),i=[];return N(r,(function(t){!f(Y,t)||e&&!f(W,t)||i.push(Y[t])})),i};if(o||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===W&&r.call(Z,t),f(this,R)&&f(this[R],e)&&(this[R][e]=!1),st(this,e,g(1,t))};return c&&nt&&st(W,e,{configurable:!0,set:r}),at(e,t)},x(q[H],"toString",(function(){return X(this).tag})),x(q,"withoutSetter",(function(t){return at(E(t),t)})),_.f=ft,S.f=ot,P.f=lt,w.f=j.f=pt,I.f=bt,z.f=function(t){return at(C(t),t)},c&&(K(q[H],"description",{configurable:!0,get:function(){return X(this).description}}),a||x(W,"propertyIsEnumerable",ft,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:q}),N(O(rt),(function(t){$(t)})),i({target:B,stat:!0,forced:!o},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!o,sham:!c},{create:dt,defineProperty:ot,defineProperties:ut,getOwnPropertyDescriptor:lt}),i({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),i({target:"Object",stat:!0,forced:d((function(){I.f(1)}))},{getOwnPropertySymbols:function(t){return I.f(h(t))}}),Q){var ht=!o||d((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));i({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var i,n=[t],s=1;while(arguments.length>s)n.push(arguments[s++]);if(i=e,(p(e)||void 0!==t)&&!ct(t))return l(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ct(e))return e}),n[1]=e,Q.apply(null,n)}})}q[H][J]||D(q[H],J,q[H].valueOf),L(q,B),A[R]=!0},dbb4:function(t,e,r){var i=r("23e7"),n=r("83ab"),s=r("56ef"),a=r("fc6a"),c=r("06cf"),o=r("8418");i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,i=a(t),n=c.f,u=s(i),d={},f=0;while(u.length>f)r=n(i,e=u[f++]),void 0!==r&&o(d,e,r);return d}})},e439:function(t,e,r){var i=r("23e7"),n=r("d039"),s=r("fc6a"),a=r("06cf").f,c=r("83ab"),o=n((function(){a(1)})),u=!c||o;i({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(s(t),e)}})},e538:function(t,e,r){var i=r("b622");e.f=i},fb82:function(t,e,r){"use strict";r("9700")}}]);
//# sourceMappingURL=returnSelectNow.f574560c.js.map