import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfAIcon from './icon.vue';
import './icon.scss';
Vue.component('vfAIcon', vfAIcon);
storiesOf('Atom|Icon', module).add('default', function () {
  return {
    components: {
      vfAIcon: vfAIcon
    },
    template: "<div>\n            <vf-a-icon icon=\"plus\" />\n            <vf-a-icon icon=\"shopping-cart\" />\n            <vf-a-icon icon=\"heart\" />\n            <vf-a-icon icon=\"exchange-alt\" />\n            <vf-a-icon icon=\"user-circle\" />\n            <vf-a-icon icon=\"long-arrow-alt-right\" />\n            <vf-a-icon icon=\"angle-down\" />\n            <vf-a-icon icon=\"angle-search\" />\n            </div>"
  };
}, {
  info: {
    summary: ""
  }
});