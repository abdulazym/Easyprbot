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
            // $('.section-wrap').css('padding-top', '30px');

            quantityText.text(quantityInModal);
            $('[data-settings="settings"]').html('<a href="./settings.html" class="freeauto__date--text--blue">настроить</a>')
        }

        // button in section
        $('#set-remove').css('display', 'none');

        // кнопки в правой части меняют стили

        $('[name="placement1"]').addClass('btn__set-added').attr('data-target', '#placementNow');
        $('[name="placement2"]').addClass('btn__set-added').attr('data-target', '#placementSet');
    });

    $('.banner__cross').click(function(){
        setAdded.removeClass('set-added-active');
        $('.section-wrap-reviews').css('padding-top', '105px');
        // $('.section-wrap').css('padding-top', '105px');
    });

    // $('.auto-placement__buttons--link').click(function(e){
    //     e.preventDefault();
    // })
       
})();