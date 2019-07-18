"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _address = _interopRequireDefault(require("./address.json"));

var _edit = _interopRequireDefault(require("./edit.json"));

var _login = _interopRequireDefault(require("./login.json"));

var _new = _interopRequireDefault(require("./new.json"));

var _password = _interopRequireDefault(require("./password.json"));

var _register = _interopRequireDefault(require("./register.json"));

var _default = {
  address: _address.default,
  edit: _edit.default,
  login: _login.default,
  new: _new.default,
  password: _password.default,
  register: _register.default
};
exports.default = _default;