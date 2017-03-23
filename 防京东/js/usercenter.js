$(function(){
	$('.quality span').each(function(){
		$(this).click(function(){
			$(this).addClass("select").siblings().removeClass("select");
		})
	})
	// 评价页 星星
	$('.cDesNum ul li').each(function(){
		$(this).hover(function(){
			$(this).addClass("hover").prevAll().addClass("hover");
			$(this).nextAll().removeClass("hover")
		},function(){
			$(this).removeClass("hover").siblings().removeClass("hover");
		})
		$(this).click(function(){
			$(this).addClass("select").prevAll().addClass("select");
			$(this).nextAll().removeClass("select")
		})
	})
	// 积分兑换
	$('.pointExBox .category li').each(function(){
		$(this).click(function(){
			$(this).addClass("select").siblings().removeClass("select");
		})
	})
	// 兑换详情
	// 轮播图
	var li_w = $('.pointDes .coverBox li').width(),
		li_mr = parseInt($('.pointDes .coverBox li').css("margin-right"))+parseInt($('.pointDes .coverBox li').css("border-right-width"))*2,
		li_cell = li_w+li_mr,
		ul_w = li_cell*$('.pointDes .coverBox li').length,
		flag = 0;
	$('.pointDes .coverBox ul').width(ul_w);
	$('.pointDes .arrow_l').click(function(){
		ul_left = parseInt($('.pointDes .coverBox ul').css("left"));
		if (flag == 0 && ul_left<0) {
			flag = 1;
			$('.pointDes .coverBox ul').animate({"left":ul_left+li_cell},300,function(){
				flag = 0;
			});
		}
	})
	$('.pointDes .arrow_r').click(function(){
		ul_left = parseInt($('.pointDes .coverBox ul').css("left"));
		if (flag == 0 && -ul_left<(ul_w-li_cell*2)) {
			flag = 1;
			$('.pointDes .coverBox ul').animate({"left":ul_left-li_cell},300,function(){
				flag = 0;
			});
		}
	})
	//切换图
	$('.pointDes .coverBox li').each(function(){
		$(this).click(function(){
			var src = $(this).find("img").attr("src");
			$(this).addClass("select").siblings().removeClass("select");
			$('.pointDes .mainImg img').attr("src",src);
		})
	})
	//numbBox
	$('.numbBox input').on("keyup",function(){
		var val = $('.numbBox input').val().replace(/[^0-9]+/,'');
		$('.numbBox input').val(val);
	})
	$('.numbBox .arrow_up').click(function(){
		if ($('.numbBox input').val() == null) {
			$('.numbBox input').val(1);
		}
		$('.numbBox input').val(parseInt($('.numbBox input').val())+1);
	})
	$('.numbBox .arrow_down').click(function(){
		if ($('.numbBox input').val() == null) {
			$('.numbBox input').val(1);
		}
		if ($('.numbBox input').val() > 1) {
			$('.numbBox input').val(parseInt($('.numbBox input').val())-1);
		}
	})
	//翻页
	$('.page li:not(".prev,.next")').each(function(){
		$(this).click(function(){
			$(this).addClass("select").siblings().removeClass("select");
		})
	})
})