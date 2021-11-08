import VfAAlert from "./alert.vue.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "atom/alert",
  component: VfAAlert,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      options: ["primary", "secondary", "success", "info", "warning", "danger", "white", "light", "dark"],
      control: {
        type: "radio"
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfAAlert
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-a-alert v-bind="args">This is an alert message</vf-a-alert>'
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  show: true,
  dismissible: false,
  color: "primary"
};
//# sourceMappingURL=alert.stories.mjs.map