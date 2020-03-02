import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMProductThumb from './product-thumb.vue';
import vfLMProductThumb from './product-thumb.loader.vue';
import product from '@/.storybook/store/product.js';
import "./product-thumb.scss";
Vue.component('vfMProductThumb', vfMProductThumb);
storiesOf('molecule|Product Thumb', module).addDecorator(story => ({
  template: `<div style="width:300px"><story/></div>`
})).add('default', () => ({
  components: {
    vfMProductThumb
  },
  template: `<vf-m-product-thumb :product="product"></vf-m-product-thumb>`,
  data: () => ({
    product
  })
}), {
  info: {}
}).add('loading', () => ({
  components: {
    vfLMProductThumb
  },
  template: `<vf-l-m-product-thumb ></vf-l-m-product-thumb>`
}), {
  info: {}
}).add('loaded', () => ({
  components: {
    vfMProductThumb,
    vfLMProductThumb
  },
  template: `<div>
            <vf-m-product-thumb v-if="loaded" :product="product"></vf-m-product-thumb>
            <vf-l-m-product-thumb v-else></vf-l-m-product-thumb>
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