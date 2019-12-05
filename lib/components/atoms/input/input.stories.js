import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aInput from './input.vue';
Vue.component('vfAInput', aInput);
storiesOf('Atom|Input', module).add('default', function () {
  return '<vf-a-input  />';
}, {
  info: {}
});