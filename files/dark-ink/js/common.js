$(function(){
    //hide preloader
    $('.preloader').fadeOut();

    //animation burger line
    var headerBurger = $('.header__burger'),
        headerMenu = $('.header__nav_wrap');

    headerBurger.on('click', function(){
        $(this).toggleClass('open');
        headerMenu.toggleClass('slide');

    });

    //nav drop link
    var dropButton = $('.drop__button'),
        navWrap = $('.header__nav_wrap');

    dropButton.on('click',function(){
        var dataDrop = $(this).attr('data-drop');
        $('.' + dataDrop).slideToggle(300);

        $(this).toggleClass('rotate');
        // navWrap.toggleClass('overflow');
    });

    //nav bar fixed
    var body = $('html, body');
    var navBar = $('.header__navBar');
	$(window).on('scroll', function() {
		if (body.scrollTop() >= 20) {
            headerMenu.removeClass('slide');
            headerBurger.removeClass('open');
            navBar.addClass('header__navBar_fixed');
		}else{
            navBar.removeClass('header__navBar_fixed');
            headerMenu.removeClass('slide');
            headerBurger.removeClass('open');
        }
    });
    
    //google maps
    google.maps.event.addDomListener(window, 'load', initMap);
    function initMap() {
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 17,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(55.8610992, -4.254366), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.8610992, -4.254366),
            map: map
        });
    }

    //slider products
    function gallery() {
        $('.gallery__slider').slick({
        infinite: false,
        slidesToShow: 3,
        variableWidth: true,
        responsive: [ {
            breakpoint: 876,
            settings: {
            slidesToShow: 2,
            variableWidth: true
            }
        }, {
            breakpoint: 479,
            settings: {
            slidesToShow: 1,
            variableWidth: true
            }
        }]
        });
    };

    //slider brands
    function team() {
        $('.ourStaff__team').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        variableWidth: true,
        responsive: [{
            breakpoint: 876,
            settings: {
            slidesToShow: 2,
            variableWidth: true
            }
        }, {
            breakpoint: 639,
            settings: {
            slidesToShow: 1,
            variableWidth: true
            }
        }]
        });
    };
    team();
    gallery();
    $(window).resize(function() {
        var $windowWidth = $(window).width();
        if ($windowWidth < 877) {
        team();
        gallery();
        }
    });

    //used the parallax effect to the 2nd block
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    //function parallax effect
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        var img_1 = $('.salon__image_1');
        var img_2 = $('.salon__image_2');
        if(scrolled <= 700){
            img_1.css('transform','translateY('+(0-(scrolled*0.05))+'px)');
            img_2.css('transform','translateY('+(0+(scrolled*0.05))+'px)');
        }
    };


    //scroll top
    var html = $('html');
    var btnUp = $('.scrollTop');
    var whatWeDoImg = $('.whatWeDo__img');
    var whatWeDoTitle = $('.whatWeDo__title');
    var callbackImg = $('.callback__img');
    var callbackTitle = $('.callback__title');

    $(window).on('scroll', function() {
        //show buttonUp
		if (html.scrollTop() > 500) {
			btnUp.fadeIn();
		} else {
			btnUp.fadeOut();
        };
        
        //show img block
        if (html.scrollTop() >= whatWeDoTitle.offset().top - 500 && $(window).width() > 1024) {
			whatWeDoImg.fadeIn(1000);
        }
        if (html.scrollTop() >= callbackTitle.offset().top - 500 && $(window).width() > 1024){
			callbackImg.fadeIn(1000);
		};
    });
    
    btnUp.on('click', function(){
        html.animate({
            scrollTop: 0
        }, 500);
    });

    //form validate
    var form = $('.form__wrap');
    var label = $('.form__label');
    var input = $('.form__input');
    var err = $('.form__error');

    form.on('click', 'label', function(){
        $(this).addClass('form__label_active');
    });
    input.on('blur', function() {
        var attr = $(this).attr('data-err');
        if(!$(this).val()){
            $(this).css('border', '1px solid #f13f3f');
            err.eq(attr).css('display', 'block');
        }else{
            $(this).css('border', '1px solid #a1a1a1');
            err.eq(attr).css('display', 'none');
        }
        for(var i = 0; i < input.length; i++){
            if(!input.eq(i).val()){
                label.eq(i).removeClass('form__label_active');
            }
        }
    });
});