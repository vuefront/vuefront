import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMContainer from './container.vue';
Vue.component('vfMContainer', vfMContainer);
storiesOf('molecule|Container', module).add('default', function () {
  return {
    components: {
      vfMContainer: vfMContainer
    },
    template: "\n            <div style=\"width:800px\">\n            <vf-m-container>\n                <vf-m-row>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                </vf-m-row>\n                <vf-m-row>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                </vf-m-row>\n            </vf-m-container>\n            </div>"
  };
}, {
  info: {}
}).add('fluid', function () {
  return {
    components: {
      vfMContainer: vfMContainer
    },
    template: "\n            <div style=\"width:1200px\">\n            <vf-m-container fluid>\n                <vf-m-row>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                </vf-m-row>\n                <vf-m-row>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                    <vf-m-col>\n                        <div style=\"background:#eee; height:50px; width:100%\"></div>\n                    </vf-m-col>\n                </vf-m-row>\n            </vf-m-container>\n            </div>"
  };
}, {
  info: {}
});