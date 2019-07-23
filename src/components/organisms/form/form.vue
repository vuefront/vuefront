<template>
  <b-form @submit="onSubmit" @reset="onReset" class="vf-o-form">
    <div class="vf-o-form__title title mb-3">
      <slot name="title"></slot>
    </div>
    <slot></slot>
    <div class="text-sm-left">
      <vf-a-button type="submit" color="primary" size="sm" rounded>
        <slot name="button"></slot>
      </vf-a-button>
    </div>
  </b-form>
</template>
<script>
import { BForm } from "bootstrap-vue";
export default {
  components: {
    BForm
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit("submit", e);
    },
    onReset(e) {
      e.preventDefault();
      this.$emit("reset", e);
    }
  }
};
</script>
