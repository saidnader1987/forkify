class SearchView {
  _parentElemet = document.querySelector('.search');

  getQuery() {
    const query = this._parentElemet.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElemet.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElemet.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
