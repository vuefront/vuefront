<template>
  <div ref="wrapper" class="vf-m-dropdown">
    <a
      v-if="link"
      class="vf-m-dropdown__trigger cursor-pointer"
      @click="show = !show"
      @keydown.esc="keydownHandler"
    >
      <slot name="button-content">
        {{ text }}
      </slot>
    </a>
    <vf-a-button
      v-else
      :color="variant"
      :size="size"
      class="vf-m-dropdown__trigger"
      @click="show = !show"
      @keydown.esc="keydownHandler"
    >
      <slot name="button-content">
        {{ text }}
      </slot>
    </vf-a-button>
    <div v-if="show" class="vf-m-dropdown__menu">
      <div :class="getClassMenu" class="vf-m-dropdown__menu-content">
        <div class="vf-m-dropdown__menu-content-wrapper">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps({
  link: {
    type: Boolean,
    default() {
      return false;
    },
  },
  text: {
    type: String,
    default() {
      return "";
    },
  },
  right: {
    type: Boolean,
    default() {
      return null;
    },
  },
  size: {
    type: String,
    default() {
      return "md";
    },
  },
  variant: {
    type: String,
    default() {
      return "primary";
    },
  },
  nav: {
    type: Boolean,
    default() {
      return false;
    },
  },
});
const show = ref(false);
const getClassMenu = computed(() => {
  const result = [];

  if (props.right) {
    result.push("vf-m-dropdown__menu-content--right");
  } else {
    result.push("vf-m-dropdown__menu-content--left");
  }

  return result.join(" ");
});
const keydownHandler = (e: any) => {
  show.value = false;
};
const wrapper = ref<any>(null);
const blurEventTargetIsChild = (e: any) => {
  const blurredElement = e.relatedTarget;

  if (blurredElement) {
    return wrapper.value.contains(blurredElement);
  }

  return false;
};
const hideIfFocusOutside = (e: any) => {
  if (!blurEventTargetIsChild(e)) {
    show.value = false;
  }
};
const blurHandler = (e: any) => {
  hideIfFocusOutside(e);
};
</script>
