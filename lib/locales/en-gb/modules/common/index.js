"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _account = _interopRequireDefault(require("./account.json"));

var _accountLinks = _interopRequireDefault(require("./accountLinks.json"));

var _extraLinks = _interopRequireDefault(require("./extraLinks.json"));

var _pages = _interopRequireDefault(require("./pages.json"));

var _default = {
  account: _account.default,
  accountLinks: _accountLinks.default,
  extraLinks: _extraLinks.default,
  pages: _pages.default
};
exports.default = _default;