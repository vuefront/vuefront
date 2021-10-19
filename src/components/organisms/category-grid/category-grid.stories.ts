import VfOCategoryGrid from "./category-grid.vue";
import faker from 'faker'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/category-grid",
  component: VfOCategoryGrid,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOCategoryGrid },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-o-category-grid v-bind="args"/>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  items: [
    {
      keyword: "test",
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
    },
    {
      keyword: "test",
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
    },
    {
      keyword: "test",
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
    },
    {
      keyword: "test",
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2),
    },
  ],
};
