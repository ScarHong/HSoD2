'use strict';(function(){new Vue({el:'#app',data:{servers:['\u56FD\u670D','bilibili\u4E00\u533A','bilibili\u4E8C\u533A','\u5E03\u5361\u670D','2144\u4E00\u533A','2144\u4E8C\u533A','360\u4E00\u533A','360\u4E8C\u533A','\u4E5D\u6E38\u4E00\u533A','\u4E5D\u6E38\u4E8C\u533A','\u6DF7\u670D','\u817E\u8BAF\u670D'],roles:['\u742A\u4E9A\u5A1C','\u96F7\u7535\u82BD\u8863','\u5FB7\u4E3D\u838E','\u5E0C\u513F','\u674F','\u4E5D\u9704'],rankData:{},currentServer:'\u56FD\u670D'},methods:{selectServer:function selectServer(s){this.currentServer=s}},created:function created(){var _this=this;axios.get('https://api.redbean.tech/roguelike/data.json').then(function(res){var data=res.data;_this.$set(_this,'rankData',data)})}})})();