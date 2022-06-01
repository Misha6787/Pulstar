const gallery = () => {
    let imageGallery = document.querySelector('.footer__gallery'),
        modalGallery = document.querySelector('.modal__gallery'),
        modalGalleryImg = document.querySelector('.modal__gallery-img'),
        modalGalleryContent = document.querySelector('.modal__gallery-content'),
        modalGalleryClose = document.querySelector('.modal__gallery-close');

    const openGalleryModal = item => {
        const target = item.target;
        if (target.classList.contains('footer__gallery-item')) {
            const imageSrc = target.querySelector('img').getAttribute('src')
            modalGalleryImg.setAttribute('src', imageSrc);
            modalGallery.style.display = 'flex';
            modalGalleryContent.classList.remove('fadeOutDown');
        }

    }

    const closeGalleryModal = item => {
        const target = item.target;
        if (target.classList.contains('modal__gallery') ||
            target.classList.contains('modal__gallery-close')) {
            modalGalleryContent.classList.add('fadeOutDown');
            setTimeout(() => {
                modalGallery.style.display = 'none';
            }, 500)
        }
    }

    imageGallery.addEventListener('click', openGalleryModal);
    modalGallery.addEventListener('click', closeGalleryModal);
}

gallery()