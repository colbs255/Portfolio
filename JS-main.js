var fader = document.getElementById("underLine");
setInterval(function() {
    if (fader.style.visibility == "hidden") {
        fader.style.visibility = "visible";
    } else {
        fader.style.visibility = "hidden";
    }
    }, 500)
var cb = document.getElementById("coverButton");
$("#myCarousel").on('slid.bs.carousel', function () {
        if ($('div.active').index() == 1) {
            currentText = "<topTitle><b>~/ColbyChance/AboutMe</b></topTitle>";
        } else if ($('div.active').index() == 2) {
            currentText = "<topTitle><b>~/ColbyChance/Projects</b></topTitle>";
        } else if ($('div.active').index() == 0) {
            currentText = "<topTitle><b>~/ColbyChance/Skills</b></topTitle>";
        }
        cb.innerHTML = currentText;
    console.log($('div.active').index() + 1);
    });

$("#coverButton").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#jumbo').outerHeight() - $('#coverButton').outerHeight()
    }, "slow");
});

