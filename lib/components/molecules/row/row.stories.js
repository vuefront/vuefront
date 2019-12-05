import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMCol from '../col/col.vue';
import vfMRow from './row.vue';
Vue.component('vfMCol', vfMCol);
Vue.component('vfMRow', vfMRow);
storiesOf('molecule| Row & Col', module).add('default', function () {
  return {
    components: {
      vfMRow: vfMRow,
      vfMCol: vfMCol
    },
    template: "<vf-m-row><vf-m-col>This is an alert message</vf-m-col></vf-m-col>"
  };
}, {
  info: {}
});