(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["realname"],{"06cc":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container999"},[1===t.cardidObj.Status?i("div",{},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.imgSrc("shiming_logo.png"),mode:"widthFix"}})]),i("div",{staticStyle:{"text-align":"center",margin:"2.625rem 1.5625rem 0",color:"#00A45E","font-size":"1rem"}},[t._v(" 恭喜 "+t._s(t.cardidObj.TrueName)+",您的身份证号："+t._s(t.cardidObj.IdNumber.replace(/^(.{4})(?:\d+)(.{4})$/,"$1******$2"))+"认证已通过 ")])]):0===t.cardidObj.Status?i("div",{},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.imgSrc("shiming_logo.png"),mode:"widthFix"}})]),t._m(0)]):2===t.cardidObj.Status?i("div",{},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.imgSrc("shiming_logo.png"),mode:"widthFix"}})]),t._m(1),i("div",{staticStyle:{position:"absolute",bottom:"6.25rem",width:"100%"}},[i("div",{staticStyle:{margin:"0 auto",width:"21.5625rem","text-align":"center",height:"3.125rem","line-height":"3.125rem","background-image":"linear-gradient(to right,#FBB663,#FB6463)","border-radius":"3.125rem",color:"#FFFFFF","margin-top":"3.125rem"},on:{click:t.gotoAuthentication}},[t._v(" 前往认证 ")])])]):i("div",{},[i("div",{staticClass:"line"},[i("div",{staticClass:"lineLeft"},[t._v("姓名")]),i("div",{staticClass:"lineRight"},[i("field",{staticClass:"input",attrs:{"placeholder-class":"plaClass",placeholder:"请输入真实姓名",value:t.form.name},on:{input:t.change}})],1)]),i("div",{staticClass:"line"},[i("div",{staticClass:"lineLeft"},[t._v("身份证号码")]),i("div",{staticClass:"lineRight"},[i("field",{staticClass:"input",attrs:{"placeholder-class":"plaClass",placeholder:"请输入18位身份证",value:t.form.id},on:{input:t.change2}})],1)]),i("div",{staticStyle:{padding:"0.6rem 0.3rem 0.2rem",color:"#FB6463","font-size":".875rem","text-align":"center"}},[t._v(" 1.请确保信息准确性，认证失败将无法提现 ")]),i("div",{staticClass:"buttonBox",on:{click:t.submit}},[t._v(" 我已核对无误，确认提交 ")])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"center","margin-top":"2.625rem",color:"#FF1400","font-size":"1rem"}},[i("span",[t._v("审核中……")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"center","font-size":"1rem","margin-top":"2.625rem",color:"#FF1400"}},[i("span",[t._v("认证失败，请确认信息后重新填写")])])}],a=i("1da1"),s=(i("b0c0"),i("96cf"),i("da71")),l=i("0e0b"),o=i.n(l),c=i("e8e6"),u=i.n(c),h=i("c97a"),d=i("565f"),f=i("d399"),g={components:{Field:d["a"]},data:function(){return{form:{name:"",id:""},userInfo:{},cardidObj:{Status:-1}}},computed:{imgSrc:function(){return function(t){return s["d"]+t}}},mounted:function(){this.getUserInfo(),this.getCard()},methods:{getUserInfo:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/v1/UserInfo/Get",{type:1},{custom:{url:"99",nonce:Object(h["a"])(),timestamp:Object(h["b"])(),loading:"加载"}});case 2:i=e.sent,r=i.data,1===r.code&&(f["a"].clear(),t.userInfo=r.data);case 5:case"end":return e.stop()}}),e)})))()},getCard:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/v1//UserInfo/GetIdCert",{},{custom:{url:"99",nonce:Object(h["a"])(),timestamp:Object(h["b"])()}});case 2:i=e.sent,r=i.data,1===r.code&&r.data&&(t.cardidObj=r.data);case 5:case"end":return e.stop()}}),e)})))()},gotoAuthentication:function(){this.cardidObj.Status=-1},change:function(t){this.form.name=t},change2:function(t){this.form.id=t},toVaild:function(t){var e=this;return t.every((function(t){var i=e.form[t.paramName];return!(!i||!u()(i,t.rules))||(Object(f["a"])(t.failPass),!1)}))},checkedItem:function(t){this.isActive=t},submit:o.a.throttle(Object(a["a"])(regeneratorRuntime.mark((function t(){var e,i,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,i=[{paramName:"name",failPass:"请输入正确的姓名",rules:"name"},{paramName:"id",failPass:"请输入正确的身份证",rules:"cardid"}],!this.toVaild(i)){t.next=8;break}return t.next=5,e.$http.post("/api/v1/User/SetUserRealNameAuthentication",{trueName:this.form.name,idNumber:this.form.id},{custom:{url:"99",nonce:Object(h["a"])(),timestamp:Object(h["b"])(),loading:"加载"}});case 5:r=t.sent,n=r.data,1===n.code?(Object(f["a"])("成功"),this.$router.push({path:"/home/user",replace:!0})):Object(f["a"])(n.msg);case 8:case"end":return t.stop()}}),t,this)}))),1e3)}},m=g,v=(i("1906"),i("2877")),p=Object(v["a"])(m,r,n,!1,null,"44b59e60",null);e["default"]=p.exports},"0e0b":function(t,e){function i(t,e){null!=e&&void 0!=e||(e=1500);var i=null;return function(){var r=+new Date;(r-i>e||!i)&&(t.apply(this,arguments),i=r)}}t.exports={throttle:i}},1906:function(t,e,i){"use strict";i("7da5")},"565f":function(t,e,i){"use strict";var r=i("2638"),n=i.n(r),a=i("c31d"),s=i("a142");function l(){return!s["g"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var o=i("a8c1"),c=l();function u(){c&&Object(o["g"])(Object(o["b"])())}var h=i("482d"),d=i("1325"),f=i("d282"),g=i("ea8e"),m=i("ad06"),v=i("ba31"),p=i("48f4"),b={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0},clickable:{type:Boolean,default:null}},y=Object(f["a"])("cell"),j=y[0],S=y[1];function w(t,e,i,r){var a,l=e.icon,o=e.size,c=e.title,u=e.label,h=e.value,d=e.isLink,f=i.title||Object(s["c"])(c);function g(){var r=i.label||Object(s["c"])(u);if(r)return t("div",{class:[S("label"),e.labelClass]},[i.label?i.label():u])}function b(){if(f)return t("div",{class:[S("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[c]),g()])}function y(){var r=i.default||Object(s["c"])(h);if(r)return t("div",{class:[S("value",{alone:!f}),e.valueClass]},[i.default?i.default():t("span",[h])])}function j(){return i.icon?i.icon():l?t(m["a"],{class:S("left-icon"),attrs:{name:l,classPrefix:e.iconPrefix}}):void 0}function w(){var r=i["right-icon"];if(r)return r();if(d){var n=e.arrowDirection;return t(m["a"],{class:S("right-icon"),attrs:{name:n?"arrow-"+n:"arrow"}})}}function O(t){Object(v["a"])(r,"click",t),Object(p["a"])(r)}var x=null!=(a=e.clickable)?a:d,F={clickable:x,center:e.center,required:e.required,borderless:!e.border};return o&&(F[o]=o),t("div",n()([{class:S(F),attrs:{role:x?"button":null,tabindex:x?0:null},on:{click:O}},Object(v["b"])(r)]),[j(),b(),y(),w(),null==i.extra?void 0:i.extra()])}w.props=Object(a["a"])({},b,p["c"]);var O=j(w),x=Object(f["a"])("field"),F=x[0],C=x[1];e["a"]=F({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(a["a"])({},b,{name:String,rules:Array,disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,value:{type:[Number,String],default:""},type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null},clearTrigger:{type:String,default:"focus"},formatTrigger:{type:String,default:"onChange"}}),data:function(){return{focused:!1,validateFailed:!1,validateMessage:""}},watch:{value:function(){this.updateValue(this.value),this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.updateValue(this.value,this.formatTrigger),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){var t=this.getProp("readonly");if(this.clearable&&!t){var e=Object(s["c"])(this.value)&&""!==this.value,i="always"===this.clearTrigger||"focus"===this.clearTrigger&&this.focused;return e&&i}},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateFailed)||void 0},listeners:function(){return Object(a["a"])({},this.$listeners,{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(g["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(i){var r=e.validator(t,e);if(Object(s["f"])(r))return r.then(i);i(r)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:0!==t&&!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var i=e.message;return Object(s["d"])(i)?i(t,e):i},runRules:function(t){var e=this;return t.reduce((function(t,i){return t.then((function(){if(!e.validateFailed){var t=e.formValue;return i.formatter&&(t=i.formatter(t,i)),e.runSyncRule(t,i)?i.validator?e.runValidator(t,i).then((function(r){!1===r&&(e.validateFailed=!0,e.validateMessage=e.getRuleMessage(t,i))})):void 0:(e.validateFailed=!0,void(e.validateMessage=e.getRuleMessage(t,i)))}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(i){t||i(),e.resetValidation(),e.runRules(t).then((function(){e.validateFailed?i({name:e.name,message:e.validateMessage}):i()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,i=this.rules.filter((function(i){return i.trigger?i.trigger===t:e}));i.length&&this.validate(i)}},resetValidation:function(){this.validateFailed&&(this.validateFailed=!1,this.validateMessage="")},updateValue:function(t,e){void 0===e&&(e="onChange"),t=Object(s["c"])(t)?String(t):"";var i=this.maxlength;if(Object(s["c"])(i)&&t.length>i&&(t=this.value&&this.value.length===+i?this.value:t.slice(0,i)),"number"===this.type||"digit"===this.type){var r="number"===this.type;t=Object(h["a"])(t,r,r)}this.formatter&&e===this.formatTrigger&&(t=this.formatter(t));var n=this.$refs.input;n&&t!==n.value&&(n.value=t),t!==this.value&&this.$emit("input",t)},onInput:function(t){t.target.composing||this.updateValue(t.target.value)},onFocus:function(t){this.focused=!0,this.$emit("focus",t);var e=this.getProp("readonly");e&&this.blur()},onBlur:function(t){this.focused=!1,this.updateValue(this.value,"onBlur"),this.$emit("blur",t),this.validateWithTrigger("onBlur"),u()},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(d["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var e=13;if(t.keyCode===e){var i=this.getProp("submitOnEnter");i||"textarea"===this.type||Object(d["c"])(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(s["e"])(this.autosize)){var i=this.autosize,r=i.maxHeight,n=i.minHeight;r&&(e=Math.min(e,r)),n&&(e=Math.max(e,n))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.getProp("disabled"),r=this.getProp("readonly"),s=this.slots("input"),l=this.getProp("inputAlign");if(s)return t("div",{class:C("control",[l,"custom"]),on:{click:this.onClickInput}},[s]);var o={ref:"input",class:C("control",l),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{name:this.name,disabled:i,readonly:r,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",n()([{},o]));var c,u=e;return"number"===e&&(u="text",c="decimal"),"digit"===e&&(u="tel",c="numeric"),t("input",n()([{attrs:{type:u,inputmode:c}},o]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:C("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(m["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:C("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(m["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=(this.value||"").length;return t("div",{class:C("word-limit")},[t("span",{class:C("word-num")},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var i=this.getProp("errorMessageAlign");return t("div",{class:C("error-message",i)},[e])}}},getProp:function(t){return Object(s["c"])(this[t])?this[t]:this.vanForm&&Object(s["c"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],i=this.slots,r=this.getProp("disabled"),n=this.getProp("labelAlign"),a={icon:this.genLeftIcon},s=this.genLabel();s&&(a.title=function(){return s});var l=this.slots("extra");return l&&(a.extra=function(){return l}),e(O,{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:C("value"),titleClass:[C("label",n),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:a,class:C((t={error:this.showError,disabled:r},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:C("body")},[this.genInput(),this.showClear&&e(m["a"],{attrs:{name:"clear"},class:C("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:C("button")},[i("button")])]),this.genWordLimit(),this.genMessage()])}})},"7da5":function(t,e,i){},b0c0:function(t,e,i){var r=i("83ab"),n=i("9bf2").f,a=Function.prototype,s=a.toString,l=/^\s*function ([^ (]*)/,o="name";r&&!(o in a)&&n(a,o,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(t){return""}}})},e8e6:function(t,e,i){function r(t){var e={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},i=!0;if(t&&/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))if(e[t.substr(0,2)]){if(18==t.length){t=t.split("");for(var r=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=[1,0,"X",9,8,7,6,5,4,3,2],a=0,s=0,l=0,o=0;o<17;o++)s=t[o],l=r[o],a+=s*l;n[a%11];n[a%11]!=t[17]&&("校验位错误",i=!1)}}else"地址编码错误",i=!1;else"身份证号格式错误",i=!1;return i}i("ac1f"),i("1276"),t.exports=function(t,e){switch(void 0==t&&(t=""),e){case"account":var i=/^[a-zA-z]\w{3,15}$/;return!!i.test(t);case"cardid":return r(t);case"name":i=/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;return!!i.test(t);case"phone":i=/^1\d{10}$/;return!!i.test(t);case"tel":i=/^0\d{2,3}-?\d{7,8}$/;return!!i.test(t);case"mail":i=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;return!!i.test(t);case"special":var n=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,a=/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;return!n.test(t)&&!a.test(t);case"currency":i=/^\d+.?\d{0,2}$/;return!!i.test(t);case"password":return!(t.length<6);default:break}return!1}}}]);
//# sourceMappingURL=realname.8410b1de.js.map