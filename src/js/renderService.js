import galleryMarkup from '../template/galleryMarkup.hbs';
import apiService from './apiService.js';
import { showNotification, errorNotification } from './notification';

export default {
  galleryRef: '',

  async showResult(array) {
    if (array.length === 1) {
      errorNotification();
    } else {
      this.galleryRef.insertAdjacentHTML('beforeend', galleryMarkup(array));
      showNotification();
    }
  },

  async moreResults() {
    let point = document.documentElement.offsetHeight - 50;

    const array = await apiService.nextPage();
    await this.showResult(array.hits);

    window.scrollTo({
      top: point,
      behavior: 'smooth',
    });
  },

  set galleryLink(value) {
    this.galleryRef = value;
  },
};
