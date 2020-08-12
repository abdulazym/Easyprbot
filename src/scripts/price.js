(function(){

    const item = document.querySelectorAll('.price__item');

    item.forEach(item =>{
        item.addEventListener('click', function(e){
            let listItem = e.currentTarget;
            const active = listItem.querySelector('.price__item.price__item-active');

            //закрытие
            if(item.classList.contains('price__item-active')){
                item.classList.remove('price__item-active');
            }else{
                item.classList.add('price__item-active');
            }

        })
    });


})();
