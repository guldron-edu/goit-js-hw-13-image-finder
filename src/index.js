import './css/style.css';
import './js/generateInterface';
import refs from './js/refs';
import apiService from './js/apiService';
import renderService from './js/renderService';
import openModal from './js/modalWindow';

refs.submitForm.addEventListener('submit', () => {
  event.preventDefault();
  fetchRequest();
});

refs.button.addEventListener(
  'click',
  renderService.moreResults.bind(renderService),
);

refs.gallery.addEventListener('click', openModal);

function fetchRequest() {
  refs.gallery.innerHTML = '';
  refs.button.classList.add('hide');
  apiService.search = refs.input.value;
  renderService.galleryLink = refs.gallery;

  apiService.getResult().then(array => renderService.showResult(array.hits));
}
