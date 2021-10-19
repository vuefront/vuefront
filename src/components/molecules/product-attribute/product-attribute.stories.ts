import VfMProductAttribute from "./product-attribute.vue";
import "./product-attribute.scss";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/product-attribute",
  component: VfMProductAttribute,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMProductAttribute },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-product-attribute v-bind="args" />`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  attributes: [
    {
      name: "Attribute Title",
      options: ["Value 1", "Value 2", "Value 3"]
    },
    {
      name: "Attribute Title",
      options: ["Value 1", "Value 2", "Value 3"]
    },
    {
      name: "Attribute Title",
      options: ["Value 1", "Value 2", "Value 3"]
    },
  ],
};
