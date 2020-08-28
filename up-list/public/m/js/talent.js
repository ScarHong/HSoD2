'use strict';(function(){var $$=mdui.JQ;$$('body').removeClass('mdui-drawer-body-left');var characterMap={'4001':'\u742A\u4E9A\u5A1C\xB7\u5361\u65AF\u5170\u5A1C','4002':'\u96F7\u7535\u82BD\u8863','4003':'\u5E03\u6D1B\u59AE\u5A05\xB7\u624E\u4F0A\u5207\u514B','4004':'\u65E0\u91CF\u5854\u59EC\u5B50','4005':'\u5FB7\u8389\u838E\xB7\u963F\u6CE2\u5361\u5229\u65AF','4006':'\u5E0C\u513F\xB7\u8299\u4E50\u827E','4007':'\u674F\xB7\u739B\u5C14','4008':'\u84EC\u83B1\u5BFA\u4E5D\u9704','4009':'\u4F0A\u745F\u7433\xB7\u5229\u7EF4\u4F11\u65AF','4010':'\u7B26\u534E','4011':'\u65E0\u8272\u8F89\u706B','4012':'\u897F\u7433','4013':'\u4E3D\u5854','4014':'\u5B81\u8482','4015':'\u8FE6\u5A1C'};var characterMapShort={'4001':'\u742A\u4E9A\u5A1C','4002':'\u82BD\u8863','4003':'\u5E03\u6D1B\u59AE\u5A05','4004':'\u59EC\u5B50','4005':'\u5FB7\u8389\u838E','4006':'\u5E0C\u513F','4007':'\u674F','4008':'\u4E5D\u9704','4009':'\u4F0A\u745F\u7433','4010':'\u7B26\u534E','4011':'\u8F89\u706B','4012':'\u897F\u7433','4013':'\u4E3D\u5854','4014':'\u5B81\u8482','4015':'\u8FE6\u5A1C'};new Vue({el:'#app',data:{allTalents:{},characters:[],character:'',characterMap:characterMap,characterMapShort:characterMapShort,extra:[],title:'',detail:'',level:'',sprites:{},showExtra:false},computed:{currentTalent:function currentTalent(){return this.allTalents[this.character]||[]},talents:function talents(){return this.currentTalent.filter(function(i){return i.uid<999})},extraTalents:function extraTalents(){return this.currentTalent.filter(function(i){return i.uid>999})},hasExtra:function hasExtra(){return this.currentTalent.filter(function(i){return i.uid>999}).length>0},sprite:function sprite(){var s={};for(var k in this.sprites){var i=this.sprites[k];s[k]={backgroundPosition:-32*(i[0]-1)+'px '+-32*(i[1]-1)+'px'}}return s}},methods:{setCharacter:function setCharacter(char){if(this.characters.includes(char))this.character=char;this.title='';this.detail=''},position:function position(x,y){return{left:500*x-50+'px',top:630*(1-y)-110+'px'}},extraPosition:function extraPosition(id){var x=0,y=0;loop:for(var i=0;i<this.extra.length;i++){for(var j=0;j<this.extra[i].length;j++){if(parseInt(this.extra[i][j])==parseInt(id)){x=i,y=j;break loop}}}return{left:(y+1)*0.2*400+'px',top:(x%3+1)*0.2*240-40+'px'}},showDetail:function showDetail(talent){var title=talent.title,maxLvDesc=talent.maxLvDesc,alb=talent.alb,maxLevel=talent.maxLevel;this.title=title;this.level=maxLevel;var reg=new RegExp('[d{2}.]{'+parseInt(alb/2)+'}','g');this.detail=maxLvDesc.replace(reg,'$&\n')},loadAllData:function loadAllData(){var _this=this;this.showLoading();axios.get('/talent/data').then(function(res){if(res.data){_this.$set(_this,'allTalents',res.data.talents);_this.$set(_this,'extra',res.data.extra);_this.characters=[];for(var key in res.data.talents){_this.characters.push(key)}_this.character=_this.characters[0]}_this.hideLoading()});axios.get('/talent/sprite').then(function(res){if(res.data)_this.$set(_this,'sprites',res.data)})},showLoading:function showLoading(){$$('#progress').css('opacity','1')},hideLoading:function hideLoading(){$$('#progress').css('opacity','0')}},created:function created(){this.loadAllData()},mounted:function mounted(){$$('.hide').removeClass('hide')}})})();