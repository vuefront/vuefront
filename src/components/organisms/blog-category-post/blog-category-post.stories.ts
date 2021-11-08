import VfOBlogCategoryPost from "./blog-category-post.vue";
import faker from "faker";
import { getPost } from "../../../utils/fakeData";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "organism/blog-category-post",
  component: VfOBlogCategoryPost,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VfOBlogCategoryPost },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-o-blog-category-post v-bind="args"/>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  posts: {
    totalPages: 12,
    number: 7,
    content: [getPost(), getPost(), getPost(), getPost(), getPost()],
  },
  gridSize: 3,
};
