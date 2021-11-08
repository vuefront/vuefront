import VfLMRating from "./rating.loader.vue";
import "./rating.scss";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "loader/molecule/rating",
  component: VfLMRating,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfLMRating },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const rating = ref(4);
    return { args, rating };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-l-m-rating v-model="rating" v-bind="args"/>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
