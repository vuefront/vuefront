"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchPost = require("./search-post");

Object.keys(_searchPost).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _searchPost[key];
    }
  });
});

var _latestPost = require("./latest-post");

Object.keys(_latestPost).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _latestPost[key];
    }
  });
});

var _category = require("./category");

Object.keys(_category).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _category[key];
    }
  });
});