import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfAButton from './button.vue';
import './button.scss';
Vue.component('vfAButton', vfAButton);
storiesOf('Atom|Button', module).add('default', function () {
  return {
    components: {
      vfAButton: vfAButton
    },
    template: "<vf-a-button>Primary</vf-a-button>"
  };
}, {
  info: {}
}).add('colors', function () {
  return {
    components: {
      vfAButton: vfAButton
    },
    template: "<div>\n                <vf-a-button color=\"primary\">Primary</vf-a-button>\n                <vf-a-button color=\"success\">Success</vf-a-button>\n                <vf-a-button color=\"danger\">Danger</vf-a-button>\n                <vf-a-button color=\"warning\">Warning</vf-a-button>\n                <vf-a-button color=\"info\">Info</vf-a-button>\n                <vf-a-button color=\"light\">Info</vf-a-button>\n                <vf-a-button color=\"dark\">Info</vf-a-button>\n            </div>\n            "
  };
}, {
  info: {}
}).add('!!!sizes', function () {
  return {
    components: {
      vfAButton: vfAButton
    },
    template: "<div>\n                <vf-a-button size=\"sm\">Primary</vf-a-button>\n                <vf-a-button size=\"md\">Primary</vf-a-button>\n                <vf-a-button size=\"lg\">Primary</vf-a-button>\n            </div>\n            "
  };
}, {
  info: {
    summary: "<span style=\"color:red\">Important!</span> Need to add Sizes"
  }
}).add('pressed', function () {
  return {
    components: {
      vfAButton: vfAButton
    },
    template: "<div>\n                <vf-a-button pressed=\"true\" color=\"primary\">Primary</vf-a-button>\n                <vf-a-button pressed=\"true\" color=\"success\">Success</vf-a-button>\n                <vf-a-button pressed=\"true\" color=\"danger\">Danger</vf-a-button>\n                <vf-a-button pressed=\"true\" color=\"warning\">Warning</vf-a-button>\n                <vf-a-button pressed=\"true\" color=\"info\">Info</vf-a-button>\n            </div>\n            "
  };
}, {
  info: {}
}).add('active', function () {
  return {
    components: {
      vfAButton: vfAButton
    },
    template: "<div>\n                <vf-a-button active=\"true\" color=\"primary\">Primary</vf-a-button>\n                <vf-a-button active=\"true\" color=\"success\">Success</vf-a-button>\n                <vf-a-button active=\"true\" color=\"danger\">Danger</vf-a-button>\n                <vf-a-button active=\"true\" color=\"warning\">Warning</vf-a-button>\n                <vf-a-button active=\"true\" color=\"info\">Info</vf-a-button>\n            </div>\n            "
  };
}, {
  info: {}
});