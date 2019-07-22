<template>
  <LightBox :images="images" :show-light-box="false" ref="lightbox" @onOpened="handleOpened"></LightBox>
</template>
<script>
import Vue from "vue";
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad);
export default {
  components: {
    LightBox: () => import("vue-image-lightbox")
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      }
    },
    show: {
      type: Boolean,
      default() {
        return false;
      }
    },
    index: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  watch: {
    show(value, oldValue) {
      if (!oldValue && value) {
        this.$refs.lightbox.showImage(this.index);
      }
    }
  },
  methods: {
    handleOpened(value) {
      if (!value) {
        this.$emit("click:close", value);
      }
    }
  }
};
</script>
