import VfMRow from "../row/row.vue.mjs";
import VfMCol from "./col.vue.mjs";
import VfAImage from "../../atoms/image/image.vue.mjs";
import "../row/row.scss.mjs";
import "./col.scss.mjs";
import "../../atoms/image/image.scss.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/col",
  component: VfMRow,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    alignSelf: {
      options: ["start", "center", "end"],
      control: {
        type: "radio"
      }
    }
  }
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfMRow,
    VfMCol,
    VfAImage
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-row v-bind="args">
    <vf-m-col v-bind="args">
      <vf-a-image src="https://via.placeholder.com/400?text=Column" />
    </vf-m-col>
  </vf-m-row>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  alignSelf: null,
  xs: 12,
  sm: 6,
  md: 3,
  lg: 2
};
//# sourceMappingURL=col.stories.mjs.map