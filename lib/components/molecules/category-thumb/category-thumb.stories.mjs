import VfMCategoryThumb from "./category-thumb.vue.mjs";
import "./category-thumb.scss.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/category-thumb",
  component: VfMCategoryThumb,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfMCategoryThumb
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-category-thumb v-bind="args" style="width: 300px"/>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  width: 300,
  height: 300,
  category: {
    keyword: "test",
    image: "https://opencart3.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-1200x750.jpg",
    imageLazy: "https://opencart3.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-10x7.jpg",
    name: "Shoes"
  }
};
//# sourceMappingURL=category-thumb.stories.mjs.map