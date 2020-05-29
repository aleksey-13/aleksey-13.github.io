$(function(){
    var prev = $('.prev'),
        next = $('.next'),
        popup = $('.popup'),
        gallery = $('.popup__gallery_wrap'),
        imgWrap = $('.popup__img_wrap'),
        img = $('.popup__img'),
        gallerySlider = $('.gallery__slider'),
        galleryImg = $('.gallery__img'),
        pages = $('.popup__pages'),
        close = $('.popup__close'),
        count = 0;

    pages.html((count + 1)+"/"+imgWrap.length);

    //generate min images
    (function generateMinImg(){
        var popupMinWrap = $('<div/>').addClass('popup__min_wrap');
        var popupMin = $('<div/>').addClass('popup__min');

        popupMinWrap.append(popupMin);
        $('.popup__bottomBar').append(popupMinWrap);

        for( var i = 0; i < img.length; i++){
            var src = img.eq(i).attr('src');
            galleryImg.eq(i).attr('data-tab', i);
            $('<span/>').attr('data-border', i)
                        .addClass('popup__minImg')
                        .css('background-image', 'url(' + src + ')')
                        .appendTo(popupMin);
        }

        minImg = $('.popup__minImg');
        minImg.eq(0).addClass('popup__minImg_active');
    }());
    
    function closed(){
        popup.fadeOut();
    }

    close.on('click', closed);
    //prev & next slide
    next.on('click', function(){
        slide(1);
    });

    prev.on('click', function(){
        slide(-1);
    });

    //go to min images
    minImg.on('click', function(){
        var attr = $(this).attr('data-border');
        minImg.eq(count).removeClass('popup__minImg_active');
        count = +attr;
        minImg.eq(count).addClass('popup__minImg_active');
        gallery.css('left', '-'+count*100+'vw');
        pages.html((count + 1)+"/"+imgWrap.length);
    });


    gallerySlider.on('click', function(e){
        var tar = $(e.target);
        if(tar.is('.gallery__img')){
            var attr = tar.attr('data-tab');
            minImg.eq(count).removeClass('popup__minImg_active');
            count = +attr;
            minImg.eq(count).addClass('popup__minImg_active');
            gallery.css('left', '-'+count*100+'vw');
            pages.html((count + 1)+"/"+imgWrap.length);
            popup.fadeIn();
        }
        
    });

    //function slide photos <- ->
    function slide(x){
        minImg.eq(count).removeClass('popup__minImg_active');
        count += x;
        if(count > imgWrap.length - 1){
            count = imgWrap.length - 1;
        }else if(count < 0){
            count = 0;
        };
        minImg.eq(count).addClass('popup__minImg_active');
        gallery.css('left', '-'+count*100+'vw');
        pages.html((count + 1)+"/"+imgWrap.length);
    }


    //swipe photos
    var touchstartX = 0;
    var touchendX = 0;
    var move = 0;
    var flag = false;

    //mouse events
    gallery.on('mousedown', function(e){
        e.preventDefault();
        gallery.css('transition', '0s');
        flag = true;
        touchstartX = e.screenX;
    });
    gallery.on('mouseup', function(e){
        up(e);
    });
    gallery.on('mouseleave', function(e){
        if(flag){
            up(e);
        }
    });
    gallery.on('mousemove', function(e){
        if(flag){
            move = +((touchstartX - e.screenX) / gallery.width()) * 100;
            if(touchstartX - e.screenX > 0){
                gallery.css('left', 'calc(-'+count*100+'vw - '+move+'vw');
            }else{
                gallery.css('left', 'calc(-'+count*100+'vw - '+move+'vw');
            }
        }
    });

    //touch events
    gallery.on('touchstart', function(e){
        e.preventDefault();
        gallery.css('transition', '0s');
        flag = true;
        touchstartX = e.touches[0].clientX;
    });

    gallery.on('touchend', function(e){
        flag = false;
        gallery.css('transition', '0.5s');
        touchendX = e.changedTouches[0].clientX;
        if (touchendX + 50 < touchstartX) {
            slide(1);
        }else if (touchendX > touchstartX + 50) {
            slide(-1);
        }
        gallery.css('left', '-'+count*100+'vw');
    });

    gallery.on('touchmove', function(e){
        touch = e.touches[0];

        move = +((touchstartX - touch.clientX) / gallery.width()) * 100;
        if(touchstartX - touch.clientX > 0){
            gallery.css('left', 'calc(-'+count*100+'vw - '+move+'vw');
        }else{
            gallery.css('left', 'calc(-'+count*100+'vw - '+move+'vw');
        }
    });


    function up(e){
        flag = false;
        gallery.css('transition', '0.5s');
        touchendX = e.screenX;
        if (touchendX + 50 < touchstartX) {
            slide(1);
        }else if (touchendX > touchstartX + 50) {
            slide(-1);
        }
        gallery.css('left', '-'+count*100+'vw');
    }

});