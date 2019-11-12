$(function(){
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