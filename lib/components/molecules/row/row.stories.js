import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMCol from '../col/col.vue';
import vfMRow from './row.vue';
Vue.component('vfMCol', vfMCol);
Vue.component('vfMRow', vfMRow);
storiesOf('molecule| Row & Col', module).addDecorator(function () {
  return {
    template: "<div style=\"width:500px\"><story/></div>"
  };
}).add('default', function () {
  return {
    components: {
      vfMRow: vfMRow,
      vfMCol: vfMCol
    },
    template: "<vf-m-row><vf-m-col><div style=\"background:#eee; padding:10px; height:50px; width:100%\">Col</div></vf-m-col></vf-m-row>"
  };
}, {
  info: {}
});