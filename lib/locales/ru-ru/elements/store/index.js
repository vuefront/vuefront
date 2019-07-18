"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cart = _interopRequireDefault(require("./cart.json"));

var _category = _interopRequireDefault(require("./category.json"));

var _compare = _interopRequireDefault(require("./compare.json"));

var _product = _interopRequireDefault(require("./product.json"));

var _productSort = _interopRequireDefault(require("./productSort.json"));

var _productThumb = _interopRequireDefault(require("./productThumb.json"));

var _wishlist = _interopRequireDefault(require("./wishlist.json"));

var _default = {
  cart: _cart.default,
  category: _category.default,
  compare: _compare.default,
  product: _product.default,
  productSort: _productSort.default,
  productThumb: _productThumb.default,
  wishlist: _wishlist.default
};
exports.default = _default;