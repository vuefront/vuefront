import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMButtonGroup from './button-group.vue';
import './button-block.scss';
Vue.component('vfMButtonGroup', vfMButtonGroup);
storiesOf('molecule|Button Group', module).add('default', function () {
  return {
    components: {
      vfMButtonGroup: vfMButtonGroup
    },
    template: `<vf-m-button-group>
        <vf-a-button>Submit</vf-a-button>
        <vf-a-button>Cancel</vf-a-button>
        </vf-m-button-group>`
  };
}, {
  info: {}
});