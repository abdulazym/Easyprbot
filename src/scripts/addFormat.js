(function(){

    function addFormat(blockAdd, btnAdd, btnRemove, blockRemove){

        btnAdd.click(function(){
            $(this).before(blockAdd.clone())
        });

        $(document).on('click', '.btn--remove--format', function() {
            $(this).parent().parent().parent().remove();
        });

        $('.statistics__advertisment').on('click', function(e) {
            // console.log(btnRemove);
            // console.log(e.target);
            if (e.target === btnRemove){
                e.preventDefault();
                $(this).find(blockRemove).toggleClass('advertisment__remove-active');
            }

            // $(this).parent().parent().parent().next().next().toggleClass('advertisment__remove-active');
        });
    };

    addFormat($('.statistics__advertisment').clone(), $('.btn__addformat'), document.querySelector('.statistics__format--remove'), $('.advertisment__remove'));

})();