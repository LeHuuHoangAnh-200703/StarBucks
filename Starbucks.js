function imgAnimate (anything) {
    document.querySelector('.starbucks').src = anything;
}

function colorCircle (colors) {
    let color = document.querySelector('.circle');
    color.style.backgroundColor = colors;
    let textColor = document.querySelector('.colorText');
    textColor.style.color = colors;
    let button = document.querySelector('.button');
    button.style.backgroundColor = colors;
    let icon = document.querySelector('.icon');
    icon.style.backgroundColor = colors;
}

function toggleMenu () {
    let toggleMenu = document.querySelector('.toggleMenu');
    toggleMenu.classList.toggle('active');
    let navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}