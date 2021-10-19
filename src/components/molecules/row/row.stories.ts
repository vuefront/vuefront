import VfMRow from "./row.vue";
import VfMCol from "../col/col.vue";
import VfAImage from "../../atoms/image/image.vue";
import "./row.scss";
import "../col/col.scss";
import "../../atoms/image/image.scss";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/row",
  component: VfMRow,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    alignV: {
      options: ["start", "center", "end"],
      control: { type: "radio" },
    },
    alignH: {
      options: ["start", "center", "end"],
      control: { type: "radio" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMRow, VfMCol, VfAImage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-row v-bind="args">
    <vf-m-col md="2" sm="12">
      <vf-a-image src="https://via.placeholder.com/400?text=Col 1" />
    </vf-m-col>
    <vf-m-col md="5" sm="12">
      <vf-a-image src="https://via.placeholder.com/400?text=Col 2" />
    </vf-m-col>
    <vf-m-col md="3" sm="12">
      <vf-a-image src="https://via.placeholder.com/400?text=Col 3" />
    </vf-m-col>
  </vf-m-row>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  tag: "div",
  noGutters: false,
  alignV: null,
  alignH: null,
};
