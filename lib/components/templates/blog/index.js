"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CategoryBlogTemplate: true
};
Object.defineProperty(exports, "CategoryBlogTemplate", {
  enumerable: true,
  get: function get() {
    return _category.default;
  }
});

var _category = _interopRequireDefault(require("./category.vue"));

var _extensions = require("./extensions");

Object.keys(_extensions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extensions[key];
    }
  });
});