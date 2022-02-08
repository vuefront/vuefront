import VfOPostModule from "./post-module.vue";
import "./post-module.scss";
import faker from "@faker-js/faker";
import { getPost } from "../../../utils/fakeData";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/post-module",
  component: VfOPostModule,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOPostModule },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args, title: faker.lorem.words(2) };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-o-post-module v-bind="args">
  {{title}}
  </vf-o-post-module>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  column: false,
  items: [getPost(), getPost(), getPost(), getPost(), getPost()],
};
