$(function(){
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
})