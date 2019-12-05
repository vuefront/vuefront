import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import aTextarea from './textarea.vue';
Vue.component('vfATextarea', aTextarea);
storiesOf('Atom|Textarea', module).add('default', function () {
  return '<vf-a-textarea src="https://via.placeholder.com/150" />';
}, {
  info: {}
});