'use strict';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i['return'])_i['return']()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr)){return arr}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i)}else{throw new TypeError('Invalid attempt to destructure non-iterable instance')}}}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}}return step('next')})}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}(function(){var $$=mdui.JQ;$$('#back-to-index').remove();$$('body').removeClass('mdui-drawer-body-left');$$('.hide').removeClass('hide');var errEquip={'errorMsg':'\u53EF\u80FD\u662F\u7F51\u7EDC\u95EE\u9898 , \u4E5F\u53EF\u80FD\u662F\u8BE5\u88C5\u5907\u6570\u636E\u4E22\u5931'};var keyMap={uid:'ID',rarity:'\u661F\u7EA7',cost:'\u8D1F\u91CD',maxlv:'\u6700\u5927\u7B49\u7EA7',baseType:'\u88C5\u5907\u7C7B\u578B',title:'\u88C5\u5907\u540D',desc:'\u88C5\u5907\u63CF\u8FF0',id:'\u56FE\u9274\u7F16\u53F7',img:'\u88C5\u5907\u56FE\u7247',damageBase:'\u57FA\u7840\u653B\u51FB\u529B',damageAdd:'\u6210\u957F\u653B\u51FB\u529B',damageMaxLv:'\u6EE1\u7EA7\u653B\u51FB\u529B',atkBase:'\u57FA\u7840\u653B\u51FB\u529B',atkAdd:'\u6210\u957F\u653B\u51FB\u529B',atkMaxLv:'\u6EE1\u7EA7\u653B\u51FB\u529B',ammoBase:'\u57FA\u7840\u8F7D\u5F39',ammoAdd:'\u6210\u957F\u8F7D\u5F39',ammoMaxLv:'\u6EE1\u7EA7\u8F7D\u5F39',fireRateBase:'\u57FA\u7840\u653B\u901F',fireRateAdd:'\u6210\u957F\u653B\u901F',fireRateMaxLv:'\u6EE1\u7EA7\u653B\u901F',criticalRate:'\u57FA\u7840\u66B4\u51FB\u7387',critRate:'\u66B4\u51FB\u7387',multiShootLineNum:'\u5F39\u9053\u6570',limitedNumber:'\u5B58\u5728\u4E0A\u9650',countDownTimeBase:'\u57FA\u7840\u5B58\u5728\u65F6\u95F4',countDownTimeAdd:'\u6210\u957F\u5B58\u5728\u65F6\u95F4',countDownTimeMaxLv:'\u6EE1\u7EA7\u5B58\u5728\u65F6\u95F4',hpBase:'\u57FA\u7840\u751F\u547D',hpAdd:'\u6210\u957F\u751F\u547D',hpMaxLv:'\u6EE1\u7EA7\u751F\u547D',posterId:'\u89C9\u9192\u56FE'};var seriesMap=[[0,'\u65E0'],[1,'Start'],[2,'\u5317\u6B27'],[3,'\u7535\u78C1'],[4,'\u51A5\u706B'],[5,'\u661F\u8FB0\u5C04\u624B'],[6,'\u55DC\u5207\u5C11\u5973'],[7,'\u5E0C\u814A'],[8,'\u666E\u6717\u514B'],[9,'V\u5236\u5F0F'],[10,'\u5C3C\u4F2F\u9F99\u6839'],[11,'\u89D2\u8272'],[12,'\u7EEF\u72F1'],[13,'\u91CC\u4E16\u754C'],[14,'\u8D6B\u841D\u514B'],[15,'\u51EF\u5C14\u7279'],[16,'\u4FA6\u63A2\u5C11\u5973'],[17,'\u5929\u9B54'],[18,'\u76D1\u5BDF\u8005'],[19,'\u8424\u706B'],[20,'\u6DF1\u6D77'],[21,'\u6B4C\u59EC'],[22,'\u4F7F\u9B54'],[23,'\u8840\u65CF'],[24,'bilibili'],[25,'Neta'],[26,'\u514B\u82CF\u9C81'],[27,'\u4F20\u8BF4'],[28,'\u5370\u5EA6'],[29,'\u79D1\u5B66'],[30,'\u831C\u74E6\u5229\u5C14'],[31,'\u8FF7\u96FE'],[32,'\u6D77\u76D7\u5C11\u5973'],[33,'\u534E\u590F'],[34,'\u5723\u5149'],[35,'\u68A6\u9B47'],[36,'\u5F39\u4E38\u8BBA\u7834'],[37,'\u7AE5\u8BDD'],[38,'\u96F7\u7535'],[39,'\u5723\u97F3'],[40,'\u6C38\u52AB'],[41,'\u540C\u6784'],[42,'\u7EC8\u672B'],[43,'\u57C3\u53CA'],[44,'\u827A\u672F\u5BB6'],[45,'\u9010\u706B\u4E4B\u86FE'],[46,'\u5C11\u5973\u524D\u7EBF'],[47,'\u6D3B\u5316\u91D1\u5C5E'],[48,'\u5931\u843D\u6587\u660E'],[49,'\u5854\u7F57']];new Vue({el:'#app',data:{equips:{weapon:[],costume:[],passiveSkill:[],pet:[]},equip:{},showDetail:false,current:{type:'all',page:1,itemPerPage:20},searchInput:'',tabs:{'weapon':'\u6B66\u5668','costume':'\u8863\u670D','passiveSkill':'\u5FBD\u7AE0','pet':'\u4F7F\u9B54'},keyMap:keyMap,hideItems:['title','desc','errorMsg','rarity','img','id','decompose','uid','damageType','seriesId','seriesText','evolveFormula','awakenFormula'],pets:[],characters:[],seriesFilters:[],seriesMap:seriesMap,filterDialog:null,characterOptions:['\u50B2\u5A07','\u5143\u6C14','\u5076\u50CF','\u9690\u79D8','\u91CD\u51FB','\u5492\u6587','\u7206\u88C2','\u88C5\u7532','\u6982\u5FF5','\u5996\u8840','\u5E7B\u5F71','\u72C2\u6C14','\u88C1\u51B3'],characterAdds:{'\u5143\u6C14':'\u589E\u52A0\u80FD\u91CF\u5C5E\u6027\u4F24\u5BB3 (1% 3% 6% 10% 15%)','\u50B2\u5A07':'\u589E\u52A0\u7535\u5C5E\u6027\u4F24\u5BB3 (1% 3% 6% 10% 15%)','\u6982\u5FF5':'\u63D0\u5347\u653B\u51FB\u901F\u5EA6 (1% 3% 6% 10% 15%)','\u7206\u88C2':'\u589E\u52A0\u66B4\u51FB\u4F24\u5BB3 (2% 5% 9% 14% 20%)','\u91CD\u51FB':'\u589E\u52A0\u7269\u7406\u5C5E\u6027\u4F24\u5BB3 (1% 3% 6% 10% 15%)','\u88C5\u7532':'\u63D0\u5347\u51CF\u4F24 (2% 5% 9% 14% 20%)','\u5E7B\u5F71':'\u63D0\u5347\u95EA\u907F\u7387 (2% 5% 9% 14% 20%)','\u9690\u79D8':'\u589E\u52A0\u51B0\u5C5E\u6027\u4F24\u5BB3 (1% 3% 6% 10% 15%)','\u5996\u8840':'\u589E\u52A0\u5E38\u9A7B\u79FB\u901F (1% 3% 6% 10% 15%)','\u72C2\u6C14':'\u589E\u52A0\u66B4\u51FB\u7387 (2% 5% 9% 14% 20%)','\u5492\u6587':'\u589E\u52A0\u6BD2\u5C5E\u6027\u4F24\u5BB3 (1% 3% 6% 10% 15%)','\u5076\u50CF':'\u589E\u52A0\u706B\u5C5E\u6027\u4F24\u5BB3 (1% 3% 6% 10% 15%)','\u88C1\u51B3':'\u63D0\u5347\u5168\u4F24\u5BB3 (2% 5% 9% 14% 20%)'},seriesFilteredEquips:[]},computed:{isEquip:function isEquip(){if(this.equip){if('ultraSkill'in this.equip||'normalSkill1'in this.equip)return false;if(this.equip.id!=='0')return true}return false},all:function all(){var _this=this;var all=[];for(var key in this.equips){all.push.apply(all,_toConsumableArray(this.equips[key]))}return all.sort(function(a,b){return a.id-b.id}).filter(function(val){return val.title&&val.title.includes(_this.searchInput)})},items:function items(){var _this2=this;if(this.current.type==='all')return this.all;else return this.equips[this.current.type].sort(function(a,b){return a.id-b.id}).filter(function(val){return val.title&&val.title.includes(_this2.searchInput)})},petCharacters:function petCharacters(){return this.pets.map(function(i){if(!i.characters)return[i.img];return[i.img].concat(_toConsumableArray(i.characters.map(function(c){return c.desc})))})},filteredPets:function filteredPets(){var _this3=this;return this.petCharacters.filter(function(i){var isMapped=true;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=_this3.characters[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var char=_step.value;if(!i.includes(char))isMapped=false}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}return isMapped}).map(function(i){return i[0]})},totalPages:function totalPages(){var ipp=this.current.itemPerPage;if(ipp<1)ipp=1;return Math.ceil(this.items.length/ipp)},pages:function pages(){var pagenum=this.totalPages;if(pagenum<6){var arr=[];for(var i=1;i<=pagenum;i++){arr.push(i)}return arr}if(this.current.page<1)this.current.page=1;if(this.current.page>pagenum)this.current.page=pagenum;var p=this.current.page;if(p<3)return[1,2,3,'...',pagenum];if(p>pagenum-2)return[1,'...',pagenum-2,pagenum-1,pagenum];else return['...',p-1,p,p+1,'...']},itemsInPage:function itemsInPage(){var page=this.current.page;var ipp=this.current.itemPerPage;if(!page)page=1;if(!ipp)ipp=1;var start=(page-1)*ipp;var items=[];for(var i=start;i<start+ipp;i++){if(this.items[i])items.push(this.items[i])}this.backToTop();return items},filteredEquips:function filteredEquips(){return this.seriesFilteredEquips}},methods:{loadData:function loadData(url){var _this4=this;return _asyncToGenerator(regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt('return',axios.get(url));case 1:case'end':return _context.stop();}}},_callee,_this4)}))()},loadAll:function loadAll(){var _this5=this;showLoading();this.loadData('v2/minify').then(function(res){_this5.parseMinify(res.data);hideLoading()})},loadPets:function loadPets(){var _this6=this;return _asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:showLoading();return _context2.abrupt('return',_this6.loadData('v2/pet').then(function(res){_this6.pets=res.data;hideLoading()}));case 2:case'end':return _context2.stop();}}},_callee2,_this6)}))()},parseMinify:function parseMinify(data){for(var key in data){var arr=[];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=data[key][Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var item=_step2.value;var _item$split=item.split('$'),_item$split2=_slicedToArray(_item$split,5),uid=_item$split2[0],id=_item$split2[1],rarity=_item$split2[2],img=_item$split2[3],title=_item$split2[4];arr.push({uid:uid,id:id,rarity:rarity,img:img,title:title,type:key})}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}this.$set(this.equips,key,arr)}},showEquipDetail:function showEquipDetail(id,title,type){var _this7=this;if(!id||!title||!type)return;showLoading();this.loadData('v2/detail/'+type+'/uid/'+id).then(function(res){var eq=res.data;if(eq.desc)eq.desc=eq.desc.replace('#n','\n');_this7.$set(_this7,'equip',eq)}).catch(function(){_this7.$set(_this7,'equip',errEquip)}).then(function(){var dialog=new mdui.Dialog($$('#dialog'),{history:false});Vue.nextTick(function(){dialog.open();hideLoading()})})},showFilteredEquipDetail:function showFilteredEquipDetail(_ref){var _this8=this;var uid=_ref.uid,title=_ref.title;if(!uid||!title)return;showFilterLoading();this.loadData('v2/detail/all/uid/'+uid).then(function(_ref2){var data=_ref2.data;if(data.desc)data.desc=data.desc.replace(/#n/g,'\n');_this8.$set(_this8,'equip',data)}).catch(function(){_this8.$set(_this8,'equip',errEquip)}).then(function(){hideFilterLoading();if(_this8.filterDialog!==null){_this8.filterDialog.close();var dialog=new mdui.Dialog($$('#dialog'),{history:false});$$('#dialog').one('closed.mdui.dialog',function(){_this8.filterDialog.open()});Vue.nextTick(function(){dialog.open()})}})},showCharacterDialog:function showCharacterDialog(){var _this9=this;return _asyncToGenerator(regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return _this9.loadPets();case 2:new mdui.Dialog('#pet-characters',{history:false}).open();case 3:case'end':return _context3.stop();}}},_callee3,_this9)}))()},showFilterDialog:function showFilterDialog(){this.filterDialog=new mdui.Dialog('#filter',{history:false});this.filterDialog.open()},formatDesc:function formatDesc(desc){return desc.replace(/#n/g,'\n').replace(/#!ALB\(\d*\)/g,'').replace(/[\d.]+\(.+?\)%?/g,function(t){return'<span style=\'color: #34a4e4\'>'+t+'</span>'})},percentage:function percentage(_val){var val=Number(_val);if(isNaN(val))return _val;return parseFloat((val*100).toPrecision(4))+'%'},errorImg:function errorImg($event){$$($event.target).attr('src','../error.jpg')},errorAwakenImg:function errorAwakenImg(val,$event){val=Number(val);var url='../images/awaken/'+(1000+val)+'1.png';this.loadData(url).then(function(res){$$($event.target).attr('src',url)}).catch(function(){$$($event.target).attr('src','../error.jpg')})},paging:function paging(opt){var num=parseInt(opt);var page=1;if(!isNaN(num))page=num;else switch(opt){case'first':page=1;break;case'last':page=this.totalPages;break;case'pre':page=this.current.page-1;break;case'next':page=this.current.page+1;break;}if(page<1||page>this.totalPages)return;else return this.current.page=page},selectTab:function selectTab(tab,e){if(e){$$('.mdui-tab-active').removeClass('mdui-tab-active');$$(e.target).addClass('mdui-tab-active')}this.current.type=tab;this.backToTop();this.paging(1)},backToTop:function backToTop(){document.body.scrollTop=0;document.documentElement.scrollTop=0}},created:function created(){if(window.location.href.endsWith('/'))window.location.href=window.location.href.replace(/\/$/,'');this.loadAll()},mounted:function mounted(){mdui.mutation()},watch:{seriesFilters:function seriesFilters(filters){var _this10=this;return _asyncToGenerator(regeneratorRuntime.mark(function _callee5(){return regeneratorRuntime.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_this10.seriesFilteredEquips=[];if(!(filters.length===0)){_context5.next=3;break}return _context5.abrupt('return');case 3:showFilterLoading();_context5.next=6;return filters.forEach(function(){var _ref3=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(filter,index){var _seriesFilteredEquips;var _ref4,data;return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return axios.get('v2/detail/all/seriesId/'+filter);case 2:_ref4=_context4.sent;data=_ref4.data;(_seriesFilteredEquips=_this10.seriesFilteredEquips).push.apply(_seriesFilteredEquips,_toConsumableArray(data.map(function(i){return{uid:i.uid,img:i.img,title:i.title}})));_this10.seriesFilteredEquips=[].concat(_toConsumableArray(new Set(_this10.seriesFilteredEquips))).sort(function(a,b){return a.uid-b.uid});if(index===filters.length-1)hideFilterLoading();case 7:case'end':return _context4.stop();}}},_callee4,_this10)}));return function(_x,_x2){return _ref3.apply(this,arguments)}}());case 6:case'end':return _context5.stop();}}},_callee5,_this10)}))()},showDetail:function showDetail(){Vue.nextTick(new mdui.Dialog('#dialog',{history:false}).handleUpdate)},totalPages:function totalPages(val){if(this.current.page>val)Vue.set(this.current,'page',this.totalPages)}}});function showLoading(){$$('#progress').css('opacity',1)}function hideLoading(){$$('#progress').css('opacity',0)}function showFilterLoading(){$$('#filter-spinner').css('opacity',1)}function hideFilterLoading(){$$('#filter-spinner').css('opacity',0)}})();