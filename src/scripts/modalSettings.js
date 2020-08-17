(function(){
    let text = $('.freeauto__text');

    console.log($('.placeholder'));
     
    $('.save-button').click(function(){
        let time = $('[data-time="time"]').text();
        let selectText = $('.date').val();
        text.text(selectText + ' сентября ' + time);
        $('.modal-placed--text--bold').text(selectText + ' августа ' + time);
    });

})();