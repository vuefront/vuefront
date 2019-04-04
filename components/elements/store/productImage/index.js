import ProductImage from './productImage';

ProductImage.install = function(ProductImage) {
  Vue.component(ProductImage.name, ProductImage);
};

export default ProductImage;
