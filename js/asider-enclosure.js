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
    title: "熱噴塗專用隔音室",
    show_text: true,
    text: "熱噴塗專用高效隔音室，可針對客戶場地空間及製程應用量身打造，採用國外進口止燃型隔音棉，在熱噴塗作業中可以將噪音降至80dBA以下。尺寸從2M*2M到6M*12M，高度可達5M以上，可依客戶需求規劃頂開門、側開門、單開門，及窗戶位置、大小。",
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