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
    title: "",
    show_sub: true,
    sub:"",
    show_text: true,
    text: "",
    show_features: true,
    features: ["",],
    show_specs: true,
    specs: ["",],
  },
  
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});

