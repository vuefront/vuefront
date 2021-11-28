import VfMButtonGroup from "./button-group.vue";
import VfAButton from "../../atoms/button/button.vue";
import "../../atoms/button/button.scss";
import "./button-block.scss";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/button-group",
  component: VfMButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMButtonGroup, VfAButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-button-group v-bind="args">
    <vf-a-button>Button 1</vf-a-button>
    <vf-a-button>Button 2</vf-a-button>
  </vf-m-button-group>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  size: "md",
  block: false,
};
