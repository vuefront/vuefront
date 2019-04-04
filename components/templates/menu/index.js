import Menu from './menu';

Menu.install = function(Vue) {
  Vue.component(Menu.name, Menu);
};

export default Menu;
