<template>
  <li class="vf-m-breadcrumb__item">
    <vf-a-link :to="to">
      <slot></slot>
    </vf-a-link>
  </li>
</template>
<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default() {
        return "/";
      },
    },
  },
};
</script>
