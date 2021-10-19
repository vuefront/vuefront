import VfMTableHorizontal from "./table-horizontal.vue";
import "./table-horizontal.scss";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/table-horizontal",
  component: VfMTableHorizontal,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMTableHorizontal },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-table-horizontal v-bind="args"/>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  fields: [
    { label: "Age", key: "age" },
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
  ],
  items: [
    { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
    { age: 21, first_name: "Larsen", last_name: "Shaw" },
    { age: 89, first_name: "Geneva", last_name: "Wilson" },
    { age: 38, first_name: "Jami", last_name: "Carney" },
  ],
};
