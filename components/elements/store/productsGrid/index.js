import ProductsGrid from './productsGrid';

ProductsGrid.install = function(ProductsGrid) {
  Vue.component(ProductsGrid.name, ProductsGrid);
};

export default ProductsGrid;
