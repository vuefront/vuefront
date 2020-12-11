<template>
  <div class="vf-m-media-body" :is="tag">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
</script>
