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
    title: "TAFA 9910i CoArc雙線電弧噴塗系統",
    show_sub: false,
    sub:"",
    show_text: true,
    text: "閉迴路控制使系統可以精確的監控並自動調節電壓、噴槍頭部的噴氣壓力和送線速率。功能強大且穩定，可以長時間工作，創造更多可重複的塗層並提升塗層品質。操控界面採用7吋觸控螢幕，使操作人員可以更直覺的進行操控，在系統操作的過程中，會同時記錄所有的操作參數，可進行製程監控，維持塗層品質。系統支援9935電弧噴槍、8830/8835和BP-400系列電弧噴槍。",
    show_features: true,
    features: ["採用PLC更穩定的操控系統","閉迴路參數控制","可進行遠程操作","可選「推／拉」送線方式","參數記錄與儲存功能","操作者權限設定","7吋工業觸控螢幕","可搭配現有Praxair TAFA的電弧式噴槍"],
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
  s_title: "9910i CoArc雙線電弧噴塗系統",
  s_items: ["尺寸：長46 cm，寬94 cm，高52 cm","重量：27.2 kg","空壓需求：38L/sec @ 100 psi"],
  },
  {
  s_title: "TCV400電源供應器",
  s_items: ["尺寸：長59 cm，寬82 cm，高92.3 cm","重量：205 kg","電力需求：輸入電壓220/400V 50Hz 或230/480V 60Hz"],
  },
];

var vm_2=new Vue({
  el: "#spec_infos",
  data: {
  contents: specdata,
  }
});