require('./carousel.scss');
require('../../images/carousel/1.jpg');
require('../../images/carousel/2.jpg');
require('../../images/carousel/3.jpg');
require('../../documentation/carousel/test.pdf');
require('../../documentation/carousel/test.msds');

$('.hero-carousel .carousel-container').slick({
    fade: true,
    nextArrow: '<a class="carousel-control-next carousel-control slick-next slick-arrow" role="button"> <i class="fa fa-angle-right carousel-control-next-icon"></i> <span class="sr-only">Next</span> </a>',
    prevArrow: '<a class="carousel-control-prev carousel-control slick-prev slick-arrow" role="button"> <i class="fa fa-angle-left carousel-control-prev-icon"></i> <span class="sr-only">Prev</span> </a>',
});
