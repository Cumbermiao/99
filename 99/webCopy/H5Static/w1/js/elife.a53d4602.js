(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["elife"],{"0cb2":function(t,e,n){var r=n("7b0b"),i=Math.floor,a="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,s,u,d){var l=n+t.length,f=s.length,g=o;return void 0!==u&&(u=r(u),g=c),a.call(d,g,(function(r,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":c=u[a.slice(1,-1)];break;default:var o=+a;if(0===o)return r;if(o>f){var d=i(o/10);return 0===d?r:d<=f?void 0===s[d-1]?a.charAt(1):s[d-1]+a.charAt(1):r}c=s[o-1]}return void 0===c?"":c}))}},"1ef0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"poster"},[n("div",{staticStyle:{height:"100%"}},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.imgSrc("poster.jpg"),mode:""},on:{click:t.posterClick}})])])},i=[],a=n("1da1"),c=(n("ac1f"),n("1276"),n("5319"),n("466d"),n("96cf"),n("da71")),o=n("365c"),s=n("c97a"),u=n("dbe4"),d=n("d399"),l=n("2241"),f={data:function(){return{siginDateList:[],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,bannerList:[],point:0,today_point:0,continuity_count:0,is_signin:null,tomorrow_point:null,userInfo:{},token:"",isClick:!0}},computed:{imgSrc:function(){return function(t){return c["d"]+t}}},created:function(){if(""===Object(u["c"])())return this.$router.push("/login"),Object(u["i"])(),Object(u["g"])(),Object(u["h"])(),void Object(u["f"])()},mounted:function(){if(""===Object(u["c"])())return this.$router.push("/login"),Object(u["i"])(),Object(u["g"])(),Object(u["h"])(),void Object(u["f"])();this.$store.state.common.getToken&&(this.geth5verify(),this.$store.commit("common/setToken",!1))},methods:{geth5verify:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/v1/usercenter/geth5verify",{appId:"mallandroidapp",usercode:Object(u["c"])(),usertoken:Object(u["b"])()},{custom:{url:"99",nonce:Object(s["a"])(),timestamp:Object(s["b"])()}});case 2:n=e.sent,t.isClick=!0,r=n.data,1===r.code&&(t.token=r.token,t.jumpTo());case 6:case"end":return e.stop()}}),e)})))()},getUserInfo:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/v1/UserInfo/Get",{type:1},{custom:{url:"99",nonce:Object(s["a"])(),timestamp:Object(s["b"])()}});case 2:n=e.sent,r=n.data,1===r.code&&(t.userInfo=r.data);case 5:case"end":return e.stop()}}),e)})))()},getSigin:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].post("/api/v1/Sign/ShowSignView",{UserId:Object(u["d"])()},{custom:{url:"shengyang",nonce:Object(s["a"])(),timestamp:Object(s["b"])(),loading:"加载"}});case 2:if(n=e.sent,r=n.data,1===r.code){for(a in t.bannerList=r.data.banner,t.point=r.data.point,t.today_point=r.data.today_point,t.tomorrow_point=r.data.tomorrow_point,t.continuity_count=r.data.continuity_count,t.is_signin=r.data.is_signin,i=[],r.data.sign_date)c={},c.date=t.shijiantime(a),c.che=r.data.sign_date[a],i.push(c);t.siginDateList=i}case 5:case"end":return e.stop()}}),e)})))()},shijiantime:function(t){var e=t.replace(" ",":").replace(/:/g,"-").split("-"),n=e[1]+"-"+e[2];return n},clickSigin:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].post("/api/v1/Sign/SignIn",{UserId:Object(u["d"])()},{custom:{url:"shengyang",nonce:Object(s["a"])(),timestamp:Object(s["b"])(),loading:"加载"}});case 2:n=e.sent,r=n.data,1===r.code?(Object(d["a"])(r.msg),t.getSigin(),t.getUserInfo()):Object(d["a"])(r.msg);case 5:case"end":return e.stop()}}),e)})))()},changeTab:function(){var t=navigator.userAgent,e=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);e?window.webkit.messageHandlers.taskClick.postMessage(Object(u["d"])()):nuandouAndroid.taskClick(Object(u["d"])())},posterClick:function(){this.isClick&&(this.isClick=!1,this.geth5verify())},jumpTo:function(){var t=this.token,e={appId:"mallandroidapp",usercode:Object(u["c"])(),usertoken:Object(u["b"])(),token:t},n=navigator.userAgent,r=n.indexOf("Android")>-1||n.indexOf("Linux")>-1,i=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);i?window.webkit.messageHandlers.posterClick.postMessage(JSON.stringify(e)):r?nuandouAndroid.posterClick(JSON.stringify(e)):l["a"].confirm({title:"提示",message:"请下载APP！",confirmButtonText:"确认",showCancelButton:!1})}}},g=f,p=(n("8656"),n("2877")),h=Object(p["a"])(g,r,i,!1,null,null,null);e["default"]=h.exports},"466d":function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("50c4"),c=n("1d80"),o=n("8aa5"),s=n("14c3");r("match",(function(t,e,n){return[function(e){var n=c(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,this,t);if(r.done)return r.value;var c=i(this),u=String(t);if(!c.global)return s(c,u);var d=c.unicode;c.lastIndex=0;var l,f=[],g=0;while(null!==(l=s(c,u))){var p=String(l[0]);f[g]=p,""===p&&(c.lastIndex=o(u,a(c.lastIndex),d)),g++}return 0===g?null:f}]}))},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("d039"),a=n("825a"),c=n("50c4"),o=n("a691"),s=n("1d80"),u=n("8aa5"),d=n("0cb2"),l=n("14c3"),f=n("b622"),g=f("replace"),p=Math.max,h=Math.min,v=function(t){return void 0===t?t:String(t)},m=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),O=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=b?"$":"$0";return[function(t,n){var r=s(this),i=void 0==t?void 0:t[g];return void 0!==i?i.call(t,r,n):e.call(String(r),t,n)},function(t,i){if("string"===typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var s=n(e,this,t,i);if(s.done)return s.value}var f=a(this),g=String(t),m="function"===typeof i;m||(i=String(i));var b=f.global;if(b){var O=f.unicode;f.lastIndex=0}var j=[];while(1){var w=l(f,g);if(null===w)break;if(j.push(w),!b)break;var k=String(w[0]);""===k&&(f.lastIndex=u(g,c(f.lastIndex),O))}for(var x="",S=0,y=0;y<j.length;y++){w=j[y];for(var $=String(w[0]),I=p(h(o(w.index),g.length),0),_=[],C=1;C<w.length;C++)_.push(v(w[C]));var A=w.groups;if(m){var R=[$].concat(_,I,g);void 0!==A&&R.push(A);var U=String(i.apply(void 0,R))}else U=d($,g,I,_,A,i);I>=S&&(x+=g.slice(S,I)+U,S=I+$.length)}return x+g.slice(S)}]}),!O||!m||b)},8656:function(t,e,n){"use strict";n("e1c2")},e1c2:function(t,e,n){}}]);
//# sourceMappingURL=elife.a53d4602.js.map