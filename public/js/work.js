projects =  [
                {
                    "id": 1,
                    "name": "Cillgold",
                    "tags": [
                        "Front-end Dev",
                        "Responsive Design"
                    ],
                    "desc": "Cillgold is a company specialized in branding services, logo & UX/UI design. Cillgold focuses on creative and practical concepts too boost their clients' standing in the market.",
                    "images": [
                        "/img/work/cillgold/1.jpg",
                        "/img/work/cillgold/2.jpg",
                        "/img/work/cillgold/3.jpg",
                        "/img/work/cillgold/4.jpg",
                        "/img/work/cillgold/5.jpg",
                        "/img/work/cillgold/6.jpg"
                    ],
                    "featuredImg": [
                        "/img/work/cillgold/1.jpg",
                        "/img/work/cillgold/2.jpg"
                    ],
                    "rouletteImg": "/img/work/cillgold/roulette.jpg"
                },
                {
                    "id": 2,
                    "name": "Sneakers",
                    "tags": [
                        "Front-end Dev",
                        "Responsive Design"
                    ],
                    "desc": "Snearker is an online store (trading market) that allows users to buy & sell their own sneakers.",
                    "images": [
                        "/img/work/sneakers/featured-01.jpg",
                        "/img/work/sneakers/featured-02.jpg",
                        "/img/work/sneakers/1.jpg"
                    ],
                    "featuredImg": [
                        "/img/work/sneakers/featured-01.jpg",
                        "/img/work/sneakers/featured-02.jpg"
                    ],
                    "rouletteImg": "/img/work/sneakers/roulette.jpg"
                },
                {
                    "id": 3,
                    "name": "The Honest Shirts",
                    "tags": [
                        "E-commerce",
                        "Shopify",
                        "UX-UI Design",
                        "Responsive Design"
                    ],
                    "desc": "The Honest Shirts is an online T-shirt store that mainly focus on funny & sarcastic graphic.",
                    "images": [
                        "/img/work/thehonestshirts/featured-01.jpg",
                        "/img/work/thehonestshirts/featured-02.jpg",
                        "/img/work/thehonestshirts/1.jpg"
                    ],
                    "featuredImg": [
                        "/img/work/thehonestshirts/featured-01.jpg",
                        "/img/work/thehonestshirts/featured-02.jpg"
                    ],
                    "rouletteImg": "/img/work/thehonestshirts/roulette.jpg"
                },
                {
                    "id": 4,
                    "name": "NPLand",
                    "tags": [
                        "Wordpress",
                        "UX-UI Design",
                        "Responsive Design"
                    ],
                    "desc": "NPLand Real Estate online site, made possible by Wordpress.",
                    "images": [
                        "/img/work/muacanho/featured-01.jpg",
                        "/img/work/muacanho/featured-02.jpg",
                        "/img/work/muacanho/1.jpg"
                    ],
                    "featuredImg": [
                        "/img/work/muacanho/featured-01.jpg",
                        "/img/work/muacanho/featured-02.jpg"
                    ],
                    "rouletteImg": "/img/work/muacanho/roulette.jpg"
                },
                {
                    "id": 5,
                    "name": "The Jewel Space",
                    "tags": [
                        "Wix",
                        "E-commerce",
                        "UX-UI Design",
                        "Logo Design"
                    ],
                    "desc": "An online jewelry store that aims at providing customers with the best personalized rings & necklaces for every occasion.",
                    "images": [
                        "/img/work/tjs/featured01.jpg",
                        "/img/work/tjs/featured02.jpg",
                        "/img/work/tjs/1.jpg",
                        "/img/work/tjs/2.jpg",
                    ],
                    "featuredImg": [
                        "/img/work/tjs/featured01.jpg",
                        "/img/work/tjs/featured02.jpg"
                    ],
                    "rouletteImg": "/img/work/tjs/roulette.jpg"
                },
                {
                    "id": 6,
                    "name": "Personal Portfolio 01",
                    "tags": [
                        "UX-UI Design",
                        "Logo Design",
                        "Portfolio"
                    ],
                    "desc": "A personal portfolio created in coorporation with the original author. The site adopts a book-style simulation and minimal design.",
                    "images": [
                        "/img/work/pp/featured01.gif",
                        "/img/work/pp/featured02.png",
                        "/img/work/pp/1.png",
                        "/img/work/pp/2.png",
                        "/img/work/pp/3.png"
                    ],
                    "featuredImg": [
                        "/img/work/pp/featured01.gif",
                        "/img/work/pp/featured02.png"
                    ],
                    "rouletteImg": "/img/work/pp/1.png"
                }
            ];

// Init projects
function workInit() {
    for (i = 0; i < projects.length; i++) {
        var item = '<div class="carousel-item" project-id="' + i + '"><div class="text-data"><div class="project-name">' + projects[i].name + '</div><div class="project-tags">';

        for (j = 0; j < projects[i].tags.length; j++) {
            item += '<span>' + projects[i].tags[j] + '</span>';
        }

        item += '</div><div class="project-desc">' + projects[i].desc + '</div></div><div class="project-imgs">';

        for (j = 0; j < projects[i].featuredImg.length; j++) {
            item += '<span><img src="' + projects[i].featuredImg[j] + '"></span>';
        }

        item += '</div></div>';
        $('#project-detail-carousel').append(item);

        var rouletteItem = '<div class="roulette-item" roulette-id="' + i + '"><img src="' + projects[i].rouletteImg + '"></div>';
        $('#project-roulette').append(rouletteItem);
    }
};

workInit();

$(document).ready(function() {
    var mq = window.matchMedia("(max-width: 767px)");

    if (mq.matches) {
        // Project roulette
        $('#project-detail-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '#project-roulette',
            verticalSwiping: false
        });

        $('#project-roulette').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#project-detail-carousel',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            vertical: false,
            verticalSwiping: false,
            infinite: true,
            nextArrow: '.roulette-next',
            prevArrow: '.roulette-previous'
        });
    }
    else {
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
    }

    // View detail
    $('#work .view-detail-button').click((e) => {
        loadDetail();
        $('#project-detail').addClass('active');
    })

    $('#project-detail .exit-button').click(() => {
        $('#project-detail').removeClass('active');
    })
});

function loadDetail() {
    var id = $('#project-roulette .slick-center').attr('roulette-id');
    var content = '';

    for (i = 0; i < projects[id].images.length; i++) {
       content += '<img src="' + projects[id].images[i] + '">';    
    }

    $('#project-detail .project-detail-container').html(content);
};