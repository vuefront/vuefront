import VfARadioGroup from "./radio-group.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "atom/radio-group",
  component: VfARadioGroup,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfARadioGroup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-a-radio-group v-bind="args"/>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  stacked: false,
  state: true,
  options: [
    {
      text: "radio 1",
      value: 1,
    },
    {
      text: "radio 2",
      value: 2,
    },
    {
      text: "radio 3",
      value: 3,
    },
  ],
};
