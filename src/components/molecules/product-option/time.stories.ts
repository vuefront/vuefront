import VfMProductOptionTime from "./time.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/product-option/time",
  component: VfMProductOptionTime,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMProductOptionTime },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-product-option-time v-bind="args" />`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  option: {
    name: "title",
    values: [
      {
        id: 1,
        name: "Value 1",
      },
      {
        id: 2,
        name: "Value 2",
      },
      {
        id: 3,
        name: "Value 3",
      },
    ],
  },
};
