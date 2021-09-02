<template>
  <div v-show="localShow" class="vf-a-alert" :class="getClass" v-bind="$attrs">
    <div class="vf-a-alert__content">
      <slot></slot>
    </div>
    <button
      v-if="dismissible"
      class="vf-a-alert__button"
      type="button"
      @click="hide"
    >
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="h-5 w-5 fill-current h-5 w-5 fill-current"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        ></path>
      </svg>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, PropType, ref, watch } from "vue";
enum Colors {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  info = "info",
  warning = "warning",
  danger = "danger",
  white = "white",
  light = "light",
  dark = "dark",
}
const props = defineProps({
  show: {
    type: [Boolean, Number, String],
    default: false,
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String as PropType<Colors>,
    default: "default",
  },
});
const localShow = ref(props.show);

const getColors = {
  primary: "vf-a-alert--primary",
  secondary: "vf-a-alert--secondary",
  success: "vf-a-alert--success",
  info: "vf-a-alert--info",
  warning: "vf-a-alert--warning",
  danger: "vf-a-alert--danger",
  white: "vf-a-alert--white",
  light: "vf-a-alert--light",
  dark: "vf-a-alert--dark",
};

const emits = defineEmits([
  "update:show",
  "show",
  "hidden",
  "dismiss-count-down",
]);

const getClass = computed(() => {
  const result: string[] = [];
  result.push(getColors[props.color]);

  return result.join(" ");
});

const hide = () => {
  localShow.value = false;
};

const initTimeout = () => {
  if (typeof localShow.value === "number") {
    setTimeout(() => {
      hide();
    }, localShow.value * 1000);
  }
};

watch(
  () => props.show,
  (val) => {
    localShow.value = val;
  }
);

watch(
  () => localShow.value,
  (val) => {
    emits("update:show", localShow.value);
    if (localShow.value) {
      emits("show");
      if (typeof localShow.value === "number") {
        initTimeout();
      }
    } else {
      emits("hidden");
    }
  }
);

onMounted(() => {
  if (localShow.value && typeof localShow.value === "number") {
    emits("dismiss-count-down", localShow.value);
    initTimeout();
  }
});
</script>
