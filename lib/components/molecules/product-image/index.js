"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mProductImage", {
  enumerable: true,
  get: function get() {
    return _productImage.default;
  }
});
Object.defineProperty(exports, "lProductImage", {
  enumerable: true,
  get: function get() {
    return _productImageLoader.default;
  }
});

var _productImage = _interopRequireDefault(require("./product-image.vue"));

var _productImageLoader = _interopRequireDefault(require("./product-image.loader.vue"));