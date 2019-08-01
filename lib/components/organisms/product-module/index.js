"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "oProductModule", {
  enumerable: true,
  get: function get() {
    return _productModule.default;
  }
});
Object.defineProperty(exports, "lProductModule", {
  enumerable: true,
  get: function get() {
    return _productModuleLoader.default;
  }
});

var _productModule = _interopRequireDefault(require("./product-module.vue"));

var _productModuleLoader = _interopRequireDefault(require("./product-module.loader.vue"));