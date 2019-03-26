// var device=navigator.userAgent;
// if(device.match(/iPhone|Android/)){
// 	windoe.location="../mobile/mindex.html"
// };

$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
	
});


