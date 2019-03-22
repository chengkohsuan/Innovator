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
    title: "Mettech Nanofeeder 350/750 漿料機",
    show_text: true,
    text: "Mettech NanoFeeder 350/750漿料機，為奈米級到亞微米級粉末之漿料使用設計，利用Mettech在漿料熱噴塗上的豐富經驗，在漿料輸送流量與加壓都能得到精確的控制。應用在熱噴塗設備，可生產奈米級結構塗層，以滿足工業所需的高性能塗層，並提供穩定無脈衝漿料注射，使每次製做出來的塗層都能保持高品質。",
    show_features: true,
    features: ["NanoFeeder系統可以將含有奈米顆粒的漿料，送入至Axial III電漿噴槍或其他電漿噴槍中，來製備出性能更好的奈米結構塗層，開啟奈米材料在熱噴塗製成應用的可能性","具有卓越性能高性能漿料奈米塗層，已在工業上使用，並可取代現有EB-PVD，以降低生產成本提升效率","採閉迴路設計，可獨立操作也可以連接Axial III系統進行控制","所有Mettech的設備設計，替您考量所有最極端的工作環境","可對漿料的進料與霧化氣體進行品質流量控制，並能即時對送料進行修正","當漿料濃度高達40%時，最高可達0.5 L/min的送料速率","送料桶採不銹鋼製作而成，具備防腐蝕與防爆功能","全自動化設計，可自動啟動、清洗迴圈與關閉","漿料輸送範圍廣，10奈米到10微米皆適用"],    
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