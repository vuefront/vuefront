import VfMProductImage from "./product-image.vue";
import "./product-image.scss";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/product-image",
  component: VfMProductImage,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMProductImage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-product-image v-bind="args"/>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  product: {
    id: 1,
    image: "https://via.placeholder.com/300x300",
    imageBig: "https://via.placeholder.com/825x825?text=Big image",
    imageLazy: "https://via.placeholder.com/10x10",
    images: [
      {
        image: "https://via.placeholder.com/825x825?text=Image 1",
        imageBig: "https://via.placeholder.com/825x825?text=Image 1",
        imageLazy: "https://via.placeholder.com/10x10?text=Image 1",
      },
      {
        image: "https://via.placeholder.com/825x825?text=Image 2",
        imageBig: "https://via.placeholder.com/825x825?text=Image 2",
        imageLazy: "https://via.placeholder.com/10x10?text=Image 2",
      },
      {
        image: "https://via.placeholder.com/825x825?text=Image 3",
        imageBig: "https://via.placeholder.com/825x825?text=Image 3",
        imageLazy: "https://via.placeholder.com/10x10?text=Image 3",
      },
    ],
  },
};
