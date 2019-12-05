import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-thumb-inline.vue';
Vue.component('vfMProductThumbInline', component);
storiesOf('molecule|Product Thumb Inline', module).add('default', function () {
  return {
    components: {
      vfMProductThumbInline: component
    },
    template: "<vf-m-product-thumb-inline show=\"true\">This is an alert message</vf-m-product-thumb-inline>"
  };
}, {
  info: {}
});