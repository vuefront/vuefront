"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _omitDeepLodash = _interopRequireDefault(require("omit-deep-lodash"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        {\n          categoriesBlogList(page: 1, size: -1) {\n            content {\n              id\n              keyword\n            }\n          }\n        }\n      "]);

  _templateObject = function () {
    return data;
  };

  return data;
}

var _default =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var client, result, res;
    return _regenerator.default.wrap(function (_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = _ref.client;
            result = [];
            _context.prev = 2;
            _context.next = 5;
            return client.query({
              query: (0, _graphqlTag.default)(_templateObject())
            });

          case 5:
            res = _context.sent;
            res = (0, _omitDeepLodash.default)(res, '__typename');
            result = res.data.categoriesBlogList.content;
            _context.next = 12;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);

          case 12:
            return _context.abrupt("return", result);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));

  return function () {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;