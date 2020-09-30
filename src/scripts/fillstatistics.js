(function(){

    function openNewPage(blocks, btn){
        if ($('.format__item--first').hasClass('format__item-active')){
            $('.btn--back--reviews').text('Назад к отзывам');
        }else{
            $('.btn--back--reviews').text('Назад');
        }
        btn.click(function(e){
            var total = blocks.length;
            
            // blocks.each(function(index) {
            // // if (index === total - 1) {
            // //     window.location.href='./reviews.html';
            // //     }
            // // console.log(index);
            // });
            if (blocks.last().hasClass('format__item-active')){
                window.location.href='./statistics.html';
            }
        });
    };

    openNewPage($('.format__item'), $('.btn--next--step'));
})();