import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMCategoryThumb from './category-thumb.vue';
import vfLMCategoryThumb from './category-thumb.loader.vue';
Vue.component('vfMCategoryThumb', vfMCategoryThumb);
Vue.component('vfLMCategoryThumb', vfLMCategoryThumb);
storiesOf('molecule|Category Thumb', module).add('default', function () {
  return {
    components: {
      vfMCategoryThumb: vfMCategoryThumb
    },
    template: "<div style=\"width:150px\">\n                <vf-m-category-thumb :category=\"category\" width=\"200\"/>\n            </div>",
    data: function data() {
      return {
        category: {
          keyword: "test",
          image: "https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-1200x750.jpg",
          imageLazy: "https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-10x7.jpg",
          name: "Shoes"
        }
      };
    }
  };
}, {
  info: {}
}).add('loading', function () {
  return {
    components: {
      vfLMCategoryThumb: vfLMCategoryThumb
    },
    template: "<div style=\"width:150px\">\n            <vf-l-m-category-thumb/>\n            </div>"
  };
}, {
  info: {}
}).add('loaded', function () {
  return {
    components: {
      vfMCategoryThumb: vfMCategoryThumb,
      vfLMCategoryThumb: vfLMCategoryThumb
    },
    template: "<div style=\"width:150px\">\n            <vf-m-category-thumb v-if=\"loaded\" :category=\"category\"/>\n            <vf-l-m-category-thumb v-else />\n            </div>",
    data: function data() {
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
    mounted: function mounted() {
      var _this = this;

      setTimeout(function () {
        _this.loaded = true;
      }, 1500);
    }
  };
}, {
  info: {}
});