import VfOModal from "./modal.vue";
import VfAButton from "../../atoms/button/button.vue";
import { ref } from "vue";
import faker from "faker";
import "./modal.scss";
import "../../atoms/button/button.scss";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/modal",
  component: VfOModal,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOModal, VfAButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const show = ref(false);
    return {
      args,
      show,
      content: faker.lorem.paragraphs(3),
      header: faker.lorem.words(2),
      footer: faker.lorem.words(2),
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <vf-o-modal v-model="show" v-bind="args">
    <template #header>
      {{header}}
    </template>
    {{content}}
    <template #footer>
      {{footer}}
    </template>
  </vf-o-modal>
  <vf-a-button @click="show = true">Show</vf-a-button>
  `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  btnClose: false,
  small: false,
  large: false,
  full: false,
  force: false,
  transition: "modal",
};
