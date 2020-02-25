import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductThumb from './product-thumb.vue';
import vfLMProductThumb from './product-thumb.loader.vue';
import product from '@/.storybook/store/product.js';
import "./product-thumb.scss";
Vue.component('vfMProductThumb', vfMProductThumb);
storiesOf('molecule|Product Thumb', module).addDecorator(function () {
  return {
    template: "<div style=\"width:300px\"><story/></div>"
  };
}).add('default', function () {
  return {
    components: {
      vfMProductThumb: vfMProductThumb
    },
    template: "<vf-m-product-thumb :product=\"product\"></vf-m-product-thumb>",
    data: function data() {
      return {
        product: product
      };
    }
  };
}, {
  info: {}
}).add('loading', function () {
  return {
    components: {
      vfLMProductThumb: vfLMProductThumb
    },
    template: "<vf-l-m-product-thumb ></vf-l-m-product-thumb>"
  };
}, {
  info: {}
}).add('loaded', function () {
  return {
    components: {
      vfMProductThumb: vfMProductThumb,
      vfLMProductThumb: vfLMProductThumb
    },
    template: "<div>\n            <vf-m-product-thumb v-if=\"loaded\" :product=\"product\"></vf-m-product-thumb>\n            <vf-l-m-product-thumb v-else></vf-l-m-product-thumb>\n            </div>",
    data: function data() {
      return {
        product: product,
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