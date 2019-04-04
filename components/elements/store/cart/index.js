import Cart from './cart';

Cart.install = function(Cart) {
  Vue.component(Cart.name, Cart);
};

export default Cart;
