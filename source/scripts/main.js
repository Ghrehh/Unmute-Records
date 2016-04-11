function hoverColor(className, color){
  $(className).mouseenter(function(){
    $(this).animate({ color: color }, { duration: 200, queue: false});
  });
  
  $(className).mouseleave(function(){
    $(this).animate({ color: "white" }, { duration: 200, queue: false});
  });
}

$(document).ready(function(){

  hoverColor(".facebook", "#3b5998");
  hoverColor(".twitter", "#4099ff");
  hoverColor(".instagram", "#454545");
  
 
})