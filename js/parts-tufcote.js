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
    title: "Saint-Gobain Tuf-Cote®",
    show_text: true,
    text: "Tuf-Cote®是一種釺焊表面硬化材料，可製造堅固耐磨的塗層，旨在將工業部件的使用壽命延長3至10倍。Tuf-Cote®賦予塗層在環境溫度和高溫下極耐磨損，腐蝕，腐蝕和氧化，使其成為石油和天然氣，發電，鑽井，採礦，廢物處理，鋼鐵生產和其他苛刻應用的理想耐磨材料。",
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