import VfOProductSort from "./product-sort.vue.mjs";
import "./product-sort.scss.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "organism/product-sort",
  component: VfOProductSort,
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
    VfOProductSort
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-o-product-sort v-bind="args"/>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  mode: "grid",
  sort: "id|ASC",
  size: 15
};
//# sourceMappingURL=product-sort.stories.mjs.map