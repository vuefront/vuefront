import RelatedProduct from './relatedProduct';

RelatedProduct.install = function(RelatedProduct) {
  Vue.component(RelatedProduct.name, RelatedProduct);
};

export default RelatedProduct;
