import SearchProduct from './searchProduct';

SearchProduct.install = function(SearchProduct) {
  Vue.component(SearchProduct.name, SearchProduct);
};

export default SearchProduct;
