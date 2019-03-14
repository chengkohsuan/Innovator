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
    title: "Mettech Axial III 高功率軸向送粉電漿噴槍",
    show_text: true,
    text: "Axial III電漿噴槍堅固、靈活，可應用各式各樣的塗層，專利設計的軸向送粉可有效將粉末或懸浮液均勻加熱，大幅增加堆積效益，以最經濟的方式獲得卓越的塗層。",
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