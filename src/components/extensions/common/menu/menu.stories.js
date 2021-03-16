import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import Vuex from "vuex";
import vfECommonMenu from "./menu.vue";

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    menu: {
      namespaced: true,
      state: () => ({
        entities: {},
        loaded: {},
      }),

      getters: {
        list(state) {
          return state.entities;
        },
        loaded(state) {
          return state.loaded;
        },
      },
      mutations: {
        setEntities(state, { id, items }) {
          Vue.set(state.entities, id, items);
        },
        addEntities(state, { id, items }) {
          Vue.set(state.entities, id, [...state.entities[id], ...items]);
        },
        setLoaded(state, { id, loaded }) {
          Vue.set(state.loaded, id, loaded);
        },
      },
    },
  },
});

Vue.component("VfECommonMenu", vfECommonMenu);

storiesOf("extension|!!!Menu", module)
  .addDecorator((story) => ({
    template: `<div style="width:300px"><story/></div>`,
  }))
  .add(
    "default",
    () => ({
      components: { vfECommonMenu },
      template: `<vf-e-common-menu :items="items"></vf-e-common-menu>`,
      data: () => ({
        items: [
          {
            title: "Desktop",
            to: "/",
          },
          {
            title: "Laptop",
            to: "/",
          },
        ],
      }),
      store,
    }),
    {
      info: {
        summary: `<span style="color:red">Important!</span> Alert should be a molecule since it can include other components via Slots.`,
      },
    }
  );
