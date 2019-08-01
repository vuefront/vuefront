"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "oPostModule", {
  enumerable: true,
  get: function get() {
    return _postModule.default;
  }
});
Object.defineProperty(exports, "lPostModule", {
  enumerable: true,
  get: function get() {
    return _postModuleLoader.default;
  }
});

var _postModule = _interopRequireDefault(require("./post-module.vue"));

var _postModuleLoader = _interopRequireDefault(require("./post-module.loader.vue"));