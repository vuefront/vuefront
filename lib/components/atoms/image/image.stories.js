import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aImage from './image.vue';
Vue.component('vfAImage', aImage);
storiesOf('Atom|Image', module).add('default', function () {
  return '<vf-a-image src="https://via.placeholder.com/150" />';
}, {
  info: {}
});