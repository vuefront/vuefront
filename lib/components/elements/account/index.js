"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AccountAddress", {
  enumerable: true,
  get: function get() {
    return _address.default;
  }
});
Object.defineProperty(exports, "AccountCreateAddress", {
  enumerable: true,
  get: function get() {
    return _createAddress.default;
  }
});
Object.defineProperty(exports, "AccountEditAddress", {
  enumerable: true,
  get: function get() {
    return _editAddress.default;
  }
});

var _address = _interopRequireDefault(require("./address.vue"));

var _createAddress = _interopRequireDefault(require("./createAddress.vue"));

var _editAddress = _interopRequireDefault(require("./editAddress.vue"));