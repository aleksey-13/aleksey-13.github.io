

var number = 0;
var maxNumber = $(".test-slider__item").length;
var $element = $(".test-slider__item").find("input, select, textarea");
var btnPrev = $(".prev-test");
var btnNext = $('.next-test');
var testTextNum = 7;
var testText = $('.test__img-count');

var isValid;
var dataBlock;
var activeSlede = [];
$(".test-item__number-furst").text(number + 1);
$(".test-item__number-all").text("/ " + (maxNumber - 1));
testText.text(testTextNum +' питань');
for(var i = 0; i< maxNumber; i++){
  activeSlede[i] = false;
}

$element.on('change input', function (e) {
  var value = $(this).val().trim();
  isValid = value !== "";
  btnActive(!isValid);
  $(".text-subbtn").hide();
});

function btnActive(isValid) {
  if(number === 0){
    btnPrev.prop('disabled', 'false');
    btnNext.prop('disabled', isValid);
  }else{
    btnPrev.prop('disabled', false);
    if(activeSlede[number] === true || isValid === false){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }
    
  }

}

// sidebar


  function progress(num){
    var testBlock = ".test-block-" + num ;
    var testCircle= ".test-circle-" + (num + 1) ;
    $(testBlock).addClass('test-block-active');
    $(testCircle).addClass('test-circle-active');
  }
  progress(0);


  
// btn

function btnClick() {

  btnPrev.on('click', function(event) {
    event.preventDefault();
    --number;
    $(".test-slider__item").hide();
    $(".test-slider__item").eq(number).fadeIn();
    btnActive(!isValid);

    $(".test-item__number-furst").text(number + 1);
    // уцкукцук

      if(testTextNum != 1){
      testTextNum += 1;
      if(testTextNum < 5 && testTextNum > 1){
        testText.text( testTextNum + ' вопросa');
      }else if(testTextNum < 2){
        testText.text( testTextNum + ' вопрос');
      }else{
        testText.text( testTextNum + ' вопросов');
      }
      // $('.test__img-title').show();
      // $('#present_img').attr({
      //     "src": 'img/present_big.png',
      //   });
    }else{
      $('#present_img').attr({
        "src": 'img/q_present.png',
      });
      testText.text('Ваш подарок');
      $('.test__img-title').hide();
      $('.test__img-price').hide();
    }
    
    // 2123213123213213312323
    progress(number);
    animateTop ();
    if(btnNext.prop('disabled')){
      $(".text-subbtn").show();
    }else{
      $(".text-subbtn").hide();
    }
  });

  btnNext.on('click', function(event) {
    event.preventDefault();
    activeSlede[number] = true;

    ++number;
    // уцкукцук

      if(testTextNum != 1){
      testTextNum -= 1;
      if(testTextNum < 5 && testTextNum > 1){
        testText.text( testTextNum + ' вопросa');
      }else if(testTextNum < 2){
        testText.text( testTextNum + ' вопрос');
      }else{
        testText.text( testTextNum + ' вопросов');
      }
      $('.test__img-title').show();
      $('#present_img').attr({
          "src": 'img/present_big.png',
        });
    }else{
      // $('#present_img').attr({
      //   "src": 'img/q_present.png',
      // });
      // testText.text('Ваш подарок');
      // $('.test__img-title').hide();
    }
    
    // 2123213123213213312323

    $(".test-slider__item").hide();
    $(".test-slider__item").eq(number).fadeIn(1000);
    btnActive(!isValid);
    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }

    if(number === maxNumber - 1){
      $('.test__btn-block').hide();
      (".text-subbtn").hide();
      // var presents;
      // var present = $(".test-slider__item").eq(maxNumber - 2).find('input').attr('checked');
      // $(".test-slider__item").eq(maxNumber - 2).find('input').each(function(index, el) {
      //   if($(this).prop("checked") === true){
      //     presents = $(this).val().trim().toLowerCase();
      //   }
      // });

      // if(presents === 'подарок 1'){
      //   testText.text('Ваш подарок КНИГА');
      //   $(".test__img-price").text("Цена: 2500 р");
      //   $('#present_img').attr({
      //     "src": 'img/present_big.png',
      //   });
      // }else  if(presents === 'подарок 2'){
      //   testText.text('Ваш подарок КНИГА 2');
      //   $(".test__img-price").text("Цена: 2300 р");
      //   $('#present_img').attr({
      //     "src": 'img/present_big.png',
      //   });
      // }else  if(presents === 'подарок 3'){
      //   testText.text('Ваш подарок КНИГА 3');
      //   $(".test__img-price").text("Цена: 2100 р");
      //   $('#present_img').attr({
      //     "src": 'img/present_big.png',
      //   });
      // }
    }

     if(number === maxNumber - 2){
        $(".test__img-title").hide();
        testText.text('Ваш подарок');
        $('#present_img').attr({
          "src": 'img/q_present.png',
        });
     }
    $(".test-item__number-furst").text(number + 1);

    progress(number);

    animateTop ();

    if(btnNext.prop('disabled')){
      $(".text-subbtn").show();
    }else{
      $(".text-subbtn").hide();
    }
    
  });

}
btnClick();
var presents;
$(".test-presents-slide").find('input').on('input change', function() {
    if($(this).val().trim() !== ""){
    //   presents = $(this).val().trim().toLowerCase(); customRadio__img
      presents = $(this).parents('.test-slider__elem').index();
    }
    $('.test__img-price').show();
    if(presents === 0){
      testText.text('Клінінг після ремонту');
    //   $(".test__img-price").text("Цена: 2500 р");
      $('#present_img').attr({
        "src": 'img/item7_1.jpg',
      });
    }else  if(presents === 1){
      testText.text('Фотозйомка приміщення після ремонту');
    //   $(".test__img-price").text("Цена: 2300 р");
      $('#present_img').attr({
        "src": 'img/item7_2.jpg',
      });
    }else  if(presents === 2){
      testText.text('Консультація керівника');
    //   $(".test__img-price").text("Цена: 2100 р");
      $('#present_img').attr({
        "src": 'img/item7_3.jpg',
      });
    }
});



