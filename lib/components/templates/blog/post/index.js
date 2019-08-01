"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "tBlogPost", {
  enumerable: true,
  get: function get() {
    return _post.default;
  }
});
Object.defineProperty(exports, "lBlogPost", {
  enumerable: true,
  get: function get() {
    return _postLoader.default;
  }
});

var _post = _interopRequireDefault(require("./post.vue"));

var _postLoader = _interopRequireDefault(require("./post.loader.vue"));