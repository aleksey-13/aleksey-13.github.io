
$(document).ready(function () {
    var navItem = $('.navigation-item-wrap');

    $('.fourth-screen-tabs').slick({
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        fade: true,

        infinite: false,
        draggable: false,
        swipe: false
    })
    $(navItem).click(function () {
        var navItemIndex = $(this).index();
        $('.fourth-screen-tabs').slick('slickGoTo', navItemIndex)
        $(navItem).removeClass('navigation-item-wrap--active');
        $(this).addClass('navigation-item-wrap--active');
    })
    $('input[name="Phone"]').mask("+380 (99)-999-99-99");

    // $('.fotorama').fotorama({
    //     allowfullscreen: true,
    //     thumbborderwidth: 0,
    //     minheight: 500,
    //     minwidth: '100%',
    //     navwidth: '100%',
    //     thumbwidth: 230,
    //     thumbmargin: 15,

    //     thumbheight: 160,
    //     transition: 'crossfade',
    //     spinner: {
    //         lines: 13,
    //         color: 'rgba(0, 0, 0, .75)'
    //     },
    //     ratio: 16 / 9

    // });
    $('.project-block-wrap').slick({
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        infinite: false,
        draggable: false,
        swipe: false
    });

    var currentSlide = $('.project-block-wrap').slick('slickCurrentSlide');

    $('.project-block-wrap').on('afterChange', function (event, slick, currentSlide) {

        var number = $('.project-block-wrap').slick('getSlick').currentSlide + 1;

         $(".project-nav__count__current").text(number);
    });

    $('.project-nav__count__current')[0].innerHTML = currentSlide + 1;

    var slidesCount = $('.project-block-wrap').slick('getSlick').slideCount;

    if (slidesCount < 10) {
        $('.project-nav__count__total')[0].innerHTML = '0' + slidesCount;
    } else {
        $('.project-nav__count__total')[0].innerHTML = +slidesCount;
    }

    $('.project-nav__arrow--right').click(function () {
        $('.project-block-wrap').slick("slickNext");
    })
    $('.project-nav__arrow--left').click(function () {
        $('.project-block-wrap').slick("slickPrev");
    });

    (function () {
        var $frame  = $('#overflow');

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            scrollBy: 1,
            mouseDragging: 1,
            touchDragging: 1,
            swingSpeed: 0.2,
            scrollBar: $('.hsscrollbar'),
            dragHandle: 1,
            clickBar: 1,
            elasticBounds: 1,
            speed: 600,
            startAt: 0,
        });

    }());
});


$(".consult").on('click', function(event) {
    event.preventDefault();
   $("#modal-recall").fadeIn();
   $('body,html').addClass('stop');
});

$(".btn-down").on('click', function(event) {
    event.preventDefault();
   $("#modal-price").fadeIn();
   $('body,html').addClass('stop');
});

$('.close-modal').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.overlay').fadeOut();
    $('body,html').removeClass('stop');
    if($(this).hasClass('close-video')){
        $('.modal-video iframe').remove();
    }
});

$('.test-scroll').on('click', function(event) {
    event.preventDefault();
    var elem = $('.test');
    var top = elem.offset().top ;
    $('body,html').animate({scrollTop: top}, 400);
});

$('.offer-block-left-inner-download__look').on('click', function(event) {
    event.preventDefault();
    var elem = $('.sixth-screen');
    var top = elem.offset().top ;
    $('body,html').animate({scrollTop: top}, 400);
});




var idVideo;

function playYou() {
    $(".modal-video").append('<iframe></iframe>');
    var iframe = $(".modal-video").find('iframe');

    var my_video = document.getElementsByClassName("modal-video")[0];
    var my_video = my_video.getElementsByTagName("iframe")[0].contentWindow;
    $('html').addClass('stop');
    $('#modal-video').fadeIn();
    if ($(this).data('play') != null) {
        idVideo = $(this).data("play");
    }
    var iframe_url = "https://www.youtube.com/embed/" + idVideo + "?enablejsapi=1&autoplay=1&autohide=1&rel=0";

    if ($(this).attr("data-params")) iframe_url += '&' + $(this).attr("data-params");
    
    iframe.attr({
            src: iframe_url,
            frameborder: '0',
            allowfullscreen: 'allowfullscreen'
        })
        .css({
            width: '100%',
            height: '100%'
        });
    
}


