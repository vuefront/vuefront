<template>
  <vf-a-link class="vf-m-list-group__item" :class="{'vf-m-list-group__item--active': active}" :to="to" v-on="$listeners">
    <slot></slot>
  </vf-a-link>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default() {
        return false;
      }
    },
    to: {
      type: String,
      default() {
        return null;
      }
    }
  }
};
</script>