"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nav = _interopRequireDefault(require("./nav.json"));

var _navSearch = _interopRequireDefault(require("./navSearch.json"));

var _topNav = _interopRequireDefault(require("./topNav.json"));

var _default = {
  nav: _nav.default,
  navSearch: _navSearch.default,
  topNav: _topNav.default
};
exports.default = _default;