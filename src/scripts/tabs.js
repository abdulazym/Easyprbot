

(function(){
    const tabs = document.querySelectorAll('.set-custom__form');
    const buttons = document.querySelectorAll('.set-custom__btn');

function change (target, index, buttons, tabs,  buttonActive, tabActive){

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('set-custom__btn-active');
        tabs[i].classList.remove('set-custom__form-active');
    }
    target.classList.add(buttonActive);
    tabs[index].classList.add(tabActive);
}


    for (let index = 0; index < buttons.length; index++) {
        const buttonElem = buttons[index];
        
        buttonElem.addEventListener('click', (e)=>{
            e.preventDefault();
            
            change(e.currentTarget, index, buttons, tabs, 'set-custom__btn-active', 'set-custom__form-active');
        });
    }

})();