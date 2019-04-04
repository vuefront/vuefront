import Category from './category';

Category.install = function(Category) {
  Vue.component(Category.name, Category);
};

export default Category;
