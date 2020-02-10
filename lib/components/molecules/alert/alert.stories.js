import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMAlert from './alert.vue';
Vue.component('vfMAlert', vfMAlert);
storiesOf('molecule|!!!Alert', module).add('default', function () {
  return {
    components: {
      vfMAlert: vfMAlert
    },
    template: "<vf-m-alert show=\"true\">This is an alert message</vf-m-alert>"
  };
}, {
  info: {
    summary: "<span style=\"color:red\">Important!</span> Alert should be a molecule since it can include other components via Slots."
  }
}).add('dismissible', function () {
  return {
    components: {
      vfMAlert: vfMAlert
    },
    template: "<vf-m-alert show=\"true\" dismissible>This is an alert message</vf-m-alert>"
  };
}, {
  info: {
    summary: "<span style=\"color:red\">Important!</span> Alert should be a molecule since it can include other components via Slots."
  }
});