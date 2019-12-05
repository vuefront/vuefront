import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aSelect from './select.vue';
Vue.component('vfASelect', aSelect);
storiesOf('Atom|Select', module).add('default', function () {
  return {
    components: {
      aSelect: aSelect
    },
    template: "<vf-a-select :options=\"options\" />",
    data: function data() {
      return {
        options: {
          0: "Option 1",
          1: "Option 2",
          2: "Option 3"
        }
      };
    }
  };
}, {
  info: {}
});