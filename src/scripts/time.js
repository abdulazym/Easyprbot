
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
        currentText.classList.add("select__current--time-active");
    }

};

let selectDays = function(){
    let selectItem = document.querySelectorAll('.select__item--days');

    selectItem.forEach(item => {
        item.addEventListener('click', selectChooseDays);
    });

    function selectChooseDays() {
        let text = this.innerText,
            select = this.closest('.select--days'),
            currentDay = select.querySelector('.select__current--days');
    
        currentDay.innerText = text;
        currentDay.classList.add("select__current--days-active");
    }
}

let selectDuration = function(){
    let selectItem = document.querySelectorAll('.select__item--duration');

    selectItem.forEach(item => {
        item.addEventListener('click', selectChooseDuration);
    });

    function selectChooseDuration() {
        let text = this.innerText,
            select = this.closest('.select__duration'),
            currentDay = select.querySelector('.select__current--duration');
    
        currentDay.innerText = text;
        select.classList.remove('is-active');

        currentDay.classList.add("select__current--duration-active");
    }
}

selectTime();
selectDays();
selectDuration();