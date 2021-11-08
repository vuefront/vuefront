import VfMInputGroup from "./input-group.vue.mjs";
import VfAInput from "../../atoms/input/input.vue.mjs";
import "./input-group.scss.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/input-group",
  component: VfMInputGroup,
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
    VfMInputGroup,
    VfAInput
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-input-group v-bind="args">
        <vf-a-input trim />
  </vf-m-input-group>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  id: "input-field",
  size: "md",
  prepend: "prepend",
  append: "append",
  tag: "div"
};
//# sourceMappingURL=input-group.stories.mjs.map