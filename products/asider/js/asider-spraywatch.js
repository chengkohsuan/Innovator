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
    title: "Spray Watch 噴塗監控系統",
    show_text: true,
    text: "Spray Watch可將噴塗中的顆粒特性進行量化，包括顆粒的溫度、速度、數量、噴塗角度、火焰寬度與基材溫度。藉由以上的數值，可以協助生產者確認每次噴塗的數值是否正確，確保塗層的一致性。而對於開發者而言，量化的顆粒數值可以有效提升開發效率，大幅降低開發成本。",
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