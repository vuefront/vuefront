import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import post from "@/.storybook/store/post.js";
import mPostThumbImage from "./post-thumb-image.vue";
Vue.component("VfMPostThumbImage", mPostThumbImage);
storiesOf("molecule|Post Thumb Image", module).add("default", () => ({
  components: {
    vfMPostThumbImage: mPostThumbImage
  },
  template: `<vf-m-post-thumb-image :post="post"></vf-m-post-thumb-image>`,
  data: () => ({
    post
  })
}), {
  info: {}
});