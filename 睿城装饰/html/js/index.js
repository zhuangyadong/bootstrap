/**
 * Created by 黄佳明 on 2016/9/7.
 */
//导航栏点击
var listhead=$('.list-head');
var lis=listhead[0].getElementsByTagName('li');
for(var i= 0,len=lis.length;i<len;i++){
    lis[i].onclick= function () {
        for(var i= 0,len=lis.length;i<len;i++){
            lis[i].className='';
        }
        this.className='selecta';
    }
}
//滚动头部变小
var flag=1;
function xiagun(){
    $('.nav').eq(0).animate({
        height:'100px'
    });
    $('.logo').eq(0).animate({
        height:'65px',
        marginTop:'-33px'
    });
    $('.list-head').eq(0).animate({
        height:'62px',
        lineHeight:'62px'
    });
    $('.erweima').eq(0).animate({
        height:'54px',
        marginTop:'-27px'
    });
}
function shanggun(){
    $('.nav').eq(0).animate({
        height:'113px'
    });
    $('.logo').eq(0).animate({
        height:'78px',
        marginTop:'-39px'
    });
    $('.list-head').eq(0).animate({
        height:'75px',
        lineHeight:'75px'
    });
    $('.erweima').eq(0).animate({
        height:'67px',
        marginTop:'-34px'
    });
}
window.onscroll= function () {
    if(document.body.scrollTop>50&&flag==1){
        xiagun();
        flag=0;
    }
    if(document.body.scrollTop<=50&&flag==0){
        shanggun();
        flag=1;
    }
};
//head高度
var wh=$(window).eq(0).height();
$('.head').eq(0).css('height',wh*0.8);

