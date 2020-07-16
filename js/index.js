var links=document.querySelectorAll(".head .head-inner");
var lists=document.querySelectorAll(".market-inner .bottom-item");
var topFixed=document.querySelector(".main-top-fixed");
var leftFixed=document.querySelector(".main-left-fixed");
var banner=document.querySelector(".banner");
var bannerImg=document.querySelectorAll(".banner-img-item");
var bannerSlider=document.querySelectorAll(".slider-nav-item");
var navDetail=document.querySelectorAll(".navitems");
var navBtn=document.querySelectorAll(".banner-nav ul li");
var navContainer=document.querySelector(".nav-detail");
var index=0;
var intervalBox = setInterval(move,3000);
for(let i=0;i<links.length;i++){
    links[i].onmouseover=function(){
        clearInterval(intervalBox);
        for(var j=0;j<lists.length;j++){
            links[j].className="head-inner";
            lists[j].style.display="none";
        }
        this.className="head-inner head-inner-selected"
        lists[i].style.display="block";
        index=i;
    }
    links[i].onmouseout=function(){
        intervalBox = setInterval(move,3000);
    }
    
}
for(let i=0;i<lists.length;i++){
    lists[i].onmouseover=function(){
        clearInterval(intervalBox);
        for(var j=0;j<lists.length;j++){
            links[j].className="head-inner";
            lists[j].style.display="none";
        }
        links[i].className="head-inner head-inner-selected"
        lists[i].style.display="block";
        index=i;
    }
    lists[i].onmouseout=function(){
        intervalBox = setInterval(move,3000);
    }
}
function move(){
    for(var j=0;j<lists.length;j++){
        links[j].className="head-inner";
        lists[j].style.display="none";
    }
    links[index].className="head-inner head-inner-selected";
    lists[index].style.display="block";
    if(index){
        index=0;
    }else{
        index=1;
    }
}
function scroll(){
    var st=document.documentElement.scrollTop;
    if(st>800){
        topFixed.style.top=0;
    }else{
        topFixed.style.top=-50+'px';
    }
    if(st>600){
        leftFixed.style.transform="scale(1,1)";
        leftFixed.style.opacity=1;
    }else{
        leftFixed.style.transform="scale(0,0)";
        leftFixed.style.opacity=0;
    }
}
scroll();
window.onscroll=function(){
    scroll();
}       
var num=0;
function slider(){
    for(var j=0;j<bannerImg.length;j++){
        bannerImg[j].style.display="none";
        bannerSlider[j].style.background="#000";
        bannerSlider[j].style.opacity="0.3";
    }
    bannerImg[num].style.display="block";
    bannerSlider[num].style.background="#fff";
    bannerSlider[num].style.opacity="0.7";
    switch(num){
        case 0:banner.style.background="#E8E8E8";break;
        case 1:banner.style.background="#479EE8";break;
        case 2:banner.style.background="#FB994D";break;
        case 3:banner.style.background="#E8E8E8";break;
        case 4:banner.style.background="#E5E5E5";break;
        case 5:banner.style.background="#D7133B";break;
    }
    if(num>=bannerImg.length-1){
        num=0;
    }else{
        num++;
    }
}
var t=setInterval(slider,3000);
for(let i=0;i<bannerSlider.length;i++){
    bannerSlider[i].onmouseover=function(){
        clearInterval(t);
        num=i;
        slider();
    }
    bannerSlider[i].onmouseout=function(){
        t=setInterval(slider,3000);
    }
}
for(let i=0;i<navBtn.length;i++){
    navBtn[i].onmouseover=function(){
        navContainer.style.display="block";
        for(let j=0;j<navDetail.length;j++){
            navDetail[j].style.display="none";
        }
        if(i<3){
            navDetail[i].style.display="block";
        }else{
            navDetail[0].style.display="block";
        }
    }
    navBtn[i].onmouseout=function(){
        navContainer.style.display="none";
    }
}