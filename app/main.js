var vendor = [
    'jquery',
    'bootstrap-loader/extractStyles',
];
var global = [
    'assets/header/header',
    'assets/global-nav/global-nav',
    'assets/footer/footer',
    'node_modules/aos/dist/aos',
    'assets/theme/sections'
];
var homePage = [
    'node_modules/slick-carousel/slick/slick',
    'assets/carousel/carousel',
    'assets/carousel-modal/carousel-modal',
    'assets/collection-set/collection-set',
    'assets/nearby/nearby',
];
var galleryPage = [
    'assets/subheader/subheader',
    'node_modules/slick-carousel/slick/slick',
    'assets/breadcrumbs/breadcrumbs',
    'assets/gallery/gallery',
    'node_modules/mixitup/dist/mixitup',
    'assets/testimonials/testimonials',
];
module.exports = {
    'vendor' : vendor,
    'global' : global,
    'home-page': homePage,
    'gallery-page': galleryPage,
};
