$(function(){
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
});