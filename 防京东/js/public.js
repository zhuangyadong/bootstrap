$(function(){
	var nav_flag = 1;
		if ($('.second').css("display") == "block") {
			nav_flag = 0;
		}
	$('.firstNav').hover(function(){
		if (nav_flag) {
			$('.second').show();
		}
	},function(){
		if (nav_flag) {
			$('.second').hide();
		}
	})
	$('.second li').hover(function(){
		$(this).find(".thirdNav").stop().fadeIn(200);
	},function(){
		$(this).find(".thirdNav").stop().fadeOut(200);
	})
    $("a").click(function(){
    	alert("网站建设中,敬请期待!");
    	return false;
    })
	if (window.PIE) {
        $('.floorJump .num').each(function() {
            PIE.attach(this);
        });
    }
})