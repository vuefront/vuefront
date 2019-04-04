import ProductAttribute from './productAttribute';

ProductAttribute.install = function(ProductAttribute) {
  Vue.component(ProductAttribute.name, ProductAttribute);
};

export default ProductAttribute;
