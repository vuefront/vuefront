import VfMRating from "./rating.vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "molecule/rating",
  component: VfMRating,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfMRating },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const rating = ref(4);
    return { args, rating };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-rating v-model="rating" v-bind="args"/>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  color: "#6AA6C4",
  readonly: false,
  size: 13,
};
