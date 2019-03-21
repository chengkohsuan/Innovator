$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
});

var app_infos=[
  {
    show_title: true,
    title: "石化油氣領域應用",
    show_text: true,
    texts: ["石化產業工件幾乎都是在極端壓力下磨損、腐蝕、化學侵蝕和磨損。該領域最常使用的塗層為碳化鎢、鎳基超合金和鈷基超合金塗層，並搭配高壓高速火焰噴塗，可以有效提升工件壽命。最典型的應用為球閥、閥體、閘板、螺桿、深抽油管。",],
    show_lists: false,
    lists: ["",],
  },
  ];

var vm_1=new Vue({
  el: "#content",
  data: {
  	contents: app_infos,
  }
});