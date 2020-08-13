    $('.btn__continue').click(function(){
        const item = $('.select__current--days');
        const block = $('.select__header--days');
        const errorText = $('.error__text');
        const itemTime = $('.select__current--time');
        const blockTime = $('.select__header--time');
        const btn = $('.btn__continue');
        const purchase = $('.purchase');

        const onlyTime = $('#onlytime');
        const otBlockTime = onlyTime.find('.select__header--time');
        const otErrorText = onlyTime.find('.error__text');
        const dayTime = $('#daytime');
        const dtBlockDay = dayTime.find('.select__header--days');
        const dtBlockTime = dayTime.find('.select__header--time');
        const dtErrorText = dayTime.find('.error__text');
        const manyDayTime = $('#manydaytime');
        const mdBlockDay = manyDayTime.find('.select__header--days');
        const mdBlockTime = manyDayTime.find('.select__header--time');
        const mdErrorText = manyDayTime.find('.error__text');
        // const manyDayTimeJS = document.querySelectorAll('.')
        // const manyDayTimeJS = document.getElementById('manydaytime');

        // const itemText = item.text();
        // const textDays = ;
        // const textTime = "Время";
        // const currentDay = manyDayTimeJS.querySelectorAll('.select__current--days');
        // console.log(currentDay);
        // console.log(currentDay.hasClass('select__current--days-active'));
        // const validDay = currentDay.each(function(){
        //     currentDay.hasClass('select__current--days-active');
        // });
        // if(currentDay.every(el=>el.classList.contains('select__current--days-active'))){
        //     console.log("good");
        // }
        // console.log(manyDayTime.find('.select__current--days').hasClass('select__current--days-active'));
        console.log($('.select__current--days.select__current--days-active'));
        if($('.select__current--days.select__current--days-active').length>=3){
            console.log("well");
        }
        if(manyDayTime.find('.select__current--days.select__current--days-active').length>=3 && manyDayTime.find('.select__current--time.select__current--time-active').length>=3){
            if(!onlyTime.find('.select__current--time').hasClass('select__current--time-active')){
                otBlockTime.addClass('error');
                otErrorText.text('Заполните поля, чтобы продолжить');
            }
            if(onlyTime.find('.select__current--time').hasClass('select__current--time-active')){
                otBlockTime.removeClass('error');
                otErrorText.text('');
            }
            if(!dayTime.find('.select__current--days').hasClass('select__current--days-active') && !dayTime.find('.select__current--time').hasClass('select__current--time-active')){
                dtBlockTime.addClass('error');
                dtBlockDay.addClass('error');
                dtErrorText.text('Заполните поля, чтобы продолжить');
            }
            if(dayTime.find('.select__current--days').hasClass('select__current--days-active') && dayTime.find('.select__current--time').hasClass('select__current--time-active')){
                dtBlockTime.removeClass('error');
                dtBlockDay.removeClass('error');
                dtErrorText.text('');
            }
            mdBlockDay.removeClass('error');
            mdBlockTime.removeClass('error');
            mdErrorText.text('');
            
            btn.addClass('btn__continue-active');
            purchase.addClass('purchase-active');
        }

        else if(dayTime.find('.select__current--days').hasClass('select__current--days-active') && dayTime.find('.select__current--time').hasClass('select__current--time-active')){
            // block.removeClass('error');
            // blockTime.removeClass('error');
            if(!onlyTime.find('.select__current--time').hasClass('select__current--time-active')){
                otBlockTime.addClass('error');
                otErrorText.text('Заполните поля, чтобы продолжить');
            }
            if(onlyTime.find('.select__current--time').hasClass('select__current--time-active')){
                otBlockTime.removeClass('error');
                otErrorText.text('');
            }
            dtBlockDay.removeClass('error');
            dtBlockTime.removeClass('error');
            dtErrorText.text('');
            
            btn.addClass('btn__continue-active');
            purchase.addClass('purchase-active');
            console.log('hell');
        }

        else if(onlyTime.find('.select__current--time').hasClass('select__current--time-active')){
            // block.removeClass('error');
            // blockTime.removeClass('error');
            if(!dayTime.find('.select__current--days').hasClass('select__current--days-active') || !dayTime.find('.select__current--time').hasClass('select__current--time-active')){
                dtBlockTime.addClass('error');
                dtBlockDay.addClass('error');
                dtErrorText.text('Заполните поля, чтобы продолжить');
            }
            otBlockTime.removeClass('error');
            otErrorText.text('');
            
            btn.addClass('btn__continue-active');
            purchase.addClass('purchase-active');
        }

        else {
            block.addClass('error');
            blockTime.addClass('error');
            errorText.text("Заполните поля, чтобы продолжить");

        }
    });

    // item.text() === "День недели" || itemTime.text() === "Время"
    //manyDayTime.find('.select__current--days').hasClass('select__current--days-active') && manyDayTime.find('.select__current--time').hasClass('select__current--time-active'