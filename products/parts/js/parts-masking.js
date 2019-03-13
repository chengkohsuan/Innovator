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
    title: "DW410",
    show_text: true,
    text: "藍色矽橡膠披覆的玻璃纖維可耐高溫，矽橡膠強韌且耐磨，可抵抗高溫和噴砂衝擊，矽膠在高溫下提供優異的黏著性，可同時用於噴砂和電漿噴塗，不留殘膠。",
    show_features: false,
    features: ["","",""],
    show_specs: true,
    specs: ["背層材質：矽膠／玻璃布","背層厚度：0.02 cm","黏膠系：矽膠","黏膠厚度：0.008 cm","黏著劑：（ASTM D 1000）524.57 g/cm","延伸量：（ASTM D 3759）8%","最高作業溫度：260°C","FAA 規範：（GE C10-012）合格","Pratt & Whitney：（PMC 4416）合格","Rolls-Royce Aero Repair：（OMAT 2/96L）合格","Gov't 規範：（Mil Spec-Y）通過","芯軸內徑：7.62 cm","寬度：0.635－91.44 cm","長度：32.92 m"],
  },
  {
    show_title: true,
    title: "DW500RD",
    show_text: true,
    text: "紅色矽橡膠／玻璃布背層構成的電漿噴塗遮蔽膠帶，塗有高溫活性矽膠粘合劑，在噴砂和電漿噴塗製程的高溫環境下提供良好的保護性，比大多數其他等電漿噴塗遮蔽膠帶粘性更佳而不留殘膠，適合應用於航太產業中形狀複雜的工件。",
    show_features: false,
    features: ["","",""],
    show_specs: true,
    specs: ["背層材質：紅矽膠／玻璃布","背層厚度：0.02 cm","黏膠系：矽膠","黏膠厚度：0.008 cm","黏著劑：（ASTM D 1000）446.4 g/cm","最高作業溫度：260°C","Pratt & Whitney：（PMC 4630）合格","Rolls-Royce Aero Repair：（OMAT 2/96L）合格","芯軸內徑：7.62 cm","寬度：0.635－91.44 cm","長度：32.92 m"],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});