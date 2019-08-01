"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mRating", {
  enumerable: true,
  get: function get() {
    return _rating.default;
  }
});
Object.defineProperty(exports, "lRating", {
  enumerable: true,
  get: function get() {
    return _ratingLoader.default;
  }
});

var _rating = _interopRequireDefault(require("./rating.vue"));

var _ratingLoader = _interopRequireDefault(require("./rating.loader.vue"));