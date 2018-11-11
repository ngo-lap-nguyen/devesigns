var headerActive = false;

// ---
var mqLong = window.matchMedia("(min-width: 768px) and (max-aspect-ratio: 10/13)");

if (mqLong.matches) {
    $("#home .container").css('height', 'calc(' + ($(window).innerHeight() - 80) / 2 + 'px')
}
else {
    $("#home .container").css('height', 'calc(' + ($(window).innerHeight() - 80) + 'px')
}

window.addEventListener('resize', () => {
    if (mqLong.matches) {
        $("#home .container").css('height', 'calc(' + ($(window).innerHeight() - 80) / 2 + 'px')
    }
    else {
        $("#home .container").css('height', 'calc(' + ($(window).innerHeight() - 80) + 'px')
    }
})

// ---
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

$(document).ready(() => {
    // $(function() {  
    //     $("body").niceScroll({
    //         horizrailenabled: false
    //     });
    // });

    $('#scroll-prompt').on('click', () => {
        $('html, body').animate({
            scrollTop: $("#services").offset().top,
            easing: 'easeout'
        }, 1000);
    })

    $(window).scroll((e) => {
        if ($(window).scrollLeft() != 0) {
            $(window).scrollLeft(0);
        }

        if ($(window).scrollTop() > 0) {
            $('.site-header').addClass('active');
            headerActive = true;
        } else {
            $('.site-header').removeClass('active');
            headerActive = false;
        }
        
        setTimeout(() => {
            if ($('#services .section-header').hasClass('go')) {
                setTimeout(() => {
                    serviceRemoveAnimation();
                }, 300);
            }
        }, 300);
    });

    // Mobile menu
    $(".site-header .menu-mobile-button").on('click', () => {
        if (!headerActive) {
            $('.site-header').toggleClass('active');
        }
        $('.site-header .menu-mobile').toggleClass('active');
        
    })

    $('.main-section').attr('data-appear-top-offset', '-' + window.innerHeight / 2 + '');

    // On appear
    $('#home').appear();
    $('#services').appear();
    $('#work').appear();
    $('#contact').appear();

    $('#home').on('appear', () => {
        $('.site-header .menu-option').removeClass('active');
        $('.site-header .menu-option.home').addClass('active');
    })

    $('#services').on('appear', () => {
        $('.site-header .menu-option').removeClass('active');
        $('.site-header .menu-option.services').addClass('active');
    })

    $('#work').on('appear', () => {
        $('.site-header .menu-option').removeClass('active');
        $('.site-header .menu-option.work').addClass('active');
    })

    $('#contact').on('appear', () => {
        $('.site-header .menu-option').removeClass('active');
        $('.site-header .menu-option.contact').addClass('active');
    })
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function serviceRemoveAnimation() {
    for (i = 0; i < 6; i++) {
        await sleep(1000);
        $($('.service-grid-item')[i]).removeClass('fadeInUpShort');
    }
}