// клики
$('.project-block-info-table__row__right__video__shadow').on('click', playYou);



// $(".project-block__gallery").each(function(index, el) {

//   var $obgMain = $(this).find('.slider-top-proj');
//   var $obgNav = $(this).find('.slider-nav-proj');
//    $obgMain.slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       asNavFor: $obgNav,
//       swipe: false,
//       lazyLoad: 'ondemand',
//   });
//    $obgNav.slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       arrows: false,
//       asNavFor: $obgMain,
//       focusOnSelect: true,
//       lazyLoad: 'ondemand',
//       responsive: [
//           {
//             breakpoint: 576,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1
//             }
//           }
//         ]
//   });

//   var relValue = index;
//   $(this).find(".item-fancy").attr({
//     "rel": "objects"+relValue,
//   });

// });

$(".project-block__gallery").each(function(index, el) {

  var $obgMain = $(this).find('.slider-top-proj');
  var $obgNav = $(this).find('.slider-nav-proj');
   $obgMain.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: $obgNav,
      swipe: false,
      lazyLoad: 'ondemand',
  });
   $obgNav.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: $obgMain,
      focusOnSelect: true,
      lazyLoad: 'ondemand',
      responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
  });

  var relValue = index;
  $(this).find(".item-fancy").attr({
    "rel": "objects"+relValue,
  });

});

$(".item-fancy").fancybox({
  openEffect: 'elastic',
  loseEffect: 'elastic',
  centerOnScroll: true,
  topRatio: 0.5,
  helpers: {
      title: {
          type: 'inside'
      }
  }
});

$(".project-block-info-table__row__right__desc__text").each(function(index, el) {
    $(this).addClass('hideText');
});
$('.project-block-info-table__row__right__desc__link').on('click', function(event) {
    event.preventDefault();
    if($(this).prev().hasClass('hideText')){
        $(this).prev().removeClass('hideText');
        $(this).text('Свернуть');
    }else{
        $(this).prev().addClass('hideText');
        $(this).text('Показать полностью');
    }
});



var month = ["Января", "Февраля", "Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];

var now = new Date();
var dayWeek = now.getMonth();

var day = now.getDate();
var mounth = now.getMonth() + 1;
if(mounth === 13){
  mounth = now.getMonth() + 1;
}
if(mounth < 10){
  mounth = '0'+ mounth ;
}

if(day < 10){
  day = '0'+ day ;
}

$('.data-m').text(now.getDate() +"." + mounth +"."+ now.getFullYear());
$('.date-num').text("Обновлено: " + day + " "+ month[now.getMonth()]);



$(document).ready(function($) {
  $(".section-title").not('.title-first').each(anime);
  $(".test-item__desc").not('.subtitle-first').each(anime);
});
function anime(){
  var offsetTop = $(this).offset().top - $(window).height();
  var thisTitle = $(this);
  $(window).scroll(function(event) {
    if($(document).scrollTop() > offsetTop ){
      thisTitle.addClass('fade_in');
    }
  });
}


 $('.overlay').mouseup(function(e){
    var container = $('.modal-wrap');
    if (container.has(e.target).length === 0 && !container.is(e.target)){
        $('html').removeClass('stop');
        $('.overlay').fadeOut();
    }
});

var scene_1 = document.getElementById('scene-1');
        var parallax1 = new Parallax(scene_1);
var scene_2 = document.getElementById('scene-2');
        var parallax2 = new Parallax(scene_2);
var scene_3 = document.getElementById('scene-3');
        var parallax3 = new Parallax(scene_3);
var scene_4 = document.getElementById('scene-4');
        var parallax4 = new Parallax(scene_4);
var scene_5 = document.getElementById('scene-5');
        var parallax5 = new Parallax(scene_5);