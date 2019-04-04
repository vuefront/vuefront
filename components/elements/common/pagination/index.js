import Pagination from './pagination';

Pagination.install = function(Pagination) {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
