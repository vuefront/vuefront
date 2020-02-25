import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMRating from './rating.vue';
import vfLMRating from './rating.loader.vue';
Vue.component('vfMRating', vfMRating);
storiesOf('molecule|Rating', module).add('default', function () {
  return {
    components: {
      vfMRating: vfMRating
    },
    template: "<vf-m-rating value=\"3\"></vf-m-rating>"
  };
}, {
  info: {}
}).add('loading', function () {
  return {
    components: {
      vfLMRating: vfLMRating
    },
    template: "\n            <vf-l-m-rating ></vf-l-m-rating>\n            "
  };
}, {
  info: {}
}).add('loaded', function () {
  return {
    components: {
      vfMRating: vfMRating,
      vfLMRating: vfLMRating
    },
    template: "<div>\n            <vf-m-rating v-if=\"loaded\" value=\"5\"></vf-m-rating>\n            <vf-l-m-rating v-else></vf-l-m-rating>\n            </div>",
    data: function data() {
      return {
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