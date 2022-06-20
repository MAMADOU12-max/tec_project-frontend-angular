$(document).ready(function(){
    $('.references-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        arrows: false,
        autoplay: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slide_products').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        nextArrow: '<i class="fa fa-arrow-left fa-2x mean_background text-white p-1 px-2 rounded-pill positionned_arrow"></i>',
        prevArrow: '<i class="fa fa-arrow-right fa-2x mean_background text-white p-1 px-2 rounded-pill positionned_arrow"></i>',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: false 
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });

    $('.actu-news_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: false,
        nextArrow: '<i class="fa fa-arrow-left fa-2x mean_background text-white p-1 px-2 rounded-pill positionned_arrow"></i>',
        prevArrow: '<i class="fa fa-arrow-right fa-2x mean_background text-white p-1 px-2 rounded-pill positionned_arrow"></i>',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false 
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px',
                    arrows: true
                }
            }
        ]
    });

});