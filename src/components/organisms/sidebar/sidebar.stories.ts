import VfOSidebar from "./sidebar.vue";
import VfAButton from "../../atoms/button/button.vue";
import "../../atoms/button/button.scss";
import "./sidebar.scss";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/sidebar",
  component: VfAButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOSidebar, VfAButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const show = ref(false);
    return { args, show };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-o-sidebar :open="show" v-bind="args" @close="show = false">
    Content
    <template #top>
      Header title
    </template>
  </vf-o-sidebar>
  <vf-a-button @click="show = true">Toggle</vf-a-button>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  right: false,
};
