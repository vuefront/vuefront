import VfAHeading from "./heading.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "atom/heading",
  component: VfAHeading,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: "radio" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfAHeading },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-a-heading v-bind="args">Heading</vf-a-heading>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  level: 1,
  tag: "div",
};
