import VfMBreadcrumb from "./breadcrumb.vue";
import VfMBreadcrumbItem from "./item.vue";
import './breadcrumb.scss'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/breadcrumb",
  component: VfMBreadcrumb,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMBreadcrumb, VfMBreadcrumbItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-breadcrumb v-bind="args">
    <vf-m-breadcrumb-item>{{$t("elements.common.home.titleText")}}</vf-m-breadcrumb-item>
    <vf-m-breadcrumb-item>Desktop</vf-m-breadcrumb-item>
    <vf-m-breadcrumb-item>IMac 21</vf-m-breadcrumb-item>
  </vf-m-breadcrumb>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
