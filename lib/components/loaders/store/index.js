"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CategoryPageLoader", {
  enumerable: true,
  get: function get() {
    return _category.default;
  }
});
Object.defineProperty(exports, "SpecialPageLoader", {
  enumerable: true,
  get: function get() {
    return _special.default;
  }
});
Object.defineProperty(exports, "ProductGridLoader", {
  enumerable: true,
  get: function get() {
    return _grid.default;
  }
});
Object.defineProperty(exports, "ProductImageLoader", {
  enumerable: true,
  get: function get() {
    return _image.default;
  }
});
Object.defineProperty(exports, "ProductModuleLoader", {
  enumerable: true,
  get: function get() {
    return _module.default;
  }
});
Object.defineProperty(exports, "ProductSortLoader", {
  enumerable: true,
  get: function get() {
    return _sort.default;
  }
});
Object.defineProperty(exports, "ProductThumbLoader", {
  enumerable: true,
  get: function get() {
    return _thumb.default;
  }
});
Object.defineProperty(exports, "CategoryLoader", {
  enumerable: true,
  get: function get() {
    return _category2.default;
  }
});
Object.defineProperty(exports, "ProductLoader", {
  enumerable: true,
  get: function get() {
    return _product.default;
  }
});

var _category = _interopRequireDefault(require("./page/category.vue"));

var _special = _interopRequireDefault(require("./page/special.vue"));

var _grid = _interopRequireDefault(require("./product/grid.vue"));

var _image = _interopRequireDefault(require("./product/image.vue"));

var _module = _interopRequireDefault(require("./product/module.vue"));

var _sort = _interopRequireDefault(require("./product/sort.vue"));

var _thumb = _interopRequireDefault(require("./product/thumb.vue"));

var _category2 = _interopRequireDefault(require("./category.vue"));

var _product = _interopRequireDefault(require("./product.vue"));