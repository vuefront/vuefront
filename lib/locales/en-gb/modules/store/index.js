"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _featuredProduct = _interopRequireDefault(require("./featuredProduct.json"));

var _latestProduct = _interopRequireDefault(require("./latestProduct.json"));

var _relatedProduct = _interopRequireDefault(require("./relatedProduct.json"));

var _searchProduct = _interopRequireDefault(require("./searchProduct.json"));

var _specialProduct = _interopRequireDefault(require("./specialProduct.json"));

var _default = {
  featuredProduct: _featuredProduct.default,
  latestProduct: _latestProduct.default,
  relatedProduct: _relatedProduct.default,
  searchProduct: _searchProduct.default,
  specialProduct: _specialProduct.default
};
exports.default = _default;