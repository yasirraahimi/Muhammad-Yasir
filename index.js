// setTimeout(function(){imgFun();}, 1000);
// setInterval(function(){imgFun()} 
// , 1000);
function allScroll (){
    setTimeout(function(){imgFun();}, 1000);
function imgFun(){
    // console.log("Clicked..")
    document.getElementById("img1").style.transform = "translateX(0px)"; 
    document.getElementById("img2").style.transform = "translateX(0px)";  
    document.getElementById("img3").style.transform = "translateX(0px)"; 
    document.getElementById("img4").style.transform = "translateX(0px)"; 
    document.getElementById("img5").style.transform = "translateX(0px)"; 
    document.getElementById("img6").style.transform = "translateX(0px)"; 
}
    setTimeout(function(){imgFun1();}, 5000);
function imgFun1(){
    // console.log("Clicked..")
    document.getElementById("img1").style.transform = "translateX(-425px)"; 
    document.getElementById("img2").style.transform = "translateX(-425px)"; 
    document.getElementById("img3").style.transform = "translateX(-425px)"; 
    document.getElementById("img4").style.transform = "translateX(-425px)"; 
    document.getElementById("img5").style.transform = "translateX(-425px)"; 
    document.getElementById("img6").style.transform = "translateX(-425px)"; 
}
setTimeout(function(){imgFun2();}, 10000);
function imgFun2(){
    // console.log("Clicked..")
    document.getElementById("img1").style.transform = "translateX(-850px)"; 
    document.getElementById("img2").style.transform = "translateX(-850px)"; 
    document.getElementById("img3").style.transform = "translateX(-850px)"; 
    document.getElementById("img4").style.transform = "translateX(-850px)"; 
    document.getElementById("img5").style.transform = "translateX(-850px)"; 
    document.getElementById("img6").style.transform = "translateX(-850px)"; 
}

setTimeout(function(){imgFun3();}, 15000);
function imgFun3(){
    // console.log("Clicked..")
    document.getElementById("img1").style.transform = "translateX(-1275px)"; 
    document.getElementById("img2").style.transform = "translateX(-1275px)"; 
    document.getElementById("img3").style.transform = "translateX(-1275px)"; 
    document.getElementById("img4").style.transform = "translateX(-1275px)"; 
    document.getElementById("img5").style.transform = "translateX(-1275px)"; 
    document.getElementById("img6").style.transform = "translateX(-1275px)"; 
}
}
setTimeout(function(){allScroll() , 1000})
setInterval(function(){allScroll()} ,17000);




// BEN 10
function ben101() {
  window.location.href = "https://en.wikipedia.org/wiki/Iron_Man_(2008_film)";
}

function ben104() {
  window.location.href = "https://en.wikipedia.org/wiki/Spider-Man";
}




let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

console.log(viewportHeight, viewportWidth);