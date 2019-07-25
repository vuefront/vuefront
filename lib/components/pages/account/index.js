"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  AccountAddressPage: true,
  AccountCreateAddressPage: true,
  AccountEditAddressPage: true
};
Object.defineProperty(exports, "AccountAddressPage", {
  enumerable: true,
  get: function get() {
    return _address.default;
  }
});
Object.defineProperty(exports, "AccountCreateAddressPage", {
  enumerable: true,
  get: function get() {
    return _createAddress.default;
  }
});
Object.defineProperty(exports, "AccountEditAddressPage", {
  enumerable: true,
  get: function get() {
    return _editAddress.default;
  }
});

var _address = _interopRequireDefault(require("./address.vue"));

var _createAddress = _interopRequireDefault(require("./createAddress.vue"));

var _editAddress = _interopRequireDefault(require("./editAddress.vue"));

var _edit = require("./edit");

Object.keys(_edit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _edit[key];
    }
  });
});

var _login = require("./login");

Object.keys(_login).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _login[key];
    }
  });
});

var _register = require("./register");

Object.keys(_register).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _register[key];
    }
  });
});

var _password = require("./password");

Object.keys(_password).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _password[key];
    }
  });
});

var _account = require("./account");

Object.keys(_account).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _account[key];
    }
  });
});