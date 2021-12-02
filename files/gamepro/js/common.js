//side panel in the slider
var tabS = $('.tab-s');
tabS.on('click', function() {
	$(this).addClass('active'); //add active class
	tabS.not($(this)).removeClass('active'); // remove the active class from the remaining items

	var dt = $(this).attr('data-tab'); //when you click get the data value
	var di = $('.tab-info[data-info=' + dt + ']'); //get the desired element by data value

	di.css('display', 'block'); //show the desired text
	$('.tab-info').not(di).css('display', 'none'); // the rest of the text hide
	$('.slider').css('background-image', 'url(img/photo-slider-' + dt + '.jpg)'); //change background pictures
});

//opening and closing the left sidebar navigation
$('.navigation img').on('click', function() {
	$('.navigation ul').slideToggle(400);
});

//opening and closing the second sidebar navigation
$('.best-articles img').on('click', function() {
	$('.recon').slideToggle(400);
});
