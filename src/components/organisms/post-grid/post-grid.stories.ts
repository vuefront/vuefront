import VfOPostGrid from "./post-grid.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/post-grid",
  component: VfOPostGrid,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOPostGrid },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-o-post-grid v-bind="args"/>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  column: false,
  gridSize: 4,
  posts: [
    {
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
    {
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
    {
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
    {
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
  ],
};
