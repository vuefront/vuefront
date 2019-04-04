import Left from './left';

Left.install = function(Left) {
  Vue.component(Left.name, Left);
};

export default Left;
