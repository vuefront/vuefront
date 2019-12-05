import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aIcon from './icon.vue';
Vue.component('vfAIcon', aIcon);
storiesOf('Atom|Icon', module).add('default', function () {
  return '<vf-a-icon icon="plus" />';
}, {
  info: {}
});