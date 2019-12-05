import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aLink from './link.vue';
Vue.component('vfALink', aLink);
storiesOf('Atom|Link', module).add('default', function () {
  return '<vf-a-link to="#">Link</vf-a-link>';
}, {
  info: {}
});