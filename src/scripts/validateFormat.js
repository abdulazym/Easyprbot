
//blocks
const advertisment1 = $('#advertisment-1');
const advertisment2 = $('#advertisment-2');
const advertisment3 = $('#advertisment-3');

const btnSave = $('.btn__save');

//radios
const radiosFirst = advertisment1.find($('[name="format"]'));
const radiosWho = advertisment1.find($('[name="who"]'));

//selects
const selectDurationValid =  advertisment1.find($('[name="duration"]'));
const selectMonthValid =  advertisment1.find($('[name="monthses"]'));

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
    const input = advertisment1.find($('[name="advert-price"]'));

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
    const textarea = advertisment1.find($('[name="conditions"]'));

    if(textarea.val() === ''){   
        textarea.addClass('error');
        return false;
    }
    else{
        textarea.removeClass('error');
        return true;
    }
}

function validateCheckbox(){
    btnSave.click(function(){

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
        }else{
            console.log('bad');
            errorText.text(errorTextContent);
            errorText.css('color', '#FF0000');
        }
    });
};



validateCheckbox();