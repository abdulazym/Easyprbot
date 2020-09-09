(function(){


    function showFilters(btn){
        
        btn.click(function(e){
            const paidFilter = $('.paid__filter');

            paidFilter.toggleClass('paid__filter-open');

            if (paidFilter.hasClass('paid__filter-open')){
                btn.text('Скрыть 🠕');
            }

            if (!paidFilter.hasClass('paid__filter-open')){
                btn.text('Показать 🠗');
            }
        });
    };

    showFilters($('.show--filters'));
})();