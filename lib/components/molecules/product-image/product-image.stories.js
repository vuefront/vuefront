import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductImage from './product-image.vue';
import vfMProductImagePopup from './popup.vue';
import vfLMProductImage from './product-image.loader.vue';
import product from '@/.storybook/store/product.js';
Vue.component('vfMProductImage', vfMProductImage);
Vue.component('vfMProductImagePopup', vfMProductImagePopup);
Vue.component('vfLMProductImage', vfLMProductImage);
storiesOf('molecule|Product Image', module).addDecorator(function () {
  return {
    template: "<div style=\"width:400px\"><story/></div>"
  };
}).add('default', function () {
  return {
    components: {
      vfMProductImage: vfMProductImage,
      vfMProductImagePopup: vfMProductImagePopup
    },
    template: "<vf-m-product-image :product=\"product\"></vf-m-product-image>",
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
      vfLMProductImage: vfLMProductImage
    },
    template: "<vf-l-m-product-image ></vf-l-m-product-image>"
  };
}, {
  info: {}
}).add('loaded', function () {
  return {
    components: {
      vfMProductImage: vfMProductImage,
      vfLMProductImage: vfLMProductImage
    },
    template: "<div>\n            <vf-m-product-image v-if=\"loaded\" :product=\"product\"></vf-m-product-image>\n            <vf-l-m-product-image v-else></vf-l-m-product-image>\n            </div>",
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