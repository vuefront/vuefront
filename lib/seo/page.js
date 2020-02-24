import _regeneratorRuntime from "@babel/runtime/regenerator";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        {\n          pagesList(page: 1, size: -1) {\n            content {\n              id\n              keyword\n            }\n          }\n        }\n      "]);

  _templateObject = function () {
    return data;
  };

  return data;
}

import omitDeepLodash from 'omit-deep-lodash';
import gql from 'graphql-tag';
export default
/*#__PURE__*/
(function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(_ref2) {
    var client, result, res;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = _ref2.client;
            result = [];
            _context.prev = 2;
            _context.next = 5;
            return client.query({
              query: gql(_templateObject())
            });

          case 5:
            res = _context.sent;
            res = omitDeepLodash(res, '__typename');
            result = res.data.pagesList.content;
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
    return _ref.apply(this, arguments);
  };
})();