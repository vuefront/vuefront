import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import pAccountAccount from './account.vue';
Vue.component('vfPAccountAccount', pAccountAccount);
storiesOf('page|Account/Account', module).add('default', function () {
  return '<vf-p-account-account ></vf-p-account-account>';
});