import VfOSidebar from "./sidebar.vue.mjs";
import VfAButton from "../../atoms/button/button.vue.mjs";
import "../../atoms/button/button.scss.mjs";
import "./sidebar.scss.mjs";
import { useStore } from "vuex"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "organism/sidebar",
  component: VfAButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfOSidebar,
    VfAButton
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const store = useStore();

    const toggleSidebar = () => {
      store.commit("vuefront/toggleSidebar");
    };

    return {
      args,
      toggleSidebar
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-o-sidebar v-bind="args"/>
  <vf-a-button @click="toggleSidebar">Toggle</vf-a-button>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {};
//# sourceMappingURL=sidebar.stories.mjs.map