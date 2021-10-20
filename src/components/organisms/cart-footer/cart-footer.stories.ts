import VfOCartFooter from "./cart-footer.vue";
import faker from "faker";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/cart-footer",
  component: VfOCartFooter,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOCartFooter },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-o-cart-footer v-bind="args"/>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  cart: {
    total: faker.commerce.price() + "$",
    products: [
      {
        key: 1,
      },
      {
        key: 2,
      },
      {
        key: 3,
      },
    ],
  },
};