import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import post from "@/.storybook/store/post.js";
import vfMPostThumb from "./post-thumb.vue";
import vfLMPostThumb from "./post-thumb.loader.vue";

Vue.component("VfMPostThumb", vfMPostThumb);

storiesOf("molecule|Post Thumb", module)
  .addDecorator((story) => ({
    template: `<div style="width:300px"><story/></div>`,
  }))
  .add(
    "default",
    () => ({
      components: { vfMPostThumb },
      template: `<vf-m-post-thumb :post="post"></vf-m-post-thumb>`,
      data: () => ({ post }),
    }),
    {
      info: {},
    }
  )
  .add(
    "loading",
    () => ({
      components: { vfLMPostThumb },
      template: `<vf-l-m-post-thumb ></vf-l-m-post-thumb>`,
    }),
    {
      info: {},
    }
  )
  .add(
    "loaded",
    () => ({
      components: { vfMPostThumb, vfLMPostThumb },
      template: `<div>
            <vf-m-post-thumb v-if="loaded" :post="post"></vf-m-post-thumb>
            <vf-l-m-post-thumb v-else></vf-l-m-post-thumb>
            </div>`,
      data: () => ({ post, loaded: false }),
      mounted() {
        setTimeout(() => {
          this.loaded = true;
        }, 1500);
      },
    }),
    {
      info: {},
    }
  );
