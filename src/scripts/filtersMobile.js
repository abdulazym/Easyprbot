
(function(){
const filters = $('.filters');
const filtersMobile = $('.filters__reviews--mobile');
const flitersWrap = $('.filters__window');
const filtersContainer = $('.container__filters');

function filtersMobileOpen(){
    $('.filters--mobile--open').click(function(e){
        filters.addClass('filters__reviews--mobile');
        filters.parent().addClass('filters__window');
        $('.container__reviews').addClass('container__filters');
    });

    filtersMobileClose($('.btn__back'));
};

function filtersMobileClose(closebtn){
    closebtn.click(function(e){
        filters.removeClass('filters__reviews--mobile');
        filters.parent().removeClass('filters__window');
        $('.container__reviews').removeClass('container__filters');
    });
};

    filtersMobileOpen();

})();