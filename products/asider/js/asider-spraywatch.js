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
    tableTitle: "",
    tableHead: ["項目", "2S 科研版","4S HS","2i","G"],
    tableData: [
      { 項目: "顆粒溫度（解析度1°C）", "2S 科研版": "1000~4000°C", "4S HS": "1000~4000°C", "2i":"1000~4000°C", "G":"NA"},
      { 項目:"顆粒速度（解析度0.1-5 m/s）", "2S 科研版": "1-2000 m/s", "4S HS": "1-2000 m/s", "2i":"1-2000 m/s", "G":"<1000 m/s"},
      { 項目: "顆粒相對數量（解析度1%）", "2S 科研版": "0~100%", "4S HS": "0~100%", "2i":"0~100%", "G":"0~100%"},
      { 項目: "顆粒大小（解析度5μm）", "2S 科研版": "10-500 μm", "4S HS": "NA", "2i":"NA", "G":"NA"},
      { 項目: "噴塗流束監測位置", "2S 科研版": "-12～12 mm", "4S HS": "-20～20 mm", "2i":"-12～12 mm", "G":"-20～20 mm"},
      { 項目: "噴塗流束監測寬度", "2S 科研版": "1-53 mm", "4S HS": "1-30 mm", "2i":"1-36 mm", "G":"0-40 mm"},
      { 項目: "噴塗角度監測", "2S 科研版": "-10°~+10°", "4S HS": "-15°~+15°", "2i":"-10°~+10°", "G":"-10°~+10°"},
      { 項目: "噴塗角度差異量", "2S 科研版": "0°~15°", "4S HS": "0°~15°", "2i":"0°~15°", "G":"NA"},
      { 項目: "基材溫度", "2S 科研版": "0~500°C", "4S HS": "0~500°C", "2i":"0~500°C", "G":"0~500°C"},
      { 項目: "最大量測體積（立方毫米）", "2S 科研版": "7050", "4S HS": "19000", "2i":"30000", "G":"-"},
      { 項目: "重量", "2S 科研版": "5.5kg", "4S HS": "3kg", "2i":"10kg", "G":"2kg"},
    ]
  }
});