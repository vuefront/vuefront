import { app } from '@storybook/vue3';
import { createStore } from 'vuex'
import * as CommonVueFront from '../../lib/store/common/vuefront/vuefront.mjs'

const store = createStore({
  modules: {
    vuefront: { namespaced: true, ...CommonVueFront },
    notification: {
      namespaced: true,
      state: () => ({
        message: "",
        error: ""
      }),
      getters: {
        get(state) {
          return state.message;
        },
        error(state) {
          return state.error;
        },
      },
      mutations: {
        add(state, message) {
          state.message = message;
        },
        error(state, error) {
          state.error = error;
        }
      }
    },
    position: {
      namespaced: true,
      state: () => ({
        path: ""
      }),
      getters: {
        modules: (state) => ((name) => []),
        layout: (state) => (null),
        position: (state) => ((name) => []),
        currentRoute: (state) => ("/")
      },
      mutations: {
        setParams(state, payload) {},
        setRoute(state, payload) {},
      },
      actions: {
        loadModules(ctx, payload) {

        }
      }
    },
    store: {
      namespaced: true,
      modules: {
        currency: {
          namespaced: true,
          state: () => ({
            items: [
              {
                "code": "EUR",
                "symbol_left": "",
                "symbol_right": "€",
                "name": "Euro",
                "active": false
              },
              {
                "code": "GBP",
                "symbol_left": "£",
                "symbol_right": "",
                "name": "Pound Sterling",
                "active": false
              },
              {
                "code": "USD",
                symbol_left: "$",
                symbol_right: "",
                "name": "US Dollar",
                "active": true
              }
            ]
          }),
          getters: {
            get(state) {
              return state.items
            }
          }
        },
      }
    },
    common: {
      namespaced: true,
      modules: {
        language: {
          namespaced: true,
          state: () => ({
            loaded: true,
            items: [
              {
                "name": "English",
                "code": "en-gb",
                "image": "https://via.placeholder.com/16x11/0000FF",
                "active": true
              },
              {
                "name": "Russian",
                "code": "ru-ru",
                "image": "https://via.placeholder.com/16x11/FF0000",
                "active": false
              }
            ]
          }),
          getters: {
            get(state) {
              return state.items
            }
          }
        },
        breadcrumbs: {
          namespaced: true,
          state: () => ({
            loaded: true,
            items: [
              {
                title: "Desktop",
                to: "/"
              },
              {
                title: "IMac 21",
                to: "/"
              }
            ]
          }),
          getters: {
            loaded(state) {
              return state.loaded
            },
            get(state) {
              return state.items
            }
          }
        }

      }
    }
  }
})
app.use(store)