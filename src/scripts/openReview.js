(function(){

    function openReview(){
        $('.openfull').click(function(e){
            const review = $(this).parent().prev();

            $(this).parent().prev().toggleClass('mobile--hide');
            
            if(!review.hasClass('mobile--hide')){
                $(this).text('Свернуть отзыв');
            }else{
                $(this).text('Раскрыть отзыв полностью');
            }
        });
    };
    
    openReview();
})();