$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
});

var app_infos=[
  {
    show_title: true,
    title: "大氣防蝕領域應用",
    show_text: true,
    texts: ["在業界，防蝕主要有幾種製程可以使用，分別為熱噴塗鋅鋁塗層、熱浸鍍鋅以及油漆，以上三種制程各有其優缺點。熱噴塗鋅鋁塗層其優勢在於，可進行大面積噴塗、工件沒有大小的限制，也可以進行現場施工，塗層防護時間為三者中最久的。常見防蝕技術應用如橋樑防蝕工程、離岸風力發電機防蝕工程等。",],
    show_lists: false,
    lists: ["",],
  },
  ];

var vm_1=new Vue({
  el: "#content",
  data: {
  	contents: app_infos,
  }
});