import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductImage from './product-image.vue';
import vfMProductImagePopup from './popup.vue';
import vfLMProductImage from './product-image.loader.vue';
import product from '@/.storybook/store/product.js';
Vue.component('vfMProductImage', vfMProductImage);
Vue.component('vfMProductImagePopup', vfMProductImagePopup);
Vue.component('vfLMProductImage', vfLMProductImage);
storiesOf('molecule|Product Image', module).addDecorator(story => ({
  template: `<div style="width:400px"><story/></div>`
})).add('default', () => ({
  components: {
    vfMProductImage,
    vfMProductImagePopup
  },
  template: `<vf-m-product-image :product="product"></vf-m-product-image>`,
  data: () => ({
    product
  })
}), {
  info: {}
}).add('loading', () => ({
  components: {
    vfLMProductImage
  },
  template: `<vf-l-m-product-image ></vf-l-m-product-image>`
}), {
  info: {}
}).add('loaded', () => ({
  components: {
    vfMProductImage,
    vfLMProductImage
  },
  template: `<div>
            <vf-m-product-image v-if="loaded" :product="product"></vf-m-product-image>
            <vf-l-m-product-image v-else></vf-l-m-product-image>
            </div>`,
  data: () => ({
    product,
    loaded: false
  }),

  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1500);
  }

}), {
  info: {}
});