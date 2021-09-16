//прелоадер
$(function(){
	$('#preloader').fadeOut('slow'); //hide preloader

	//поиск
	$('.search__close').on('click', function() {
		$('.search').removeClass('search-active'); //clicking on X close the search input
	});
	$('.button-second').on('click', function() {
		$('.search').addClass('search-active'); //clicking on the search icon open the search input
	});

	//burger menu
	$('.drop__menu').click(function() {
		$('.header__nav').toggleClass('mobile_active'); //opening and closing menu
	});
	$(document).on('click', function(event) {
		if ($(event.target).closest(".drop__menu, .header__nav").length) return;
		$('.header__nav').removeClass('mobile_active'); //if clicked outside the menu block,then closes it
	});

	//drop down links
	$('.drop_button').click(function() {
		var dataDrop = $(this).attr('data-drop'); //when you click get the data value
		$('.' + dataDrop).slideToggle(0); //open or close a menu category
	});

	//drop down links footer
	$('.open_links').click(function() {
		var dataDrop = $(this).attr('data-drop'); //when you click get the data value
		$('.' + dataDrop).toggleClass('footer_active'); //open or close a menu category
	});

	//main slider
	$('.slider').slick({
		dots: true,
		arrows: false,
		infinite: false
	});

	//products slider
	function products() {
		$('.products').slick({
			slidesToShow: 4,
			infinite: false,
			variableWidth: true,
			responsive: [{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 479,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	};

	//brand slider
	function brands() {
		$('.brands').slick({
			responsive: [{
				breakpoint: 5000,
				settings: "unslick"
			}, {
				breakpoint: 1023,
				settings: {
					slidesToShow: 5,
					variableWidth: true
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					variableWidth: true
				}
			}, {
				breakpoint: 479,
				settings: {
					slidesToShow: 3,
					variableWidth: true
				}
			}]
		});
	}
	brands(); 
	products(); 

	$(window).resize(function() {
		var $windowWidth = $(window).width();
		if ($windowWidth < 1024) { //when the window width is less than 1024 update the functions of brand sliders and products
			brands();
			products();
		}
	});
});

