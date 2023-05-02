const showButton = document.querySelector('.brands-container__button');
const showButtonText = document.querySelector('.show-button__text');
const cards = document.querySelector('.brands-container');

showButton.addEventListener('click', viewSlider);


export function viewSlider() {
  if (cards.classList.contains('active')) {
      cards.classList.remove('active');
      showButtonText.textContent = 'Показать всё';
  } else {
      cards.classList.add('active')
      showButtonText.textContent = 'Скрыть';
  }
}

const tehnics = document.querySelector('.tehnics__button');
const tehnicsContainer = document.querySelector('.tehnics__container')

tehnics.addEventListener('click', viewSliderTehnics);

export function viewSliderTehnics() {
  if (tehnicsContainer.classList.contains('active')) {
    tehnicsContainer.classList.remove('active');
      tehnics.childNodes[3].textContent = 'Показать всё';
  } else {
    tehnicsContainer.classList.add('active')
    tehnics.childNodes[3].textContent = 'Скрыть';
  }
}