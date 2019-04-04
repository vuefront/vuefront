import SpecialProduct from './specialProduct';

SpecialProduct.install = function(SpecialProduct) {
  Vue.component(SpecialProduct.name, SpecialProduct);
};

export default SpecialProduct;
