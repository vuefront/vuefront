"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _latestPost = _interopRequireDefault(require("./latestPost.json"));

var _searchPost = _interopRequireDefault(require("./searchPost.json"));

var _default = {
  latestPost: _latestPost.default,
  searchPost: _searchPost.default
};
exports.default = _default;