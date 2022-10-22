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
 
  } else {
   console.group("else")
   
  }
}

var y = window.matchMedia("(max-width:1500px)")
featuredImg(y) // Call listener function at run time
y.addListener(featuredImg)

