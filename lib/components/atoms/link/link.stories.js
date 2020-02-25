import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfALink from './link.vue';
Vue.component('vfALink', vfALink);
storiesOf('Atom|Link', module).add('default', function () {
  return '<vf-a-link to="#">Link</vf-a-link>';
}, {
  info: {}
});