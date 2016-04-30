function hoverColor(className, color){
  $(className).mouseenter(function(){
    $(this).animate({ color: color }, { duration: 200, queue: false});
  });
  
  $(className).mouseleave(function(){
    $(this).animate({ color: "white" }, { duration: 200, queue: false});
  });
}

function centerVertical(parent, subject) {
  $(parent).css( "paddingTop", 0); //resets size of div
  var parent_height = $(parent).height();
  var subject_height = $(subject).outerHeight();
  
  var padding_amount = (parent_height - subject_height) / 2;
  
  if ($(".is-home-page").height()){ // is a dirty fix for mobile, tried using a script to adjust height but typekit loading fucks with it. Only loads on homepage
    console.log("is home page");
    padding_amount = padding_amount;
  }
  
  console.log("subject height: " + subject_height);
  console.log("parent height: " + parent_height);
  $(parent).css( "paddingTop", padding_amount); 
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}




$(document).ready(function(){

  hoverColor(".facebook", "#3b5998");
  hoverColor(".twitter", "#4099ff");
  hoverColor(".youtube", "#cc181e");
  
  var menu_open = false;
  
  $(".hamburger-container").click(function(){
    if (menu_open == false) {
      $(".navbar-links").slideDown();
      menu_open = true;
    }
    else if (menu_open == true) {
      $(".navbar-links").slideUp();
      menu_open = false;
    }
  })
  
  if (isMobile()) {

    centerVertical(".index-screen", ".center-container"); //home page text
    centerVertical(".cover-picture", ".center-text-page"); //home page text
    
   

  }
  
 
})