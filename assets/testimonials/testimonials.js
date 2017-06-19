require('./testimonials.scss');
require('../../images/testimonials/testimonial-author.jpg');

$('.testimonials-container').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    centerPadding: 32,
    responsive: [
        {
            breakpoint: 970,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});