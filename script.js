window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.catalog'),
    button = document.querySelector('.mobile-buttons__catalog');

    button.addEventListener('click', () => {
        menu.classList.toggle('catalog_show');
    });
});