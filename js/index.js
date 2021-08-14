var navLeftPhone =document.querySelector(".navleft_phone");
var navLeftNotebook =document.querySelector(".navLeft_notebook");
var navLeftLi=document.getElementsByClassName("navLeft_li");
var navLeft_goods = document.querySelector(".navLeft_goods");
var banner_shows=document.querySelector("#banner_show");
var text=document.querySelector(".text");
var banner_line=document.querySelector(".banner_line");
var imgsFive=document.getElementsByClassName("imgsFive");
var banner_btns=document.getElementsByClassName("banner_btns");
var banner_btnBottom=document.querySelector("#banner_btnBottom");
var banner_btnleft=document.querySelector("#banner_btnleft");
var banner_btnRight=document.querySelector("#banner_btnRight");
var navTop=document.querySelector(".navTop");
var navTop_goods=document.getElementsByClassName("navTop_goods");
var navTop_banner=document.getElementById("navTop_banner");
var banner_line=document.querySelector(".banner_line");
var banner_index=0;
var banner_timerImg;
var timer=null;                  //回顶部
var speed = 0;                   //回顶部
var flag=true;                   //回顶部
var navTop_heighth=0;
var navTop_Timer;
var navTop_TimerTwo;
// 初始化属性
imgsFive[0].style.display="block";
banner_btns[0].style.backgroundColor="red";

// 事件
navLeftPhone.onclick=function(){
    navLeftNotebook.style.backgroundColor="#fff";
    this.style.backgroundColor="rgb(176, 176, 190)";
    // console.log(this.getAttribute("class"));
}
navLeftNotebook.onclick=function(){
    navLeftPhone.style.backgroundColor="#fff";
    this.style.backgroundColor="rgb(176, 176, 190)";
}
navLeft_goods.onmouseover=function(e){
    banner_show.style.display="block";
    banner_line.style.display="block";
    var e=e || window.event;
    var target=e.target || e.srcElement;
    switch(e.target.className){
        case "navLeft_li":{
            let content=e.target.getAttribute("class");
            navLeft_LiColorClear();
            bannerShowFunction(content);
            e.target.style.backgroundColor="rgb(176, 176, 190)";
            break;
        }
    }
}
navLeft_goods.onmouseout=function(e){
    banner_show.style.display="none";
    banner_line.style.display="none";
    var e=e || window.event;
    var target=e.target || e.srcElement;
    switch(e.target.className){
        case "navLeft_li":{
            navLeft_LiColorClear();
            e.target.style.backgroundColor="rgb(176, 176, 190)"
            break;
        }
    }
}
banner_btnBottom.onclick=function(e){
    var e=e || window.event;
    var target=e.target || e.srcElement;
    switch(e.target.className){
        case "banner_btns":{
            let index=e.target.getAttribute("name");
            banner_index=index;
            banner_clearFunction();
            imgsFive[index].style.display="block";
            banner_btns[index].style.backgroundColor="red";
            break;
        }
    }
}
banner_btnleft.onclick=function(){
    if(banner_index!=0){
        banner_index--;
    }else{
        banner_index=4;
    }
    banner_clearFunction();
        imgsFive[banner_index].style.display="block";
        banner_btns[banner_index].style.backgroundColor="red";
}
banner_btnRight.onclick=function(){
    if(banner_index!=4){
        banner_index++;
    }else{
        banner_index=0;
    }
    banner_clearFunction();
    imgsFive[banner_index].style.display="block";
    banner_btns[banner_index].style.backgroundColor="red";
}
banner_timerImg=setInterval(banner_timerFunction,2500);
document.querySelector(".banner_imgChange").onmouseover=function(){
    clearInterval(banner_timerImg);
}
document.querySelector(".banner_imgChange").onmouseout=function(){
    banner_timerImg=setInterval(banner_timerFunction,2500);
}

