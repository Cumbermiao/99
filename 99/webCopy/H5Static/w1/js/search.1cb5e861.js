(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search"],{"0cb2":function(t,e,i){var r=i("7b0b"),o=Math.floor,n="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,i,d,c,l){var h=i+t.length,u=d.length,f=a;return void 0!==c&&(c=r(c),f=s),n.call(l,f,(function(r,n){var s;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(h);case"<":s=c[n.slice(1,-1)];break;default:var a=+n;if(0===a)return r;if(a>u){var l=o(a/10);return 0===l?r:l<=u?void 0===d[l-1]?n.charAt(1):d[l-1]+n.charAt(1):r}s=d[a-1]}return void 0===s?"":s}))}},"1ef7":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"search-box"},[i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text","adjust-position":!0,placeholder:t.defaultKeyword,"placeholder-class":"placeholder-class","confirm-type":"search"},domProps:{value:t.keyword},on:{input:[function(e){e.target.composing||(t.keyword=e.target.value)},t.inputChange],confirm:function(e){return t.doSearch(!1)}}})]),i("div",{staticClass:"search-btn",on:{tap:function(e){return t.doSearch(!1)}}},[t._v("搜索")])]),i("div",{staticClass:"search-keyword"},[i("list",{directives:[{name:"show",rawName:"v-show",value:t.isShowKeywordList,expression:"isShowKeywordList"}],staticClass:"keyword-list-box",attrs:{"scroll-y":""}},t._l(t.keywordList,(function(e,r){return i("block",{key:r},[i("div",{staticClass:"keyword-entry",attrs:{"hover-class":"keyword-entry-tap"}},[i("div",{staticClass:"keyword-text",on:{tap:function(e){return e.stopPropagation(),t.doSearch(t.keywordList[r].keyword)}}},[i("rich-text",{attrs:{nodes:e.htmlStr}})],1),i("div",{staticClass:"keyword-img",on:{tap:function(e){return e.stopPropagation(),t.setKeyword(t.keywordList[r].keyword)}}},[i("img",{attrs:{src:"/static/HM-search/back.png"}})])])])})),1),i("list",{directives:[{name:"show",rawName:"v-show",value:!t.isShowKeywordList,expression:"!isShowKeywordList"}],staticClass:"keyword-box",attrs:{"scroll-y":""}},[t.oldKeywordList.length>0?i("div",{staticClass:"keyword-block"},[i("div",{staticClass:"keyword-list-header"},[i("div",[t._v("历史搜索")]),i("div",[i("img",{attrs:{src:"/static/HM-search/delete.png"},on:{tap:t.oldDelete}})])]),i("div",{staticClass:"keyword"},t._l(t.oldKeywordList,(function(e,r){return i("div",{key:r,on:{tap:function(i){return t.doSearch(e)},longtap:function(i){return t.longtap(e,r)}}},[t._v(" "+t._s(e))])})),0)]):t._e(),i("div",{staticClass:"keyword-block"},[i("div",{staticClass:"keyword-list-header"},[i("div",[t._v("热门搜索")]),i("div",[i("img",{attrs:{src:"/static/HM-search/attention"+t.forbid+".png"},on:{tap:t.hotToggle}})])]),""==t.forbid?i("div",{staticClass:"keyword"},t._l(t.hotKeywordList,(function(e,r){return i("div",{key:r,on:{tap:function(i){return t.doSearch(e)}}},[t._v(" "+t._s(e))])})),0):i("div",{staticClass:"hide-hot-tis"},[i("div",[t._v("当前搜热门搜索已隐藏")])])])])],1)])},o=[],n=(i("a434"),i("ac1f"),i("5319"),i("2bdd")),s=i("2241"),a=i("bc3a"),d=i.n(a),c={data:function(){return{defaultKeyword:"",keyword:"",oldKeywordList:[],hotKeywordList:[],keywordList:[],forbid:"",isShowKeywordList:!1}},created:function(){this.init()},components:{List:n["a"]},methods:{init:function(){this.loadDefaultKeyword(),this.loadOldKeyword(),this.loadHotKeyword()},blur:function(){},longtap:function(t,e){var i=this;s["a"].confirm({content:"是否删除该条记录",success:function(t){t.confirm&&(i.oldKeywordList.splice(e,1),location.setStorage("OldKeys",JSON.stringify(i.oldKeywordList)))}})},loadDefaultKeyword:function(){this.defaultKeyword="默认关键字"},loadOldKeyword:function(){var t=location.getStorage("OldKeys"),e=JSON.parse(t.data);this.oldKeywordList=e},loadHotKeyword:function(){this.hotKeywordList=["键盘","鼠标","显示器","电脑主机","蓝牙音箱","笔记本电脑","鼠标垫","USB","USB3.0"]},inputChange:function(t){var e=this,i=t.detail?t.detail.value:t;if(!i)return this.keywordList=[],void(this.isShowKeywordList=!1);this.isShowKeywordList=!0,d.a.get({url:"https://suggest.taobao.com/sug?code=utf-8&q="+i,success:function(t){e.keywordList=[],e.keywordList=e.drawCorrelativeKeyword(t.data.result,i)}})},drawCorrelativeKeyword:function(t,e){for(var i=t.length,r=[],o=0;o<i;o++){var n=t[o],s=n[0].replace(e,"<span style='color: #9f9f9f;'>"+e+"</span>");s="<div>"+s+"</div>";var a={keyword:n[0],htmlStr:s};r.push(a)}return r},setKeyword:function(t){this.keyword=this.keywordList[t].keyword},oldDelete:function(){var t=this;s["a"].confirm({content:"确定清除历史搜索记录？",success:function(e){e.confirm?(t.oldKeywordList=[],location.removeStorage("OldKeys")):e.cancel}})},hotToggle:function(){this.forbid=this.forbid?"":"_forbid"},doSearch:function(t){t=!1===t?this.keyword:t,this.keyword=t,this.saveKeyword(t),this.$router.push("/search/searchdetails")},saveKeyword:function(t){var e=location.getStorage("OldKeys");if(e){var i=JSON.parse(e.data),r=i.indexOf(t);-1==r||i.splice(r,1),i.unshift(t),i.length>10&&i.pop(),location.setStorage("OldKeys",JSON.stringify(i)),this.oldKeywordList=i}else i=[t],location.setStorage("OldKeys",JSON.stringify(i)),this.oldKeywordList=i}}},l=c,h=(i("a3e2"),i("2877")),u=Object(h["a"])(l,r,o,!1,null,null,null);e["default"]=u.exports},"2bdd":function(t,e,i){"use strict";var r=i("d282"),o=i("02de"),n=i("a8c1"),s=i("5fbe"),a=i("543e"),d=Object(r["a"])("list"),c=d[0],l=d[1],h=d[2];e["a"]=c({mixins:[Object(s["a"])((function(t){this.scroller||(this.scroller=Object(n["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,r=t.scroller,n=t.offset,s=t.direction;e=r.getBoundingClientRect?r.getBoundingClientRect():{top:0,bottom:r.innerHeight};var a=e.bottom-e.top;if(!a||Object(o["a"])(i))return!1;var d=!1,c=t.$refs.placeholder.getBoundingClientRect();d="up"===s?e.top-c.top<=n:c.bottom-e.bottom<=n,d&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:l("loading")},[this.slots("loading")||t(a["a"],{attrs:{size:"16"}},[this.loadingText||h("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:l("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:l("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",key:"placeholder",class:l("placeholder")});return t("div",{class:l(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},5319:function(t,e,i){"use strict";var r=i("d784"),o=i("d039"),n=i("825a"),s=i("50c4"),a=i("a691"),d=i("1d80"),c=i("8aa5"),l=i("0cb2"),h=i("14c3"),u=i("b622"),f=u("replace"),v=Math.max,g=Math.min,y=function(t){return void 0===t?t:String(t)},w=function(){return"$0"==="a".replace(/./,"$0")}(),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),k=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,i){var r=p?"$":"$0";return[function(t,i){var r=d(this),o=void 0==t?void 0:t[f];return void 0!==o?o.call(t,r,i):e.call(String(r),t,i)},function(t,o){if("string"===typeof o&&-1===o.indexOf(r)&&-1===o.indexOf("$<")){var d=i(e,this,t,o);if(d.done)return d.value}var u=n(this),f=String(t),w="function"===typeof o;w||(o=String(o));var p=u.global;if(p){var k=u.unicode;u.lastIndex=0}var m=[];while(1){var b=h(u,f);if(null===b)break;if(m.push(b),!p)break;var x=String(b[0]);""===x&&(u.lastIndex=c(f,s(u.lastIndex),k))}for(var K="",S=0,L=0;L<m.length;L++){b=m[L];for(var C=String(b[0]),$=v(g(a(b.index),f.length),0),O=[],T=1;T<b.length;T++)O.push(y(b[T]));var _=b.groups;if(w){var B=[C].concat(O,$,f);void 0!==_&&B.push(_);var E=String(o.apply(void 0,B))}else E=l(C,f,$,O,_,o);$>=S&&(K+=f.slice(S,$)+E,S=$+C.length)}return K+f.slice(S)}]}),!k||!w||p)},a3e2:function(t,e,i){"use strict";i("ffec")},a434:function(t,e,i){"use strict";var r=i("23e7"),o=i("23cb"),n=i("a691"),s=i("50c4"),a=i("7b0b"),d=i("65f0"),c=i("8418"),l=i("1dde"),h=l("splice"),u=Math.max,f=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var i,r,l,h,y,w,p=a(this),k=s(p.length),m=o(t,k),b=arguments.length;if(0===b?i=r=0:1===b?(i=0,r=k-m):(i=b-2,r=f(u(n(e),0),k-m)),k+i-r>v)throw TypeError(g);for(l=d(p,r),h=0;h<r;h++)y=m+h,y in p&&c(l,h,p[y]);if(l.length=r,i<r){for(h=m;h<k-r;h++)y=h+r,w=h+i,y in p?p[w]=p[y]:delete p[w];for(h=k;h>k-r+i;h--)delete p[h-1]}else if(i>r)for(h=k-r;h>m;h--)y=h+r-1,w=h+i-1,y in p?p[w]=p[y]:delete p[w];for(h=0;h<i;h++)p[h+m]=arguments[h+2];return p.length=k-r+i,l}})},ffec:function(t,e,i){}}]);
//# sourceMappingURL=search.1cb5e861.js.map