$("#home .container").css('height', 'calc(' + (window.innerHeight - $('.site-header .header-container')[0].scrollHeight) + 'px')

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

$(document).ready(() => {
    $('#scroll-prompt').on('click', () => {
        $('html, body').animate({
            scrollTop: $("#services").offset().top,
            easing: 'easeout'
        }, 1000);
    })

    window.addEventListener('scroll', (e) => {
        if ($(window).scrollTop() > 0) {
            $('.site-header').addClass('active');
        } else {
            $('.site-header').removeClass('active');
        }
        
        setTimeout(() => {
            if ($('#services .section-header').hasClass('go')) {
                setTimeout(() => {
                    serviceRemoveAnimation();
                }, 300);
            }
        }, 300);
    });

    // Project roulette
    $('#project-detail-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#project-roulette',
        verticalSwiping: true
    });

    $('#project-roulette').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#project-detail-carousel',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        nextArrow: '.roulette-next',
        prevArrow: '.roulette-previous'
    });

    // View detail
    $('#work .view-detail-button').click((e) => {
        $('#project-detail').addClass('active');
    })

    $('#project-detail .exit-button').click(() => {
        $('#project-detail').removeClass('active');
    })
});

// Internal

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function serviceRemoveAnimation() {
    for (i = 0; i < 6; i++) {
        await sleep(1000);
        $($('.service-grid-item')[i]).removeClass('fadeInUpShort');
    }
}