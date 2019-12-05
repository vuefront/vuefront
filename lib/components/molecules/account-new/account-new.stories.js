import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMAccountNew from './account-new.vue';
Vue.component('vfMAccountNew', vfMAccountNew);
storiesOf('Molecule|Account new', module).add('default', function () {
  return {
    components: {
      vfMAccountNew: vfMAccountNew
    },
    template: "<div style=\"width:500px\"><vf-m-account-new /></div>"
  };
}, {
  info: {}
});