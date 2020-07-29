import './css/style.css';
import './js/generateInterface';
import refs from './js/refs';
import apiService from './js/apiService';
import renderService from './js/renderService';
import openModal from './js/modalWindow';

refs.submitForm.addEventListener('submit', () => {
  event.preventDefault();
  getResult();
  refs.button.classList.remove('hide');
});

// buttonRef.addEventListener('click', moreResults);
refs.button.addEventListener(
  'click',
  renderService.moreResults.bind(renderService),
);

refs.gallery.addEventListener('click', openModal);

// function moreResults() {
//   renderService.moreResults();
// }

function getResult() {
  refs.gallery.innerHTML = '';
  apiService.search = refs.input.value;
  renderService.galleryLink = refs.gallery;
  apiService.fetchRequest().then(array => renderService.showResult(array.hits));
}
