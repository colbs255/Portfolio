var currentText = "<topTitle><b>/ColbyChance/AboutMe</b></topTitle>";
var leftButton = document.getElementById("myLeftButton");
var rightButton = document.getElementById("myRightButton");

$(document).ready(function() {
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > ($('#jumbo').outerHeight() / 2)) {
            document.getElementById("coverButton").innerHTML = currentText;
       } else {
           document.getElementById("coverButton").innerHTML = '<span class="glyphicon glyphicon-chevron-down navbar-text" id="downArrow"></span>';
       }
        
//        if ($(window).scrollTop() > ($('#jumbo').outerHeight() * 0.6)) {
//            leftButton.style.visibility = "visible";
//            rightButton.style.visibility = "visible";
//       } else {
//           leftButton.style.visibility = "hidden";
//           rightButton.style.visibility = "hidden";
//       }
    });
});

