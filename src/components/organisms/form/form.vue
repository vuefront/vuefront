<template>
  <form
    class="vf-o-form"
    autocomplete="off"
    @submit="onSubmit"
    @reset="onReset"
  >
    <div v-if="!inline">
      <h6 class="vf-o-form__title">
        <slot name="title"></slot>
      </h6>
      <div class="vf-o-form__sub-title">
        <slot name="sub-title"></slot>
      </div>
    </div>

    <vf-a-alert
      v-if="error.message || errors.length > 0"
      show
      color="info"
      v-html="error.message || errors[0].$message"
    />

    <slot></slot>

    <div v-if="button" class="vf-o-form__footer">
      <vf-a-button type="submit" color="primary">
        <slot name="button"></slot>
      </vf-a-button>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue";
import { useStore } from "vuex";
const emits = defineEmits(["submit", "reset"]);
defineProps({
  errors: {
    type: Array as PropType<any[]>,
    default() {
      return [];
    },
  },
  inline: {
    type: Boolean,
    default() {
      return false;
    },
  },
  button: {
    type: Boolean,
    default() {
      return true;
    },
  },
});
const store = useStore();
const error = computed(() => store.getters["vuefront/error"]);
const onSubmit = (e: Event) => {
  e.preventDefault();
  emits("submit", e);
};
const onReset = (e: Event) => {
  e.preventDefault();
  emits("reset", e);
};
</script>
