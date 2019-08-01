"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "tBlogCategory", {
  enumerable: true,
  get: function get() {
    return _category.default;
  }
});
Object.defineProperty(exports, "lBlogCategory", {
  enumerable: true,
  get: function get() {
    return _categoryLoader.default;
  }
});

var _category = _interopRequireDefault(require("./category.vue"));

var _categoryLoader = _interopRequireDefault(require("./category.loader.vue"));