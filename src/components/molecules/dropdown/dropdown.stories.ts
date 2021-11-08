import VfMDropdown from "./dropdown.vue";
import VfMDropdownItem from "./dropdown-item.vue";
import './dropdown.scss';
import './dropdown-item.scss';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/dropdown",
  component: VfMDropdown,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    variant: {
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
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMDropdown, VfMDropdownItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-dropdown v-bind="args">
    <vf-m-dropdown-item>option 1</vf-m-dropdown-item>
    <vf-m-dropdown-item>option 2</vf-m-dropdown-item>
    <vf-m-dropdown-item>option 3</vf-m-dropdown-item>
    <vf-m-dropdown-item>option 4</vf-m-dropdown-item>
    <vf-m-dropdown-item>option 5</vf-m-dropdown-item>
  </vf-m-dropdown>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  variant: "primary",
  size: "md",
  text: "button",
  right: false,
  nav: false
};
