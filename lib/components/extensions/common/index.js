"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extraLinks = require("./extra-links");

Object.keys(_extraLinks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extraLinks[key];
    }
  });
});

var _menu = require("./menu");

Object.keys(_menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _menu[key];
    }
  });
});

var _pages = require("./pages");

Object.keys(_pages).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pages[key];
    }
  });
});

var _search = require("./search");

Object.keys(_search).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _search[key];
    }
  });
});

var _slideshow = require("./slideshow");

Object.keys(_slideshow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _slideshow[key];
    }
  });
});