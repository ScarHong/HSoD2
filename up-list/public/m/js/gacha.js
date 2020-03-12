'use strict';function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}}return step('next')})}}(function(){var $$=mdui.JQ;$$('body').removeClass('mdui-drawer-body-left');window.gtag=window.gtag||function(){};var store=window.localStorage||{setItem:function setItem(){},getItem:function getItem(){},removeItem:function removeItem(){},clear:function clear(){}};var isGotten=function isGotten(name){var got=localStorage.getItem('gacha-spec');if(!got)return false;var items=got.split('$');if(items.includes(name))return true;return false};var gotSpec=function gotSpec(name){var got=localStorage.getItem('gacha-spec');got+='$'+name;localStorage.setItem('gacha-spec',got);return true};var isOutOfDate=function isOutOfDate(start,end){var s=new Date(start+' 00:00:00'),e=new Date(end+' 00:00:00');var now=Date.now();if(now-s>0&&e-now>0)return false;return true};var app=new Vue({el:'#app',data:{records:{'high':{'s':[],'t':[]},'custom':{'s':[],'t':[]},'special':{'s':[],'t':[]},'middle':{'s':[],'t':[]},'festival':{'s':[],'t':[]}},current:{pool:'high',gacha:'s',gachatype:'s'},pools:['custom','high'],poolmap:{'high':'\u516C\u4E3B','custom':'\u9B54\u5973','special':'\u9B54\u6CD5\u5C11\u5973','middle':'\u5927\u5C0F\u59D0','festival':'\u68A6\u60F3'},gachas:['s','t'],probs:{},currentResults:[],showSnackbar:true,showDialog:false,disableGacha:false,totalCosts:0,totalGachas:0,specialGacha:[]},computed:{currentRecords:function currentRecords(){return this.records[this.current.pool][this.current.gachatype]},currentSpecialGacha:function currentSpecialGacha(){return this.specialGacha.filter(function(i){return!isOutOfDate(i.startTime,i.endTime)})},recordList:function recordList(){var records=this.currentRecords.filter(function(){return true});if(this.current.pool==='middle')return records.reverse();var list=[];if(this.current.gachatype==='t'){records.forEach(function(record,index,arr){list.push(Object.assign({},record,{type:'equip'}));if(index%10===9&&index<arr.length-1){list.push({type:'hr'})}});return list.reverse()}var circ=this.current.pool==='custom'?7:10;var start=0;if(this.current.pool==='custom'){start=records.length-1;for(var i=records.length-1;i>=0;i--){if(records[i].equip.indexOf('\u3010')===-1)break;else start=i}}for(var _i=0;_i<start;_i++){list.push(Object.assign({},records[_i],{type:'equip'}))}for(var ctr=0;start<records.length;start++,ctr++){if(ctr>=circ){list.push({type:'hr'});ctr=0}list.push(Object.assign({},records[start],{type:'equip'}))}return list.reverse()},upItems:function upItems(){var up={high:[],custom:[],special:[],middle:[],festival:[]};for(var pool in this.probs){if(pool==='middle'){}else if(pool==='custom'){var o={};var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this.probs[pool].equips[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var equip=_step.value;if(equip.rate<=this.probs[pool].com){o[equip.name.split('\xD7')[0]]=1}}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}for(var i in o){up[pool].push(i)}}else{var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=this.probs[pool].equips[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _equip=_step2.value;if(_equip.rate<=this.probs[pool].com){up[pool].push(_equip.name)}}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}}}return up},baodi:function baodi(){if(this.current.pool==='middle')return 0;var circ=10,interval=[],bd=false;var records=this.records[this.current.pool]['s'];var last=records.length;var start=Math.floor(last/circ)*circ;if(this.current.pool==='custom'){circ=7;var rec=last-1;for(var i=last-1;i>0;i--){if(records[i].equip.indexOf('\u3010')===-1){rec=i;break}}if(rec!==last-1)start=rec+1;else start=Math.floor(last/circ)*circ}for(;start<last;start++){var _i2=records[start];interval.push(_i2);if(_i2.isGod)bd=true;if(interval.length>=circ){bd=false;interval=[]}}if(!bd&&interval.length===circ-1)return 1;if(bd&&this.current.pool==='custom')return 2;else return 0},totalOrders:function totalOrders(){return(this.totalCosts/8088).toFixed(2)},totalMoney:function totalMoney(){return(this.totalOrders*648).toFixed(2)}},methods:{pushRecord:function pushRecord(t){var _records$current$pool;var cost=this.current.pool==='middle'?98:280;for(var _len=arguments.length,r=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){r[_key-1]=arguments[_key]}this.totalCosts+=r.length*cost;this.totalGachas+=r.length;(_records$current$pool=this.records[this.current.pool][t]).push.apply(_records$current$pool,r)},setPool:function setPool(t){if(t!==this.current.pool){this.current.pool=t}},selectType:function selectType(g){if(g!==this.current.gachatype){this.current.gachatype=g;var tabs=$$('#gachas>a');tabs.toggleClass('mdui-tab-active')}},loadProb:function loadProb(){showLoading();var self=this;axios.get('/gacha/data').then(function(res){self.probs=res.data;var pools=[];for(var p in self.probs){if(self.probs[p].total)pools.push(p);self.pools=pools}hideLoading()})},loadSpecial:function loadSpecial(){showLoading();var self=this;axios.get('/data/specialGacha.json').then(function(res){self.specialGacha=res.data})},single:function single(){this.selectType('s');var pool=this.current.pool;var data=this.probs[pool];var result=this.gacha(data,this.baodi);var baodi=result.isGod?1:0;gtag('event','gacha',{'event_category':pool,'event_label':'single','value':baodi});this.pushRecord('s',result)},ten:function ten(){var _this=this;return _asyncToGenerator(regeneratorRuntime.mark(function _callee(){var pool,data,arr,baodi,i,s;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this.selectType('t');pool=_this.current.pool;data=_this.probs[pool];arr=[];baodi=0;for(i=0;i<10;i++){s=void 0;if(i===9&&!baodi&&_this.current.pool!=='middle')s=_this.gacha(data,1);else s=_this.gacha(data,0);if(s.isGod)baodi+=1;arr.push(s)}gtag('event','gacha',{'event_category':pool,'event_label':'ten','value':baodi});if(!_this.showDialog){_context.next=10;break}_context.next=10;return _this.showResultDialog(arr);case 10:_this.pushRecord.apply(_this,['t'].concat(arr));case 11:case'end':return _context.stop();}}},_callee,_this)}))()},loadResult:function loadResult(result,isGod){var _this2=this;return _asyncToGenerator(regeneratorRuntime.mark(function _callee2(){var equipname,url,title,res,equip,isAwaken;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:equipname=result[2].replace(' +1','');url='https://api.redbean.tech/illustrate/title/'+equipname;title=result[2]+(result[3]?result[3]:'');_context2.prev=3;_context2.next=6;return axios.get(url);case 6:res=_context2.sent;equip=null;if(!res.data){_context2.next=23;break}if(!(res.data[0]&&res.data[0].img)){_context2.next=13;break}equip=res.data[0];_context2.next=18;break;case 13:if(!res.data.img){_context2.next=17;break}equip=res.data;_context2.next=18;break;case 17:throw'Not Found';case 18:isAwaken=false;if(equip.posterId&&equip.posterId!=='0')isAwaken=Math.random()<0.3;return _context2.abrupt('return',{img:_this2.getImgSrc(equip.img),title:title,isGod:isGod,isAwaken:isAwaken});case 23:throw'Not Found';case 24:_context2.next=29;break;case 26:_context2.prev=26;_context2.t0=_context2['catch'](3);return _context2.abrupt('return',{title:title});case 29:case'end':return _context2.stop();}}},_callee2,_this2,[[3,26]])}))()},showResultDialog:function showResultDialog(arr){var _this3=this;return _asyncToGenerator(regeneratorRuntime.mark(function _callee3(){var resultsPromises,currentResults,_iteratorNormalCompletion3,_didIteratorError3,_iteratorError3,_loop,_iterator3,_step3;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_this3.disableGacha=true;showLoading();resultsPromises=[];currentResults=[];_iteratorNormalCompletion3=true;_didIteratorError3=false;_iteratorError3=undefined;_context3.prev=7;_loop=function _loop(){var i=_step3.value;if(i.isSpec){resultsPromises.push(new Promise(function(resolve){resolve({img:_this3.getSpecImg(i.img),title:i.equip,isGod:false,isSpec:true})}))}else{var reg=/(【.*】)?([^×]*)(×\d)?/g;var result=reg.exec(i.equip);if(!result[2])resultsPromises.push({title:i.equip});else resultsPromises.push(_this3.loadResult(result,i.isGod))}};for(_iterator3=arr[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){_loop()}_context3.next=16;break;case 12:_context3.prev=12;_context3.t0=_context3['catch'](7);_didIteratorError3=true;_iteratorError3=_context3.t0;case 16:_context3.prev=16;_context3.prev=17;if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return()}case 19:_context3.prev=19;if(!_didIteratorError3){_context3.next=22;break}throw _iteratorError3;case 22:return _context3.finish(19);case 23:return _context3.finish(16);case 24:_context3.t1=currentResults.push;_context3.t2=currentResults;_context3.t3=_toConsumableArray;_context3.next=29;return Promise.all(resultsPromises);case 29:_context3.t4=_context3.sent;_context3.t5=(0,_context3.t3)(_context3.t4);_context3.t1.apply.call(_context3.t1,_context3.t2,_context3.t5);_this3.currentResults=currentResults;_this3.$nextTick(function(){hideLoading();new mdui.Dialog('#gacha-dialog',{history:false}).open();_this3.disableGacha=false});return _context3.abrupt('return');case 35:case'end':return _context3.stop();}}},_callee3,_this3,[[7,12,16,24],[17,,19,23]])}))()},gacha:function gacha(data){var baodi=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var equips=data.equips,total=data.total,god=data.god;if(!baodi){var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=this.currentSpecialGacha[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var spec=_step4.value;if(spec.pool!==this.current.pool)continue;if(isGotten(spec.name))continue;var _r=getRandom(100);if(_r<spec.rate){if(!this.showDialog&&this.showSnackbar){var s=mdui.snackbar({message:spec.name,position:'right-bottom',timeout:700});s.$snackbar.addClass('yellow')}gotSpec(spec.name);return{date:formatDate(),equip:spec.name,isGod:false,isSpec:true,img:spec.img}}}}catch(err){_didIteratorError4=true;_iteratorError4=err}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return()}}finally{if(_didIteratorError4){throw _iteratorError4}}}}var r=getRandom(total);if(god===0)baodi=2;if(baodi===1)while(r>god){r=getRandom(total)}else if(baodi===2)while(r<=god){r=getRandom(total)}var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=equips[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var e=_step5.value;if(e.rate>=r){var name=formatName(e.name);if(!this.showDialog&&this.showSnackbar){var _s=mdui.snackbar({message:name,position:'right-bottom',timeout:700});if(r<=god)_s.$snackbar.addClass('yellow')}return{date:formatDate(),equip:name,isGod:r<=god}}}}catch(err){_didIteratorError5=true;_iteratorError5=err}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return){_iterator5.return()}}finally{if(_didIteratorError5){throw _iteratorError5}}}},clearStorage:function clearStorage(){this.records={'high':{'s':[],'t':[]},'custom':{'s':[],'t':[]},'special':{'s':[],'t':[]},'middle':{'s':[],'t':[]}};localStorage.removeItem('gacha-spec');mdui.snackbar({message:'\u6E05\u9664\u6210\u529F',position:'right-bottom',timeout:300});Vue.nextTick(function(){return store.clear()})},getImgSrc:function getImgSrc(img){img=img.toString();var prefix='https://static.image.mihoyo.com/hsod2_webview/images/broadcast_top/equip_icon/png/';if(img.length<3)img=('000'+img).slice(-3);return prefix+img+'.png'},getSpecImg:function getSpecImg(img){return'https://api-1256168079.cos.ap-chengdu.myqcloud.com/'+img}},watch:{records:{handler:function handler(val){store.setItem('records',JSON.stringify(val))},deep:true}},created:function created(){var rec=void 0;if(rec=store.getItem('records'))this.records=Object.assign(this.records,JSON.parse(rec));this.loadProb();this.loadSpecial()},mounted:function mounted(){$$('.hide').removeClass('hide')},updated:function updated(){mdui.mutation()}});function getRandom(range){return Math.floor(Math.random()*(range+1))}function formatDate(){var tzoffset=new Date().getTimezoneOffset()*60000;var date=new Date(Date.now()-tzoffset).toISOString();return date.replace('T',' ').slice(0,-5)}function formatName(s){var a=s.split(/\[(\d.*)\]/g).reverse().filter(function(i){return i!==''});if(a.length!==2)return s;s='\u3010'+a[0]+'\u3011'+a[1];var isAddOne=getRandom(15)===7;if(isAddOne)return s+' +1';return s}function showLoading(){$$('#progress').css('opacity',1)}function hideLoading(){$$('#progress').css('opacity',0)}})();