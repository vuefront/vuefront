"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _cart = _interopRequireDefault(require("./cart.json"));

var _category = _interopRequireDefault(require("./category.json"));

var _compare = _interopRequireDefault(require("./compare.json"));

var _product = _interopRequireDefault(require("./product.json"));

var _productSort = _interopRequireDefault(require("./productSort.json"));

var _productThumb = _interopRequireDefault(require("./productThumb.json"));

var _wishlist = _interopRequireDefault(require("./wishlist.json"));

var _index = _interopRequireDefault(require("./product/index"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = (0, _defineProperty2.default)({
  cart: _cart.default,
  category: _category.default,
  compare: _compare.default,
  product: _product.default,
  productSort: _productSort.default,
  productThumb: _productThumb.default,
  wishlist: _wishlist.default
}, "product", _objectSpread({}, _product.default, {}, _index.default));

exports.default = _default;