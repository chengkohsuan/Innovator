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
    title: "機械手臂設備",
    show_text: true,
    text: "我們可依客戶需求搭配KUKA、發那科、安川機械或ABB之機械手臂進行連動，除機械手臂本體的六軸外可外加三軸（兩軸同動轉台和軌道一軸），達到九軸同動之功能，可更容易噴塗高複雜度之工件，例如葉片。",
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