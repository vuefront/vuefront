import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import cart from './cart.json';
import category from './category.json';
import compare from './compare.json';
import product from './product.json';
import productSort from './productSort.json';
import productThumb from './productThumb.json';
import wishlist from './wishlist.json';
import productFolder from './product/index';
export default _defineProperty({
  cart: cart,
  category: category,
  compare: compare,
  product: product,
  productSort: productSort,
  productThumb: productThumb,
  wishlist: wishlist
}, "product", _objectSpread({}, product, {}, productFolder));