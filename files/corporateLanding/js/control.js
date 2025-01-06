$(function () {
    'use strict';

    $('a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate(
            {
                scrollTop: $(target).offset().top
            },
            800
        );
    });

    var offset = $('#bottom_header').offset();

    $(window).scroll(function () {

        if($(window).scrollTop() > offset.top+1) {
            $('#bottom_header').addClass('fixedNav');
        } else {
            $('#bottom_header').removeClass('fixedNav');
        }
    });
});