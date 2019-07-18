"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contact = _interopRequireDefault(require("./contact.json"));

var _error = _interopRequireDefault(require("./error.json"));

var _footer = _interopRequireDefault(require("./footer.json"));

var _reviews = _interopRequireDefault(require("./reviews.json"));

var _search = _interopRequireDefault(require("./search.json"));

var _account = _interopRequireDefault(require("./account"));

var _address = _interopRequireDefault(require("./address"));

var _header = _interopRequireDefault(require("./header"));

var _notification = _interopRequireDefault(require("./notification"));

var _default = {
  contact: _contact.default,
  error: _error.default,
  footer: _footer.default,
  reviews: _reviews.default,
  search: _search.default,
  account: _account.default,
  address: _address.default,
  header: _header.default,
  notification: _notification.default
};
exports.default = _default;