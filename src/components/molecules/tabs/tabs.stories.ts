import VfMTabs from "./tabs.vue";
import VfMTab from "./tab.vue";
import "./tabs.scss";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/tabs",
  component: VfMTabs,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMTabs, VfMTab },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-tabs v-bind="args">
  <vf-m-tab title="First" active><p>I'm the first tab</p></vf-m-tab>
  <vf-m-tab title="Second"><p>I'm the second tab</p></vf-m-tab>
  <vf-m-tab title="Disabled" disabled><p>I'm a disabled tab!</p></vf-m-tab>
  </vf-m-tabs>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
