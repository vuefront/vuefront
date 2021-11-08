import VfECommonSlideshow from "./slideshow.vue";
import "./slideshow.scss";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "extension/common/slideshow",
  component: VfECommonSlideshow,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfECommonSlideshow },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-e-common-slideshow v-bind="args"/>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  sliderArrows: false,
  sliderNav: false,
  items: [
    "https://via.placeholder.com/1140x380?text=slide 1",
    "https://via.placeholder.com/1140x380?text=slide 2",
    "https://via.placeholder.com/1140x380?text=slide 3",
    "https://via.placeholder.com/1140x380?text=slide 4",
  ],
};
