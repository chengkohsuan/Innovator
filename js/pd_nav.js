
$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
});
 // 選單收合
$(function(){
    $("#pd-nav").hide();
    $("#nav-toggle").click(function(){
        $("#pd-nav").slideToggle();
        return false;
    });
    $(".layer-2").hide();
    $(".layer-1 > li").click(function(){
    	$(this).children('.layer-2').slideToggle();
    	return false;
    });
});