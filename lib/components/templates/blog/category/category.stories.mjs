import VfTBlogCategory from "./category.vue.mjs";
import faker from "faker";
import { getPost } from "../../../../utils/fakeData.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "template/blog/category",
  component: VfTBlogCategory,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfTBlogCategory
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-t-blog-category v-bind="args"/>'
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  category: {
    name: faker.random.words(2),
    description: faker.lorem.paragraphs(4),
    categories: [{
      keyword: "test",
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2)
    }, {
      keyword: "test",
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2)
    }, {
      keyword: "test",
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2)
    }, {
      keyword: "test",
      image: "https://via.placeholder.com/300",
      imageLazy: "https://via.placeholder.com/10x7",
      name: faker.random.words(2)
    }]
  },
  posts: {
    totalPages: 12,
    number: 7,
    content: [getPost(), getPost(), getPost(), getPost(), getPost(), getPost(), getPost()]
  },
  gridSize: 4
};
//# sourceMappingURL=category.stories.mjs.map