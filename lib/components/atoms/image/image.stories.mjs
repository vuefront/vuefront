import VfAImage from "./image.vue.mjs";
import "./image.scss.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "atom/image",
  component: VfAImage,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    blankColor: {
      control: "color"
    }
  }
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfAImage
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-a-image v-bind="args"/>'
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  src: "https://via.placeholder.com/150",
  lazySrc: "https://via.placeholder.com/150",
  blankColor: "#dedede",
  cover: false,
  width: 150,
  height: 150
};
//# sourceMappingURL=image.stories.mjs.map