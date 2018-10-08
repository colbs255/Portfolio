var fader = document.getElementById("underLine");
setInterval(function() {
    if (fader.style.visibility == "hidden") {
        fader.style.visibility = "visible";
    } else {
        fader.style.visibility = "hidden";
    }
    }, 500)
var cb = document.getElementById("coverButton");
var leftButton = document.getElementById("myLeftButton");
var rightButton = document.getElementById("myRightButton");
$("#myCarousel").on('slid.bs.carousel', function () {
        $('html, body').animate({
            scrollTop: $('#jumbo').outerHeight() - $('#coverButton').outerHeight()
        }, "slow");
        leftText = ""
        rightText = ""
        expText = "Why Me"
        aboutText = "About Me"
        projectsText = "Projects"
        if ($('div.active').index() == 1) {
            currentText = "<topTitle><b>/ColbyChance/AboutMe</b></topTitle>";
            leftText = expText
            rightText = projectsText
        } else if ($('div.active').index() == 2) {
            currentText = "<topTitle><b>/ColbyChance/Projects</b></topTitle>";
            leftText = aboutText;
            rightText = expText;
        } else if ($('div.active').index() == 0) {
            currentText = "<topTitle><b>/ColbyChance/WhyMe</b></topTitle>";
            leftText = projectsText;
            rightText = aboutText;
        }
        cb.innerHTML = currentText;
        leftButton.innerHTML = leftText;
        rightButton.innerHTML = rightText;
    });

$("#coverButton").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#jumbo').outerHeight() - $('#coverButton').outerHeight()
    }, "slow");
});

$("#myLeftButton").on('click', function(e) {
    $('.carousel').carousel('prev');
    $(this).blur();
});

$("#myRightButton").on('click', function(e) {
    $('.carousel').carousel('next');
    $(this).blur();
});


