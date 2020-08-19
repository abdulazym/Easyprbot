
function showText(button, descBlock){
    const buttonShow = document.querySelectorAll(button);

    buttonShow.forEach(item => {
        item.addEventListener('click', function(e){
            const desc = e.target.nextElementSibling;
            desc.style.display = "block";
        });
    });
}

showText('.payment__open--desc', '.payment__opac--mobile');