<template>
  <div ref="root" v-show="show || modelValue" :transition="transition">
    <div class="vf-o-modal" @click.self="clickMask">
      <div :class="modalClass" class="vf-o-modal__dialog">
        <div class="vf-o-modal__content">
          <a v-if="btnClose" class="vf-o-modal__close" @click="cancel"
            ><vf-a-icon :icon="mdiClose"
          /></a>
          <div v-if="$slots.header" class="vf-o-modal__header">
            <slot name="header" />
          </div>
          <div class="vf-o-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="vf-o-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
    <div class="vf-o-modal__backdrop --in" />
  </div>
</template>
<script lang="ts" setup>
import { mdiClose } from "@mdi/js";
import { computed, onBeforeUnmount, ref, watch } from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  btnClose: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
  force: {
    type: Boolean,
    default: false,
  },
  transition: {
    type: String,
    default: "modal",
  },
});
let duration = ref<number | null>(null);
const show = ref(false);
const modalClass = computed(() => ({
  "--lg": props.large,
  "--sm": props.small,
  "--full": props.full,
}));
const root = ref<Element | null>(null);
watch(
  () => show.value,
  (val) => {
    console.log("watch");
    console.log(val);
    if (val) {
      document.body.className += " vf-o-modal--open";
      const htmlEl = document.querySelector("html");
      if (htmlEl) htmlEl.className += " vf-o-modal--open";
    } else {
      if (!duration.value && root.value) {
        duration.value =
          Number(
            window
              .getComputedStyle(root.value)
              .transitionDuration.replace("s", "")
          ) * 1000;
      }
      window.setTimeout(() => {
        document.body.className = document.body.className.replace(
          /\s?vf-o-modal--open/,
          ""
        );
        const htmlEl = document.querySelector("html");
        if (htmlEl)
          htmlEl.className = htmlEl.className.replace(
            /\s?vf-o-modal--open/,
            ""
          );
      }, duration.value || 0);
    }
  }
);
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      document.body.className += " vf-o-modal--open";
      const htmlEl = document.querySelector("html");
      if (htmlEl) htmlEl.className += " vf-o-modal--open";
    } else {
      if (!duration.value && root.value) {
        duration.value =
          Number(
            window
              .getComputedStyle(root.value)
              .transitionDuration.replace("s", "")
          ) * 1000;
      }
      window.setTimeout(() => {
        document.body.className = document.body.className.replace(
          /\s?vf-o-modal--open/,
          ""
        );
        const htmlEl = document.querySelector("html");
        if (htmlEl)
          htmlEl.className = htmlEl.className.replace(
            /\s?vf-o-modal--open/,
            ""
          );
      }, duration.value || 0);
    }
  }
);
onBeforeUnmount(() => {
  document.body.className = document.body.className.replace(
    /\s?vf-o-modal--open/,
    ""
  );
  const htmlEl = document.querySelector("html");
  if (htmlEl)
    htmlEl.className = htmlEl.className.replace(/\s?vf-o-modal--open/, "");
});
if (show.value || props.modelValue) {
  document.body.className += " vf-o-modal--open";
  const htmlEl = document.querySelector("html");
  if (htmlEl) htmlEl.className += " vf-o-modal--open";
}
const emits = defineEmits(["cancel", "update:modelValue"]);
const cancel = () => {
  emits("cancel");
  show.value = false;
  emits("update:modelValue", false);
};
const clickMask = () => {
  if (!props.force) {
    cancel();
  }
};
</script>
