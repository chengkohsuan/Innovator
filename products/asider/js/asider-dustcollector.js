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
    title: "集塵系統",
    show_text: true,
    text: "採用美國Donaldson原廠濾心，可隔絕99.999%的0.5微米以上顆粒，專利文氏管設計，可提高濾材壽命。",
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
    tableHead: [ "項目", "美國 Donaldson", "其他仿製產品"],
    tableData: [
      {項目 : "表面塗裝", "美國 Donaldson" : "烤漆，300小時鹽霧測試；原廠結構保固10年", 其他仿製產品: "一般烤漆，耐候性差"},
      {項目 : "組裝方式", "美國 Donaldson" : "模組化", 其他仿製產品: "模組化"},
      {項目 : "防爆門", "美國 Donaldson" : "薄膜式設計", 其他仿製產品: "鐵製防爆門，無效果"},
      {項目 : "濾材材質", "美國 Donaldson" : "Donaldson最高等級Ultra Web®", 其他仿製產品: "美國進口濾材"},
      {項目 : "單支濾材面積（平方英呎）", "美國 Donaldson" : "190", 其他仿製產品: "254（仿Donaldson第一代濾材設計）"},
      {項目 : "過濾效果", "美國 Donaldson" : "99.999% @ 0.5 micron", 其他仿製產品: "N/A，無驗證"},
      {項目 : "濾材表面毛深", "美國 Donaldson" : "表面毛深1.5”,粉塵不易深卡入底層，不易變形，不會造成纖維變形妨礙過濾效能", 其他仿製產品: "傳統濾材毛深2”，粉塵易卡入，纖維易變形，阻擋粉塵過濾效果"},
    ]
  }
});