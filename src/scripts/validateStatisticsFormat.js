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

    function statisticsTabs(){
        $('.btn--next--step').click(function(){
            // const tab = $('.format__item');
            // const tab = document.querySelector('.format__item');
            // const tabs = document.querySelector('.format__list').children;
            // const active = 'format__item-active';
            // if (tab.classList.contains(active)){
            //     tab.classList.remove(active);
            // }else{
            //     for (let i = 0; i < tabs.length; i++) {
            //         tabs[i].classList.remove(active);
            //     }
    
            //     tab.classList.add(active);
            //     // const closeElem = e.target.classList.contains('hamburger--open');
    
            //     // if (closeElem){
            //     //     item.classList.remove(active);
            //     // }
            // }

            // tab.removeClass('format__item-active');
            // tab.next().addClass('format__item-active');
            // tab.each(function(index, element){
            //     $(this).removeClass('format__item-active');
            //     $(this).next().addClass('format__item-active');
            //     console.log($(this).next());
            //     // $(this).prev().removeClass('format__item-active');
            // });

            // tab.each(function(index, element){
            //     if ($(this).hasClass('format__item-active')){
            //         $(this).removeClass('format__item-active');
            //     }else{
            //         tab.removeClass('format__item-active');
            //     }

            //     $(this).addClass('format__item-active');
            // });

            // const tab = document.querySelector('.format__item');
            // tab.classList.remove('format__item-active');
            // tab.nextElementSibling.classList.add('format__item-active');
        //     const tabs = $('.format__item');
        //     // tabs.removeClass('format__item-active');
        //     // tabs.next().addClass('format__item-active');
        //     var total = tabs.length;
        //     tabs.each(function(index) {
        //         if (index === 1) {
        //             window.location.href='./reviews.html';
        //         }
        // });

        $('li.format__item-active').next('.format__item').addClass('format__item-active');
		$('li.format__item-active').prev('.format__item').removeClass('format__item-active');
        })   
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

                statisticsTabs();
            }else{
                console.log('bad');
                errorText.text(errorTextContent);
                errorText.css('color', '#FF0000');
            }
        });
    };
    
    
    
    validateCheckbox();

})();