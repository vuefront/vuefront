import ProductThumb from './productThumb';

ProductThumb.install = function(ProductThumb) {
  Vue.component(ProductThumb.name, ProductThumb);
};

export default ProductThumb;
