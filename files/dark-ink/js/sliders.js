$(function(){
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

});

