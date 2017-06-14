require('./gallery.scss');
require('../../images/gallery/image.png');

var controls = $('.controls .btn');
var ALL_FILTER = 'all';
var ACTIVE_CLASS = 'active';
var DATA_FILTER = 'filter';

controls.each(function (index, btn) {
    $(btn).on('click', function () {
        controls.removeClass(ACTIVE_CLASS);
        $(this).addClass(ACTIVE_CLASS);
        $('.' + ALL_FILTER).addClass('hide');
        var self = this;
        $('.' + $(self).data(DATA_FILTER)).toggleClass('hide');
        //window.setTimeout(function(){
        //    $('.' + $(self).data(DATA_FILTER)).toggleClass('hide');
        //},600);

        return false;
    });
});