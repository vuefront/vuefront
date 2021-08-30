<template>
  <vf-a-link
    v-if="to"
    class="vf-m-list-group__item"
    :class="{ 'vf-m-list-group__item--active': active }"
    :to="to"
    v-bind="$attrs"
  >
    <slot></slot>
  </vf-a-link>
  <div
    v-else
    class="vf-m-list-group__item"
    :class="{ 'vf-m-list-group__item--active': active }"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
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
