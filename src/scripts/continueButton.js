(function(){

    function buttonToggle(btn){
        // if ($('li.format__item').index() == 2){
        //     btn.css('display', 'none');
        // };
        // console.log($('.format__item').eq(2));

        // if($('.format__item').eq(2)){
        //     btn.css('display', 'none');
        // }else{
        //     btn.css('display', 'none');
        // }
        // if ($('.format__item.format__item--withoutbut').hasClass('format__item-active')){
        //     btn.css('display', 'none');
        // }
        if ($(window).width() < 768){
            if($('.format__item-active').hasClass('format__item--first')){
                $('.btn--back--reviews').css('display', 'none');     
            }
            if ($('li.format__item-active').index() == 0){
                $('.statistics__buttons').addClass('statistics__buttons--abs');
            }
        }
        
        // if($('li.format__item-active').index() > 0){
        //     $('.statistics__buttons').removeClass('statistics__buttons--abs');
        // }
        // if(!$('.format__item').hasClass('format__item--first')){
        //     $('.btn--back--reviews').css('display', 'block');
        // }
    }
    buttonToggle($('.btn--next--step'));
})();