function animateTop (){
  var elem = $('.test-item__desc');
  var top = elem.offset().top - 15;
  $('body,html').animate({scrollTop: top}, 400);
}

// slider
    $( "#number-slider" ).slider({
        animate: "slow",
        range: "min",    
        value: 70,
        max: 1000,
        slide : function(event, ui) {    
              $("#send-result-polzunok").val(ui.value); 
              $(".text-subbtn").hide();  
          }
    });
    $("#send-result-polzunok").val($("#number-slider").slider("value"));
    var crdVal;
    $("#send-result-polzunok").on('keyup', function(event) {
      crdVal = $('#send-result-polzunok').val().trim();

      if(parseInt(crdVal) > 1000){
        $('#send-result-polzunok').val(1000);
      }

      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
      }
      $( "#number-slider" ).slider( "value", $(this).val() );
    });

    $("#send-result-polzunok").on("change , input", function(){
      if(crdVal === ''){
        $('#send-result-polzunok').val();
      }
    });

    $("#no").on('change input', function() {
      if($(this).prop('checked')){
        $( "#number-slider" ).slider( "value", 0 );
        $( "#number-slider" ).slider( "disable" );
        $("#send-result-polzunok").val("0").attr({'disabled':'disabled'});
      }else{
        $( "#number-slider" ).slider( "enable" );
        $("#send-result-polzunok").removeAttr('disabled');
      }
    });


  $( "#number-slider" ).slider({
      change: function( event, ui ) {
        btnNext.prop('disabled', false); }
  });





// $('form').submit(function(event) {

//       event.preventDefault();

//       var action = "mailer/smart.php";
//       var msg = $(this).serialize();
//       var formThis = $(this);

//       $.ajax({
//           type: "POST",
//           url: action,
//           data: msg,
//           success: function(data) {


//               if(formThis.find('input[type="hidden"]').val() === "price" ){
//                 var link = document.createElement('a');
//                 link.setAttribute('href', "docs/price.docx");
//                 link.setAttribute('target', "_blank");
//                 link.setAttribute('download','price');

//                   if(navigator.userAgent.indexOf('Mac') > 0){
                    
//                     window.location = "docs/price.docx"
//                   }else{
//                     simulate( link, "click");

//                   }

//                 $(".overlay").fadeOut();
//                 $('body,html').addClass('stop');
//                 $("#modal-down").fadeIn();

//               }else if(formThis.find('input[type="hidden"]').val() === "predlojenie" ){
//                 var link = document.createElement('a');
//                 link.setAttribute('href', "docs/predlojenie.docx");
//                 link.setAttribute('target', "_blank");
//                 link.setAttribute('download','predlojenie');

//                 if(navigator.userAgent.indexOf('Mac') > 0){
//                     window.location = "docs/predlojenie.docx";
//                   }else{
//                     simulate( link, "click");
//                   }

//                 $('body,html').addClass('stop');
//                 $(".overlay").fadeOut();
//                 $("#modal-down").fadeIn();

//               }else if(formThis.find('input[type="hidden"]').val() === "rykovod"){
//                 $(".overlay").fadeOut();
//                 $('html').addClass('stop');
//                 $("#modal-thanks").fadeIn();
//               }else if(formThis.find('input[type="hidden"]').val() === "zamer"){
//                 $(".overlay").fadeOut();
//                 $('html').addClass('stop');
//                 $("#modal-thanks").fadeIn();
//               }else if(formThis.find('input[type="hidden"]').val() === "priglaszamer"){
//                 $("#modal-thanks").fadeIn();
//                 $('html').addClass('stop');
//               }else if(formThis.find('input[type="hidden"]').val() === "test"){
//                 $("#modal-thanks").fadeIn();
//                 $('html').addClass('stop');
//                 formThis.find('input').attr({
//                   'disabled': 'true',
//                 });
//                 formThis.find('button').attr({
//                   'disabled': 'true',
//                 });
//                 formThis.find('.input-label').css({'background': 'transparent'});
//                 $('.test-prev , .test-next').attr({
//                   'disabled': 'true',
//                 });
//               }else{
//                 $(".overlay").fadeOut();
//                 $('body,html').addClass('stop');
//                 $("#modal-thanks").fadeIn();
//               }

//               $('form').trigger('reset');


//           },
//           error: function(xhr, str) {

//               alert('Произошла ошибка, попробуйте немного позже');
//           }
//       });
//   });

// ---------------------

function simulate(element, eventName)
{
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}
// -----------------------