(function(){

    const btnSaveStatistics = $('.btn--next--step');
    const advertisment = $('.advertisment');

    // const btnSave = $('.btn__save');

    //radios
    const radiosFirst = advertisment.find($('[name="format"]'));
    const radiosWho = advertisment.find($('[name="who"]'));

    //selects
    const selectDurationValid =  advertisment.find($('[name="duration"]'));
    const selectMonthValid =  advertisment.find($('[name="monthses"]'));

    //wraps
    const radioWrapFormat = $('.radio__wrap--left');
    const radioWrapWho = $('.radio__wrap--right');

    let validator = true;

    // error text
    let errorText = $('.settings__warn');
    let errorTextContent = 'Заполните поля отмеченные красным';

    // changes saved
    let changesSaved = 'Изменения сохранены';

    function validateSelect(){
        let select = selectDurationValid.find('.select__header--duration');
    
        if(selectDurationValid.find('.select__current--duration').hasClass('select__current--duration-active')){
            select.removeClass('error');
            return true;
        }
        else{
            select.addClass('error');
            return false;
        }
    }
    
    function validateSelectMonth(){
        let select = selectMonthValid.find('.select__header--duration');
    
        if(selectMonthValid.find('.select__current--duration').hasClass('select__current--duration-active')){
            select.removeClass('error');
            return true;
        }
        else{
            select.addClass('error');
            return false;
        }
    }
    
    function validateInput(){
        const input = advertisment.find($('[name="advert-price"]'));
    
        if(input.val() === ''){   
            input.addClass('error');
            return false;
        }
        else{
            input.removeClass('error');
            return true;
        }
    }
    
    function validateTextarea(){
        const textarea = advertisment.find($('[name="conditions"]'));
        const textareaMobile = advertisment.find($('.statistics-settings__textarea'));
        console.log(textarea.val());
        console.log(textareaMobile.text());

        if ($(document).width() < '768'){
            if(textareaMobile.val() === ''){   
            textareaMobile.addClass('error');
            return false;
        }
        else{
            textareaMobile.removeClass('error');
            return true;
        }
        }

        if(textarea.val() === ''){   
            textarea.addClass('error');
            return false;
        }
        else{
            textarea.removeClass('error');
            return true;
        }

       
        // if(textareaMobile.val() === ''){   
        //     textareaMobile.addClass('error');
        //     return false;
        // }
        // else{
        //     textareaMobile.removeClass('error');
        //     return true;
        // }
    }
    
    function validateCheckbox(){
        btnSaveStatistics.click(function(){
    
            //first block of radios
            let flag = false;
    
            radiosFirst.each(function(index, value){
                let checkboxStatus = $(this).prop('checked'); 
    
                if (checkboxStatus == true) {
                    flag = checkboxStatus;
                  }
            });
    
            if (flag == false) {
                radioWrapFormat.addClass('error');
              } else {
                radioWrapFormat.removeClass('error');
              }
    
            // second block of radios 
            let flagSecond = false;
    
            radiosWho.each(function(index, value){
                let checkboxStatus = $(this).prop('checked'); 
    
                if (checkboxStatus == true) {
                    flagSecond = checkboxStatus;
                  }
            });
    
            if (flagSecond == false) {
                radioWrapWho.addClass('error');
              } else {
                radioWrapWho.removeClass('error');
              }
            
            // valid select
            validateSelect();
            validateSelectMonth();
            
            // valid input
            validateInput();
            // valid textarea
            validateTextarea();
    
            // valiid all inputs
            if (validateSelect() === true &&
                validateSelectMonth() === true &&
                validateInput() === true &&
                validateTextarea() === true && 
                flag === true && 
                flagSecond === true){

                console.log("good");
                errorText.text(changesSaved);
                errorText.css('color', '#00D463');

                validator = true;

                return true;
                // statisticsTabs();
            }else{
                console.log('bad');
                errorText.text(errorTextContent);
                errorText.css('color', '#FF0000');

                validator = false;

                return false;
            }
        });
    };

    validateCheckbox();
    
    function statisticsTabs(){
        $('.btn--next--step').click(function(){

        if ($('li.format__item-active').index() == 0) {
            console.log(validateCheckbox());
			if (validator === false){
                return;
            }else{
                $('li.format__item-active').next('.format__item').addClass('format__item-active');
                $('li.format__item-active').prev('.format__item').removeClass('format__item-active');
            }
		}else{
            // $('.btn--back--reviews').css('display', 'block');
            $('li.format__item-active').next('.format__item').addClass('format__item-active');
            $('li.format__item-active').prev('.format__item').removeClass('format__item-active');
            }

        if ($('li.format__item-active').index() == 1) {
            $('.btn--back--reviews').text('Назад');
        }

            if ($('li.format__item-active').index() == 2) {
                $('li.format__item-active').addClass('format__item--withoutbut');
                if ($('.format__item.format__item--withoutbut').hasClass('format__item-active')){
                    $('.btn--next--step').css('display', 'none');
                }
                if ($('.verificated').hasClass('verificated-active')){
                    $('.btn--next--step').css('display', 'block');
                }   
            }
            if ($('li.format__item-active').index() == 1){
                $('.btn--back--reviews').css('display', 'block');
            }
            $('.statistics__buttons').removeClass('statistics__buttons--abs');

        });

        $('.btn--back--reviews').on('click', function () {
            if ($('li.format__item-active').index() == 0) {
                /* без действий */
                window.location.href='./reviews.html';
                $(this).text('Назад к отзывам');
            } else {
                $(this).text('Назад');
                $('li.format__item-active').prev('.format__item').addClass('format__item-active');
                $('li.format__item-active').next('.format__item').removeClass('format__item-active');
            }
    
        });

        
    }
    
    statisticsTabs();
})();