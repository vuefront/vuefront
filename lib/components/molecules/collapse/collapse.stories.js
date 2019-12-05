import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMCollapse from './collapse.vue'; //required for collapse to work. needs refactoring.

import { VBToggle } from "bootstrap-vue";
Vue.component('vfMCollapse', vfMCollapse);
storiesOf('molecule|!!!Collapse', module).add('!!!default', function () {
  return {
    components: {
      vfMCollapse: vfMCollapse
    },
    template: "<div style=\"width:300px\">\n            <vf-a-button variant=\"primary\" v-b-toggle.collapse-1>Toggle Collapse</vf-a-button>\n            <vf-m-collapse id=\"collapse-1\">\n                <vf-m-card>\n                    <vf-a-heading level=\"1\">heading</vf-a-heading>\n                    <p>Lorem ipsum dolor et sank de lupino isumo</p>\n                </vf-m-card>\n            </vf-m-collapse>\n            </div>",
    directives: {
      BToggle: VBToggle
    }
  };
}, {
  info: {
    summary: "<span style=\"color:red\">Important!</span> Collapse requires Boostrap-vue VBToggle to work. Needs refactoring and see if we can remove bootstrap directive"
  }
});