"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _category = _interopRequireDefault(require("./category.json"));

var _compare = _interopRequireDefault(require("./compare.json"));

var _special = _interopRequireDefault(require("./special.json"));

var _wishlist = _interopRequireDefault(require("./wishlist.json"));

var _default = {
  category: _category.default,
  compare: _compare.default,
  special: _special.default,
  wishlist: _wishlist.default
};
exports.default = _default;