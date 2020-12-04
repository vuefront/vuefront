<template>
  <li class="vf-m-breadcrumb__item" :to="to">
    <slot></slot>
  </li>
</template>
<script>
export default {
  props: {
    to: {
      type: String | Object,
      default() {
        return "/";
      }
    }
  }
};
</script>