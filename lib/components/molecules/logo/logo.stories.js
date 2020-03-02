import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import component from './logo.vue';
storiesOf('molecule|Logo', module).add('default', () => ({
  components: {
    vfMLogo: component
  },
  template: `<vf-m-logo show="true">This is an alert message</vf-m-logo>`
}), {
  info: {}
});