$(function(){
	$('#bannerBox').flexslider();
	$('.f_slider').flexslider();
	// 页面滚动
	var jump_top = parseInt($('.floorJump').css("top"))+$(window).height()*0.3,
		top,
		to_top,
		floor_height = $('.floor').height()+parseInt($('.floor').css("margin-bottom"))+$('.floorAd').height()||0+parseInt($('.floorAd').css("margin-bottom"))||0,
		now_f = 1,
		now_f_will = 0,
		obj_top = $('.floorBox').offset().top;
	$(window).scroll(function(){
		// 跟随
		if($(document).scrollTop()>obj_top){
			top = $(document).scrollTop()-obj_top+jump_top;
			$('.floorJump').stop().animate({"top":top},400);
		}else{
			top = 40;
			$('.floorJump').stop().animate({"top":top},400);
		}
		// 变色
		now_f_will = Math.floor(($(document).scrollTop()-obj_top+$(window).height()*0.3)/floor_height)+1;
		if(now_f != now_f_will){
			now_f = now_f_will;
			$('.floorJump .num').each(function(){
				if($(this).attr("data")==now_f){
					$(this).addClass("active").siblings().removeClass("active");
				}
			})
		}
	})
	// 跳转
	$('.floorJump .num').each(function(){
		$(this).click(function(){
			to_top = obj_top+floor_height*($(this).attr("data")-1)-$(window).height()*0.1;
			$('html,body').stop().animate({"scrollTop":to_top},400);
		})
	})

})