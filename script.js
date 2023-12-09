let faq = document.getElementsByClassName('faq');
let desc = document.getElementsByClassName('desc');
let plus = document.getElementsByClassName('plus');
let minus = document.getElementsByClassName('minus');

for (let i = 0; i < faq.length; i++) {
    const element = faq[i];
    element.addEventListener('click', () => {
        desc[i].classList.toggle('d-none');
        plus[i].classList.toggle('d-none');
        minus[i].classList.toggle('d-none');
    })
}