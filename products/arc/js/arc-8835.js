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
    title: "Praxair 8830MHU和8835MHU拉線式電弧噴塗系統",
    show_sub: false,
    sub:"",
    show_text: true,
    text: "簡易的操作界面與穩定的系統設備，提供操作員安全與便利的操作環境，並維持塗層品質。該系統優化顆粒霧化和噴霧模式分佈，使8830與8835均具有高沉積效率，使塗層具有良好的鍵結強度、均勻的微觀結構與優異的加工性能。",
    show_features: true,
    features: ["符合CE標準", "電動（8835型）或氣動馬達（8830型）驅動", "手持式（8830型）或機器安裝型（8835型）", "多種噴霧模式", "精確的送線定位", "隨時與自動化系統連接（8835型）", "簡便的參數調整", "可選配ArcJet®、遠程捲軸支架、各種驅動輥等配件提升性能"],
    show_specs: false,
    specs: [""],
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
	s_title: "8835電弧噴槍",
	s_items: ["重量：4 kg","尺寸：長8.3 cm，寬40.6 cm，高8.9 cm","空壓最小需求：35.4 L/min at 60 psi"],
  },
  {
	s_title: "8835電弧噴槍控制台",
	s_items: ["重量：18 kg","尺寸：長63.5 cm，寬30.5 cm，高40.6 cm"],
  },
  {
	s_title: "8830電弧噴槍",
	s_items: ["重量：3.2 kg","尺寸：長8.9 cm，寬30.5 cm，高8.9 cm","空壓最小需求：35.4 L/min at 60 psi"],
  },
  {
  	s_title: "8830電弧噴槍控制台",
  	s_items: ["重量：16.7 kg","尺寸：長45.7 cm，寬30.4 cm，高42.1 cm"]
  },
  {
  	s_title: "TCV400電源供應器",
  	s_items: ["重量：205 kg","尺寸：長59 cm，寬82 cm，高92.3 cm","電力需求：輸入電壓220/400V 50Hz；230/480V 60Hz"]
  },
];

var vm_2=new Vue({
	el: "#spec_infos",
	data: {
	contents: specdata,
	}
});

Vue.component('table_template', {
  template: '#table-template',
  props: {
    data: {},
    columns: [],
  }
});

var vm_3= new Vue({
  el: '#table',
  data: {
    tableTitle: "線材噴塗速率／安培數對照：",
    tableHead: ["線材材料", "Lbs/hr ／100 Amp",],
    tableData: [
      { 線材材料: '鋼', "Lbs/hr ／100 Amp": "10", },
      { 線材材料: '鋁青銅', "Lbs/hr ／100 Amp": "9", },
      { 線材材料: '青銅', "Lbs/hr ／100 Amp": "11", },
      { 線材材料: '銅', "Lbs/hr ／100 Amp": "11", },
      { 線材材料: '鎳合金包芯線', "Lbs/hr ／100 Amp": "8.5", },
      { 線材材料: '鋁', "Lbs/hr ／100 Amp": "6", },
      { 線材材料: '鋅', "Lbs/hr ／100 Amp": "24", }
    ]
  }
});
