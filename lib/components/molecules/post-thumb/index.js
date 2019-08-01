"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mPostThumb", {
  enumerable: true,
  get: function get() {
    return _postThumb2.default;
  }
});
Object.defineProperty(exports, "lPostThumb", {
  enumerable: true,
  get: function get() {
    return _postThumbLoader.default;
  }
});

require("./post-thumb.scss");

var _postThumb2 = _interopRequireDefault(require("./post-thumb.vue"));

var _postThumbLoader = _interopRequireDefault(require("./post-thumb.loader.vue"));