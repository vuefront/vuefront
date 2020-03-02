import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfAAlert from './alert.vue';
Vue.component('vfAAlert', vfAAlert);
storiesOf('atom|!!!Alert', module).add('default', () => ({
  components: {
    vfAAlert
  },
  template: `<vf-a-alert show="true">This is an alert message</vf-a-alert>`
}), {
  info: {
    summary: `<span style="color:red">Important!</span> Alert should be a molecule since it can include other components via Slots.`
  }
}).add('dismissible', () => ({
  components: {
    vfAAlert
  },
  template: `<vf-a-alert show="true" dismissible>This is an alert message</vf-a-alert>`
}), {
  info: {
    summary: `<span style="color:red">Important!</span> Alert should be a molecule since it can include other components via Slots.`
  }
});