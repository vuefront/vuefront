import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMPostThumb from './post-thumb.vue';
import vfLMPostThumb from './post-thumb.loader.vue';
import post from '@/.storybook/store/post.js';
Vue.component('vfMPostThumb', vfMPostThumb);
storiesOf('molecule|Post Thumb', module).add('default', function () {
  return {
    components: {
      vfMPostThumb: vfMPostThumb
    },
    template: "<div style=\"max-width:300px\">\n            <vf-m-post-thumb :post=\"post\"></vf-m-post-thumb>\n            </div>",
    data: function data() {
      return {
        post: post
      };
    }
  };
}, {
  info: {}
}).add('loading', function () {
  return {
    components: {
      vfLMPostThumb: vfLMPostThumb
    },
    template: "<div style=\"width:300px\">\n            <vf-l-m-post-thumb ></vf-l-m-post-thumb>\n            </div>"
  };
}, {
  info: {}
}).add('loaded', function () {
  return {
    components: {
      vfMPostThumb: vfMPostThumb,
      vfLMPostThumb: vfLMPostThumb
    },
    template: "<div style=\"width:300px\">\n            <vf-m-post-thumb v-if=\"loaded\" :post=\"post\"></vf-m-post-thumb>\n            <vf-l-m-post-thumb v-else></vf-l-m-post-thumb>\n            </div>",
    data: function data() {
      return {
        post: post,
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