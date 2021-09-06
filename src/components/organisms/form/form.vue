<template>
  <form
    class="vf-o-form test"
    autocomplete="off"
    @submit="onSubmit"
    @reset="onReset"
  >
    <div v-if="!inline" :class="{ 'mb-5': $slots['sub-title'] }">
      <vf-a-heading v-if="$slots['sub-title']" tag="h6" level="3">
        <slot name="title"></slot>
      </vf-a-heading>
      <div
        :class="{ 'mb-3': !$slots['sub-title'], 'mb-0': $slots['sub-title'] }"
        class="vf-o-form__title title"
      >
        <slot :name="$slots['sub-title'] ? 'sub-title' : 'title'"></slot>
      </div>
    </div>

    <vf-a-alert :show="error.message" color="info" v-html="error.message" />

    <slot></slot>

    <div v-if="button" class="mt-4">
      <vf-a-button type="submit" color="primary">
        <slot name="button"></slot>
      </vf-a-button>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
const emits = defineEmits(["submit", "reset"]);
const props = defineProps({
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
const error = computed(() => store.getters['vuefront/error"']);
const onSubmit = (e: Event) => {
  e.preventDefault();
  emits("submit", e);
};
const onReset = (e: Event) => {
  e.preventDefault();
  emits("reset", e);
};
</script>
