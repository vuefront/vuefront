"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "oReviewForm", {
  enumerable: true,
  get: function get() {
    return _reviewForm.default;
  }
});
Object.defineProperty(exports, "lReviewForm", {
  enumerable: true,
  get: function get() {
    return _reviewFormLoader.default;
  }
});

var _reviewForm = _interopRequireDefault(require("./review-form.vue"));

var _reviewFormLoader = _interopRequireDefault(require("./review-form.loader.vue"));