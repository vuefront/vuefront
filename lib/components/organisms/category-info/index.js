"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "oCategoryInfo", {
  enumerable: true,
  get: function get() {
    return _categoryInfo.default;
  }
});
Object.defineProperty(exports, "lCategoryInfo", {
  enumerable: true,
  get: function get() {
    return _categoryInfoLoader.default;
  }
});

var _categoryInfo = _interopRequireDefault(require("./category-info.vue"));

var _categoryInfoLoader = _interopRequireDefault(require("./category-info.loader.vue"));