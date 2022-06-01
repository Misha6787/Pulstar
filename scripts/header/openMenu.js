const menu = () => {
    let menuModalBlock = document.querySelector('.menu__modal-block'),
        menuBurger = document.querySelector('.menu__burger'),
        menuModalClose = document.querySelector('.menu__modal-close');

    const openMenuModal = item => {
        menuModalBlock.style.display = 'flex';
        menuModalBlock.classList.remove('fadeOutDown');
    }

    const closeMenuModal = () => {
        menuModalBlock.classList.add('fadeOutDown');
        setTimeout(() => {
            menuModalBlock.style.display = 'none';
        }, 500)
    }

    menuBurger.addEventListener('click', openMenuModal);
    menuModalClose.addEventListener('click', closeMenuModal);
}

menu()