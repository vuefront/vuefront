import VfOHeaderMobile from "./header-mobile.vue.mjs";
import "./header-mobile.scss.mjs"; // import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "organism/header-mobile",
  component: VfOHeaderMobile,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
  parameters: {//👇 The viewports object from the Essentials addon
    // viewport: {
    //   //👇 The viewports you want to use
    //   viewports: INITIAL_VIEWPORTS,
    //   //👇 Your own default viewport
    //   defaultViewport: "iphone6",
    // },
  }
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfOHeaderMobile
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-o-header-mobile v-bind="args"/>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {}; // Default.parameters = {
//   viewport: {
//     defaultViewport: "iphonex",
//   },
// };
//# sourceMappingURL=header-mobile.stories.mjs.map