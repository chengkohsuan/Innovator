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
    title: "Praxair BP-400推線式電弧噴塗系統",
    show_text: true,
    text: "Praxair BP-400推線式電弧噴塗系統輕量化的設計可手持且操作靈活，適用於各式場所，也可安裝於機械手臂上進行操做。槍身設計堅固耐用，減少保養維修的時間。",
    show_features: true,
    features: ["符合CE標準","數字顯示電壓和電流","多種噴塗模式","可拆卸的送線系統","自動對準空氣帽和導線器"],
    show_specs: false,
    specs: ["",],
  },
  
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});

var specdata=[
  {
  s_title: "Praxair BP-400",
  s_items: ["重量：1.4 kg"],
  },
  {
  s_title: "送線裝置",
  s_items: ["尺寸：長84 cm，寬33 cm，高41.9 cm"],
  },
  {
  s_title: "TCV400電源供應器",
  s_items: ["尺寸：長59 cm，寬82 cm，高92.3 cm","重量：205 kg","電力需求：輸入電壓220/400V 50Hz，230/480V 60Hz"],
  },
];

var vm_2=new Vue({
  el: "#spec_infos",
  data: {
  contents: specdata,
  }
});