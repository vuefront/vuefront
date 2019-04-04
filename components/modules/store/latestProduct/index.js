import LatestProduct from './latestProduct';

LatestProduct.install = function(LatestProduct) {
  Vue.component(LatestProduct.name, LatestProduct);
};

export default LatestProduct;
