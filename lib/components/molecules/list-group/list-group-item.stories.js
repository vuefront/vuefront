import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './list-group-item.vue';
storiesOf('molecule|List Group Item', module).add('default', function () {
  return {
    components: {
      vfMListGroupItem: component
    },
    template: "<vf-m-list-group-item show=\"true\">This is an alert message</vf-m-list-group-item>"
  };
}, {
  info: {}
});