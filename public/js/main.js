window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    const mq = window.matchMedia("(max-width: 575px)");
    if (mq.matches) {
        $('#menu a').attr('href', 'javascript:void(0)');

        $('#section-about').addClass('active');

        $(window).scroll(() => {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            $('.section').each((index, value) => {
                if (isScrolledIntoView(value, docViewTop, docViewBottom) === true) {
                    $(value).addClass('active');
                }

                checkSectionLocation(value, docViewTop, docViewBottom);
            });

            if (docViewTop < 10 || docViewBottom >= $(document).height() - 50) {
                $('.site-footer').addClass('active');
            } else {
                $('.site-footer').removeClass('active');
            };

            if (docViewTop < 10) {
                $('.site-header').removeClass('active');
            } else {
                $('.site-header').addClass('active');
            };
        });

        $("#menu a").click(onMenuItemClick);
    } else {
        $('#pagepiling').pagepiling({
            direction: 'horizontal',
            menu: '#menu',
            anchors: ['about', 'services', 'tech', 'work', 'contact'],
            sectionsColor: ['#EAE7DC', '#D8C3A5', '#EAE7DC', '#D8C3A5', '#EAE7DC'],
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
        }, 5000);
    };

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '/data/particles.json', () => {
        console.log('callback - particles.js config loaded');
    });
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

function isScrolledIntoView(elem, docViewTop, docViewBottom) {
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return (docViewTop <= elemTop && docViewBottom >= elemTop) || (docViewTop <= elemBottom && docViewBottom >= elemBottom);
}

function onMenuItemClick(event) {
    event.preventDefault();

    var sectionId = $(event.target).attr('scroll-to');

    $('html, body').animate({
        scrollTop: $(sectionId).offset().top
    }, 'slow');
}

function checkSectionLocation(elem, docViewTop, docViewBottom) {
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    if (docViewTop >= elemTop - 50 && docViewTop <= elemBottom) {
        var sectionId = $(elem).attr('id');

        $('#menu li').removeClass('active');
        $($('#menu a[scroll-to="#' + sectionId + '"]').parent()).addClass('active');
    }
}