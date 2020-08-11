
let selectTime = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item--time');
    let timeDropdown = document.querySelector('.time__dropdown');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let itemValue = this.value,
            select = this.closest('.select--time'),
            currentText = select.querySelector('.select__current--time');
            
        currentText.innerText = itemValue;
    }

};

let selectDays = function(){
    let selectItem = document.querySelectorAll('.select__item--days');

    selectItem.forEach(item => {
        item.addEventListener('click', selectChooseDays)
    });

    function selectChooseDays() {
        let text = this.innerText,
            select = this.closest('.select--days'),
            currentDay = select.querySelector('.select__current--days');
    
        currentDay.innerText = text;
    }
}

selectTime();
selectDays();