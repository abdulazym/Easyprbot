(function(){

const modalBtn1 = $('.remove-add');
const modalBtn2 = $('.remove-add-2');
const modalBtn3 = $('.remove-add-3');

const modalBlock1 = $('#advertisment__remove-1');
const modalBlock2 = $('#advertisment__remove-2');
const modalBlock3 = $('#advertisment__remove-3');

modalBtn1.click(function(e){
    e.preventDefault();

    modalBlock1.toggleClass('advertisment__remove-active');
});

modalBtn2.click(function(e){
    e.preventDefault();

    modalBlock2.toggleClass('advertisment__remove-active');
});

modalBtn3.click(function(e){
    e.preventDefault();

    modalBlock3.toggleClass('advertisment__remove-active');
});
})();