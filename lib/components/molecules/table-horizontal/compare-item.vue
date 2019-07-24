<template>
  <div class="vf-m-compare-item">
    <div class="vf-m-compare-item__value border p-2">{{label}}</div>
    <div class="vf-m-compare-item__value border p-2">
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>

