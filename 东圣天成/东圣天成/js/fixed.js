/**
 * Created by 黄佳明 on 2016/8/17.
 */
function className(name,tag){
    if(document.getElementsByClassName){
        return document.getElementsByClassName(name);
    }else{
        var tags=document.getElementsByTagName(tag),arr=[];
        for(var i= 0,len=tags.length;i<len;i++){
            if(tags[i].className==name){
                arr.push(tags[i]);
            }
        }
        return arr;
    }
}
var fixed=className('fixed','ul');
var lis=fixed[0].children;
var is=fixed[0].getElementsByTagName('i');
var spans=fixed[0].getElementsByTagName('span');
for(var i= 0,len=lis.length;i<len;i++){
    lis[i].index=i;
    lis[i].onclick= function () {
        for(var i= 0,len=lis.length;i<len;i++){
            is[i].style.backgroundImage='url("images/pubic/daohang1.png")';
            spans[i].className='';
        }
        is[this.index].style.backgroundImage='url("images/pubic/daohang2.png")';
        spans[this.index].className='blue';
    }
}