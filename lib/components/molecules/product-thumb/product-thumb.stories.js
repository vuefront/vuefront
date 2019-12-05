import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-thumb.vue';
storiesOf('molecule|Product Thumb', module).add('default', function () {
  return {
    components: {
      vfMProductThumb: component
    },
    template: "<vf-m-product-thumb show=\"true\">This is an alert message</vf-m-product-thumb>"
  };
}, {
  info: {}
});