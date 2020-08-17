(function(){
    const buyButton = $('[name="buy"]');
    const setAdded = $('.set-added');
    const priceItem = $('.price__item');

    priceItem.click(function(e){
        let target = e.target;
        console.log();

        let quantityText = $('.freeauto__quantity');
        let quantityInModal = $(this).find($('[data-set="quantity"]')).text();

        if (target.classList.contains('btn__buy')){
            setAdded.addClass('set-added-active');
            quantityText.text(quantityInModal);
        }

        // button in section
        $('#set-remove').css('display', 'none');

        // кнопки в правой части меняют стили

        $('[name="placement1"]').addClass('btn__set-added').attr('data-target', '#placementNow');
        $('[name="placement2"]').addClass('btn__set-added').attr('data-target', '#placementSet');
    });

    $('.banner__cross').click(function(){
        setAdded.removeClass('set-added-active');
    });
       
})();