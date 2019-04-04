import NavSearch from './navSearch';

NavSearch.install = function(NavSearch) {
  Vue.component(NavSearch.name, NavSearch);
};

export default NavSearch;
