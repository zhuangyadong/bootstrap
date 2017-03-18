/**
 * Created by 黄佳明 on 2016/9/13.
 */
//侧栏和隐栏高度
var wh=document.documentElement.clientHeight;
if($('.celan').eq(0).height()<wh){
    $('.celan').eq(0).css('height',wh+'px');
}else{
    $('.celan').eq(0).css('height','auto');
}
for(var i= 0,len=$('.cl-yinlan').length;i<len;i++){
    $('.cl-yinlan').eq(i).css('height',wh+'px');
}
//隐栏显示隐藏
$('.items>li').click(function () {
    for(var i= 0,len=$('.cl-yinlan').length;i<len;i++){
        $('.cl-yinlan').eq(i).hide();
    }
    $(this).find($('.cl-yinlan')).show();
});
//侧栏显示隐藏
$('.wrap').eq(0).scrollLeft(382);
$('.sangang').eq(0).click(function () {
    $('.wrap').eq(0).animate({
        scrollLeft: 0
    });
    $('.zhengwen').eq(0).css('height',wh+'px');
    $('.foot').eq(0).hide();
    $('.fanhui').eq(0).click(function () {
        $('.wrap').eq(0).animate({
            scrollLeft: 382
        });
        $('.zhengwen').eq(0).css('height','auto');
        $('.foot').eq(0).show();
        for(var i= 0,len=$('.cl-yinlan').length;i<len;i++){
            $('.cl-yinlan').eq(i).hide();
        }
    });
});
//foot切换
for(var i= 0,len=$('.foot li').length;i<len;i++){
    $('.foot li').eq(i).click(function () {
        var j=$('.foot li').index(this);
        for(var i= 0,len=$('.foot li i').length;i<len;i++){
            $('.foot li i').eq(i).removeClass('footbian');
            $('.foot li span').eq(i).removeClass('zizi');
        }
        $('.foot li i').eq(j).addClass('footbian');
        $('.foot li span').eq(j).addClass('zizi');
    });
}