<template>
  <component
    :is="to ? 'vf-a-link' : 'div'"
    class="vf-m-list-group__item"
    :class="{ 'vf-m-list-group__item--active': active }"
    :to="to"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default() {
        return false;
      },
    },
    to: {
      type: String,
      default() {
        return null;
      },
    },
  },
};
</script>
