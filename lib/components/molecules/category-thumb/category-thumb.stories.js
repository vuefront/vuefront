import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import vfMCategoryThumb from "./category-thumb.vue";
import vfLMCategoryThumb from "./category-thumb.loader.vue";
Vue.component("VfMCategoryThumb", vfMCategoryThumb);
Vue.component("VfLMCategoryThumb", vfLMCategoryThumb);
storiesOf("molecule|Category Thumb", module).add("default", () => ({
  components: {
    vfMCategoryThumb
  },
  template: `<div style="width:150px">
                <vf-m-category-thumb :category="category" width="200"/>
            </div>`,

  data() {
    return {
      category: {
        keyword: "test",
        image: "https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-1200x750.jpg",
        imageLazy: "https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-10x7.jpg",
        name: "Shoes"
      }
    };
  }

}), {
  info: {}
}).add("loading", () => ({
  components: {
    vfLMCategoryThumb
  },
  template: `<div style="width:150px">
            <vf-l-m-category-thumb/>
            </div>`
}), {
  info: {}
}).add("loaded", () => ({
  components: {
    vfMCategoryThumb,
    vfLMCategoryThumb
  },
  template: `<div style="width:150px">
            <vf-m-category-thumb v-if="loaded" :category="category"/>
            <vf-l-m-category-thumb v-else />
            </div>`,

  data() {
    return {
      category: {
        keyword: "test",
        image: "https://via.placeholder.com/150x90",
        imageLazy: "https://via.placeholder.com/1",
        name: "Shoes"
      },
      loaded: false
    };
  },

  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1500);
  }

}), {
  info: {}
});