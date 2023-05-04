const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const headerContainer = document.querySelector('.header__container');
const asideLogo = document.querySelector('.aside__logo');
const orderCall = document.querySelector('.order-call');
const modalWindowLaptop = document.querySelector('.menu-button__laptop');
const modalWindowDesktop = document.querySelector('.aside-contact__list');
const feedback = document.querySelector('.feedback');
const buttonViewText = document.querySelector('.main-description');
const showButtonDescription = document.querySelector('.main-description__button');
const overlay = document.querySelector('.overlay');



headerContainer.childNodes[1].addEventListener('click', viewBurger);
modalWindowDesktop.childNodes[3].addEventListener('click', viewRequestModal);
modalWindowLaptop.childNodes[3].addEventListener('click', viewRequestModal);
modalWindowLaptop.childNodes[1].addEventListener('click', viewFeedbackModal);
modalWindowDesktop.childNodes[1].addEventListener('click', viewFeedbackModal);
buttonViewText.addEventListener('click', viewText);

function viewText () {
  buttonViewText.classList.toggle('active');
  showButtonDescription.textContent = 'Читать далее';
  if (buttonViewText.classList.contains('active')) {
    showButtonDescription.textContent = 'Скрыть всё';
  }
}
function viewBurger () {
  wrapper.classList.add('active');
  body.classList.add('lock');
  if (wrapper.classList.contains('active')) {
    asideLogo.childNodes[1].addEventListener('click', () => {
      wrapper.classList.remove('active')
      body.classList.remove('lock');
    })
  }
}

function viewRequestModal () {
  wrapper.classList.add('request');
  body.classList.add('lock');
  if (wrapper.classList.contains('request')) {
    orderCall.childNodes[1].addEventListener('click', () => {
      wrapper.classList.remove('request');
      body.classList.remove('lock');
    })
  }
}

function viewFeedbackModal () {
  wrapper.classList.add('feedback');
  body.classList.add('lock');
  if (wrapper.classList.contains('feedback')) {
    feedback.childNodes[1].addEventListener('click', () => {
      wrapper.classList.remove('feedback');
      body.classList.remove('lock');
    })
  }
}

overlay.addEventListener('click', () => {
  wrapper.classList.remove('active');
  wrapper.classList.remove('feedback');
  wrapper.classList.remove('request');
  body.classList.remove('lock');
})

document.body.addEventListener('keydown', (index) => {
  if (index.key === "Escape") {
    wrapper.classList.remove('active');
    wrapper.classList.remove('feedback');
    wrapper.classList.remove('request');
    body.classList.remove('lock');
  }
})


