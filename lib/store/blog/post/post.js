import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import reviewAddGql from './addReview.graphql';
export var state = function () {
  return {
    entities: {},
    post: {}
  };
};
export var getters = {
  list: function list(state) {
    return state.entities;
  },
  get: function get(state) {
    return state.post;
  }
};
export var mutations = {
  setEntities: function setEntities(state, posts) {
    state.entities = posts;
  },
  setPost: function setPost(state, post) {
    state.post = post;
  }
};
export var actions = {
  addReview: function addReview(_ref, reviewData) {
    var commit = _ref.commit,
        dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('apollo/mutate', {
                mutation: reviewAddGql,
                variables: reviewData
              }, {
                root: true
              });

            case 2:
              if (!rootGetters['vuefront/error']) {
                commit('setPost', rootGetters['apollo/get'].addBlogPostReview);
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};