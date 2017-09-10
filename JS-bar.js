var currentText = "<topTitle><b>/ColbyChance/AboutMe</b></topTitle>";

$(document).ready(function() {
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > ($('#jumbo').outerHeight() / 2)) {
            document.getElementById("coverButton").innerHTML = currentText;
       } else {
           document.getElementById("coverButton").innerHTML = '<span class="glyphicon glyphicon-chevron-down navbar-text" id="downArrow"></span>';
       }
    });
});

