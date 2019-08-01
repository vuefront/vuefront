"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "oReviewList", {
  enumerable: true,
  get: function get() {
    return _reviewList.default;
  }
});
Object.defineProperty(exports, "lReviewList", {
  enumerable: true,
  get: function get() {
    return _reviewListLoader.default;
  }
});

var _reviewList = _interopRequireDefault(require("./review-list.vue"));

var _reviewListLoader = _interopRequireDefault(require("./review-list.loader.vue"));