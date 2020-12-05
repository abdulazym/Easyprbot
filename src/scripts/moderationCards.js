(function(){

    function cardsChanger(btnForward, btnBack){
        btnForward.click(function(e){
            $(this).closest('li.format__item-active').next('.format__item').addClass('format__item-active');
            $(this).closest('li.format__item-active').next().prev('.format__item').removeClass('format__item-active');
            // $('li.format__item-active').next('.format__item').addClass('format__item-active');
            // $('li.format__item-active').prev('.format__item').removeClass('format__item-active');
        });

        btnBack.click(function(e){
            $(this).closest('li.format__item-active').prev('.format__item').addClass('format__item-active');
            $(this).closest('li.format__item-active').removeClass('format__item-active');
        });
    } 

    cardsChanger($('.continue'), $('.moderation__arrow'));
})();