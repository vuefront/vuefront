import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aHeading from './heading.vue';
Vue.component('vfAHeading', aHeading);
storiesOf('Atom|Heading', module).add('default', function () {
  return '<vf-a-heading>heading</vf-a-heading>';
}, {
  info: {}
});