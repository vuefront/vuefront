import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMCompareLink from './compare-link.vue';
Vue.component('vfMCompareLink', vfMCompareLink);
storiesOf('molecule|Compare Link', module).add('default', function () {
  return {
    components: {
      vfMCompareLink: vfMCompareLink
    },
    template: "<vf-m-compare-link />"
  };
}, {
  info: {}
});