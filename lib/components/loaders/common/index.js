"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Loader", {
  enumerable: true,
  get: function get() {
    return _loader.default;
  }
});
Object.defineProperty(exports, "RatingLoader", {
  enumerable: true,
  get: function get() {
    return _rating.default;
  }
});
Object.defineProperty(exports, "ReviewsLoader", {
  enumerable: true,
  get: function get() {
    return _reviews.default;
  }
});

var _loader = _interopRequireDefault(require("./loader.vue"));

var _rating = _interopRequireDefault(require("./rating.vue"));

var _reviews = _interopRequireDefault(require("./reviews.vue"));