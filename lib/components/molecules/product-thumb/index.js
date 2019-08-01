"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mProductThumb", {
  enumerable: true,
  get: function get() {
    return _productThumb2.default;
  }
});
Object.defineProperty(exports, "lProductThumb", {
  enumerable: true,
  get: function get() {
    return _productThumbLoader.default;
  }
});

require("./product-thumb.scss");

var _productThumb2 = _interopRequireDefault(require("./product-thumb.vue"));

var _productThumbLoader = _interopRequireDefault(require("./product-thumb.loader.vue"));