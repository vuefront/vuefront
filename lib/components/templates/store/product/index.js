"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "tProduct", {
  enumerable: true,
  get: function get() {
    return _product.default;
  }
});
Object.defineProperty(exports, "lProduct", {
  enumerable: true,
  get: function get() {
    return _productLoader.default;
  }
});

var _product = _interopRequireDefault(require("./product.vue"));

var _productLoader = _interopRequireDefault(require("./product.loader.vue"));