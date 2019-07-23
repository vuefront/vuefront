"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CategoryTemplate: true,
  SpecialTemplate: true
};
Object.defineProperty(exports, "CategoryTemplate", {
  enumerable: true,
  get: function get() {
    return _category.default;
  }
});
Object.defineProperty(exports, "SpecialTemplate", {
  enumerable: true,
  get: function get() {
    return _special.default;
  }
});

var _category = _interopRequireDefault(require("./category.vue"));

var _special = _interopRequireDefault(require("./special.vue"));

var _product = require("./product");

Object.keys(_product).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _product[key];
    }
  });
});