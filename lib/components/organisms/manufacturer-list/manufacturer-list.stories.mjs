import VfOManufacturerList from "./manufacturer-list.vue.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "organism/manufacturer-list",
  component: VfOManufacturerList,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfOManufacturerList
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-o-manufacturer-list v-bind="args"/>'
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  manufacturers: {
    content: [{
      id: 1,
      name: "Desktop"
    }, {
      id: 3,
      name: "IMac"
    }, {
      id: 2,
      name: "Mac"
    }, {
      id: 2,
      name: "IPhone"
    }]
  }
};
//# sourceMappingURL=manufacturer-list.stories.mjs.map