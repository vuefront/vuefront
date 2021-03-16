<template>
  <div class="vf-m-field" :label-for="id" :state="state">
    <label class="vf-m-field__label">
      <slot name="label"></slot>
    </label>
    <slot :aria-describedby="`${id}-feedback`" :state="state"></slot>
    <div
      v-if="!state && state !== null"
      :id="`${id}-feedback`"
      class="vf-m-field__error"
    >
      <slot name="error"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default() {
        return "";
      },
    },
    label: {
      type: String,
      default() {
        return null;
      },
    },
    error: {
      type: String,
      default() {
        return "";
      },
    },
    state: {
      type: Boolean,
      default() {
        return null;
      },
    },
  },
};
</script>
