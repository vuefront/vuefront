import VfMPostThumbImage from "./post-thumb-image.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/post-thumb-image",
  component: VfMPostThumbImage,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMPostThumbImage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-post-thumb-image style="width: 300px;" v-bind="args" />`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  card: false,
  post: {
    id: 1,
    name: "Post title",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis arcu ac nibh rutrum efficitur.",
    image: "https://via.placeholder.com/300x180",
    imageLazy: "https://via.placeholder.com/10x6",
    prev: {
      id: 1,
      name: "Post title",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis arcu ac nibh rutrum efficitur.",
      image: "https://via.placeholder.com/300x180",
      imageLazy: "https://via.placeholder.com/10x6",
    },
    next: {
      id: 1,
      name: "Post title",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis arcu ac nibh rutrum efficitur.",
      image: "https://via.placeholder.com/150",
      imageLazy: "https://via.placeholder.com/10",
    },
  },
};
