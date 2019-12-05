import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './field.vue';
storiesOf('molecule|Field', module).add('default', function () {
  return {
    components: {
      vfMField: component
    },
    template: "<vf-m-field show=\"true\">This is an alert message</vf-m-field>"
  };
}, {
  info: {}
});