import VfTAddressCreate from "./addressCreate.vue.mjs";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "template/account/addressCreate",
  component: VfTAddressCreate,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfTAddressCreate
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-t-address-create v-bind="args"/>'
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  countries: {
    content: [{
      id: 1,
      name: "Country title"
    }]
  },
  zones: {
    content: [{
      id: 1,
      name: "Zone title"
    }]
  }
};
//# sourceMappingURL=addressCreate.stories.mjs.map