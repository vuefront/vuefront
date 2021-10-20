import VfMCard from "./card.vue.mjs";
import VfMCardBody from "./body.vue.mjs";
import VfMCardFooter from "./footer.vue.mjs";
import "./card.scss.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/card",
  component: VfMCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfMCard,
    VfMCardBody,
    VfMCardFooter
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-card style="width:300px;" v-bind="args">
  <vf-m-card-body>Card body</vf-m-card-body>
  <vf-m-card-footer>Card footer</vf-m-card-footer>
</vf-m-card>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  title: "Title",
  noBody: false
};
//# sourceMappingURL=card.stories.mjs.map