(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cardDetail"],{"1e5d":function(t,e,i){},"245f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},t._l(t.list,(function(e,n){return i("div",{key:n,style:{backgroundImage:"url("+e.logo+")",height:t.imgh+"px"},on:{click:function(i){return t.buyCard(e)}}},[i("div",{staticClass:"name",style:t.nameStyle(e.typeName)},[t._v(t._s(e.typeName))]),i("div",{staticClass:"money",style:t.moneyStyle(e.typeName)},[t._v("￥"),i("div",[t._v(t._s(e.sellPrice))])]),t.titleKey?i("div",{staticClass:"title",style:t.titleStyle(e.typeName)},[t._v(t._s(e.growthFundText))]):t._e()])})),0)},a=[],o=(i("a9e3"),{props:{list:{type:Array,default:function(){return[]}},imgHeight:{type:Number,default:163},titleKey:{type:Boolean,default:!0}},data:function(){return{imgh:0}},computed:{nameStyle:function(){return function(t){return-1!=t.indexOf("金卡")?{color:"#A77E41"}:-1!=t.indexOf("银卡")?{color:"#717D8D"}:{color:"#A57B6D"}}},moneyStyle:function(){return function(t){return-1!=t.indexOf("金卡")?{color:"#996417"}:-1!=t.indexOf("银卡")?{color:"#596A80"}:{color:"#8B5B4C"}}},titleStyle:function(){return function(t){return-1!=t.indexOf("金卡")?{color:"#B28137"}:-1!=t.indexOf("银卡")?{color:"#7B8899"}:{color:"#A47A6D"}}}},created:function(){this.imgh=(window.innerWidth-16)/359*this.imgHeight},methods:{buyCard:function(t){this.$emit("toBuy",t)}}}),r=o,l=(i("d121"),i("2877")),s=Object(l["a"])(r,n,a,!1,null,"7429072b",null);e["a"]=s.exports},5700:function(t,e,i){"use strict";i("7e4f")},6179:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"buy-card"},[i("card",{attrs:{list:t.detail}}),i("div",{staticClass:"buy-card-1"},t._l(t.knowList,(function(e,n){return i("div",{key:n,staticClass:"knowList"},[i("div",{staticClass:"name"},[t._v(t._s(e.name))]),i("div",{staticClass:"title"},[t._v(t._s(e.title))])])})),0)],1)},a=[],o=i("245f"),r={components:{Card:o["a"]},data:function(){return{knowList:[{name:"购买时间",title:"2021-06-26 17:14"},{name:"有效期",title:"永久有效"},{name:"使用须知",title:"此卡作为九九纪念卡"},{name:"温馨提示",title:"感谢您与九九生活共同成长。此卡作为纪念收藏。"}],detail:[]}},created:function(){var t=this.$route.query,e=JSON.parse(t.json);console.log(e),e.typeName=e.CardTypeName,e.sellPrice=e.PayPrice,e.logo=e.Logo,e.growthFundText="NO. "+e.CardNo,this.knowList[0].title=e.CreateTime,this.detail=[e],this.$store.commit("navTop/setTitle",{title:e.CardTypeName})}},l=r,s=(i("5700"),i("2877")),c=Object(s["a"])(l,n,a,!1,null,"86939bbe",null);e["default"]=c.exports},"7e4f":function(t,e,i){},d121:function(t,e,i){"use strict";i("1e5d")}}]);
//# sourceMappingURL=cardDetail.b861a676.js.map