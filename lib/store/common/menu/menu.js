import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import Vue from 'vue';
export var state = function () {
  return {
    entities: {},
    loaded: {}
  };
};
export var getters = {
  list: function list(state) {
    return state.entities;
  },
  loaded: function loaded(state) {
    return state.loaded;
  }
};
export var mutations = {
  setEntities: function setEntities(state, _ref) {
    var id = _ref.id,
        items = _ref.items;
    Vue.set(state.entities, id, items);
  },
  addEntities: function addEntities(state, _ref2) {
    var id = _ref2.id,
        items = _ref2.items;
    Vue.set(state.entities, id, [].concat(_toConsumableArray(state.entities[id]), _toConsumableArray(items)));
  },
  setLoaded: function setLoaded(state, _ref3) {
    var id = _ref3.id,
        loaded = _ref3.loaded;
    Vue.set(state.loaded, id, loaded);
  }
};