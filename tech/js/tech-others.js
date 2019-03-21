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
    title: "其他領域應用",
    show_text: true,
    texts: ["在生醫領域中，能使用電漿噴塗HA材料在牙根或人造骨骼上，以提供更好的生物相容性；在靶材工業製程中，使用冷氣動力噴塗可進行靶材的再生工作，而熱噴塗（電漿噴塗）可以生產一些陶瓷靶材，例如：矽靶、氧化鈮、氧化鉻等；熱噴塗製程在固態氧化物燃料電池的應用上，目前噴塗連接板相關之技術應用已相當成熟，在高溫環境下可以提高電子傳導能力。",],
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