import VfTStoreSpecial from "./special.vue.mjs";
import { getProduct } from "../../../../utils/fakeData.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "template/store/special",
  component: VfTStoreSpecial,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    mode: {
      options: ["grid", "list"],
      control: {
        type: "radio"
      }
    },
    size: {
      options: [15, 25, 50, 75, 100],
      control: {
        type: "radio"
      }
    },
    sort: {
      options: ["id|ASC", "name|ASC", "name|DESC", "price|ASC", "price|DESC", "rating|ASC", "rating|DESC", "model|ASC", "model|DESC"],
      control: {
        type: "radio"
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfTStoreSpecial
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-t-store-special v-bind="args" />`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  gridSize: 4,
  gridSizeTablet: 2,
  mode: "grid",
  sort: "id|ASC",
  size: 15,
  products: {
    totalPages: 12,
    number: 7,
    content: [getProduct(), getProduct(), getProduct(), getProduct(), getProduct(), getProduct(), getProduct(), getProduct()]
  }
};
//# sourceMappingURL=special.stories.mjs.map