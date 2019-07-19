<template>
  <b-img-lazy
    :src="lazySrc"
    :blank-src="src"
    :fluid="fluid"
    :alt="alt"
    :title="title"
    :block="block"
    :width="width"
    :height="height"
    :class="{'vf-a-image--full_width': fullWidth}"
    class="vf-a-image"
  />
</template>
<script>
import { BImgLazy } from "bootstrap-vue";
export default {
  components: {
    BImgLazy
  },
  props: {
    alt: {
      type: String,
      default() {
        return "";
      }
    },
    title: {
      type: String,
      default() {
        return "";
      }
    },
    src: {
      type: String,
      default() {
        return "";
      }
    },
    lazySrc: {
      type: String | Boolean,
      default() {
        return false;
      }
    },
    fluid: {
      type: Boolean,
      default() {
        return false;
      }
    },
    block: {
      type: Boolean,
      default() {
        return false;
      }
    },
    fullWidth: {
      type: Boolean,
      default() {
        return false;
      }
    },
    width: {
      type: [Boolean, String],
      default() {
        return;
      }
    },
    height: {
      type: [Boolean, String],
      default() {
        return;
      }
    }
  }
};
</script>
