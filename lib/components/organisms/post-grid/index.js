"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "oPostGrid", {
  enumerable: true,
  get: function get() {
    return _postGrid.default;
  }
});
Object.defineProperty(exports, "lPostGrid", {
  enumerable: true,
  get: function get() {
    return _postGridLoader.default;
  }
});

var _postGrid = _interopRequireDefault(require("./post-grid.vue"));

var _postGridLoader = _interopRequireDefault(require("./post-grid.loader.vue"));