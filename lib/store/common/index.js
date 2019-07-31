"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _address = require("./address");

Object.keys(_address).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _address[key];
    }
  });
});

var _contact = require("./contact");

Object.keys(_contact).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _contact[key];
    }
  });
});

var _country = require("./country");

Object.keys(_country).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _country[key];
    }
  });
});

var _customer = require("./customer");

Object.keys(_customer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _customer[key];
    }
  });
});

var _language = require("./language");

Object.keys(_language).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _language[key];
    }
  });
});

var _page = require("./page");

Object.keys(_page).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _page[key];
    }
  });
});

var _zone = require("./zone");

Object.keys(_zone).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _zone[key];
    }
  });
});