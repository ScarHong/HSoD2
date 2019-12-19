(function(t){function e(e){for(var n,r,c=e[0],o=e[1],u=e[2],d=0,m=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==s[o]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/m/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"2e41":function(t,e,i){},"3b43":function(t,e,i){"use strict";var n=i("2e41"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("SpineHeader"),i("ServiceCheck"),i("MiscList",{attrs:{miscmap:t.miscmap},on:{"load-complete":t.showMisc}}),i("MiscShow",{attrs:{"misc-data":t.miscData,miscmap:t.miscmap,dev:t.dev}})],1)},a=[],r=i("bc3a"),c=i.n(r),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"mdui-appbar mdui-appbar-fixed"},[i("div",{staticClass:"mdui-toolbar mdui-color-theme"},[t._m(0),i("div",{staticClass:"mdui-typo-title"},[t._v(t._s(t.title))]),i("div",{staticClass:"mdui-toolbar-spacer"}),i("img",{staticClass:"favicon",attrs:{src:"/images/favicon-r.png"}})])])])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white",attrs:{href:"/"}},[i("i",{staticClass:"mdui-icon material-icons"},[t._v("home")])])}],l={name:"SpineHeader",data:function(){return{title:"动态看板查看器",loading:!0}},methods:{}},d=l,m=(i("771b"),i("2877")),p=Object(m["a"])(d,o,u,!1,null,"2d656b98",null),f=p.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-container mdui-p-t-2",attrs:{id:"service-check"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isActive,expression:"!isActive"}],staticClass:"mdui-text-color-red"},[t._v("尚未安装或启用搞事学园代理服务，或您的设备不支持代理服务，无法使用动态看板查看器")]),i("button",{staticClass:"mdui-btn mdui-shadow-1 mdui-ripple",on:{click:t.openDialog}},[t._v("使用说明")]),i("div",{staticClass:"mdui-dialog",attrs:{id:"about-dialog"}},[t._m(0),i("div",{staticClass:"mdui-dialog-content"},[i("div",{staticClass:"mdui-typo"},[t._m(1),i("p",{staticClass:"mdui-text-color-red"},[t._v("单个看板的体积约在 1MB ~ 5MB 大小，请注意流量消耗。")]),i("p",[t._v("搞事学园代理服务的安装方法如下：")]),t._m(2),i("p",[t._v("当前搞事学园代理服务的运行状况：")]),t.isActive?i("div",{staticClass:"detail mdui-container"},[i("p",[t._v("版本号： "+t._s(t.agentVer))]),i("p",[t._v("已下载的数据大小： "+t._s(t.occupancy))]),i("button",{staticClass:"mdui-btn mdui-ripple mdui-shadow-1 mdui-color-red",on:{click:t.clearService}},[t._v("点击删除数据")]),i("span",{staticClass:"mdui-m-l-2 mdui-text-color-red"},[t._v("(删除数据会降低加载速度，并且可能消耗更多流量，请谨慎使用)")]),i("br"),i("button",{staticClass:"mdui-btn mdui-ripple mdui-shadow-1 mdui-m-t-1",on:{click:t.stopService}},[t._v("点击停止服务")]),i("span",{staticClass:"mdui-m-l-2"},[t._v("(停止运行后请刷新页面)")])]):i("div",{staticClass:"inactive mdui-container"},[i("p",[t._v("未安装或未运行")]),i("button",{staticClass:"mdui-btn mdui-ripple mdui-shadow-1",on:{click:t.startService}},[t._v("点击运行服务")]),i("span",{staticClass:"mdui-m-l-2"},[t._v("(运行后请刷新页面)")])])])]),i("div",{staticClass:"mdui-dialog-actions"},[i("button",{staticClass:"mdui-btn mdui-shadow-1 mdui-ripple",on:{click:t.closeDialog}},[i("a",{staticClass:"mdui-icon material-icons"},[t._v("close")])])])])])},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-dialog-title"},[t._v("关于搞事学园代理服务"),i("div",{staticClass:"mdui-card-primary-subtitle"},[t._v("技术支持： 夹卡酱")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("动态看板查看器可在本地下载、解包后预览动态看板，需先安装"),i("b",[t._v("搞事学园代理服务")]),t._v("后使用，由于跨域问题目前仅支持在新域名 (https://redbean.tech) 上使用。")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-panel mdui-panel-gapless mdui-m-b-2",attrs:{"mdui-panel":""}},[i("div",{staticClass:"mdui-panel-item"},[i("div",{staticClass:"mdui-panel-item-header"},[i("div",{staticClass:"mdui-panel-item-title"},[t._v("Windows"),i("b",{staticClass:"mdui-text-color-green"},[t._v(" (推荐)")])]),i("i",{staticClass:"mdui-icon material-icons mdui-panel-item-arrow"},[t._v("keyboard_arrow_down")])]),i("div",{staticClass:"mdui-panel-item-body"},[i("p",[t._v("点击 "),i("a",{attrs:{href:"https://pan.baidu.com/s/1E4Db_H-3tPQu8lyIDfx3aQ",target:"_blank"}},[t._v(" 这个链接"),i("i",{staticClass:"mdui-icon material-icons"},[t._v("open_in_new")])]),t._v(" （提取码: sfad）下载并安装即可。")]),i("p",[t._v("或复制以下链接后访问： "),i("u",[t._v("https://pan.baidu.com/s/1E4Db_H-3tPQu8lyIDfx3aQ")])])])]),i("div",{staticClass:"mdui-panel-item"},[i("div",{staticClass:"mdui-panel-item-header"},[i("div",{staticClass:"mdui-panel-item-title"},[t._v("安卓")]),i("i",{staticClass:"mdui-icon material-icons mdui-panel-item-arrow"},[t._v("keyboard_arrow_down")])]),i("div",{staticClass:"mdui-panel-item-body"},[i("p",[t._v("开发中，敬请期待")])])])])}],g=(i("99af"),i("a15b"),i("d3b7"),i("2909")),b=(i("96cf"),"http://127.0.0.1:8787"),_={version:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(c.a.get("http://127.0.0.8787/ver"));case 3:return t=e.sent,b="http://127.0.0.1:8787",e.abrupt("return",t);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return");case 11:case"end":return e.stop()}}),null,null,[[0,8]])},occupancy:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.get("".concat(b,"/occupancy")));case 1:case"end":return t.stop()}}))},clear:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.get("".concat(b,"/clear")));case 1:case"end":return t.stop()}}))},exist:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get("".concat(b,"/exists?bundleCrc=").concat(t.CRC,"&files=").concat([].concat(Object(g["a"])(t.pngs),[t.atlas,t.skel]).join(","))));case 1:case"end":return e.stop()}}))},mount:function(t){var e,i;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e="https://assets.hsod2.benghuai.com/asset_bundle/6_8/original/android_compressed/",i=encodeURIComponent("".concat(e).concat(t.bundleName,"_").concat(t.CRC)),n.abrupt("return",c.a.get("".concat(b,"/mount?url=").concat(i)));case 3:case"end":return n.stop()}}))},isComplete:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get("".concat(b,"/iscomplete?taskid=").concat(t)));case 1:case"end":return e.stop()}}))},get:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get("".concat(b,"/").concat(t.CRC,"/").concat(t.skel)));case 1:case"end":return e.stop()}}))},getJSON:function(t){return"".concat(b,"/").concat(t.CRC,"/").concat(t.skel)},getATLAS:function(t){return"".concat(b,"/").concat(t.CRC,"/").concat(t.atlas)},start:function(){window.open("gaoshixueyuanagent://start","_self")},stop:function(){window.open("gaoshixueyuanagent://stop","_self")}},w={name:"ServiceCheck",data:function(){return{isActive:!1,agentVer:"",occupancy:"",dialogInstance:null}},methods:{openDialog:function(){var t=this;_.occupancy().then((function(e){var i=e.data;t.occupancy=i.msg})),this.dialogInstance.open()},closeDialog:function(){this.dialogInstance.close()},startService:function(){_.start()},stopService:function(){_.stop()},clearService:function(){var t=this;_.clear().then((function(e){var i=e.data;t.closeDialog(),window.mdui.alert("删除了".concat(i.msg,"数据"),(function(){t.openDialog()}),{history:!1})}))}},mounted:function(){var t=this;_.version().then((function(e){e&&(t.isActive=!0,t.agentVer=e.data.msg)})).catch((function(){t.isActive=!1})),this.dialogInstance=new window.mdui.Dialog("#about-dialog",{history:!1}),window.mdui.mutation("#about-dialog")}},C=w,y=(i("9d32"),Object(m["a"])(C,v,h,!1,null,null,null)),x=y.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-container mdui-p-t-2",attrs:{id:"misc-list"}},[i("div",{staticClass:"selector"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedMisc,expression:"selectedMisc"}],staticClass:"mdui-select",on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedMisc=e.target.multiple?i:i[0]},t.changeMisc]}},[i("option",{attrs:{selected:"",disabled:""},domProps:{value:-1}},[t._v("(请选择看板)")]),t._l(t.miscshows,(function(e,n){return t.miscmap[e.id]?i("option",{domProps:{value:n}},[t._v(t._s(t.miscmap[e.id]?t.miscmap[e.id].name:e.skel.replace(".json","")))]):t._e()}))],2),i("span",{staticClass:"display-message mdui-m-l-2"},[t._v(t._s(t.displayMessage))])])])},M=[],k=function t(){var e,i,n=arguments;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}))},i=n.length>1?n[1]:void 0,s.next=4,regeneratorRuntime.awrap(e());case 4:if(!s.sent){s.next=8;break}return s.abrupt("return",i());case 8:return s.abrupt("return",requestAnimationFrame((function(){return t(e,i)})));case 9:case"end":return s.stop()}}))},S=function(){var t,e,i=arguments;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:function(){},e=i.length>1&&void 0!==i[1]?i[1]:function(){},n.abrupt("return",requestAnimationFrame((function(){return k(t,e)})));case 3:case"end":return n.stop()}}))},R=S,j={name:"MiscList",props:["miscmap"],data:function(){return{miscshows:[],selectedMisc:"-1",currentTask:-1,displayMessage:""}},methods:{changeMisc:function(){var t,e,i=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=this.miscshows[this.selectedMisc],n.next=3,regeneratorRuntime.awrap(_.exist(t));case 3:if(e=n.sent,0!==e.data.retcode){n.next=6;break}return n.abrupt("return",this.$emit("load-complete",t));case 6:_.mount(t).then((function(e){var n=e.data;n.msg&&(i.currentTask=n.msg);var s=i;R((function(){var t,e;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,regeneratorRuntime.awrap(_.isComplete(s.currentTask));case 2:return t=i.sent,e=t.data,s.displayMessage="正在加载资源......".concat(e.msg,"%"),i.abrupt("return",e.msg>=100);case 6:case"end":return i.stop()}}))}),(function(){s.displayMessage="",i.$emit("load-complete",t)}))})).catch((function(t){i.displayMessage=t}));case 7:case"end":return n.stop()}}),null,this)}},mounted:function(){var t=this;c.a.get("miscshows.json").then((function(e){var i=e.data;t.miscshows=i}))}},z=j,O=(i("8acd"),Object(m["a"])(z,A,M,!1,null,null,null)),X=O.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"misc-show"}},[i("div",{staticClass:"selector mdui-container"},[t.animations instanceof Array?t._e():i("select",{directives:[{name:"model",rawName:"v-model",value:t.currentAnimation,expression:"currentAnimation"}],staticClass:"mdui-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentAnimation=e.target.multiple?i:i[0]}}},[i("option",{attrs:{selected:"",value:"",disabled:""}},[t._v("(请选择动画)")]),t._l(t.animations,(function(e,n){return i("option",{domProps:{value:n}},[t._v(t._s(n))])}))],2),i("span",{staticClass:"display-message mdui-m-l-2"},[t._v(t._s(t.displayMessage))]),t.dev?i("div",{staticClass:"mdui-container"},[i("span",{staticClass:"mdui-col-xs-1"},[t._v("offsetX")]),i("label",{staticClass:"mdui-slider mdui-col-xs-11 mdui-slider-discrete"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.offsetX,expression:"offsetX"}],attrs:{id:"range-x",type:"range",min:"-2000",max:"2000"},domProps:{value:t.offsetX},on:{__r:function(e){t.offsetX=e.target.value}}})]),i("span",{staticClass:"mdui-col-xs-1"},[t._v("offsetY")]),i("label",{staticClass:"mdui-slider mdui-col-xs-11 mdui-slider-discrete"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.offsetY,expression:"offsetY"}],attrs:{id:"range-y",type:"range",min:"-2000",max:"2000"},domProps:{value:t.offsetY},on:{__r:function(e){t.offsetY=e.target.value}}})]),i("span",{staticClass:"mdui-col-xs-1"},[t._v("sizeX")]),i("label",{staticClass:"mdui-slider mdui-col-xs-11 mdui-slider-discrete"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sizeX,expression:"sizeX"}],attrs:{id:"range-x",type:"range",min:"-2000",max:"2000"},domProps:{value:t.sizeX},on:{__r:function(e){t.sizeX=e.target.value}}})]),i("span",{staticClass:"mdui-col-xs-1"},[t._v("sizeY")]),i("label",{staticClass:"mdui-slider mdui-col-xs-11 mdui-slider-discrete"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sizeY,expression:"sizeY"}],attrs:{id:"range-y",type:"range",min:"-2000",max:"2000"},domProps:{value:t.sizeY},on:{__r:function(e){t.sizeY=e.target.value}}})])]):t._e()]),i("div",{staticClass:"mdui-m-t-4",attrs:{id:"spine-widget"}})])},P=[],D=(i("a9e3"),i("b64b"),{props:["miscData","miscmap","dev"],data:function(){return{animations:[],currentAnimation:"",displayMessage:"",widgetInstance:null,misc:{},scale:1,offsetX:0,offsetY:0,sizeX:0,sizeY:0,bounds:null}},mounted:function(){window.mdui.mutation()},methods:{loadMiscShow:function(t){var e=this;this.currentAnimation="",this.displayMessage="正在导入动画列表...",this.animations=[],this.misc=t,_.get(t).then((function(t){e.animations=t.data.animations,window.skel=t.data;var i=Object.keys(e.animations).length;e.displayMessage="导入了 ".concat(i," 个动画"),"idle"in e.animations?e.currentAnimation="idle":e.currentAnimation=Object.keys(e.animations)[0]})).catch((function(){e.displayMessage="读取动画失败，该看板可能暂时无法预览",e.animations=[]}))},showAnimation:function(t){if(""!==t){var e=this,i={json:_.getJSON(this.misc),atlas:_.getATLAS(this.misc),animation:t,backgroundColor:"#00000000",debug:!1,scale:Number(this.scale),fix:{offset:{x:-Number(this.offsetX),y:-Number(this.offsetY)},size:{x:-Number(this.sizeX),y:-Number(this.sizeY)}},premultipliedAlpha:!0,atlasPages:this.misc.pngs,success:function(){},error:function(){e.displayMessage="加载素材失败，请重试"}};this.bounds&&(i.bounds=this.bounds),this.widgetInstance=new window.spine.SpineWidget("spine-widget",i),window.widgetInstance=this.widgetInstance}}},watch:{miscData:function(t,e){if(this.miscmap[t.id]){var i=this.miscmap[t.id];this.offsetX=i.offsetX,this.offsetY=i.offsetY,this.sizeX=i.sizeX,this.sizeY=i.sizeY,this.bounds=i.bounds||null}t.CRC&&t.CRC!==e.CRC&&this.loadMiscShow(t)},currentAnimation:function(t){""!==t&&this.showAnimation(t)},offsetX:function(){this.showAnimation(this.currentAnimation)},offsetY:function(){this.showAnimation(this.currentAnimation)},sizeX:function(){this.showAnimation(this.currentAnimation)},sizeY:function(){this.showAnimation(this.currentAnimation)}}}),N=D,$=(i("3b43"),Object(m["a"])(N,Y,P,!1,null,null,null)),E=$.exports,I={name:"app",data:function(){return{miscData:{},miscmap:{},dev:!1}},components:{SpineHeader:f,ServiceCheck:x,MiscList:X,MiscShow:E},methods:{showMisc:function(t){this.miscData=t}},mounted:function(){var t=this;window.mdui.JQ("body").removeClass("mdui-appbar-with-toolbar"),c.a.get("miscmap.json").then((function(e){t.$set(t,"miscmap",e.data)}))}},T=I,H=(i("034f"),Object(m["a"])(T,s,a,!1,null,null,null)),J=H.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(J)}}).$mount("#app")},"5ac7":function(t,e,i){},"771b":function(t,e,i){"use strict";var n=i("d8dc"),s=i.n(n);s.a},"85ec":function(t,e,i){},"8acd":function(t,e,i){"use strict";var n=i("5ac7"),s=i.n(n);s.a},"9d32":function(t,e,i){"use strict";var n=i("f797"),s=i.n(n);s.a},d8dc:function(t,e,i){},f797:function(t,e,i){}});