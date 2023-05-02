const wrapper = document.querySelector('.wrapper');
const headerContainer = document.querySelector('.header__container');
const asideLogo = document.querySelector('.aside__logo');
const buttonRequestDesktop = document.querySelector('.main__button');
const buttonRequestMobile = document.querySelector('.menu-button__mobile');
const orderCall = document.querySelector('.order-call');
const buttonFeedbackMobile = document.querySelector('.menu-button__laptop');
const buttonFeedbackDesktop = document.querySelector('.aside-contact__list');
const feedback = document.querySelector('.feedback');
const buttonViewText = document.querySelector('.main-description');
const showButtonDescription = document.querySelector('.main-description__button');



headerContainer.childNodes[1].addEventListener('click', viewBurger);
buttonRequestDesktop.childNodes[1].addEventListener('click', viewRequestModal);
buttonRequestMobile.childNodes[1].addEventListener('click', viewRequestModal);
buttonFeedbackMobile.childNodes[1].addEventListener('click', viewFeedbackModal);
buttonFeedbackDesktop.childNodes[1].addEventListener('click', viewFeedbackModal);
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
  if (wrapper.classList.contains('active')) {
    asideLogo.childNodes[1].addEventListener('click', () => {
      wrapper.classList.remove('active')
    })
  }
}

function viewRequestModal () {
  wrapper.classList.add('request');
  if (wrapper.classList.contains('request')) {
    orderCall.childNodes[1].addEventListener('click', () => {
      wrapper.classList.remove('request');
    })
  }
}

function viewFeedbackModal () {
  wrapper.classList.add('feedback');
  if (wrapper.classList.contains('feedback')) {
    feedback.childNodes[1].addEventListener('click', () => {
      wrapper.classList.remove('feedback');
    })
  }
}


