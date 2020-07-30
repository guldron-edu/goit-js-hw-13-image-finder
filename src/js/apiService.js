export default {
  pageNumber: 1,
  searchQuery: '',

  fetchRequest() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=17627070-1cea1e131d3999467dc2c3a3b`,
    ).then(res => res.json());
  },

  getMoreResults() {
    this.pageNumber += 1;
    return this.fetchRequest();
  },
  getResult() {
    this.pageNumber = 1;
    return this.fetchRequest();
  },

  set search(value) {
    this.searchQuery = value;
  },
};
