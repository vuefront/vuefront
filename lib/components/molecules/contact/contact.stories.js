import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMContact from './contact.vue';
Vue.component('vfMContact', vfMContact);
storiesOf('molecule|Contact', module).add('default', function () {
  return {
    components: {
      vfMContact: vfMContact
    },
    template: "<vf-m-contact :contact=\"contact\"/>",
    data: function data() {
      return {
        contact: {
          address: '12 East 5 Street',
          email: "hello@vuefront.com",
          telephone: "646.454.3232",
          fax: "646.454.3232",
          comment: "Simple comment"
        }
      };
    }
  };
}, {
  info: {}
});