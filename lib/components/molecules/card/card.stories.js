import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMCard from './card.vue';
import vfMCardBody from './body.vue';
import vfMCardFooter from './footer.vue';
Vue.component('vfMCard', vfMCard);
Vue.component('vfMCardBody', vfMCardBody);
Vue.component('vfMCardFooter', vfMCardFooter);
storiesOf('molecule|!!!Card', module).add('default', function () {
  return {
    components: {
      vfMCard: vfMCard,
      vfMCardBody: vfMCardBody,
      vfMCardFooter: vfMCardFooter
    },
    template: "\n            <vf-m-card style=\"width:300px;\">\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card>"
  };
}, {
  info: {}
}).add('no body', function () {
  return {
    components: {
      vfMCard: vfMCard,
      vfMCardBody: vfMCardBody,
      vfMCardFooter: vfMCardFooter
    },
    template: "\n            <vf-m-card noBody style=\"width:300px;\">\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card>"
  };
}, {
  info: {}
}).add('!!!color', function () {
  return {
    components: {
      vfMCard: vfMCard,
      vfMCardBody: vfMCardBody,
      vfMCardFooter: vfMCardFooter
    },
    template: "<div style=\"width:300px;\">\n            <vf-m-card noBody bodyBgColor=\"primary\" >\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card>\n\n            <vf-m-card bodyBgColor=\"primary\" >\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card>\n\n            <vf-m-card bodyBgColor=\"danger\">\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card>\n\n            <vf-m-card bodyBgColor=\"warning\">\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card>\n\n            <vf-m-card bodyBgColor=\"success\">\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card>\n\n            <vf-m-card bodyBgColor=\"info\">\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card>\n\n            <vf-m-card bodyBgColor=\"light\">\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card>\n            \n            <vf-m-card bodyBgColor=\"dark\">\n                <vf-m-card-body>Card body</vf-m-card-body>\n                <vf-m-card-footer>Card footer</vf-m-card-footer>\n            </vf-m-card></div>"
  };
}, {
  info: {
    summary: "<span style=\"color:red\">Important!</span> Background Colors Need Refactoring and does not work with noBody prop"
  }
});