import FeaturedProduct from './featuredProduct';

FeaturedProduct.install = function(FeaturedProduct) {
  Vue.component(FeaturedProduct.name, FeaturedProduct);
};

export default FeaturedProduct;
