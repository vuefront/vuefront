import VfLTStoreManufacturer from "./manufacturer.loader.vue.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "loader/template/store/manufacturer",
  component: VfLTStoreManufacturer,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfLTStoreManufacturer
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-l-t-store-manufacturer v-bind="args" />`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  gridSize: 4,
  gridSizeTablet: 2
};
//# sourceMappingURL=manufacturer.loader.stories.mjs.map