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
    show_text: true,
    texts: ["","",""],
    show_features: true,
    features: ["",],
    show_specs: true,
    specs: ["重量：45.4 kg","體積：長787 mm，寬394 mm，高940 mm","供電需求：115 VAC, 1 phase, 50/60 Hz, 20 amps","吹掃空氣需求：大於80 psi","主氣體（氬氣）需求：71.3~430 SCFH（33.5~202 l/min）@30~250 psi","二次氣體（氦氣）需求：71.3~430 SCFH（33.5~202 l/min）@30~250 psi","二次氣體（氫氣）需求：4.3~26.4 SCFH（2~12.4 l/min）@30~250 psi","載氣（氬氣）需求：8.2~46.2 SCFH（4~22.6 l/min）@30~200 psi",],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});