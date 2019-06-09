'use strict';function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}(function(){var $$=mdui.JQ;$$('#back-to-index').remove();$$('body').removeClass('mdui-drawer-body-left');var app=new Vue({el:'#app',data:{cards:[],versions:[],types:['\u5168\u90E8','\u88C5\u5907','\u5E38\u89C4','\u6D3B\u52A8','\u62A5\u9519','\u517C\u5BB9','\u610F\u89C1'],searchInput:'',typeInput:'',color:{'\u672A\u5904\u7406':{color:'#1E40FE'},'\u5DF2\u5904\u7406':{color:'#46CB47'},'\u8FDB\u884C\u4E2D':{color:'#B212CE'},'\u4E0D\u5904\u7406':{color:'red'}},statusMap:{'1':'\u672A\u5904\u7406','2':'\u4E0D\u5904\u7406','3':'\u5DF2\u5904\u7406','4':'\u8FDB\u884C\u4E2D'},tagMap:{'1':'\u88C5\u5907','2':'\u6D3B\u52A8','3':'\u610F\u89C1','4':'\u5E38\u89C4','5':'\u62A5\u9519','6':'\u517C\u5BB9'}},computed:{filteredCards:function filteredCards(){var _this=this;return this.cards.filter(function(item){if(item.title&&item.title.indexOf(_this.typeInput)===-1)return false;for(var i in item){if(item[i].indexOf(_this.searchInput)!==-1)return true}return false})}},methods:{loadVersions:function loadVersions(){var self=this;return new Promise(function(resolve,reject){axios.get('https://api.redbean.tech/buglist/list').then(function(res){var vers=[];if(res&&res.data)vers=res.data.map(function(i){return i.name});self.versions=[].concat(_toConsumableArray(vers));resolve(vers)})})},loadList:function loadList(v,e){var self=this;v=v==='\u5168\u90E8'?'':v;showLoading();$$('.mdui-tab-active.version-select').removeClass('mdui-tab-active');$$(e.target).addClass('mdui-tab-active');axios.get('/buglist/data/'+v).then(function(res){self.parseData(res.data,v);self.backToTop();hideLoading()})},filterType:function filterType(t,e){this.typeInput=t==='\u5168\u90E8'?'':t;$$('.mdui-tab-active.type-select').removeClass('mdui-tab-active');$$(e.target).addClass('mdui-tab-active');this.backToTop()},parseData:function parseData(data,v){var arr=[];if(v===''){for(var i in data){var _arr;(_arr=arr).push.apply(_arr,_toConsumableArray(data[i]))}arr=arr.reverse()}else arr=data;this.cards=arr.map(function(item){return{status:item.status,title:item.type,subtitle:'['+item.version+'] '+item.startdate,content:item.title,id:item.id}})},t2s:function t2s(cid,content,e){showLoading();$$(e.target).text('\u6B63\u5728\u5E72\u6389...');axios.get(encodeURI('/convert/t2s?text='+content.replace(/\+/g,'^plus^'))).then(function(res){$$('#card-'+cid).text(res.data.replace(/\^plus\^/g,'+'));$$(e.target).text('\u5E72\u6389\u5566 !').attr('disabled','')}).catch(function(_){$$(e.target).text('\u5931\u8D25\u4E86...');setTimeout(function(){$$(e.target).text('\u518D\u6765\u4E00\u6B21 ?')},1000)}).then(function(_){hideLoading()})},backToTop:function backToTop(){document.body.scrollTop=0;document.documentElement.scrollTop=0}},created:function created(){var self=this;this.loadVersions().then(function(ver){self.loadList(ver[0],{target:$$('.version-select')[0]});self.filterType(self.types[0],{target:$$('.type-select')[0]})})},mounted:function mounted(){mdui.mutation();$$('.cards').css('display','block')}});function showLoading(){$$('#progress').css('opacity',1)}function hideLoading(){$$('#progress').css('opacity',0)}})();