"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ContactPage: true,
  HomePage: true,
  SearchPage: true
};
Object.defineProperty(exports, "ContactPage", {
  enumerable: true,
  get: function get() {
    return _contact.default;
  }
});
Object.defineProperty(exports, "HomePage", {
  enumerable: true,
  get: function get() {
    return _home.default;
  }
});
Object.defineProperty(exports, "SearchPage", {
  enumerable: true,
  get: function get() {
    return _search.default;
  }
});

var _contact = _interopRequireDefault(require("./contact.vue"));

var _home = _interopRequireDefault(require("./home.vue"));

var _search = _interopRequireDefault(require("./search.vue"));

var _page = require("./page");

Object.keys(_page).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _page[key];
    }
  });
});