import SearchPost from './searchPost';

SearchPost.install = function(SearchPost) {
  Vue.component(SearchPost.name, SearchPost);
};

export default SearchPost;
