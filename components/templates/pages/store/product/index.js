import Product from './product'

Product.install = function(Product) {
  Vue.component(Product.name, Product)
}

export default Product