navTop.onmouseover=function(e){
    navTop_banner.style.display="block";
    // navTop_banner.style.height="0px";
    clearInterval(navTop_Timer);
    navTop_Timer =setInterval(bavTop_timerFunction,1);
    var e=e || window.event;
    var target=e.target || e.srcElement;
    switch(e.target.className){
        case "navTop_goods":{
            // let index=e.target.getAttribute("name");
            break;
        }
    }
}
navTop_banner.onmouseout=function(){
    clearInterval(navTop_TimerTwo);
    navTop_TimerTwo=setInterval(bavTop_timerTwoFunction,5);
}
document.querySelector(".navTop_clear01").onmouseover=function(){
    clearInterval(navTop_TimerTwo);
    navTop_TimerTwo=setInterval(bavTop_timerTwoFunction,5);
}
document.querySelector(".navTop_clear02 ").onmouseover=function(){
    clearInterval(navTop_TimerTwo);
    navTop_TimerTwo=setInterval(bavTop_timerTwoFunction,5);
}
document.querySelector(".topper ").onmouseover=function(){
    clearInterval(navTop_TimerTwo);
    navTop_TimerTwo=setInterval(bavTop_timerTwoFunction,5);
}


//函数
function bannerShowFunction(content){
    text.innerHTML=content;
}
function navLeft_LiColorClear(){
    let i;
    for(i=0;i<navLeftLi.length;i++){
        navLeftLi[i].style.backgroundColor="rgb(204, 194, 194)";
    }
}
function banner_clearFunction(){
    let i;
    for(i=0;i<banner_btns.length;i++){
        banner_btns[i].style.backgroundColor="aqua";
        imgsFive[i].style.display="none";
    }
}
function banner_timerFunction(){
    if(banner_index>=0&&banner_index<4){
        banner_index++;
    }else if(banner_index==4){
        banner_index=0;
    }
    banner_clearFunction();
    imgsFive[banner_index].style.display="block";
    banner_btns[banner_index].style.backgroundColor="red";
}

function bavTop_timerFunction(){
    // navTop_banner.style.display="block";
    navTop_banner.style.height="0px";
    if(navTop_heighth<200){
        navTop_heighth=navTop_heighth+10;
    }else{
        navTop_heighth=200;
        clearInterval(navTop_Timer);
    }
    navTop_banner.style.height=navTop_heighth+"px";
}
function bavTop_timerTwoFunction(){
    // clearInterval(bavTop_timer);
    navTop_banner.style.height="0px";
    if(navTop_heighth>0){
        navTop_heighth=navTop_heighth-10;
    }else{
        navTop_heighth=0;
        clearInterval(navTop_TimerTwo);
        navTop_banner.style.display="none";
        // clearInterval(navTop_Timer);
    }
    navTop_banner.style.height=navTop_heighth+"px";
}
// bavTop_timerFunction(navTop_heighth);








var  el = window.document.body; //声明一个变量，默认值为body
window.document.body.onmouseover =  function (event){
   el = event.target; //鼠标每经过一个元素，就把该元素赋值给变量el
//    console.log( '当前鼠标在' , el,  '元素上' ); //在控制台中打印该变量
     if(el.getAttribute("class")=='banner_goods'){
         a=1;
         console.log(a);
    }else{
        a=0;
    }
}
//banner_shows 的展示与清除
document.querySelector(".banner_line").onmouseover=function(){
    banner_show.style.display="block";
}
document.querySelector(".banner_line01").onmouseover=function(){
    banner_show.style.display="none";
}
document.querySelector("#navTop").onmouseover=function(){
    banner_show.style.display="none";
}
document.querySelector(".banner_line02").onmouseover=function(){
    banner_show.style.display="none";
}


//回顶部
document.querySelector(".returnTop").style.display='none';
window.onscroll=function(){
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;//获取scrollTop值
    if (scrolltop>=600) {
        document.querySelector(".returnTop").style.display='block';
    } else{
        document.querySelector(".returnTop").style.display='none';
    }
    if(!flag){
        clearInterval(timer);
    }
    flag=false;
};
//点击按钮回顶部
document.querySelector(".returnTop").onclick=function(){
    timer=setInterval(function(){
        var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
        speed=scrolltop/5; 
        document.documentElement.scrollTop=document.body.scrollTop=scrolltop-speed;//设置其为缓冲的状态
        if (scrolltop==0) {s
            clearInterval(timer);
        }
        flag=true;
    },50);
    
}



// var navTop_Timer=setInterval(bavTop_timerFunction,5);
// clearInterval(navTop_Timer);