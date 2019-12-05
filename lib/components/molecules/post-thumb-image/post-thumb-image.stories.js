import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import mPostThumbImage from './post-thumb-image.vue';
Vue.component('vfMPostThumbImage', mPostThumbImage);
storiesOf('molecule|Post Thumb', module).add('default', function () {
  return {
    components: {
      vfMPostThumbImage: mPostThumbImage
    },
    template: "<vf-m-post-thumb-image show=\"true\">This is an alert message</vf-m-post-thumb-image>"
  };
}, {
  info: {}
});