import VfMListGroup from "./list-group.vue.mjs";
import VfMListGroupItem from "./list-group-item.vue.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/list-group",
  component: VfMListGroup,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfMListGroup,
    VfMListGroupItem
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-list-group v-bind="args">
        <vf-m-list-group-item to="/item1" active>Item 1</vf-m-list-group-item>
        <vf-m-list-group-item to="/item2">Item 2</vf-m-list-group-item>
        <vf-m-list-group-item to="/item3">Item 3</vf-m-list-group-item>
        <vf-m-list-group-item to="/item4">Item 4</vf-m-list-group-item>
  </vf-m-list-group>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {};
//# sourceMappingURL=list-group.stories.mjs.map