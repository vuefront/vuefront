<template>
  <amp-img :src="src" :width="width" :height="height" :alt="alt" :title="title" :layout="layout" />
</template>
<script>
export default {
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
    width: {
      type: String | Boolean,
      default() {
        return false;
      }
    },
    height: {
      type: String | Boolean,
      default() {
        return false;
      }
    },
    layout: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
