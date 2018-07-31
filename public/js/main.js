$(document).ready(function () {
    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        menu: '#menu',
        anchors: ['about', 'services', 'work', 'contact'],
        sectionsColor: ['#EAE7DC', '#D8C3A5', '#EAE7DC', '#D8C3A5'],
        loopBottom: true,
        loopTop: true,
        navigation: false,
        onLeave: function(index, nextIndex, direction) {
            if (nextIndex == 1) {
                $('.site-logo').toggleClass('active');
                isAbout = true;
            }

            if (index == 1) {
                $('.site-logo').toggleClass('active');
                isAbout = false;
            }
        }
    });

    var isAbout = true;
    var introCarousel = setInterval(() => {
        if (isAbout) {
            plusSlide(1);
        }
    }, 5000)
});

// Intro carousel
var introSlideIndex = 1;

function plusSlide(n) {
    introSlideIndex += n;
    var i;
    var x = document.getElementsByClassName("intro-carousel-item");
    if (introSlideIndex > x.length) {
        introSlideIndex = 1;
    }

    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
        x[i].classList.remove("fadeInDown", "fadeInUp");
    }

    x[introSlideIndex - 1].classList.add("active", "fadeInDown");
}

function minusSlide(n) {
    introSlideIndex -= n;
    var i;
    var x = document.getElementsByClassName("intro-carousel-item");
    if (introSlideIndex <= 0) {
        introSlideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
        x[i].classList.remove("fadeInDown", "fadeInUp");
    }

    x[introSlideIndex - 1].classList.add("active", "fadeInUp");
}