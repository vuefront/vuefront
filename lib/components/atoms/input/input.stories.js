import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfAInput from './input.vue';
Vue.component('vfAInput', vfAInput);
storiesOf('Atom|Input', module).add('default (text)', function () {
  return '<vf-a-input  />';
}, {
  info: {}
}).add('number', function () {
  return '<vf-a-input type="number"/>';
}, {
  info: {}
}).add('email', function () {
  return '<vf-a-input type="email"/>';
}, {
  info: {}
}).add('password', function () {
  return '<vf-a-input type="password"/>';
}, {
  info: {}
}).add('search', function () {
  return '<vf-a-input type="search"/>';
}, {
  info: {}
}).add('url', function () {
  return '<vf-a-input type="url"/>';
}, {
  info: {}
}).add('tel', function () {
  return '<vf-a-input type="tel"/>';
}, {
  info: {}
}).add('date', function () {
  return '<vf-a-input type="date"/>';
}, {
  info: {}
}).add('time', function () {
  return '<vf-a-input type="time"/>';
}, {
  info: {}
}).add('range', function () {
  return '<vf-a-input type="range"/>';
}, {
  info: {}
}).add('color', function () {
  return '<div style="width:50px"><vf-a-input type="color"/></div>';
}, {
  info: {}
});