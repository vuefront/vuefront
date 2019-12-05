import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { tAccountAccount } from '../../../templates/';
import { aHeading, aLink } from '../../../atoms/';
Vue.component('vfTAccountAccount', tAccountAccount);
Vue.component('vfAHeading', aHeading);
Vue.component('vfALink', aLink);
storiesOf('template|Account/Account', module).add('default', function () {
  return '<vf-t-account-account ></vf-t-account-account>';
});