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
    title: "超合金焊材",
    show_text: true,
    text: "（1～4分表示強度低至高）",
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
    tableTitle: "合金材料抵抗強度特性（1~4表示抵抗能性由低至高）：",
    tableHead: ["合金", "機械磨耗","腐蝕", "高溫環境",],
    tableData: [
      { 合金: "Stellite", 機械磨耗: "3", 腐蝕: "3", 高溫環境: "4",},
      { 合金: "Deloro", 機械磨耗: "3", 腐蝕: "2", 高溫環境: "2",},
      { 合金: "Tribaloy", 機械磨耗: "3", 腐蝕: "3", 高溫環境: "4",},
      { 合金: "Nistelle", 機械磨耗: "1", 腐蝕: "4", 高溫環境: "3",},
      { 合金: "Delcrome", 機械磨耗: "3", 腐蝕: "1", 高溫環境: "2",},
      { 合金: "Stelcar", 機械磨耗: "4", 腐蝕: "2", 高溫環境: "2",},
      { 合金: "Jet Kote", 機械磨耗: "4", 腐蝕: "2", 高溫環境: "2",},
    ]
  }
});