"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mReview", {
  enumerable: true,
  get: function get() {
    return _review.default;
  }
});
Object.defineProperty(exports, "lReview", {
  enumerable: true,
  get: function get() {
    return _reviewLoader.default;
  }
});

var _review = _interopRequireDefault(require("./review.vue"));

var _reviewLoader = _interopRequireDefault(require("./review.loader.vue"));