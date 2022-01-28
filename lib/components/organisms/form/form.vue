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
    <vf-a-alert v-if="hasError" show color="info" v-html="getError" />

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
const props = defineProps({
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

const stripTags = (str: string) => {
  return str.replace(/<\/?[^>]+>/gi, " ");
};

const hasError = computed(() => error.value || props.errors.length > 0);
const getError = computed(() => {
  let result = "";

  if (error.value?.message) {
    result = stripTags(error.value.message);
  } else if (error.value) {
    result = stripTags(error.value);
  } else if (props.errors[0].$message) {
    result = props.errors[0].$message;
  }

  return result;
});
</script>
