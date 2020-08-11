    $('.btn__continue').click(function(){
        const item = $('.select__current--days');
        const block = $('.select__header--days');
        const errorText = $('.error__text');
        const itemTime = $('.select__current--time');
        const blockTime = $('.select__header--time');
        // const itemText = item.text();
        // const textDays = ;
        // const textTime = "Время";

        if(!item.text() === "День недели" || !itemTime.text() === "Время"){
            block.removeClass('error');
            blockTime.removeClass('error');
            errorText.text('');
        }
        else {
            block.addClass('error');
            blockTime.addClass('error');
            errorText.text("Заполните поля, чтобы продолжить");
        }
    });