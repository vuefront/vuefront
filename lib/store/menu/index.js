"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreMenu = exports.PageMenu = exports.BlogMenu = void 0;

var BlogMenu = _interopRequireWildcard(require("./blog"));

exports.BlogMenu = BlogMenu;

var PageMenu = _interopRequireWildcard(require("./page"));

exports.PageMenu = PageMenu;

var StoreMenu = _interopRequireWildcard(require("./store"));

exports.StoreMenu = StoreMenu;