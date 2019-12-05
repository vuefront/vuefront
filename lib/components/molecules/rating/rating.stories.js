import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './rating.vue';
storiesOf('molecule|Rating', module).add('default', function () {
  return {
    components: {
      vfMRating: component
    },
    template: "<vf-m-rating show=\"true\">This is an alert message</vf-m-rating>"
  };
}, {
  info: {}
});