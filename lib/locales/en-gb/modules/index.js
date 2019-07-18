"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blog = _interopRequireDefault(require("./blog"));

var _common = _interopRequireDefault(require("./common"));

var _store = _interopRequireDefault(require("./store"));

var _default = {
  blog: _blog.default,
  common: _common.default,
  store: _store.default
};
exports.default = _default;