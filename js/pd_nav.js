

$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
	
// });

// $(function(){
// 	$("#nav-toggle").click(function(){
// 		$("#pd_nav > .layer-1").slideToggle();
// 	});

// });


$(function(){
	$("#nav-toggle").click(function(){
		$("#pd_nav > .layer-1").slideToggle("slow");
	});
});