import Search from './search';

Search.install = function(Search) {
  Vue.component(Search.name, Search);
};

export default Search;
