function hoverColor(className, color){
  $(className).mouseenter(function(){
    $(this).animate({ color: color }, { duration: 200, queue: false});
  });

  $(className).mouseleave(function(){
    $(this).animate({ color: "white" }, { duration: 200, queue: false});
  });
}

function centerVertical(parent, subject) {
  console.log("why?")
  $(parent).css( "paddingTop", 0); //resets size of div
  var parent_height = $(parent).height();
  var subject_height = $(subject).outerHeight();

  if ($(".index-screen").length > 0) {
    parent_height -= $(".navigation").height();
  }

  var padding_amount = (parent_height - subject_height) / 2;

  console.log("subject height: " + subject_height);
  console.log("parent height: " + parent_height);
  $(parent).css( "paddingTop", padding_amount);
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}




$(document).ready(function(){
  //fades in cover images on home page
  if ($(".index-screen").length > 0) {
    $(".index-screen").css({"display": "none"})

     $(window).on("load", function(){
       $(".index-screen").fadeIn();
     })

  }

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

  if ( $(window).width() < 400) {
    $(window).on("load", function(){
      centerVertical(".index-screen", ".center-container"); //home page text
      centerVertical(".cover-picture", ".center-text-page"); //home page text
    });


  }


})
