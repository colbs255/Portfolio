var currentText = "<topTitle><b>~/ColbyChance/AboutMe</b></topTitle>";

$(document).ready(function() {
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > ($('#jumbo').outerHeight()) - $('#coverButton').height()) {
            document.getElementById("coverButton").innerHTML = currentText;
       } else {
           document.getElementById("coverButton").innerHTML = '<span class="glyphicon glyphicon-chevron-down navbar-text" id="downArrow"></span>';
        console.log("Abs" + $('#coverButton').hasClass("absBar"));
       }
    });
});
