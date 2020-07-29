export default {
  pageNumber: 1,
  searchQuery: '',

  fetchRequest() {
    this.pageNumber = 1;
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=17627070-1cea1e131d3999467dc2c3a3b`,
    ).then(res => res.json());
  },

  nextPage() {
    this.pageNumber += 1;
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=17627070-1cea1e131d3999467dc2c3a3b`,
    ).then(res => res.json());
  },

  set search(value) {
    this.searchQuery = value;
  },
};
