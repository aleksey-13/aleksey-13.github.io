$(function () {
    'use strict';

    $('a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate(
            {
                scrollTop:$(target).offset().top
            },
            800
        );
    });

    var offset = $('#bottom_header').offset();

    $(window).scroll(function () {

        if($(window).scrollTop() > offset.top) {
            $('#bottom_header').addClass('fixedNav');
        } else {
            $('#bottom_header').removeClass('fixedNav');
        }
    });
    if(window.innerWidth >= 700) {
        $('#slide').slick({
            
            
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }else {
        $('#slide').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

    $('#view_all_galery').click(function () {
        let content = '<div class="gallery_line main_flex__nowrap flex__jcontent_between"><div class="box_img_gallery"><img src="img/1.jpg" alt=""></div><div class="box_img_gallery"><img src="img/2.jpg" alt=""></div></div><div class="name_gallery">Marina Palms / <span class="blue">North Miami Beach, FL 33162</span></div>';
        $('#gallery_box').append(content);
        $(this).remove();
    });

    $('#modal_box, #black_fill').hide();
    $('#call').click(function () {
        $('#modal_box, #black_fill').show();
    });
    $('#close_modal, #black_fill').click(function () {
        $('#modal_box, #black_fill').hide();
    });
});
