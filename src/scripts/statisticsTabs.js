(function(){
    const tabs = document.querySelectorAll('.moderation__tab--item');
    const buttons = document.querySelectorAll('.btn__tabs');

function change (target, index, buttons, tabs,  buttonActive, tabActive){

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('btn__tabs-active');
        tabs[i].classList.remove('moderation__tab-active');
    }
    target.classList.add(buttonActive);
    tabs[index].classList.add(tabActive);
}


    for (let index = 0; index < buttons.length; index++) {
        const buttonElem = buttons[index];
        
        buttonElem.addEventListener('click', (e)=>{
            e.preventDefault();
            
            change(e.currentTarget, index, buttons, tabs, 'btn__tabs-active', 'moderation__tab-active');
        });
    }

})();

