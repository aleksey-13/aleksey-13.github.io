$(function(){
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
    }
});