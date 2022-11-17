var myButton = document.getElementById("switch-btn");
var myButtontwo = document.getElementById("back-btn");
var topCont = document.getElementById("card-front");
var bottomCont = document.getElementById("card-back");



myButton.addEventListener("click", function () {
    topCont.classList.add("hidden") ;   
    bottomCont.classList.remove("hidden");
  });

  

  myButtontwo.addEventListener("click", function () {
    topCont.classList.remove("hidden");
    bottomCont.classList.add("hidden")
  });  
