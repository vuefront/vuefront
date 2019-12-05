import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './input-group.vue';
storiesOf('molecule|Input Group', module).add('default', function () {
  return {
    components: {
      vfMInputGroup: component
    },
    template: "<vf-m-input-group show=\"true\">This is an alert message</vf-m-input-group>"
  };
}, {
  info: {}
});