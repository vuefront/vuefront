import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aBadge from './badge.vue';
Vue.component('vfABadge', aBadge);
storiesOf('Atom|Badge', module).add('default', function () {
  return {
    components: {
      vfABadge: aBadge
    },
    template: "<vf-a-badge>Badge</vf-a-badge>"
  };
}, {
  info: {}
}).add('!!!sizes', function () {
  return {
    components: {
      vfABadge: aBadge
    },
    template: "<div>\n            <h1><vf-a-badge>Badge</vf-a-badge></h1>\n            <h2><vf-a-badge>Badge</vf-a-badge></h2>\n            <h3><vf-a-badge>Badge</vf-a-badge></h3>\n            <h4><vf-a-badge>Badge</vf-a-badge></h4>\n            <h5><vf-a-badge>Badge</vf-a-badge></h5>\n            <h6><vf-a-badge>Badge</vf-a-badge></h6>\n        </div>"
  };
}, {
  info: {}
});