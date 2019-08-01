"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "tSpecial", {
  enumerable: true,
  get: function get() {
    return _special.default;
  }
});
Object.defineProperty(exports, "lSpecial", {
  enumerable: true,
  get: function get() {
    return _specialLoader.default;
  }
});

var _special = _interopRequireDefault(require("./special.vue"));

var _specialLoader = _interopRequireDefault(require("./special.loader.vue"));