const nameText = document.querySelector('#name');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    nameText.style.marginBottom = value * 2 + 'px';
})