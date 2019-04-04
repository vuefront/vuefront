import ProductSort from './productSort';

ProductSort.install = function(ProductSort) {
  Vue.component(ProductSort.name, ProductSort);
};

export default ProductSort;
