'use strict';

const showMenuBtn = document.querySelector('.show-menu');
const dropDownMenu = document.getElementById('dropdown');

const toggleMenu = () => {
    if (dropDownMenu.classList.contains('d-none')) {
        dropDownMenu.classList.remove('d-none');
        dropDownMenu.classList.add('d-block');
    } else {
        dropDownMenu.classList.remove('d-block');
        dropDownMenu.classList.add('d-none');
    }
}

showMenuBtn.addEventListener('click', toggleMenu);