import galleryMarkup from '../template/galleryMarkup.hbs';
import apiService from './apiService.js';
import {
  showNotification,
  errorNotification,
  lastNotification,
} from './notification';
import refs from '../js/refs';

export default {
  galleryRef: '',

  showResult(array) {
    if (array.length === 0) {
      refs.submitForm.classList.remove('padding-top');

      errorNotification();
    }
    if (array.length > 0 && array.length < 12) {
      this.renderResult(array);
      refs.button.classList.add('hide');
      refs.submitForm.classList.add('padding-top');

      lastNotification();
    }
    if (array.length >= 12) {
      this.renderResult(array);
      refs.button.classList.remove('hide');
      refs.submitForm.classList.add('padding-top');

      showNotification();
    }
  },

  async moreResults() {
    let point = document.documentElement.offsetHeight - 50;
    const array = await apiService.getMoreResults();

    await this.showResult(array.hits);

    window.scrollTo({
      top: point,
      behavior: 'smooth',
    });
  },

  set galleryLink(value) {
    this.galleryRef = value;
  },

  renderResult(array) {
    this.galleryRef.insertAdjacentHTML('beforeend', galleryMarkup(array));
  },
};
