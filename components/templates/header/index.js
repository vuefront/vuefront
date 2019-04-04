import Header from './header';

Header.install = function(Header) {
  Vue.component(Header.name, Header);
};

export default Header;
