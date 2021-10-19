import VfMPostImage from "./post-image.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/post-image",
  component: VfMPostImage,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMPostImage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-post-image v-bind="args" />`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  card: false,
  fluid: false,
  fullWidth: false,
  post: {
    name: "Post title",
    image: "https://via.placeholder.com/300x180",
    imageLazy: "https://via.placeholder.com/10",
  },
};
