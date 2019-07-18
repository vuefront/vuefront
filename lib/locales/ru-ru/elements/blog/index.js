"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _category = _interopRequireDefault(require("./category.json"));

var _post = _interopRequireDefault(require("./post.json"));

var _default = {
  category: _category.default,
  post: _post.default
};
exports.default = _default;