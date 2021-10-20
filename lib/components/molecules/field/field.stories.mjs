import VfMField from "./field.vue.mjs";
import VfAInput from "../../atoms/input/input.vue.mjs";
import "./field.scss.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/field",
  component: VfMField,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfMField,
    VfAInput
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-field v-bind="args">
    <template #label>{{args.label}}</template>
    <template #default="data">
        <vf-a-input v-bind="data" trim />
      </template>
      <template #error>{{
       args.error
      }}</template>
  </vf-m-field>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  id: "input-field",
  label: "label",
  state: true,
  error: "Error message"
};
//# sourceMappingURL=field.stories.mjs.map