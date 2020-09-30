(function(){


    function showFilters(btn){
        
        btn.click(function(e){
            const paidFilter = $('.paid__filter');

            paidFilter.toggleClass('paid__filter-open');
            $('.reviews__buttons--wrap').toggleClass('reviews__button--mobile');
            $('.btn--addreview--1').toggleClass('btn--addreview--fz');
            $('.btn--addreview').toggleClass('btn--addreview--width');

            if (paidFilter.hasClass('paid__filter-open')){
                btn.text('Скрыть 🠕');
            }

            if (!paidFilter.hasClass('paid__filter-open')){
                btn.text('Показать 🠗');
            }
        });
    };

    function showReviews(btn){
        
        btn.click(function(e){
            const paidFilter = $(this).closest('.table__item').next().find('.reviews__closed');

            paidFilter.toggleClass('reviews__closed-active');

            if (paidFilter.hasClass('reviews__closed-active')){
                $(this).find('.text-change').text('Свернуть отзывы');
            }

            if (!paidFilter.hasClass('reviews__closed-active')){
                $(this).find('.text-change').text('Ещё 1028 отзывов');
            }
        });
    };

    showFilters($('.show--filters'));
    showReviews($('.btn__reviews'));
})();