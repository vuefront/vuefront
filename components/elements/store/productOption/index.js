import ProductOption from './productOption';

ProductOption.install = function(ProductOption) {
  Vue.component(ProductOption.name, ProductOption);
};

export default ProductOption;
