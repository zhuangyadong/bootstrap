/**
 * Created by 黄佳明 on 2016/9/9.
 */

//手机导航显示隐藏
$('.m-daohang').eq(0).click(function () {
    $('.myinlan').eq(0).toggle();
});
//固定栏跟随
window.onmousewheel= function () {
    for(var i=0;i<$('.fix li').length;i++){
        $('.fix li').eq(i).find('span').css('color','#666666');
        $('.fix li').eq(i).find('i').css('border','1px solid transparent');
    }
    if(document.body.scrollTop>=500){
        $('.fix').eq(0).show();
        if(document.body.scrollTop<909){
            $('.fix li span').eq(0).css('color','#6E9FFF');
            $('.fix li i').eq(0).css('border','1px solid #6E9FFF');
        }
        else if(document.body.scrollTop<1468){
            $('.fix li span').eq(1).css('color','#6699FF');
            $('.fix li i').eq(1).css('border','1px solid #6699FF');
        }
        else if(document.body.scrollTop<2016){
            $('.fix li span').eq(2).css('color','#2DA5D2');
            $('.fix li i').eq(2).css('border','1px solid #2DA5D2');
        }
        else if(document.body.scrollTop<2560){
            $('.fix li span').eq(3).css('color','#56C95F');
            $('.fix li i').eq(3).css('border','1px solid #56C95F');
        }
        else if(document.body.scrollTop<3118){
            $('.fix li span').eq(4).css('color','#FF9900');
            $('.fix li i').eq(4).css('border','1px solid #FF9900');
        }
        else if(document.body.scrollTop<3672){
            $('.fix li span').eq(5).css('color','#FF4795');
            $('.fix li i').eq(5).css('border','1px solid #FF4795');
        }
        else if(document.body.scrollTop<4173){
            $('.fix li span').eq(6).css('color','#C676FE');
            $('.fix li i').eq(6).css('border','1px solid #C676FE');
        }
    }else {
        $('.fix').eq(0).hide();
    }
};
$('.fix li').eq(0).click(function () {
    $('body').eq(0).scrollTop(723);
    for(var i=0;i<$('.fix li').length;i++){
        $('.fix li').eq(i).find('span').css('color','#666666');
        $('.fix li').eq(i).find('i').css('border','1px solid transparent');
    }
    $('.fix li span').eq(0).css('color','#6E9FFF');
    $('.fix li i').eq(0).css('border','1px solid #6E9FFF');
});
$('.fix li').eq(1).click(function () {
    $('body').eq(0).scrollTop(937);
    for(var i=0;i<$('.fix li').length;i++){
        $('.fix li').eq(i).find('span').css('color','#666666');
        $('.fix li').eq(i).find('i').css('border','1px solid transparent');
    }
    $('.fix li span').eq(1).css('color','#6699FF');
    $('.fix li i').eq(1).css('border','1px solid #6699FF');
});
$('.fix li').eq(2).click(function () {
    $('body').eq(0).scrollTop(1491);
    for(var i=0;i<$('.fix li').length;i++){
        $('.fix li').eq(i).find('span').css('color','#666666');
        $('.fix li').eq(i).find('i').css('border','1px solid transparent');
    }
    $('.fix li span').eq(2).css('color','#2DA5D2');
    $('.fix li i').eq(2).css('border','1px solid #2DA5D2');
});
$('.fix li').eq(3).click(function () {
    $('body').eq(0).scrollTop(2045);
    for(var i=0;i<$('.fix li').length;i++){
        $('.fix li').eq(i).find('span').css('color','#666666');
        $('.fix li').eq(i).find('i').css('border','1px solid transparent');
    }
    $('.fix li span').eq(3).css('color','#56C95F');
    $('.fix li i').eq(3).css('border','1px solid #56C95F');
});
$('.fix li').eq(4).click(function () {
    $('body').eq(0).scrollTop(2599);
    for(var i=0;i<$('.fix li').length;i++){
        $('.fix li').eq(i).find('span').css('color','#666666');
        $('.fix li').eq(i).find('i').css('border','1px solid transparent');
    }
    $('.fix li span').eq(4).css('color','#FF9900');
    $('.fix li i').eq(4).css('border','1px solid #FF9900');
});
$('.fix li').eq(5).click(function () {
    $('body').eq(0).scrollTop(3153);
    for(var i=0;i<$('.fix li').length;i++){
        $('.fix li').eq(i).find('span').css('color','#666666');
        $('.fix li').eq(i).find('i').css('border','1px solid transparent');
    }
    $('.fix li span').eq(5).css('color','#FF4795');
    $('.fix li i').eq(5).css('border','1px solid #FF4795');
});
$('.fix li').eq(6).click(function () {
    $('body').eq(0).scrollTop(3707);
    for(var i=0;i<$('.fix li').length;i++){
        $('.fix li').eq(i).find('span').css('color','#666666');
        $('.fix li').eq(i).find('i').css('border','1px solid transparent');
    }
    $('.fix li span').eq(6).css('color','#C676FE');
    $('.fix li i').eq(6).css('border','1px solid #C676FE');
});
