(function(){

    function bannerRemove(){
        $('.banner__cross').click(function(e){
            $(this).parent().parent().addClass('banner__none');
        });
    };

    bannerRemove();
})();