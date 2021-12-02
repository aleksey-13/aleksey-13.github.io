$(function(){
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
    })
})