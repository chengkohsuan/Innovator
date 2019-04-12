// 全部load完再載入畫面
$(document).ready(function(){
	$("body").show();
});
// 導覽列
$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
});
// 折疊選單
$(function(){
	$(".navbar-toggle").click(function(){
		$(".navbar-collapse").slideToggle();
	})
});
