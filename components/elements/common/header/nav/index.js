import Nav from './nav';

Nav.install = function(Nav) {
  Vue.component(Nav.name, Nav);
};

export default Nav;
