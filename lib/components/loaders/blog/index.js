"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CategoryBlogPageLoader", {
  enumerable: true,
  get: function get() {
    return _category.default;
  }
});
Object.defineProperty(exports, "PostGridLoader", {
  enumerable: true,
  get: function get() {
    return _grid.default;
  }
});
Object.defineProperty(exports, "PostModuleLoader", {
  enumerable: true,
  get: function get() {
    return _module.default;
  }
});
Object.defineProperty(exports, "PostThumbLoader", {
  enumerable: true,
  get: function get() {
    return _thumb.default;
  }
});
Object.defineProperty(exports, "CategoryBlogLoader", {
  enumerable: true,
  get: function get() {
    return _category2.default;
  }
});
Object.defineProperty(exports, "PostLoader", {
  enumerable: true,
  get: function get() {
    return _post.default;
  }
});

var _category = _interopRequireDefault(require("./page/category.vue"));

var _grid = _interopRequireDefault(require("./post/grid.vue"));

var _module = _interopRequireDefault(require("./post/module.vue"));

var _thumb = _interopRequireDefault(require("./post/thumb.vue"));

var _category2 = _interopRequireDefault(require("./category.vue"));

var _post = _interopRequireDefault(require("./post.vue"));