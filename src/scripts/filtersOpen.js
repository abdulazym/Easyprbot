(function(){

    function openFilters(btn, filters){
        btn.click(function(e){
            filters.addClass('filters__mobile--opened');
            $('body').css('overflow', 'hidden');
            
            // if (filters.hasClass('filters__mobile--opened')){
            //     closeFiters($('.filters__mobile--wrap'));
            // }
        });
    };
    $('.filters__cross').click(function(e){
        $('.filters__mobile').removeClass('filters__mobile--opened');
        $('body').css('overflow', 'visible');
    });
    openFilters($('.btn__mod--filters'), $('.filters__mobile'));
    // function closeFiters(filtersClose){
    //     openFilters($('.btn__mod--filters'), $('.filters__mobile'));
    //         $(document).click(function(e){
    //             if(!filtersClose.parent().hasClass('filters__mobile--opened')){
                    
    //                 return;
    //             } else{
    //                 if(!filtersClose.is(e.target) && filtersClose.has(e.target).length === 0){
    //                     filtersClose.parent().removeClass('filters__mobile--opened');
    //                     $('body').css('overflow', 'visible');
    //                 };
                    
    //             }
                
    //         });
    //     }
    
    // closeFiters($('.filters__mobile--wrap'));
})();