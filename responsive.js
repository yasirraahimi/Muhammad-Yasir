function toggleButton(){
    console.log("toggle click");
    var x = document.getElementById("youL");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}


function featuredImg(x) {
  if (y.matches) { // If media query matches
    console.log("if clicked")
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
  } else {
   console.group("else")
   
  }
}

var y = window.matchMedia("(max-width:1500px)")
featuredImg(y) // Call listener function at run time
y.addListener(featuredImg)

