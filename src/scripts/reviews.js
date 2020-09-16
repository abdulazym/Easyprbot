(function(){

    function reviewRemove(btn, status){
        btn.click(function(e){
            $(this).prev().addClass('table__review--removed');
            // status.each(function(index, element){
            //     $(this).text('Опубликован без текста');
            //     $(this).addClass('green--text');
            // });
            const changeText = $(this).prev().prev().find('.red--text');
            changeText.text('Опубликован без текста');
            changeText.addClass('green--text');
        });
    };

    reviewRemove($('.btn__remove--review'), $('.red--text'));
})();