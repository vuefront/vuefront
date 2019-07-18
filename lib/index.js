"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  store: true,
  locales: true
};
exports.locales = exports.store = void 0;

var EnGb = _interopRequireWildcard(require("./locales/en-gb/index"));

var RuRu = _interopRequireWildcard(require("./locales/ru-ru/index"));

var StoreModules = _interopRequireWildcard(require("./store/index"));

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});
var store = StoreModules;
exports.store = store;
var locales = {
  EnGb: EnGb,
  RuRu: RuRu
};
exports.locales = locales;