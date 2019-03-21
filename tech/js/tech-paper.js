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
    title: "印刷造紙領域應用",
    show_text: true,
    texts: ["造紙業的設備長時間都是在高速運轉與高磨耗的環境下運行，相對於工件表面會需要有高硬度的塗層，最常見的例子為瓦楞輥表面使用高壓高速火焰噴塗碳化鎢塗層，此製程可以有效提升瓦楞輥的壽命，也可以取代傳統的鍍硬鉻，減少對環境的污染。","而另外一個印刷業會用到的為印刷輪，工件表面同樣會噴塗高硬度塗層，但印刷輥輪表面會需要進行鐳射雕刻紋路，所以表面緻密性要求相當高，以目前常見的塗層會採用氧化鉻並搭配電漿噴塗。而這近年對塗層要求相對提高，在歐美等先進國家會採用漿料電漿噴塗來得到更好的塗層緻密性與硬度。"],
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