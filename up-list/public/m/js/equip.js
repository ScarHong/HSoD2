(function(t){function i(i){for(var s,l,r=i[0],o=i[1],u=i[2],d=0,m=[];d<r.length;d++)l=r[d],a[l]&&m.push(a[l][0]),a[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);c&&c(i);while(m.length)m.shift()();return n.push.apply(n,u||[]),e()}function e(){for(var t,i=0;i<n.length;i++){for(var e=n[i],s=!0,r=1;r<e.length;r++){var o=e[r];0!==a[o]&&(s=!1)}s&&(n.splice(i--,1),t=l(l.s=e[0]))}return t}var s={},a={app:0},n=[];function l(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=s,l.d=function(t,i,e){l.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,i){if(1&i&&(t=l(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)l.d(e,s,function(i){return t[i]}.bind(null,s));return e},l.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(i,"a",i),i},l.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=i,r=r.slice();for(var u=0;u<r.length;u++)i(r[u]);var c=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034f":function(t,i,e){"use strict";var s=e("64a9"),a=e.n(s);a.a},1544:function(t){t.exports=[{date:"2018.01.13",info:"初版上线"},{date:"2018.01.23",info:"修复了装备类型背景异常消失的错误"},{date:"2018.05.01",info:"适配 5.0 版本 UI"},{date:"2018.05.09",info:"适配 5.2(beta) 版本 UI"},{date:"2018.05.11",info:["修复追加等级不显示的 bug","适配 5.1 版本 UI 微调"]},{date:"2018.06.29",info:["修复追加等级为 0 时显示 +0 的 bug","现在切换装备类型后会自动选择亲密度加成属性了"]},{date:"2018.07.01",info:["适配 5.3 版本 UI","现在切换到服装、徽章和喷雾类武器时会默认重置伤害类型加成了"]},{date:"2018.07.28",info:"[重要]已支持微软雅黑在线字体 , 该字体约 10.2 MB , 流量党请慎重"},{date:"2018.08.11",info:"修复了部分 UI 层叠错乱的 bug"},{date:"2018.08.20",info:["加入了偶像徽章的样式","现在会自动替换全角符号啦!"]},{date:"2018.08.21",info:"适配 5.5(beta) 版本 UI"},{date:"2018.09.16",info:"加入辉金系图标"},{date:"2018.09.29",info:"适配 5.6(beta) 版本 UI"},{date:"2018.11.27",info:"加入矩阵系图标"},{date:"2018.12.01",info:["更换了预设配置","更改了水印地址","略微增加了技能描述的最大宽度","添加了换行功能"]},{date:"2018.12.17",info:["新版 UI 发布","添加了头像更换功能","截图功能重做回归"]},{date:"2018.12.19",info:["修复了一些小 bug","点击锁定按钮可以解锁装备","可以直接点击系列图标更换系列","更改了部分输入框的字数、范围限制","优化了截图功能的兼容性(对移动端支持依然很差 , 请尽量用电脑)","(PC 端)在预览界面鼠标拖动和右键菜单不再可用"]},{date:"2018.12.20",info:["自动保存上次使用时的数据(如需重设 , 请点击最下方重设按钮)","修复了突破等级为0时可能显示 10 个空突破水晶的 bug"]},{date:"2018.12.21",info:["修复了部分情况下装备图片可能覆盖其他 UI 的问题","优化了部分资源的加载逻辑","为手动截图提供强制缩放功能"]},{date:"2018.12.24",info:["修复了亲密度和追加等级为 0 时装备属性异常消失的问题","修复了亲密度加成属性精度不正确的问题"]},{date:"2018.12.31",info:["修复了非数字属性可能显示为 NaN 的问题","增加了图片编辑的滑块最大范围"]},{date:"2019.01.01",info:["添加了部分字符(1，；)用的定制补丁字体","适应字体更动 , 更改了突破数值的标记方式 , 现在不再需要半角括号了(原标记方式仍保留)","修复了投掷类武器不显示弹跳次数的问题"]},{date:"2019.01.31",info:["添加了新装备类型[喷雾-切换]","添加了新的头像"]},{date:"2019.04.21",info:["角色头像更新至 No.141 七星","修改了角色头像和系列图标的加载逻辑 , 现在会在第一次点开选择窗口时加载图片","优化了初次截图的响应速度"]},{date:"2019.04.25",info:["角色头像更新至 No.145 黑猫诡计","修复了选择角色头像或系列图标后，屏幕无法滚动的问题","修复了仅更改角色头像时，不会保存头像信息的问题"]}]},1635:function(t,i,e){},"196e":function(t,i,e){},"1b0b":function(t,i,e){},"1bf1":function(t,i,e){},"27df":function(t,i,e){"use strict";var s=e("c1cc"),a=e.n(s);a.a},"27e0":function(t,i,e){"use strict";var s=e("b086"),a=e.n(s);a.a},"309b":function(t,i,e){},"3bba":function(t,i,e){"use strict";var s=e("1635"),a=e.n(s);a.a},"3dca":function(t,i,e){"use strict";var s=e("1b0b"),a=e.n(s);a.a},"50e5":function(t,i,e){"use strict";var s=e("51ae"),a=e.n(s);a.a},"51ae":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("097d");var s=e("2b0e"),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{title:"装备模拟器"}}),t._m(0),e("div",{staticClass:"mdui-container-fluid"},[e("div",{staticClass:"equip-container"},[e("div",{staticClass:"equip mdui-shadow-5 hide",attrs:{id:"equip",ondragstart:"return false",oncontextmenu:"return false"}},[e("Rings",{class:{activated:!t.screenshot},attrs:{id:"rings"}}),e("User",t._b({attrs:{id:"user"},on:{"change-icon":t.changeIcon}},"User",t.user,!1)),e("System",{attrs:{id:"system"}}),e("EquipName",t._b({attrs:{id:"equip-name"}},"EquipName",t.equip,!1)),e("EquipImage",t._b({attrs:{id:"equip-image",filter:t.filter,styles:t.styles,imgStyle:t.imgStyle}},"EquipImage",t.equip,!1)),e("div",{attrs:{id:"equip-detail"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.watermark,expression:"watermark"}],staticClass:"watermark"},[t._v("搞事学园 @ https://redbean.tech/equip")]),e("EquipStatus",t._b({attrs:{id:"equip-status"}},"EquipStatus",t.equip,!1)),e("EquipSkill",{attrs:{id:"equip-skill",skills:t.equip.skills}})],1)],1)])]),e("ImageEdit",{attrs:{filter:t.filter,userStyle:t.userStyle},on:{edit:t.editHandler}}),e("Edit",{attrs:{equip:t.equip,user:t.user},on:{edit:t.editHandler}}),e("WhatsNew",{staticClass:"mdui-m-b-4"}),e("button",{staticClass:"mdui-btn mdui-center mdui-color-red mdui-m-b-4",on:{click:t.reset}},[t._v("重设所有配置"),e("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("restore_page")])]),t.showImageSelector?e("ImageSelector",{attrs:{id:"dialog",current:t.user.icon},on:{"select-icon":t.selectIcon}}):t._e()],1)},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-progress",attrs:{id:"progress"}},[e("div",{staticClass:"mdui-progress-indeterminate"})])}],l=(e("456d"),e("53ca")),r=e("3835"),o=(e("6762"),e("2fdb"),e("ac4d"),e("8a81"),e("ac6a"),{name:"镜花水月·Kira",serial:2962,stars:7,level:99,adds:99,love:50,cost:50,type:"徽章",damageType:"none",unique:"唯一装备 , 带多件无效哟~",showButton:!0,showUnique:!0,awaken:!1,showContainer:!0,idol:!0,properties:{"移速":14.9},addType:"移速",series:"02",image:"",skills:[{name:"水中摇曳之月",dmgType:"none",description:"每#1秒充能1层能抵挡一次攻击的屏障 , 最多充能8层 , 亲密度大于50时上限增加#5层 , 并且闪避成功时也触发『镜中绚烂之花』",break:0},{name:"镜中绚烂之花",dmgType:"none",description:"抵挡攻击后 , 增加#800点武器攻击力 , 每点亲#n密度额外增加#5点 , 提升#180%对攻击者造成#n的全伤害 , 持续15秒 , 并使其陷入时停状态 , 持续3秒",break:10}]}),u=["serial","stars","level","adds","love","cost"],c=["awaken","idol","showContainer","showUnique","showButton"],d=["name","unique"],m={none:"无",physic:"物理",power:"能量",snow:"冰",fire:"火",light:"电",poison:"毒"},p={"服装":{"生命":2e3},"徽章":{"移速":14.9},"手枪-速射":{"攻击力":300,"载弹量":200,"射　速":10},"手枪-手炮":{"攻击力":3e3,"载弹量":20,"射　速":1.7},"自动步枪":{"攻击力":400,"载弹量":300,"射　速":10},"霰弹-独头":{"攻击力":2500,"载弹量":34,"射　速":1.7},"霰弹-多头":{"攻击力":500,"载弹量":30,"射　速":1.7,"弹道数":5},"狙击":{"攻击力":3e3,"载弹量":30,"射　速":4.8},"单兵火箭":{"攻击力":2500,"载弹量":24,"射　速":1.2},"近战-刀剑":{"攻击力":800,"载弹量":"-","攻　速":3.3},"近战-电锯":{"攻击力":200,"载弹量":"-","攻　速":10},"喷雾-普通":{"攻击力":"-","载弹量":25,"射　速":2.4},"喷雾-激活":{"攻击力":"-","载弹量":15,"射　速":2.4},"喷雾-附魔":{"攻击力":"-","载弹量":20,"射　速":2.4},"喷雾-切换":{"攻击力":"-","载弹量":20,"射　速":1.2},"特殊":{"攻击力":800,"载弹量":200,"射　速":5},"投掷":{"攻击力":800,"载弹量":10,"射　速":4.8,"弹跳次数":3},"放置-炮台":{"攻击力":0,"载弹量":3,"射　速":3.3,"放置上限":1},"放置-远古兵器":{"攻击力":2500,"载弹量":10,"射　速":3.3,"放置上限":1},"放置-人形":{"攻击力":2200,"载弹量":9,"射　速":3.3,"放置上限":3},"放置-地雷":{"攻击力":3e3,"载弹量":10,"射　速":3.3,"放置上限":1},"放置-特殊":{"攻击力":0,"载弹量":8,"射　速":3.3,"放置上限":1},"放置-诱导人形":{"生　命":1,"载弹量":8,"持　续":8,"放置上限":1}},v={name:"搞事学园",level:380,coin:77777777,crystal:4396,icon:"084"},f={name:"装备名",serial:"编号",stars:"星级",level:"等级",adds:"追加等级",love:"亲密度",cost:"负重",type:"装备类型",damageType:"伤害类型",awaken:"觉醒",idol:"偶像化",properties:"属性",addType:"加成属性",series:"系列",image:"装备图",unique:"提示内容",skills:"技能",showContainer:"徽章框",showUnique:"提示",showButton:"强化按钮"},g=["移速","生命","生　命","攻击力","攻　速","射　速","持　续","载弹量","弹跳次数","弹道数","放置上限"],h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("header",{staticClass:"mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide"},[e("div",{staticClass:"mdui-toolbar mdui-color-theme"},[t._m(0),e("div",{staticClass:"mdui-typo-title"},[t._v(t._s(t.title))]),e("div",{staticClass:"mdui-toolbar-spacer"}),e("img",{staticClass:"favicon",attrs:{src:"/images/favicon-r.png"}})])])},_=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a",{staticClass:"mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white",attrs:{href:"/"}},[e("i",{staticClass:"mdui-icon material-icons"},[t._v("home")])])}],b={props:{title:String}},C=b,y=(e("3bba"),e("2877")),w=Object(y["a"])(C,h,_,!1,null,"7d4d0409",null);w.options.__file="Header.vue";var k=w.exports,q=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"rings"},[e("div",{staticClass:"mid-top fast-rotate"}),e("div",{staticClass:"right-top fast-rotate"}),e("div",{staticClass:"left-bot slow-rotate"}),e("div",{staticClass:"right-mid fast-rotate"}),e("div",{staticClass:"right-bot slow-rotate"})])}],S=(e("eeae"),{}),E=Object(y["a"])(S,q,x,!1,null,"e3a73e54",null);E.options.__file="Rings.vue";var $=E.exports,T=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"user"},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:"/images/icons/Character/"+t.icon+".png"}})]),t._m(0),e("div",{staticClass:"icon touch-area mdui-ripple",on:{click:t.clickHandler}}),e("div",{staticClass:"top"},[e("span",{staticClass:"level"},[t._v("LV."+t._s(t._f("level")(t.level)))]),e("span",{staticClass:"name"},[t._v(t._s(t._f("name")(t.name)))])]),e("div",{staticClass:"bot"},[e("span",{staticClass:"coin"},[t._v(t._s(t._f("number")(t.coin)))]),e("span",{staticClass:"crystal"},[t._v(t._s(t._f("number")(t.crystal)))])])])},I=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"background"},[e("img",{attrs:{src:"/images/equip/user-bar.png"}})])}],N=(e("6b54"),e("c5f6"),{props:{name:String,level:Number,icon:String,coin:[Number,String],crystal:[Number,String]},methods:{clickHandler:function(){this.$emit("change-icon")}},filters:{name:function(t){return t.substring(0,8)},level:function(t){return t.toString().slice(0,3)},number:function(t){return t=t.toString(),t.length>11?"???":t.length>9?t.slice(0,-6)+"百万":t}}}),O=N,j=(e("5fa9"),Object(y["a"])(O,T,I,!1,null,"482d8217",null));j.options.__file="User.vue";var P=j.exports,L=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-dialog mdui-color-grey-900"},[e("div",{staticClass:"mdui-dialog-title"},[t._v("更改头像")]),e("div",{staticClass:"mdui-dialog-content"},t._l(t.images,function(i){return i<73||i>75?e("div",{staticClass:"img-container",on:{click:function(e){t.select(i)}}},[e("img",{attrs:{src:"/images/icons/Character/"+i+".png",async:""}}),t.current===i?e("div",{staticClass:"img-selected"},[e("div",{staticClass:"text"},[t._v("设 置 中")])]):t._e()]):t._e()})),t._m(0)])},U=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-dialog-actions"},[e("button",{staticClass:"mdui-btn mdui-ripple mdui-shadow-1 mdui-color-red",attrs:{"mdui-dialog-cancel":""}},[e("i",{staticClass:"mdui-icon material-icons"},[t._v("close")])])])}],B={props:{current:String},data:function(){for(var t=[],i=1;i<146;i++)t.push(("000"+i).slice(-3));return{images:t}},methods:{select:function(t){this.$emit("select-icon",t)}}},J=B,A=(e("27df"),Object(y["a"])(J,L,U,!1,null,"094f7209",null));A.options.__file="ImageSelector.vue";var H=A.exports,D=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"system"}},[e("div",{staticClass:"button home"}),e("div",{staticClass:"button battle"}),e("div",{staticClass:"button equips"}),e("div",{staticClass:"button store"}),e("div",{staticClass:"button comm"}),e("div",{staticClass:"button other"})])}],Q=(e("27e0"),{}),R=Object(y["a"])(Q,D,M,!1,null,"cdce7672",null);R.options.__file="System.vue";var F=R.exports,W=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"equip-name"}},[e("img",{staticClass:"back",attrs:{src:"/images/equip/back.png"}}),e("div",{staticClass:"name-bar"},[e("div",{staticClass:"serial"},[t._v("编号 "+t._s(t._f("number")(t.serial)))]),e("div",{staticClass:"series"},[e("img",{attrs:{src:t.seriesImage},on:{click:t.showSelector}})]),e("div",{staticClass:"name"},[t._v(t._s(t.name))]),e("div",{staticClass:"damage-type"},[e("img",{attrs:{src:t.damageImage}})]),e("div",{staticClass:"stars"},t._l(t.equipStars,function(t){return e("img",{attrs:{src:"/images/equip/star-full.png"}})}))])])},G=[],K=window.mdui,V={props:{name:String,serial:[Number,String],series:[Number,String],damageType:String,stars:[Number,String]},computed:{seriesImage:function(){return"/images/icons/Series/series"+this.series+".png"},damageImage:function(){return"none"===this.damageType?"":"/images/icons/Type/"+this.damageType+".png"},equipStars:function(){return this.stars<0?0:this.stars>10?10:this.stars}},methods:{showSelector:function(){K.JQ("#series-selector").trigger("click")}},filters:{number:function(t){return String(t).substring(0,5)}}},z=V,X=(e("50e5"),Object(y["a"])(z,W,G,!1,null,"2b0e568b",null));X.options.__file="EquipName.vue";var Y=X.exports,Z=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"equip-image"},[e("div",{staticClass:"img-container"},[e("img",{staticClass:"main",style:t.imgStyle,attrs:{src:t.src}}),e("div",{staticClass:"img-filter"},[e("div",{staticClass:"filter",class:{activated:t.filter},style:t.imgStyle})]),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.awaken&&t.showContainer,expression:"!awaken && showContainer"}],staticClass:"container",class:"container-"+(t.stars<7?"6":"7"),attrs:{src:t.containerSrc}})]),e("div",{staticClass:"widgets"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.awaken,expression:"awaken"}],staticClass:"awaken-widgets"},[e("div",{staticClass:"search"}),e("div",{staticClass:"shift"})]),e("div",{staticClass:"lock-widgets"},[e("div",{staticClass:"lock",class:{unlocked:!t.lock},on:{click:t.toggleLock}}),e("div",{staticClass:"store"})])]),t.showUnique?e("div",{staticClass:"unique mdui-valign",class:{awaken:t.awaken}},[e("div",{staticClass:"unique-text mdui-center"},[t._v(t._s(t.unique))])]):t._e(),t.showButton?e("div",{staticClass:"img-button"},[e("img",{attrs:{src:"/images/equip/button.png"}})]):t._e()])},tt=[],it={props:{image:String,stars:[Number,String],awaken:Boolean,idol:Boolean,unique:String,imgStyle:Object,showContainer:Boolean,showUnique:Boolean,showButton:Boolean,filter:Boolean},data:function(){return{lock:!0}},computed:{src:function(){return""!==this.image?this.image:"/images/equip/base-"+(this.awaken?"awaken":"pin")+".png"},containerSrc:function(){var t=this.idol?"idol-":"pin-",i=this.stars<7?"6":"7";return"/images/equip/"+t+i+"s.png"}},methods:{toggleLock:function(){this.lock=!this.lock}}},et=it,st=(e("5e01"),Object(y["a"])(et,Z,tt,!1,null,"0cb560bd",null));st.options.__file="EquipImage.vue";var at=st.exports,nt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"equip-status"},[e("div",{staticClass:"status-container"},[e("div",{staticClass:"status-top"},[e("div",{staticClass:"equip-type spec"},[t._v(t._s(t.type))]),e("div",{staticClass:"equip-cost"},[t._v("负重 "+t._s(t.cost))]),e("div",{staticClass:"equip-level"},[e("img",{attrs:{src:"/images/equip/level.png"}}),e("span",{staticClass:"lv"},[t._v(t._s(t.level)+" / 99")]),t.adds?e("span",{staticClass:"adds spec mdui-text-truncate"},[t._v("+ "+t._s(t.adds))]):t._e()]),e("div",{staticClass:"equip-love"},[t._v("亲密度 "),(t.awaken?t.love<99:t.love<50)?e("span",[t._v(t._s(t.love+(t.awaken?"/99":"/50")))]):e("span",[t._v("最高")])])]),t.shouldShow?e("div",{staticClass:"status-mid"},[e("img",{staticClass:"cutoff",attrs:{src:"/images/equip/status-cutoff.png"}})]):t._e(),t.shouldShow?e("div",{staticClass:"status-bottom"},t._l(t.propOrder,function(i){return t.propExist(i)?e("div",{staticClass:"status-detail mdui-text-truncate"},[t._v(t._s(i)+" "),e("span",{class:{spec:t.props[i].isAdd,space:t.props[i].addMargin}},[t._v(t._s(t.props[i].value))])]):t._e()})):t._e()])])},lt=[],rt={props:{type:String,level:Number,adds:Number,love:Number,cost:Number,properties:Object,addType:String,awaken:Boolean},data:function(){return{propOrder:g}},computed:{allAdds:function(){return this.adds+this.love},shouldShow:function(){return"徽章"!==this.type||this.allAdds>0},props:function(){var t={};for(var i in this.properties)t[i]={},t[i].value=this.properties[i],t[i].isAdd=this.allAdds&&i===this.addType,t[i].isAdd&&ot(t,i,this.allAdds),ut(t,i);return t}},methods:{propExist:function(t){return t in this.properties}},filters:{speed:function(t){return t+" / 秒"}}};function ot(t,i,e){var s=t[i].value,a=.1;switch(i){case"移速":return t[i].addMargin=!0,t[i].value=a*e;case"生命":a=.003;break;case"射　速":case"射　速":" / 秒";case"持　续":"s";default:a=.002}t[i].value=Number(s),isNaN(t[i].value)?t[i].value=s:t[i].value=parseFloat((t[i].value*(1+a*e)).toFixed(2))}function ut(t,i){var e="",s="",a=t[i].value;if(!isNaN(Number(a))){switch(i){case"移速":e="+ ",s="%";break;case"攻　速":case"射　速":s=" / 秒";break;case"持　续":s="s";break;default:a=Math.floor(a);break}t[i].value=e+a+s}}var ct=rt,dt=(e("66de"),Object(y["a"])(ct,nt,lt,!1,null,"aa412a12",null));dt.options.__file="EquipStatus.vue";var mt=dt.exports,pt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"equip-skill"},t._l(t.skills,function(i){return e("div",{staticClass:"equip-skill-container"},[e("div",{staticClass:"equip-skill-name"},[e("span",{staticClass:"name spec"},[t._v(t._s(i.name))]),e("img",{staticClass:"damage-type",attrs:{src:"/images/icons/Type/"+i.dmgType+".png"}}),i.break>0?e("span",{staticClass:"breakpoints"},t._l(10,function(t){return e("div",{staticClass:"breakpoint",class:t<=i.break?"full":"empty"})})):t._e()]),t._m(0,!0),e("div",{staticClass:"equip-skill-desc"},[e("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.descHtml(i.description))}})])])}))},vt=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"equip-skill-cutoff"},[e("hr")])}],ft=(e("a481"),function(t){return t.replace(/#\(/g,'<span style="color: #34a4e4">').replace(/\)/g,"</span>")}),gt={props:{skills:Array},data:function(){return{damageTypes:m}},methods:{descHtml:function(t){return t=t.replace(/\$rmwm;/g,"").replace(/\\#/g,"__em__sharp__").replace(/#([\d.]+%?)/g,function(t,i){return'<span style="color: #34a4e4">'.concat(i,"</span>")}).replace(/#\(.*?\)/g,ft).replace(/#n/g,"<br>").replace(/__em__sharp__/g,"#"),t}}},ht=gt,_t=(e("bf71"),Object(y["a"])(ht,pt,vt,!1,null,"75f7543d",null));_t.options.__file="EquipSkill.vue";var bt=_t.exports,Ct=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-container mdui-typo"},[e("div",{staticClass:"image-editor mdui-panel",attrs:{"mdui-panel":""}},[e("div",{staticClass:"mdui-panel-item"},[t._m(0),e("div",{staticClass:"mdui-panel-item-body"},[e("div",{staticClass:"sliders mdui-col-xs-12"},t._l(t.userStyle,function(i,s){return e("div",{staticClass:"mdui-textfield"},[e("div",{staticClass:"input mdui-col-xs-4 mdui-col-sm-2"},[e("label",{staticClass:"mdui-textfield-label"},[t._v(t._s(t.styleMap[s]))]),e("input",{staticClass:"mdui-textfield-input",attrs:{type:"number"},domProps:{value:i},on:{input:function(i){t.setStyle(s,i)}}})]),e("label",{staticClass:"mdui-slider mdui-slider-discrete mdui-col-xs-8 mdui-col-sm-10 mdui-m-t-2"},[e("input",{attrs:{id:"range-"+s,type:"range",step:"1",min:"-300",max:"300"},domProps:{value:i},on:{input:function(i){t.setStyle(s,i)}}})])])})),e("blockquote",{staticClass:"mdui-col-xs-12"},[t._v("滑块不够用时可以手动输入")]),e("div",{staticClass:"settings mdui-col-xs-12"},[e("div",{staticClass:"mdui-col-xs-12 mdui-col-sm-6"},[e("label",{staticClass:"mdui-checkbox"},[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.filter,value:t.filter},on:{change:t.setFilter}}),e("i",{staticClass:"mdui-checkbox-icon"}),t._v("简易滤镜(仅供试用)")])]),e("div",{staticClass:"mdui-col-xs-6 mdui-col-sm-3"},[e("label",{staticClass:"upload-image mdui-btn mdui-shadow-1"},[e("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.uploadImage}}),t._v("上传图片")])]),e("div",{staticClass:"mdui-col-xs-6 mdui-col-sm-3"},[e("div",{staticClass:"mdui-btn mdui-shadow-1",on:{click:t.reset}},[t._v("重置参数")])]),e("div",{staticClass:"mdui-col-xs-12 mdui-m-y-2"},[e("div",{staticClass:"mdui-btn mdui-shadow-1 mdui-color-theme-accent",attrs:{id:"scale-btn"},on:{click:t.scale}},[t._v("强制缩放")]),e("label",{staticClass:"mdui-m-l-2"},[t._v("该按钮用于强制将预览窗口缩放到适合截图的大小便于手动截图 , 请注意使用后可能会导致自动截图变形")])])])])])])])},yt=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-panel-item-header"},[e("div",{staticClass:"mdui-panel-item-title"},[t._v("装备图片编辑")]),e("i",{staticClass:"mdui-panel-item-arrow mdui-icon material-icons"},[t._v("keyboard_arrow_down")])])}],wt=window.mdui,kt={props:{filter:Boolean,userStyle:Object},data:function(){return{styleMap:{width:"宽度",height:"高度",marginLeft:"水平移动",marginTop:"垂直移动"}}},mounted:function(){this.$nextTick(function(){wt.mutation(".image-editor")})},methods:{setFilter:function(t){this.$emit("edit",["$data","filter",t.target.checked])},setStyle:function(t,i){var e=Number(i.target.value);this.$emit("edit",["$data",["userStyle",t],e]),this.$nextTick(function(){wt.updateSliders()})},uploadImage:function(t){if(t&&t.target&&t.target.files[0]){var i=this,e=new FileReader;e.onload=function(){i.$emit("edit",["equip","image",this.result])},e.readAsDataURL(t.target.files[0])}else this.$emit("edit",["equip","image",""])},reset:function(){this.$emit("edit",["$data","userStyle",{width:0,height:0,marginLeft:0,marginTop:0}]),this.$nextTick(function(){wt.updateSliders()})},scale:function(){var t=wt.JQ(".equip-container")[0].clientWidth,i=window.screen.height;if(t&&i){var e=t/1024*.9,s=i/576*.9,a=e<s?e:s;wt.JQ("#equip").css("transform-origin","top left"),wt.JQ("#equip").css("transform","scale(".concat(a>1?1:a,")"))}}}},qt=kt,xt=(e("3dca"),Object(y["a"])(qt,Ct,yt,!1,null,"7d126df3",null));xt.options.__file="ImageEdit.vue";var St=xt.exports,Et=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"edit"},[e("div",{staticClass:"mdui-card mdui-container mdui-m-y-4 mdui-shadow-3"},[t._m(0),e("div",{staticClass:"mdui-card-content mdui-p-t-0"},[e("div",{staticClass:"edit-item mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3 mdui-textfield mdui-p-b-3"},[t._m(1),e("input",{staticClass:"mdui-textfield-input",attrs:{type:"text",maxlength:"8",id:"edit-user-name"},domProps:{value:t.user.name},on:{input:function(i){t.emitEdit("user","name",i)}}})]),t._l(t.userNumbers,function(i,s){return e("div",{staticClass:"edit-item mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3 mdui-textfield mdui-p-b-3"},[e("label",{staticClass:"input-text mdui-textfield-label",attrs:{for:"edit-user-"+s}},[e("span",{staticClass:"input-label"},[t._v(t._s(i))])]),e("input",{staticClass:"mdui-textfield-input",attrs:{type:"number",id:"edit-user-"+s},domProps:{value:t.user[s]},on:{input:function(i){t.emitEdit("user",s,i)}}})])}),e("div",{staticClass:"mdui-divider-dark mdui-col-xs-12"}),t._l(t.equip,function(i,s){return t.isInput(s)?[t.isNumber(s)?e("div",{staticClass:"edit-item mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3 mdui-textfield"},[e("label",{staticClass:"input-number mdui-textfield-label",attrs:{for:"edit-equip-"+s}},[e("span",{staticClass:"input-label"},[t._v(t._s(t.i18n[s]))])]),e("input",{staticClass:"mdui-textfield-input",attrs:{type:"number",id:"edit-equip-"+s},domProps:{value:t.equip[s]},on:{input:function(i){t.emitEdit("equip",s,i)}}})]):t.isBool(s)?e("div",{staticClass:"edit-item mdui-col-xs-6 mdui-col-sm-3 mdui-col-md-2 mdui-textfield mdui-m-t-2 mdui-m-b-1"},[e("label",{staticClass:"input-checkbox mdui-switch",attrs:{for:"edit-equip-"+s}},[e("input",{attrs:{type:"checkbox",id:"edit-equip-"+s,disabled:"showContainer"===s&&t.equip.awaken},domProps:{value:t.equip[s],checked:t.equip[s]},on:{change:function(i){t.emitEdit("equip",s,i)}}}),e("i",{staticClass:"mdui-switch-icon"}),e("span",{staticClass:"mdui-m-l-1"},[t._v(t._s(t.i18n[s]))])])]):t.isString(s)?e("div",{staticClass:"edit-item mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3 mdui-textfield"},[e("label",{staticClass:"mdui-textfield-label",attrs:{for:"edit-equip-"+s}},[e("span",{staticClass:"input-label"},[t._v(t._s(t.i18n[s]))])]),e("input",{staticClass:"mdui-textfield-input",attrs:{type:"text",id:"edit-equip-"+s},domProps:{value:t.equip[s]},on:{input:function(i){t.emitEdit("equip",s,i)}}})]):t._e()]:t._e()}),e("div",{staticClass:"mdui-col-xs-12"}),e("div",{staticClass:"edit-item mdui-col-xs-4 mdui-textfield"},[e("label",{staticClass:"input-select"},[e("span",{staticClass:"input-label"},[t._v("装备类型")]),e("select",{staticClass:"mdui-select",domProps:{value:t.equip.type},on:{change:t.editEquipType}},t._l(t.equipTypes,function(i,s){return e("option",{domProps:{value:s}},[t._v(t._s(s))])}))])]),e("div",{staticClass:"edit-item mdui-col-xs-4 mdui-textfield"},[e("label",{staticClass:"input-select"},[e("span",{staticClass:"input-label"},[t._v("伤害类型")]),e("select",{staticClass:"mdui-select",domProps:{value:t.equip.damageType},on:{change:t.editDamageType}},t._l(t.damageTypes,function(i,s){return e("option",{domProps:{value:s}},[t._v(t._s(i))])}))])]),e("div",{staticClass:"edit-item mdui-col-xs-4 mdui-textfield"},[e("label",{staticClass:"input-button"},[e("span",{staticClass:"input-label"},[t._v("装备系列")]),e("button",{staticClass:"mdui-btn mdui-shadow-1",attrs:{id:"series-selector"},on:{click:t.showSeriesPanel}},[t._v("点击选择")])])]),e("div",{staticClass:"mdui-col-xs-12 mdui-m-t-2"},[e("label",{staticClass:"input-select"},[e("span",{staticClass:"mdui-m-r-2"},[t._v("亲密度/追加等级加成属性:")]),e("select",{staticClass:"mdui-select",domProps:{value:t.equip.addType},on:{change:t.editEquipAddType}},t._l(t.propOrder,function(i){return i in t.equip.properties?e("option",{domProps:{value:i}},[t._v(t._s(i))]):t._e()}))])]),"徽章"!==t.equip.type?t._l(t.propOrder,function(i){return i in t.equip.properties?e("div",{staticClass:"edit-item mdui-col-xs-6 mdui-col-sm-3 mdui-textfield"},[e("label",{staticClass:"input-text mdui-textfield-label"},[e("span",{staticClass:"input-label"},[t._v(t._s(i))])]),e("input",{staticClass:"mdui-textfield-input",attrs:{type:"text"},domProps:{value:t.equip.properties[i]},on:{input:function(e){t.emitEdit("equip",["properties",i],e)}}})]):t._e()}):t._e(),e("div",{staticClass:"mdui-divider-dark mdui-col-xs-12"}),e("div",{staticClass:"edit-equip-skills mdui-col-xs-12"},[e("div",{staticClass:"mdui-col-xs-12 mdui-m-y-1"},[e("label",{staticClass:"input-select"},[e("span",{staticClass:"mdui-m-r-2"},[t._v("技能数量")]),e("select",{staticClass:"mdui-select",domProps:{value:t.skillLength},on:{change:t.editSkillLength}},[e("option",{attrs:{value:"0"}},[t._v("0")]),e("option",{attrs:{value:"1"}},[t._v("1")]),e("option",{attrs:{value:"2"}},[t._v("2")])])])]),t._l(t.equip.skills,function(i,s){return e("div",{staticClass:"edit-skill mdui-col-xs-12 mdui-col-sm-6 mdui-m-b-3"},[e("div",{staticClass:"skill-name mdui-col-xs-7"},[e("label",{staticClass:"input-text mdui-textfield-label",attrs:{for:"edit-skill-name-"+s}},[e("span",{staticClass:"input-label"},[t._v("技能名")])]),e("input",{staticClass:"mdui-textfield-input",attrs:{id:"edit-skill-name-"+s},domProps:{value:i.name},on:{input:function(i){t.emitEdit("equip",["skills",s,"name"],i)}}})]),e("div",{staticClass:"skill-type mdui-col-xs-3"},[e("label",{staticClass:"input-text mdui-textfield-label",attrs:{for:"edit-skill-dmg-type-"+s}},[e("span",{staticClass:"input-label"},[t._v("伤害类型")])]),e("select",{staticClass:"mdui-select",domProps:{value:i.dmgType},on:{change:function(i){t.emitEdit("equip",["skills",s,"dmgType"],i)}}},t._l(t.damageTypes,function(i,s){return e("option",{domProps:{value:s}},[t._v(t._s(i))])}))]),e("div",{staticClass:"skill-break mdui-col-xs-2"},[e("label",{staticClass:"input-text mdui-textfield-label",attrs:{for:"edit-skill-break-"+s}},[e("span",{staticClass:"input-label"},[t._v("突破等级")])]),e("input",{staticClass:"mdui-textfield-input",attrs:{type:"number",min:"0",max:"10",id:"edit-skill-break-"+s},domProps:{value:i.break},on:{input:function(i){t.emitEdit("equip",["skills",s,"break"],i)}}})]),e("div",{staticClass:"skill-desc mdui-textfield mdui-col-xs-12"},[e("label",{staticClass:"input-text mdui-textfield-label",attrs:{for:"edit-skill-description-"+s}},[e("span",{staticClass:"input-label"},[t._v("描述")])]),e("textarea",{staticClass:"mdui-textfield-input",attrs:{rows:"6",maxlength:"200",id:"edit-skill-description-"+s},domProps:{value:i.description},on:{input:function(i){t.emitEdit("equip",["skills",s,"description"],i)}}})])])}),t._m(2)],2),e("div",{staticClass:"mdui-col-xs-12 mdui-m-y-3"})],2)]),e("button",{staticClass:"mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent",attrs:{"mdui-tooltip":'{content: "截图", position: "left"}'},on:{click:t.saveAsImage}},[e("i",{staticClass:"mdui-icon material-icons"},[t._v("photo_camera")])]),t.showSeriesSelector?e("div",{staticClass:"mdui-dialog",attrs:{id:"edit-dialog"}},[t._m(3),e("div",{staticClass:"mdui-dialog-content"},[e("div",{staticClass:"series-container mdui-ripple"},[e("img",{attrs:{src:t._f("seriesSrc")(0)},on:{click:function(i){t.editSeries(0)}}})]),t._l(49,function(i){return e("div",{staticClass:"series-container mdui-ripple"},[e("img",{attrs:{src:t._f("seriesSrc")(i)},on:{click:function(e){t.editSeries(i)}}})])})],2),t._m(4)]):t._e(),e("div",{staticClass:"mdui-dialog",attrs:{id:"image-dialog"}},[e("div",{staticClass:"mdui-dialog-title"},[e("span",[t._v(t._s(t.saveHint))])]),e("div",{staticClass:"mdui-dialog-content save-content"},[e("p",[t._v("长按图片或右键保存.")]),e("p",[t._v("由于浏览器限制 , 部分设备(主要是手机)可能存在截图不完整或排版错乱的问题 , 如有遇到请手动截图.")]),e("img",{staticClass:"save-image",attrs:{src:t.saveImageUrl}})]),t._m(5)])])},$t=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-card-primary"},[e("div",{staticClass:"mdui-card-primary-title"},[t._v("内容编辑")]),e("div",{staticClass:"mdui-card-primary-subtitle"},[t._v("角色头像请点击上方头像更换")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("label",{staticClass:"input-text mdui-textfield-label",attrs:{for:"edit-user-name"}},[e("span",{staticClass:"input-label"},[t._v("角色名")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-typo mdui-col-xs-12"},[e("blockquote",[t._v("用"),e("code",[t._v("#+数字(+%)")]),t._v("可以使数据自动变蓝. 用"),e("code",[t._v("#n")]),t._v("可以强制换行. \n需要使用 # 号时可以用"),e("code",[t._v("\\#")]),t._v("表示该 # 号不需转码"),e("br"),e("div",{staticClass:"mdui-text-color-red"},[t._v("请"),e("b",[t._v("不要")]),t._v("抹掉搞事学园的水印，以免引起不必要的误解！")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-dialog-title"},[e("span",[t._v("选择装备系列")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-dialog-actions"},[e("button",{staticClass:"mdui-btn mdui-ripple mdui-shadow-1 mdui-color-red",attrs:{"mdui-dialog-cancel":""}},[e("i",{staticClass:"mdui-icon material-icons"},[t._v("close")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-dialog-actions"},[e("button",{staticClass:"mdui-btn mdui-ripple mdui-shadow-1 mdui-color-red",attrs:{"mdui-dialog-cancel":""}},[e("i",{staticClass:"mdui-icon material-icons"},[t._v("close")])])])}],Tt=e("951f"),It=e.n(Tt),Nt=e("9a94"),Ot=window.mdui,jt={inject:["showLoading","hideLoading"],props:{equip:Object,user:Object},data:function(){return{numbers:u,strings:d,bools:c,equipTypes:p,damageTypes:m,i18n:f,propOrder:g,skillLength:2,dialog:null,saveHint:"保存图片",saveImageUrl:"",userNumbers:{level:"等级",coin:"金币",crystal:"水晶"},showSeriesSelector:!1}},created:function(){this.skillLength=this.equip.skills.length},mounted:function(){Ot.mutation(Ot.JQ(this.$el))},methods:{isInput:function(t){return!!u.includes(t)||(!!c.includes(t)||!!d.includes(t))},isNumber:function(t){return!!u.includes(t)||t in this.userNumbers},isBool:function(t){return!!c.includes(t)},isString:function(t){return!!d.includes(t)},emitEdit:function(t,i,e){var s=e.target.value;this.isNumber(i)&&(s=Number(s)),this.isBool(i)&&(s=e.target.checked),this.$emit("edit",[t,i,s])},editEquipType:function(t){var i=t.target.value,e=this.equipTypes[i];this.$emit("edit",["equip","type",i]),this.$emit("edit",["equip","properties",e])},editDamageType:function(t){this.$emit("edit",["equip","damageType",t.target.value])},editEquipAddType:function(t){this.$emit("edit",["equip","addType",t.target.value])},editSkillLength:function(t){var i=t.target.value;if(!(i>2||i<0||i==this.equip.skills.length)){this.skillLength=i;var e=this.equip.skills;if(i>e.length)for(var s=e.length;s<i;s++)e.push({name:"技能名",dmgType:"none",description:"技能描述",break:0});else e.splice(i,2);this.$emit("edit",["equip","skills",e])}},showSeriesPanel:function(){var t=this;this.showSeriesSelector=!0,this.$nextTick(function(){t.dialog=new Ot.Dialog(Ot.JQ("#edit-dialog"),{history:!1}),t.dialog.handleUpdate(),t.dialog.open()})},editSeries:function(t){t=("0"+t).slice(-2),this.$emit("edit",["equip","series",t]),this.dialog.close(),this.showSeriesSelector=!1,Ot.JQ.unlockScreen()},saveAsImage:function(){var t=this;this.$emit("edit",["$data","screenshot",!0]),this.showLoading(),Ot.snackbar("正在生成图片 , 请稍候...",{position:"right-bottom",timeout:200}),It()(document.getElementById("equip"),{logging:!1,width:1024,height:576,letterRendering:!0}).then(function(i){t.saveImageUrl=Nt["a"].convertToPNG(i,1024,576).src,t.hideLoading(),t.$nextTick(function(){var i=new Ot.Dialog(Ot.JQ("#image-dialog"),{history:!1});i.open(),i=null,t.$emit("edit",["$data","screenshot",!1])})})}},filters:{seriesSrc:function(t){return t=("0"+t).slice(-2),"/images/icons/Series/series"+t+".png"}}},Pt=jt,Lt=(e("bf46"),Object(y["a"])(Pt,Et,$t,!1,null,"5ee385ee",null));Lt.options.__file="Edit.vue";var Ut=Lt.exports,Bt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-container"},[e("div",{staticClass:"mdui-panel",attrs:{"mdui-panel":""}},[e("div",{staticClass:"mdui-panel-item"},[t._m(0),e("div",{staticClass:"mdui-panel-item-body"},[e("div",{staticClass:"mdui-container mdui-typo"},[e("ul",{staticClass:"newslist"},t._l(t.whatsnew,function(i){return e("li",[t._v(t._s(i.date)),"object"===typeof i.info?e("ol",t._l(i.info,function(i){return e("li",[t._v(t._s(i))])})):e("span",{staticClass:"mdui-m-l-2"},[t._v(t._s(i.info))])])}))])])])])])},Jt=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-panel-item-header"},[e("div",{staticClass:"mdui-panel-item-title"},[t._v("更新履历")]),e("i",{staticClass:"mdui-panel-item-arrow mdui-icon material-icons"},[t._v("keyboard_arrow_down")])])}],At=e("1544"),Ht=window.mdui,Dt={data:function(){return{whatsnew:At.reverse()}},mounted:function(){Ht.mutation(Ht.JQ(this.$el))}},Mt=Dt,Qt=Object(y["a"])(Mt,Bt,Jt,!1,null,null,null);Qt.options.__file="WhatsNew.vue";var Rt=Qt.exports,Ft=window.mdui,Wt=Ft.JQ,Gt={awaken:{width:648,height:648,marginLeft:-122,marginTop:6},common:{width:64,height:64,marginLeft:167,marginTop:139}},Kt={name:"app",data:function(){return{user:v,equip:o,dialog:null,filter:!1,styles:Gt,screenshot:!1,userStyle:{width:0,height:0,marginLeft:0,marginTop:0},showImageSelector:!1}},components:{Header:k,ImageSelector:H,Rings:$,User:P,System:F,EquipName:Y,EquipImage:at,EquipStatus:mt,EquipSkill:bt,ImageEdit:St,Edit:Ut,WhatsNew:Rt},computed:{imgStyle:function(){var t={},i=this.equip.awaken?"awaken":"common";for(var e in this.styles[i])t[e]="".concat(this.styles[i][e]+this.userStyle[e],"px");return t},watermark:function(){var t=!0,i=!0,e=!1,s=void 0;try{for(var a,n=this.equip.skills[Symbol.iterator]();!(i=(a=n.next()).done);i=!0){var l=a.value;l.description&&l.description.includes("$rmwm;")&&(t=!1)}}catch(r){e=!0,s=r}finally{try{i||null==n.return||n.return()}finally{if(e)throw s}}return t}},methods:{showLoading:function(){Wt("#progress").css("opacity",1)},hideLoading:function(){Wt("#progress").css("opacity",0)},changeIcon:function(){var t=this;this.showImageSelector=!0,this.showLoading(),s["a"].nextTick(function(){t.dialog=new Ft.Dialog(Wt("#dialog"),{history:!1}),t.dialog.handleUpdate(),t.dialog.open(),t.hideLoading()})},selectIcon:function(t){var i=this;this.user.icon=t,this.dialog.close(),this.$nextTick(function(){i.showImageSelector=!1,Ft.JQ.unlockScreen(),i.saveData()})},editHandler:function(t){var i=Object(r["a"])(t,3),e=i[0],s=i[1],a=i[2];if("object"!==Object(l["a"])(s))this[e][s]=a;else{for(var n=this[e],o=0;o<s.length-1;o++)n[s[o]]&&(n=n[s[o]]);this.$set(n,s[s.length-1],a)}this.saveData()},saveData:function(){var t={equip:this.equip,user:this.user,filter:this.filter,userStyle:this.userStyle};window.data=t,this.$nextTick(function(){localStorage.setItem("equip-emulator",JSON.stringify(t))})},loadData:function(){var t=JSON.parse(localStorage.getItem("equip-emulator"));if(t)for(var i in t)this.$set(this,i,t[i])},reset:function(){localStorage.removeItem("equip-emulator"),location.reload()}},created:function(){this.loadData()},mounted:function(){this.hideLoading(),Wt("#equip").removeClass("hide")},provide:function(){return{showLoading:this.showLoading,hideLoading:this.hideLoading}},watch:{"equip.properties":function(t){this.equip.addType=Object.keys(t)[0]}}},Vt=Kt,zt=(e("034f"),Object(y["a"])(Vt,a,n,!1,null,null,null));zt.options.__file="App.vue";var Xt=zt.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Xt)}}).$mount("#app")},"5e01":function(t,i,e){"use strict";var s=e("1bf1"),a=e.n(s);a.a},"5fa9":function(t,i,e){"use strict";var s=e("196e"),a=e.n(s);a.a},"64a9":function(t,i,e){},"66de":function(t,i,e){"use strict";var s=e("309b"),a=e.n(s);a.a},"70ae":function(t,i,e){},ac79:function(t,i,e){},b086:function(t,i,e){},bf46:function(t,i,e){"use strict";var s=e("70ae"),a=e.n(s);a.a},bf71:function(t,i,e){"use strict";var s=e("fb55"),a=e.n(s);a.a},c1cc:function(t,i,e){},eeae:function(t,i,e){"use strict";var s=e("ac79"),a=e.n(s);a.a},fb55:function(t,i,e){}});