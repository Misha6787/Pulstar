const menu = () => {
    let modalMenuBlock = document.querySelector('.modal__menu-block'),
        menuBurger = document.querySelector('.menu__burger'),
        modalMenuClose = document.querySelector('.modal__menu-close');

    const openMenuModal = item => {
        modalMenuBlock.style.display = 'flex';
        modalMenuBlock.classList.remove('fadeOutDown');
    }

    const closeMenuModal = () => {
        modalMenuBlock.classList.add('fadeOutDown');
        setTimeout(() => {
            modalMenuBlock.style.display = 'none';
        }, 500)
    }

    menuBurger.addEventListener('click', openMenuModal);
    modalMenuClose.addEventListener('click', closeMenuModal);
}

menu()