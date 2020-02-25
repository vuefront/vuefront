import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfECommonMenu from './menu.vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export var store = new Vuex.Store({
  modules: {
    menu: {
      namespaced: true,
      state: function state() {
        return {
          entities: {},
          loaded: {}
        };
      },
      getters: {
        list: function list(state) {
          return state.entities;
        },
        loaded: function loaded(state) {
          return state.loaded;
        }
      },
      mutations: {
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
      }
    }
  }
});
Vue.component('vfECommonMenu', vfECommonMenu);
storiesOf('extension|!!!Menu', module).addDecorator(function () {
  return {
    template: "<div style=\"width:300px\"><story/></div>"
  };
}).add('default', function () {
  return {
    components: {
      vfECommonMenu: vfECommonMenu
    },
    template: "<vf-e-common-menu :items=\"items\"></vf-e-common-menu>",
    data: function data() {
      return {
        items: [{
          title: 'Desktop',
          to: '/'
        }, {
          title: 'Laptop',
          to: '/'
        }]
      };
    },
    store: store
  };
}, {
  info: {
    summary: "<span style=\"color:red\">Important!</span> Alert should be a molecule since it can include other components via Slots."
  }
});