import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './review.vue';
storiesOf('molecule|Review', module).add('default', function () {
  return {
    components: {
      vfMReview: component
    },
    template: "<vf-m-review show=\"true\">This is an alert message</vf-m-review>"
  };
}, {
  info: {}
});