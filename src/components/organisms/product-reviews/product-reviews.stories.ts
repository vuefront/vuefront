import VfOProductReviews from "./product-reviews.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/product-reviews",
  component: VfOProductReviews,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOProductReviews },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-o-product-reviews v-bind="args"/>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  product: {
    id: 1,
    reviews: [
      {
        author: "Leonidas Brennan",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis arcu ac nibh rutrum efficitur.",
      },
      {
        author: "Leonidas Brennan",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis arcu ac nibh rutrum efficitur.",
      },
      {
        author: "Leonidas Brennan",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis arcu ac nibh rutrum efficitur.",
      },
      {
        author: "Leonidas Brennan",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis arcu ac nibh rutrum efficitur.",
      },
    ],
  },
};
