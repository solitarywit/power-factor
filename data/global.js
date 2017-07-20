var testimonials = require('./testimonials');
var carousel = require('./carousel');
var gallery = require('./gallery');
var header = require('./header');
var menu = require('./menu');
var nearby = require('./nearby');
var collection = require('./collection');
var footer = require('./footer');
var contact = require('./contact');

module.exports = {
    en: {
        heroCarousel: carousel.en,
        testimonials: testimonials.en,
        gallery: gallery.en,
        header: header.en,
        menu: menu.en,
        nearby: nearby.en,
        collection: collection.en,
        footer: footer.en,
        contact: contact.en,
    },
    ru: {
        heroCarousel: carousel.en,
        testimonials: testimonials.en,
        gallery: gallery.en,
        header: header.en,
        menu: menu.ru,
        nearby: nearby.en,
        collection: collection.en,
        footer: footer.en,
        contact: contact.en,
    }
};