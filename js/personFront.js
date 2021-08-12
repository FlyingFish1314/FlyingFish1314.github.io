var contens=document.getElementsByClassName("contens");
var navLeft_ul = document.querySelector(".navLeft_ul");
var toChange =document.querySelector(".toChange");
var navLeft_span =document.getElementsByClassName("navLeft_span");



// =========== navleft_ul
navLeft_ul.onclick=function(e){
    var e=e || window.event;
    var target=e.target || e.srcElement;
    switch(e.target.className){
        case "navLeft_span":{
            let name=e.target.getAttribute("name");
            clearContens();
            contens[name].style.display="block";
            e.target.style.color="red";
            break;
        }
    }
}
toChange.onclick=function(){
    clearContens();
    contens[4].style.display="block";
    navLeft_span[4].style.color="red";
}
// ========contens
clearContens();
function clearContens(){
    let i;
    for(i=0;i<contens.length;i++){
        contens[i].style.display="none";
        navLeft_span[i].style.color="black";
    }
}
contens[2].style.display="block";
navLeft_span[2].style.color="red";