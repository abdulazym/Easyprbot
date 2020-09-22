(function(){

    function verificate(btn, none, block){
        btn.click(function(e){
            $(this).parent().addClass(none);
            $(this).parent().next().addClass(block);
            $(this).parent().prev().text('Основной аккаунт верифицирован');
        });
    };

    function verificatePr(btn, none){
        btn.click(function(e){
            $(this).closest('.verification__pr').addClass(none);
            console.log($(this).parent().next());
            $(this).closest('.verification__pr').next().removeClass('verification__none');
            $(this).parent().parent().prev().text('PR-аккаунт верифицирован');
            $('.btn--next--step').css('display', 'block');
        });
    };

    verificate($('.btn__allow'), 'verification__none', 'verificated-active');
    verificatePr($('.btn__check'), 'verification__pr-active');
    
    // if(verificate()== true && verificatePr()==true){
    //     $('.btn--next--step').css('display', 'block');
    // }
})();