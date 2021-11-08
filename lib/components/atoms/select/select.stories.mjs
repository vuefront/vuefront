import VfASelect from "./select.vue.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "atom/select",
  component: VfASelect,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "radio"
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfASelect
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-a-select v-bind="args"/>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  state: true,
  size: "md",
  options: [{
    text: "option 1",
    value: 1
  }, {
    text: "option 2",
    value: 2
  }, {
    text: "option 3",
    value: 3
  }]
};
//# sourceMappingURL=select.stories.mjs.map