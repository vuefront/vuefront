import VfAButton from "./button.vue";
import "./button.scss";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "atom/button",
  component: VfAButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      options: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "white",
        "light",
        "dark",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfAButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-a-button v-bind="args">
      <template #visible>Visible content</template>
      <template #hidden>Hidden content</template>
      <span v-if="!args.animatedX && !args.animatedY">Button</span>
  </vf-a-button>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  rounded: false,
  block: false,
  active: false,
  outline: false,
  size: "md",
  pressed: false,
  disabled: false,
  color: "primary",
  animatedX: false,
  animatedY: false,
};
