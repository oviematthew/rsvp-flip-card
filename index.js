var myButton = document.getElementById("switch-btn");
var topCont = document.getElementById("card-front");
var bottomCont = document.getElementById("card-back");




// All functions below occur on click of myButton variable called earlier
myButton.addEventListener("click", function () {

    // Add opacity and rotation to the front card
    topCont.classList.add("opClass"); 
    topCont.classList.add("rotate-card"); 
    
    setTimeout(function(){
    
    // Add hidden class to front card to hide it
    topCont.classList.add("hidden");  
    
    // Remove hidden class to front card to display it
    bottomCont.classList.remove("hidden"); 

    // Add opacity class to reduce the opacity of the back card
    bottomCont.classList.add("opClass"); 
    },1000); 

    setTimeout(function(){   
    //Remove Card Opacity 
    bottomCont.classList.add("re-opClass");
    },1200); 

  });

  


  