$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
});

var pd_infos=[
  {
    show_title: true,
    title: "噴塗設備零件",
    show_text: true,
    text: "我們提供各式熱噴塗設備之零件，包含Praxair TAFA、Oerlikon Metco、Saint-Gobain、Mettech、Thermion等知名大廠，欲了解更多資訊，歡迎與我們聯繫。",
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});