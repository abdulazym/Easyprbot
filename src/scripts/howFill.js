(function(){

    function howFill(){
        $('.textbluemobile').click(function(e){
            $('.statistics__how--none').addClass('statistics__how');
            $('.statistics__format--header--mobile').addClass('statistics__none');
            $('.statistics__format--title').addClass('statistics__none');
            $(this).addClass('statistics__none');
        });

        $('.remove-add').click(function(e){
            $('.statistics__how--none').removeClass('statistics__how');
            $('.statistics__format--header--mobile').removeClass('statistics__none');
            $('.statistics__format--title').removeClass('statistics__none');
            $('.textbluemobile').removeClass('statistics__none');
        });
    };

    howFill();
})();