<template>
  <vf-a-link
    v-if="to"
    class="vf-m-dropdown-item"
    :to="to"
    v-on="$listeners"
  >
    <slot></slot>
  </vf-a-link>
  <div
    v-else
    class="vf-m-dropdown-item"
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default() {
        return null;
      },
    },
  },
};
</script>