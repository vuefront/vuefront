import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import text from './text.vue';
storiesOf('molecule|Product Option Text', module).add('default', function () {
  return {
    components: {
      vfMProductOptionText: text
    },
    template: "<vf-m-product-option-text show=\"true\">This is an alert message</vf-m-product-option-text>"
  };
}, {
  info: {}
});