<template>
  <div class="vf-o-sidebar__overflow" v-if="open" @click="handleClose"></div>
  <section class="vf-o-sidebar" :class="{ '--open': open, '--right': right }">
    <div class="vf-o-sidebar__top">
      <slot name="top"></slot>
      <div class="vf-o-sidebar__close" @click="handleClose">
        <vf-a-icon :icon="mdiClose"></vf-a-icon>
      </div>
    </div>
    <div class="vf-o-sidebar__main">
      <slot></slot>
    </div>
    <div class="vf-o-sidebar__bottom">
      <slot name="bottom"></slot>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { mdiClose } from "@mdi/js";
defineProps({
  open: {
    type: Boolean,
    default: () => false,
  },
  right: {
    type: Boolean,
    default: () => false,
  },
});
const emit = defineEmits(["close"]);
const handleClose = () => {
  emit("close");
};
</script>
