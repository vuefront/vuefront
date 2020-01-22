import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './product-attribute.vue';
import product from '@/.storybook/store/product.js';
storiesOf('molecule|Product Attribute', module).addDecorator(function () {
  return {
    template: "<div style=\"width:400px\"><story/></div>"
  };
}).add('default', function () {
  return {
    components: {
      vfMProductAttribute: component
    },
    template: "<vf-m-product-attribute :attributes=\"attributes\"></vf-m-product-attribute>",
    data: function data() {
      return {
        attributes: product.attributes
      };
    }
  };
}, {
  info: {}
}).add('one attribute', function () {
  return {
    components: {
      vfMProductAttribute: component
    },
    template: "<vf-m-product-attribute :attributes=\"attributes\"></vf-m-product-attribute>",
    data: function data() {
      return {
        attributes: [{
          "name": "Clockspeed",
          "options": ["100mhz"],
          "__typename": "productAttribute"
        }]
      };
    }
  };
}, {
  info: {}
});