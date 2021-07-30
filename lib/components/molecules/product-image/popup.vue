<template>
  <LightBox
    ref="lightbox"
    :media="images"
    :show-light-box="false"
    @onOpened="handleOpened"
  ></LightBox>
</template>
<script>
export default {
  components: {
    LightBox: () => import("vue-image-lightbox"),
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
    show: {
      type: Boolean,
      default() {
        return false;
      },
    },
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  watch: {
    show(value, oldValue) {
      if (!oldValue && value) {
        this.$refs.lightbox.showImage(this.index);
      }
    },
  },
  methods: {
    handleOpened(value) {
      if (!value) {
        this.$emit("click:close", value);
      }
    },
  },
};
</script>
