(function(){

    function filters(btn, filtersBlock, activeFilter, blocksRemove){
        btn.click(function(e){
            filtersBlock.addClass(activeFilter);
            blocksRemove.css('display', 'none');
            const paid = document.querySelector('.filters__set-added');
            paid.classList.add('set-added-active');

            $('.section-wrap-reviews').css('padding-top', ('175px'));
        });
    }



    filters($('.btn__filters'), $('.filters__column--wrap--opac'), 'filters__column--wrap--opac-active', $('.paid__header'));

})();