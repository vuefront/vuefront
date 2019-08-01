"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "oProductGrid", {
  enumerable: true,
  get: function get() {
    return _productGrid.default;
  }
});
Object.defineProperty(exports, "lProductGrid", {
  enumerable: true,
  get: function get() {
    return _productGridLoader.default;
  }
});

var _productGrid = _interopRequireDefault(require("./product-grid.vue"));

var _productGridLoader = _interopRequireDefault(require("./product-grid.loader.vue"));