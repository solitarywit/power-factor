require('./gallery.scss');

var selectedFilters = {};

var controls = $('.controls .btn');
var ALL_FILTER = 'card';

controls.each(function (index, btn) {
    var filterClass = $(btn).data('filter');
    selectedFilters[filterClass] = $(btn).hasClass('active');

    $(btn).on('click', function () {
        if (filterClass !== ALL_FILTER){
            $('[data-filter="'+ALL_FILTER+'"]').removeClass('active');
            selectedFilters[ALL_FILTER] = false;
            selectedFilters[filterClass] = !$(this).hasClass('active');

            $.each(selectedFilters, function (filterClass, isActive) {
                var card = $('.' + filterClass);
                if (card && isActive) {
                    $(card).show();
                } else {
                    $(card).hide();
                }
            });

        } else {
            controls.removeClass('active');
            $.each(selectedFilters, function (key, value) {
                selectedFilters[key] = false;
            });
            selectedFilters[ALL_FILTER] = true;
            $(this).addClass('active');
            $('.' + ALL_FILTER).show();
            return false;
        }
    });
});