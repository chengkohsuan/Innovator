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