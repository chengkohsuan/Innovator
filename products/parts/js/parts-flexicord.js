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
    title: "Saint-Gobain Flexicord",
    show_text: true,
    text: "Flexicord與MasterJet®和Top Jet火焰噴塗裝置配合使用，可提供出色的耐熱循環性、耐磨性、耐腐蝕性和介電性。無論基材的形狀，尺寸或成分如何，火焰噴塗塗層都能提供最佳的耐磨屏障，可延長零件和設備在嚴苛環境使用中的壽命。",
    show_features: false,
    features: [""],
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